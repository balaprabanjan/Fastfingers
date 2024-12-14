import React from 'react'
import 'flowbite-react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Features from './components/Features'

const page = () => {
  return (
    <>
      <Hero/>
      <Navbar/>
      <About/>
      <Features/>
    </>
  )
}

export default page
