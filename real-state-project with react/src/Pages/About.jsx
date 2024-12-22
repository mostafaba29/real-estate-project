import React from 'react';
import Navbar from '../Components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/mystyle.css';
import '../assets/css/property-listing.css';
import Breadcrumb from '../Components/Breadcrumb';
import ImageGallery from "../Components/ImageGallery";
import FindAgent from '../Components/FindAgent';
import Footer from '../Components/Footer';
import PropertyDetails from '../Components/PropertyDetails';
import VideoSection from '../Components/VideoSection';
import Property from '../Components/Property';
import AmenitiesFeatures from '../Components/AmenitiesFeatures';
import DirectionSection from"../Components/DirectionSection";
import FloorPlans from '../Components/FloorPlans';
import FileAttachment from "../Components/FileAttachment";
import VirtualTour from "../Components/VirtualTour";
import LoanCalculator from "../Components/LoanCalculator";
import Nearby from "../Components/Nearby";
import ReviewSection from "../Components/ReviewSection";
import ContactSeller from "../Components/ContactSeller";
import SiteAdSection from "../Components/SiteAdSection ";
import AboutPropertySection from "../Components/AboutPropertySection";
import SimilarProperties from "../Components/SimilarProperties";
import ScrollToTopButton from "../Components/ScrollToTopButton";
function About() {
    return (
        <>
        <Navbar /> 
        <Breadcrumb/>
        <ImageGallery/>
        <div class="container">
            <div class="row justify-content-between"> 
              <div class="col-md-8 col-12 ">
                <PropertyDetails/>
                <br></br>
                <VideoSection/><br></br>
                <Property/><br></br>
                <AmenitiesFeatures/><br></br>
                <DirectionSection/><br></br>
                <FloorPlans/><br></br>
                <FileAttachment/><br></br>
                <VirtualTour/><br></br>
                <LoanCalculator/><br></br>
                <Nearby/><br></br>
                <ReviewSection/>
              </div>
              <div class="col-md-4 col-12 sidebar">
                <ContactSeller/><br></br>
                <SiteAdSection/><br></br>
                <AboutPropertySection/>
              </div>
              </div>
              <div className="container">
      <br /><br />
      <h3 >Similar Properties</h3><br></br>
      </div>
              <SimilarProperties/><br></br><br></br><br></br>
              </div>
              <FindAgent/>
              <div >
      <ScrollToTopButton />
    </div>
              <Footer/>
        </>
    );
  };
  
     
  
  export default About;