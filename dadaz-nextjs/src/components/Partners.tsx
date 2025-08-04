'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const partners = [
  {
    name: "Gift of Chess",
    logo: "/assets/images/placeholder.svg"
  },
  {
    name: "FIDE",
    logo: "/assets/images/placeholder.svg"
  },
  {
    name: "Chess Association of Malawi",
    logo: "/assets/images/placeholder.svg"
  },
  {
    name: "CRCL",
    logo: "/assets/images/placeholder.svg"
  },
  {
    name: "Chess for Freedom",
    logo: "/assets/images/placeholder.svg"
  }
]

export default function Partners() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            In Collaboration With
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6" />
        </div>

        {/* Partners Grid */}
        <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner-item group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg card-hover flex items-center justify-center h-32 border border-gray-100">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}