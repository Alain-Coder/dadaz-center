'use client'

import { useState } from 'react'
import { useComments } from '@/hooks/useBlog'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/lib/firebase'
import { MessageCircle, Heart, Reply, Send } from 'lucide-react'
import AuthModal from './AuthModal'

interface CommentSectionProps {
  postId: string
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [user] = useAuthState(auth)
  const { comments, loading, addComment } = useComments(postId)
  const [newComment, setNewComment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) {
      setShowAuthModal(true)
      return
    }

    if (!newComment.trim()) return

    setSubmitting(true)
    try {
      await addComment(newComment, {
        name: user.displayName || user.email?.split('@')[0] || 'Anonymous',
        email: user.email || '',
        avatar: user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email || 'User')}&background=f97316&color=fff`
      })
      setNewComment('')
    } catch (error) {
      console.error('Error adding comment:', error)
    } finally {
      setSubmitting(false)
    }
  }

  const formatDate = (date: Date) => {
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
      'day'
    )
  }

  return (
    <section id="comments" className="mt-12">
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <MessageCircle className="w-6 h-6 text-orange-500" />
          Comments ({comments.length})
        </h3>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={user ? "Share your thoughts..." : "Please sign in to comment"}
              disabled={!user}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              {user ? (
                <span>Commenting as {user.displayName || user.email}</span>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowAuthModal(true)}
                  className="text-orange-500 hover:text-orange-600 font-medium"
                >
                  Sign in to comment
                </button>
              )}
            </div>
            <button
              type="submit"
              disabled={!user || !newComment.trim() || submitting}
              className="flex items-center gap-2 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              Post Comment
            </button>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {loading ? (
            <div className="text-center py-8">
              <div className="w-8 h-8 border-2 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto" />
            </div>
          ) : comments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>No comments yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-orange-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium text-gray-900">{comment.author.name}</h4>
                    <span className="text-sm text-gray-500">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-3">{comment.content}</p>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors">
                      <Reply className="w-4 h-4" />
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => setShowAuthModal(false)}
      />
    </section>
  )
}