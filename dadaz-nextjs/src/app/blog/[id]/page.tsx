'use client'

import { use } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import CommentSection from '@/components/CommentSection'
import { useBlogPost, useLikes } from '@/hooks/useBlog'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/lib/firebase'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  User, 
  Heart, 
  MessageCircle, 
  Share2, 
  Tag,
  ArrowLeft,
  BookOpen
} from 'lucide-react'
import { useState } from 'react'
import AuthModal from '@/components/AuthModal'

interface BlogPostPageProps {
  params: Promise<{ id: string }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = use(params)
  const [user] = useAuthState(auth)
  const { post, loading, error } = useBlogPost(id)
  const { likes, isLiked, toggleLike, loading: likesLoading } = useLikes(id, user?.email || undefined)
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleLike = () => {
    if (!user) {
      setShowAuthModal(true)
      return
    }
    toggleLike()
  }

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading article...</p>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (error || !post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-600 mb-2">Article Not Found</h1>
            <p className="text-gray-500 mb-6">The article you're looking for doesn't exist.</p>
            <Link href="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      
      {/* Article Header */}
      <article className="pt-24">
        <div className="container-custom">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
              {post.featured && (
                <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full mb-4 ml-2">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={handleLike}
                disabled={likesLoading}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  isLiked
                    ? 'bg-red-50 text-red-500'
                    : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span className="font-medium">{likes}</span>
              </button>

              <Link
                href="#comments"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-500 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">{post.commentsCount}</span>
              </Link>

              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-green-50 hover:text-green-500 transition-all"
              >
                <Share2 className="w-5 h-5" />
                <span className="font-medium">Share</span>
              </button>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-orange-100 hover:text-orange-600 transition-colors cursor-pointer"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {post.author.name}
                    </h4>
                    <p className="text-gray-600">
                      {post.author.bio || 'Passionate educator and content creator at DADAZ Center.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <CommentSection postId={post.id} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Quick Stats */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Article Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Likes</span>
                      <span className="font-semibold text-red-500">{likes}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Comments</span>
                      <span className="font-semibold text-blue-500">{post.commentsCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Read Time</span>
                      <span className="font-semibold text-green-500">{post.readTime} min</span>
                    </div>
                  </div>
                </div>

                {/* Related Categories */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.filter(cat => cat !== 'All').map(category => (
                      <Link
                        key={category}
                        href={`/blog?category=${category}`}
                        className="block px-3 py-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => setShowAuthModal(false)}
      />

      <Footer />
      <ScrollToTop />
    </>
  )
}