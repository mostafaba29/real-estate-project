import React from 'react';
import Navbar from '../Components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/mystyle.css';
import '../assets/css/agentPage.css';
import AgentProfile from '../Components/AgentProfile'; 
import Breadcrumb from '../Components/Breadcrumb';
import ContactFormagent from "../Components/ContactFormagent";
import Footer from '../Components/Footer';
import FindAgent from "../Components/FindAgent";
import ScrollToTopButton from "../Components/ScrollToTopButton";

function Contactme ()  {

    return (
        <>
     <Navbar/>
     <Breadcrumb/>
     <section class="page-eight my-5 container ">
     <div class="row justify-content-between">
        <div className='row'>
        <AgentProfile/>
        <ContactFormagent/>
        </div>
   </div>
   </section><br></br><br></br>
   <FindAgent/>
   <div >
      <ScrollToTopButton />
    </div>
   <Footer/>
   </>
    )
}




export default Contactme;