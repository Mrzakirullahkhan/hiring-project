import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection/HeroSection'
import CatogeryCarousal from './CatogeryCarousal/CatogeryCarousal'
import LatestJobs from './LatestJobs/LatestJobs'
import Footer from './Footer/Footer'


function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CatogeryCarousal/>
        <LatestJobs/>
        <Footer/>
      
    </div>
  )
}

export default Home