import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import CatogeryCarousal from "./CatogeryCarousal/CatogeryCarousal";
import LatestJobs from "./LatestJobs/LatestJobs";
import Footer from "./Footer/Footer";
import useGetAllJobs from "@/Hooks/GetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CatogeryCarousal />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default Home;
