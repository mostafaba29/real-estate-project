import React from 'react';
import Navbar from '../Components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/mystyle.css';
import Breadcrumb from '../Components/Breadcrumb';
import AgentCard from '../Components/AgentCard'; 
import Agent1 from "../assets/imgs/agents/agent-img-two.png"
import Agent2 from "../assets/imgs/agents/agent-img-three.png"
import Paginationvariant from '../Components/Paginationvariant';
import Footer from '../Components/Footer';
import FindAgent from "../Components/FindAgent";
import ScrollToTopButton from "../Components/ScrollToTopButton";
function Agent() {
    const totalProperties = 250;
  const propertiesPerPage = 20;
    return (
        <>
       <Navbar/>
       <Breadcrumb/>
       <div className="container mt-5">
       <div className="row">
       <AgentCard
        name="Leslie Alexander"
        role="Sale agent"
        imgSrc={Agent1}
        phoneLink="./agent-page-eight.html"
        emailLink="./agent-page-eight.html"/>
<AgentCard
        name="Leslie Alexander"
        role="Sale agent"
        imgSrc={Agent2}
        phoneLink="./agent-page-eight.html"
        emailLink="./agent-page-eight.html"/>
<AgentCard
        name="Leslie Alexander"
        role="Sale agent"
        imgSrc={Agent1}
        phoneLink="./agent-page-eight.html"
        emailLink="./agent-page-eight.html"/>
<AgentCard
        name="Leslie Alexander"
        role="Sale agent"
        imgSrc={Agent2}
        phoneLink="./agent-page-eight.html"
        emailLink="./agent-page-eight.html"/>

        </div>
        <div className="row">
       <AgentCard
        name="Leslie Alexander"
        role="Sale agent"
        imgSrc={Agent1}
        phoneLink="./agent-page-eight.html"
        emailLink="./agent-page-eight.html"/>
<AgentCard
        name="Leslie Alexander"
        role="Sale agent"
        imgSrc={Agent2}
        phoneLink="./agent-page-eight.html"
        emailLink="./agent-page-eight.html"/>
<AgentCard
        name="Leslie Alexander"
        role="Sale agent"
        imgSrc={Agent1}
        phoneLink="./agent-page-eight.html"
        emailLink="./agent-page-eight.html"/>
<AgentCard
        name="Leslie Alexander"
        role="Sale agent"
        imgSrc={Agent2}
        phoneLink="./agent-page-eight.html"
        emailLink="./agent-page-eight.html"/>

        </div>
        <div className="row">
       <AgentCard
        name="Leslie Alexander"
        role="Sale agent"
        imgSrc={Agent1}
        phoneLink="./agent-page-eight.html"
        emailLink="./agent-page-eight.html"/>
<AgentCard
        name="Leslie Alexander"
        role="Sale agent"
        imgSrc={Agent2}
        phoneLink="./agent-page-eight.html"
        emailLink="./agent-page-eight.html"/>
<AgentCard
        name="Leslie Alexander"
        role="Sale agent"
        imgSrc={Agent1}
        phoneLink="./agent-page-eight.html"
        emailLink="./agent-page-eight.html"/>
<AgentCard
        name="Leslie Alexander"
        role="Sale agent"
        imgSrc={Agent2}
        phoneLink="./agent-page-eight.html"
        emailLink="./agent-page-eight.html"/>

        </div>
       </div>
       <Paginationvariant
        totalProperties={totalProperties}
        propertiesPerPage={propertiesPerPage}
      /><br></br><br></br><br></br>
   <FindAgent/>
   <div >
      <ScrollToTopButton />
    </div>
   <Footer/>
        </>
    );
  };
 
  
     
  
  export default Agent;