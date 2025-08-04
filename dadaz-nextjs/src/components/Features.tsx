'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const features = [
  {
    title: "Chess Lessons",
    description: "Professional chess training for children and beginners, advanced chess strategies for competitive players and chess tournaments and competitions",
    image: "/assets/images/placeholder.svg",
    delay: "0.2s"
  },
  {
    title: "Music Lessons", 
    description: "Instrumental training (Guitar, Piano, Drums, etc.), music theory and composition and vocal coaching and performance training",
    image: "/assets/images/placeholder.svg",
    delay: "0.4s"
  },
  {
    title: "Art Classes",
    description: "Drawing and painting techniques, sculpting and creative crafts and expressive and digital art lessons",
    image: "/assets/images/placeholder.svg",
    delay: "0.6s"
  },
  {
    title: "Computer Lessons",
    description: "Basic computer literacy, coding and programming fundamentals and graphic design and multimedia skills",
    image: "/assets/images/placeholder.svg",
    delay: "0.8s"
  }
]

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            WHO WE ARE?
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are dynamic institution dedicated to nurturing young minds through the power of Chess, Music, Art, and Computer Lessons. Our goal is to provide children and young learners with essential skills that enhance critical thinking, creativity, and digital literacy. We believe in fostering an engaging learning environment where students can discover and develop their talents to their fullest potential.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card group transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: inView ? feature.delay : '0s' }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center h-full">
                <div className="mb-6 relative">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-orange-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}