import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <Image
                    src="/assets/images/logo/dadaz logo1.png"
                    alt="DADAZ Center Logo"
                    width={120}
                    height={60}
                    className="h-12 w-auto mb-6"
                  />
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We are dynamic institution dedicated to nurturing young minds through the power of Chess, Music, Art, and Computer Lessons. Our goal is to provide children and young learners with essential skills that enhance critical thinking, creativity, and digital literacy.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We believe in fostering an engaging learning environment where students can discover and develop their talents to their fullest potential.
                </p>
              </div>

              {/* Follow Us */}
              <div>
                <h5 className="text-xl font-bold mb-6 text-white">Follow Us</h5>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/p/Dadaz-Chess-Academy-100086518326965/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/dadazchess"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/dadaz_chess_academy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h5 className="text-xl font-bold mb-6 text-white">Quick Links</h5>
                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors group">
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors group">
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="flex items-center text-gray-300 hover:text-orange-400 transition-colors group">
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h5 className="text-xl font-bold mb-6 text-white">Keep In Touch</h5>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Area 47 sector 4 Chitukula street</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300">+ 265 993 701 492</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300">info@dadazcenter.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="container-custom">
            <div className="text-center">
              <p className="text-gray-400">
                &copy; 2025{' '}
                <Link href="/" className="text-orange-400 hover:text-orange-300 transition-colors">
                  DADAZ CENTER
                </Link>
                {' '}All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
  )
}