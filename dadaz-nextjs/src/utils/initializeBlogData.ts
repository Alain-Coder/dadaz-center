import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { sampleBlogPosts } from '@/data/sampleBlogData'

export async function initializeBlogData() {
  try {
    const blogPostsRef = collection(db, 'blogPosts')
    
    for (const post of sampleBlogPosts) {
      await addDoc(blogPostsRef, {
        ...post,
        publishedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        createdAt: serverTimestamp()
      })
    }
    
    console.log('Sample blog data initialized successfully!')
  } catch (error) {
    console.error('Error initializing blog data:', error)
  }
}