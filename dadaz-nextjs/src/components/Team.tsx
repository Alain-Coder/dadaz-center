'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react'

const teamMembers = [
  {
    name: "Susan Namangale",
    position: "Founder & Managing Director",
    image: "/assets/images/team/Susan.jpeg",
    social: {
      twitter: "https://twitter.com/Susan_GOC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      instagram: "https://www.instagram.com/namangalesusan/",
      linkedin: "https://mw.linkedin.com/in/susan-musa-namangale-1511b667"
    }
  },
  {
    name: "Rafik Namangale",
    position: "Chief Operations Officer",
    image: "/assets/images/team/rafik.jpg",
    social: {
      facebook: "https://facebook.com/profile.php?id=100087783802779",
      instagram: "https://www.instagram.com/dareal_rafiq/",
      linkedin: "https://mw.linkedin.com/in/rafiq-namangale-8a8574258"
    }
  },
  {
    name: "Edwin Chitseko",
    position: "Music Teacher",
    image: "/assets/images/team/Music Teacher.jpg",
    social: {
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    name: "Stanford Chiwambo",
    position: "Chess Teacher",
    image: "/assets/images/team/04.jpg",
    social: {
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  }
]

export default function Team() {
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
            Our Dadaz Team
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted and hardworking team behind Dadaz Center
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`team-card transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: inView ? `${index * 200}ms` : '0s' }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center group">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-orange-100 group-hover:ring-orange-200 transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-orange-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {member.position}
                </p>
                <div className="flex justify-center space-x-4">
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}