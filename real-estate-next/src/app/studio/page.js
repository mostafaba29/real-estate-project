"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/mystyle.css';
import Paginationvariant from '@/Components/Paginationvariant';
import Breadcrumb from '@/Components/Breadcrumb';
import SimilarProperties from "@/Components/SimilarProperties";
import FindAgent from "@/Components/FindAgent";
import ScrollToTopButton from "@/Components/ScrollToTopButton";

export default function StudioPage (){
    const totalProperties = 250;
    const propertiesPerPage = 20;
    return (
        <>
     <Breadcrumb/>
     <div className="container">
      <br /><br />
      <h2 > Property Listing</h2><br></br>
      </div>
     <SimilarProperties/><br></br><br></br>
     <SimilarProperties/><br></br><br></br>
     <SimilarProperties/><br></br><br></br>
     <Paginationvariant
        totalProperties={totalProperties}
        propertiesPerPage={propertiesPerPage}
      /><br></br><br></br><br></br>
   <FindAgent/>
   <div >
      <ScrollToTopButton />
    </div>
   </>
    )
}