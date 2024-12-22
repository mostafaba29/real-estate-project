import React from 'react';
import Navbar from '../Components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/indexstyle.css';
import Head from '../Components/Home-head';
import SearchListing from '../Components/SearchListing';
import LuxuryListing from '../Components/LuxuryListing';
import DiscoverSection from "../Components/DiscoverSection";
import LoanSection from '../Components/LoanSection';
import ExploreNeighborhoods from "../Components/ExploreNeighborhoods";
import ElegantStudio from "../Components/ElegantStudio";
import WorkTogether from "../Components/WorkTogether";
import Insights from '../Components/Insights';
import ClientTestimonials from "../Components/ClientTestimonials";
import Footer from "../Components/Footer";
import ScrollToTopButton from "../Components/ScrollToTopButton";
function Home() {
  return (
      <>
       <Navbar /> 
      <Head/>
      <SearchListing/>
      <LuxuryListing/>
      <DiscoverSection/>
      <LoanSection />
      <ExploreNeighborhoods/>
      <ElegantStudio/>
      <WorkTogether/>
     <Insights/><br></br><br></br><br></br>
     <ClientTestimonials/>
     <div >
      <ScrollToTopButton />
    </div>
     <Footer/>
      </>
  );
};

   

export default Home;

