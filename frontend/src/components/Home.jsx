import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection/HeroSection'
import CatogeryCarousal from './CatogeryCarousal/CatogeryCarousal'


function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CatogeryCarousal/>
      
    </div>
  )
}

export default Home