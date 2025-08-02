import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Partners from '@/components/Partners'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Preloader from '@/components/Preloader'

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Team />
        <Partners />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}