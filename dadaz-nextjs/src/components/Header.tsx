'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail, Clock, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header-section">
      {/* Header Top */}
      <div className="hidden lg:block bg-orange-400 py-3">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-white text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@dadazcenter.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+ 265 993 701 492</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon - Fri 09:00 - 16:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Sat 09:00 - 12:30</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a href="https://www.facebook.com/p/Dadaz-Chess-Academy-100086518326965/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-200 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/dadazchess" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-200 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/dadaz_chess_academy/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-200 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`header-area transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-lg' : 'relative'}`}>
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="logo">
              <Link href="/">
                <Image 
                  src="/assets/images/logo/dadaz logo1.png" 
                  alt="DADAZ Center Logo" 
                  width={120} 
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <Link href="/" className="text-gray-700 hover:text-orange-400 font-medium transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-orange-400 font-medium transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-orange-400 font-medium transition-colors">
                  Contact
                </Link>
              </nav>
              <a 
                href="https://wa.me/265993701492" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <div className="mobile-menu-overlay lg:hidden" onClick={toggleMenu} />
            <div className="mobile-menu lg:hidden">
              <div className="p-6">
                <nav className="space-y-4">
                  <Link 
                    href="/" 
                    className="block py-3 text-gray-700 hover:text-orange-400 font-medium transition-colors border-b border-gray-200"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    className="block py-3 text-gray-700 hover:text-orange-400 font-medium transition-colors border-b border-gray-200"
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block py-3 text-gray-700 hover:text-orange-400 font-medium transition-colors border-b border-gray-200"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                  <a 
                    href="https://wa.me/265993701492" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center btn-primary mt-6"
                    onClick={toggleMenu}
                  >
                    WhatsApp
                  </a>
                </nav>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}