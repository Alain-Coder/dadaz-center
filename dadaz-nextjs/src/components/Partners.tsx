'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const partners = [
  {
    name: "Gift of Chess",
    logo: "/assets/images/sponsor/giftofchess.png"
  },
  {
    name: "FIDE",
    logo: "/assets/images/sponsor/fide.jpg"
  },
  {
    name: "Chess Association of Malawi",
    logo: "/assets/images/sponsor/chessam1.jpg"
  },
  {
    name: "CRCL",
    logo: "/assets/images/sponsor/crcl1.jpg"
  },
  {
    name: "Chess for Freedom",
    logo: "/assets/images/sponsor/chess4freedom.png"
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

        {/* Partners Slider */}
        <div className={`transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
            }}
            className="partner-slider"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="partner-item group">
                  <div className="bg-white rounded-xl p-8 shadow-lg card-hover flex items-center justify-center h-32">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={80}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}