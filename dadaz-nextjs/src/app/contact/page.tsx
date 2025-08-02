'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1000)
  }

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="relative py-32 bg-gradient-to-r from-orange-400 to-yellow-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <nav className="flex justify-center items-center space-x-2 text-lg">
              <a href="/" className="hover:text-yellow-200 transition-colors">Home</a>
              <span>/</span>
              <span className="text-yellow-200">Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-50 rounded-xl card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Location</h3>
              <p className="text-gray-600">Area 47 sector 4 Chitukula street</p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-xl card-hover">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Phone</h3>
              <p className="text-gray-600">+ 265 993 701 492</p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-xl card-hover">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Email</h3>
              <p className="text-gray-600">info@dadazcenter.com</p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="h-96 lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.1741612448595!2d33.75893457334668!3d-13.94823348020995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d30012467421%3A0xf7a2418ba53890ae!2sDadaz%20Center!5e0!3m2!1sen!2smw!4v1743955827253!5m2!1sen!2smw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Get In Touch</h2>
                
                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name*"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email*"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject*"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message*"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Now
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  )
}