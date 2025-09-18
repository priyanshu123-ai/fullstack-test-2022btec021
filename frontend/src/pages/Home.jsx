import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from './HeroSection'
import Services from './Service'
import Features from './Feature'
import Contact from './Contact'
import Footer from './Footer'
import About from './About'
const Home = () => {
  return (
    <div className='w-full  min-h-screen'>
        <Navbar />
        <HeroSection />
        <About />
        <Services />
        <Features />
        <Contact />
        <Footer />
        
      
    </div>
  )
}

export default Home
