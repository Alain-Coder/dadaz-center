'use client'

import { useState, useEffect } from 'react'
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  where, 
  onSnapshot,
  increment,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { BlogPost, Comment, Like } from '@/types/blog'

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, 'blogPosts')
        const q = query(postsRef, orderBy('publishedAt', 'desc'))
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const postsData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            publishedAt: doc.data().publishedAt?.toDate() || new Date(),
            updatedAt: doc.data().updatedAt?.toDate() || new Date()
          })) as BlogPost[]
          
          setPosts(postsData)
          setLoading(false)
        })

        return unsubscribe
      } catch (err) {
        setError('Failed to fetch blog posts')
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}

export function useBlogPost(id: string) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchPost = async () => {
      try {
        const postRef = doc(db, 'blogPosts', id)
        const unsubscribe = onSnapshot(postRef, (doc) => {
          if (doc.exists()) {
            const postData = {
              id: doc.id,
              ...doc.data(),
              publishedAt: doc.data().publishedAt?.toDate() || new Date(),
              updatedAt: doc.data().updatedAt?.toDate() || new Date()
            } as BlogPost
            setPost(postData)
          } else {
            setError('Post not found')
          }
          setLoading(false)
        })

        return unsubscribe
      } catch (err) {
        setError('Failed to fetch blog post')
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  return { post, loading, error }
}

export function useComments(postId: string) {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!postId) return

    const commentsRef = collection(db, 'comments')
    const q = query(
      commentsRef, 
      where('postId', '==', postId),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date()
      })) as Comment[]
      
      setComments(commentsData)
      setLoading(false)
    })

    return unsubscribe
  }, [postId])

  const addComment = async (content: string, author: Comment['author']) => {
    try {
      await addDoc(collection(db, 'comments'), {
        postId,
        content,
        author,
        createdAt: serverTimestamp(),
        likes: 0
      })

      // Update comments count
      const postRef = doc(db, 'blogPosts', postId)
      await updateDoc(postRef, {
        commentsCount: increment(1)
      })
    } catch (error) {
      console.error('Error adding comment:', error)
      throw error
    }
  }

  return { comments, loading, addComment }
}

export function useLikes(postId: string, userEmail?: string) {
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!postId) return

    const postRef = doc(db, 'blogPosts', postId)
    const unsubscribe = onSnapshot(postRef, (doc) => {
      if (doc.exists()) {
        setLikes(doc.data().likes || 0)
      }
    })

    return unsubscribe
  }, [postId])

  useEffect(() => {
    if (!postId || !userEmail) return

    const checkIfLiked = async () => {
      const likesRef = collection(db, 'likes')
      const q = query(
        likesRef,
        where('postId', '==', postId),
        where('userEmail', '==', userEmail)
      )
      
      const snapshot = await getDocs(q)
      setIsLiked(!snapshot.empty)
    }

    checkIfLiked()
  }, [postId, userEmail])

  const toggleLike = async () => {
    if (!userEmail || loading) return

    setLoading(true)
    try {
      const likesRef = collection(db, 'likes')
      const q = query(
        likesRef,
        where('postId', '==', postId),
        where('userEmail', '==', userEmail)
      )
      
      const snapshot = await getDocs(q)
      const postRef = doc(db, 'blogPosts', postId)

      if (snapshot.empty) {
        // Add like
        await addDoc(likesRef, {
          postId,
          userEmail,
          createdAt: serverTimestamp()
        })
        await updateDoc(postRef, {
          likes: increment(1)
        })
        setIsLiked(true)
      } else {
        // Remove like
        const likeDoc = snapshot.docs[0]
        await deleteDoc(doc(db, 'likes', likeDoc.id))
        await updateDoc(postRef, {
          likes: increment(-1)
        })
        setIsLiked(false)
      }
    } catch (error) {
      console.error('Error toggling like:', error)
    } finally {
      setLoading(false)
    }
  }

  return { likes, isLiked, toggleLike, loading }
}