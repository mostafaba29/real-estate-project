"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/mystyle.css';
import '@/assets/css/agentPage.css';
import AgentProfile from '@/Components/AgentProfile'; 
import Breadcrumb from '@/Components/Breadcrumb';
import ContactFormagent from "@/Components/ContactFormagent";
import FindAgent from "@/Components/FindAgent";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
export default function ContactMe() {
    return (
        <>
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
        </>
    )
}