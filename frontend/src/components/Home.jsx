import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection/HeroSection'
import CatogeryCarousal from './CatogeryCarousal/CatogeryCarousal'
import LatestJobs from './LatestJobs/LatestJobs'
import Footer from './Footer/Footer'
import useGetAllJobs from '@/Hooks/GetAllJobs'


function Home() {
  useGetAllJobs()
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