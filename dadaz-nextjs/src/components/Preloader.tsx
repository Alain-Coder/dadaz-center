'use client'

import { useState, useEffect } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="preloader">
      <div className="flex flex-col items-center">
        <div className="preloader-spinner mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">DADAZ CENTER</h2>
        <p className="text-white/80">Loading...</p>
      </div>
    </div>
  )
}