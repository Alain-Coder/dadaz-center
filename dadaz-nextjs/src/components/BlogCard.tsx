'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, MessageCircle, Calendar, Clock, User, Tag } from 'lucide-react'
import { BlogPost } from '@/types/blog'
import { useLikes } from '@/hooks/useBlog'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/lib/firebase'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const [user] = useAuthState(auth)
  const { likes, isLiked, toggleLike, loading } = useLikes(post.id, user?.email || undefined)
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleLike = () => {
    if (!user) {
      setShowAuthModal(true)
      return
    }
    toggleLike()
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  return (
    <article className={`blog-card group ${featured ? 'featured-post' : ''}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover h-full">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-orange-400 text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author.name}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors ${
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          }`}>
            <Link href={`/blog/${post.id}`} className="hover:text-orange-500">
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <button
                onClick={handleLike}
                disabled={loading}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isLiked
                    ? 'bg-red-50 text-red-500'
                    : 'bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-red-500'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span className="text-sm font-medium">{likes}</span>
              </button>

              <Link
                href={`/blog/${post.id}#comments`}
                className="flex items-center gap-2 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-500 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">{post.commentsCount}</span>
              </Link>
            </div>

            <Link
              href={`/blog/${post.id}`}
              className="text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}