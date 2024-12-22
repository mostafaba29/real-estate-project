import React from 'react';
import Navbar from '../Components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/mystyle.css';
import '../assets/css/property-listing.css';
import Breadcrumb from '../Components/Breadcrumb';
import BlogPost from '../Components/BlogPost';
import  RelatedPosts from"../Components/RelatedPosts";
import FindAgent from '../Components/FindAgent';
import Footer from '../Components/Footer';
import ScrollToTopButton from "../Components/ScrollToTopButton";
function Listing() {
    return (
        <>
        <Navbar /> 
        <Breadcrumb/>
        <BlogPost/>
        < RelatedPosts/>
        <br></br>
        <br></br>
        <FindAgent/>
        <div >
      <ScrollToTopButton />
    </div>
        <Footer/>
        </>
    );
  };
  
     
  
  export default Listing;