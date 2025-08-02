'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const services = [
  { id: 'all', name: 'See All', filter: '*' },
  { id: 'chess', name: 'Chess', filter: '.chess' },
  { id: 'music', name: 'Music', filter: '.music' },
  { id: 'arts', name: 'Arts', filter: '.arts' },
  { id: 'computer', name: 'Computer', filter: '.computer' }
]

const serviceItems = [
  {
    category: 'chess',
    title: 'Chess',
    image: '/assets/images/service/chess1.jpg'
  },
  {
    category: 'music',
    title: 'Music',
    image: '/assets/images/service/music4.jpg'
  },
  {
    category: 'music',
    title: 'Keyboard',
    image: '/assets/images/service/Keyboard.jpg'
  },
  {
    category: 'arts',
    title: 'Arts',
    image: '/assets/images/product/03.jpg'
  },
  {
    category: 'computer',
    title: 'Computer',
    image: '/assets/images/product/04.jpg'
  },
  {
    category: 'music',
    title: 'Acoustic Guitar',
    image: '/assets/images/service/acoustic guitar.png'
  },
  {
    category: 'music',
    title: 'Drums',
    image: '/assets/images/service/drums.jpg'
  },
  {
    category: 'music',
    title: 'Bass Guitar',
    image: '/assets/images/service/bassguitar.png'
  },
  {
    category: 'arts',
    title: 'Painting',
    image: '/assets/images/product/06.jpg'
  },
  {
    category: 'arts',
    title: 'Sports',
    image: '/assets/images/product/07.jpg'
  },
  {
    category: 'arts',
    title: 'Dancing',
    image: '/assets/images/product/08.jpg'
  },
  {
    category: 'computer',
    title: 'Designing',
    image: '/assets/images/product/09.jpg'
  }
]

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const filteredItems = activeFilter === 'all' 
    ? serviceItems 
    : serviceItems.filter(item => item.category === activeFilter)

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            DADAZ CENTER
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are dynamic institution dedicated to nurturing young minds through the power of Chess, Music, Art, and Computer Lessons.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveFilter(service.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === service.id
                  ? 'bg-orange-400 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.category}-${index}`}
              className={`service-item group transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: inView ? `${index * 100}ms` : '0s' }}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg card-hover">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}