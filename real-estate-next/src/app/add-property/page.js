'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/mystyle.css';
import PropertyForm from '@/Components/PropertyForm';
import PriceForm from '@/Components/PriceForm'; 
import AmenitiesForm from '@/Components/AmenitiesForm';
import VirtualTourForm from "@/Components/VirtualTourForm";
import VideoURLForm from '@/Components/VideoURLForm';
import FloorsForm from "@/Components/FloorsForm";
import AgentInformationForm from "@/Components/AgentInformationForm";
import AdditionalInfoForm from "@/Components/AdditionalInfoForm";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
export default function addProperty() {
    return(
    <>
    <section className='bg-light pt-5'>
       <div class="container inputs ">
            <PropertyForm/>
            <PriceForm />
            <AdditionalInfoForm />
            <AmenitiesForm />
            <VirtualTourForm/>
            <VideoURLForm/>
            <FloorsForm />
            <AgentInformationForm /><br></br><br></br>
       </div>
    </section>
    <div>
      <ScrollToTopButton />
    </div>
    </>
    )
}