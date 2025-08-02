'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-20" />
          <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
        </button>
      )}
    </>
  )
}