import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Image from 'next/image'
import { Users, Target, Award, Heart } from 'lucide-react'

export const metadata = {
  title: 'About Us - DADAZ CENTER',
  description: 'Learn about DADAZ Center, our mission, vision, and the team behind our educational programs.',
}

export default function About() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="relative py-32 bg-gradient-to-r from-orange-400 to-yellow-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <nav className="flex justify-center items-center space-x-2 text-lg">
              <a href="/" className="hover:text-yellow-200 transition-colors">Home</a>
              <span>/</span>
              <span className="text-yellow-200">About</span>
            </nav>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Image
                src="/assets/images/about/02.jpg"
                alt="About DADAZ Center"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                DADAZ CENTER
              </h2>
              <h3 className="text-xl md:text-2xl text-orange-500 mb-6 font-semibold">
                Unlocking Potential, One Move at a Time
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are dynamic institution dedicated to nurturing young minds through the power of Chess, Music, Art, and Computer Lessons.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our goal is to provide children and young learners with essential skills that enhance critical thinking, creativity, and digital literacy. We believe in fostering an engaging learning environment where students can discover and develop their talents to their fullest potential.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl card-hover">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community</h3>
              <p className="text-gray-600">Building a supportive learning community for all students</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl card-hover">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-600">Striving for excellence in every educational program</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl card-hover">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Achievement</h3>
              <p className="text-gray-600">Celebrating every milestone and achievement</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl card-hover">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Passion</h3>
              <p className="text-gray-600">Passionate about nurturing young talents</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  )
}