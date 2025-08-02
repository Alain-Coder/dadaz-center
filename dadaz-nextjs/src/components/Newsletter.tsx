'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Mail, Send } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setMessage('Thank you for subscribing!')
      setEmail('')
      setIsSubmitting(false)
      setTimeout(() => setMessage(''), 3000)
    }, 1000)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-orange-400 to-yellow-500" ref={ref}>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Newsletter Title */}
          <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <Mail className="w-8 h-8 text-white mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Subscribe Our Newsletter
              </h2>
            </div>
            <p className="text-white/90 text-lg">
              Stay updated with our latest news, events, and educational content.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className={`lg:w-1/2 w-full transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md lg:max-w-none mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  required
                  className="w-full px-6 py-4 rounded-lg border-0 focus:ring-4 focus:ring-white/30 focus:outline-none text-gray-700 placeholder-gray-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Subscribe
                  </>
                )}
              </button>
            </form>
            {message && (
              <p className="mt-4 text-white text-center lg:text-left font-medium">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}