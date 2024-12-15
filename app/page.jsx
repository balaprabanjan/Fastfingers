import React from 'react'
import 'flowbite-react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Features from './components/Features'
import Guide from './components/Guide'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

const page = () => {
  return (
    <>
      <Hero/>
      <Navbar/>
      <About/>
      <Features/>
      <Guide/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default page
