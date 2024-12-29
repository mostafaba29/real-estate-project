"use client";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "@/components/Home-head";
import SearchListing from "@/components/SearchListing";
import LuxuryListing from "@/components/LuxuryListing";
import LoanSection from "@/components/LoanSection";
import DiscoverSection from "@/components/DiscoverSection";
import ExploreNeighborhoods from "../Components/ExploreNeighborhoods";
import ElegantStudio from "../Components/ElegantStudio";
import WorkTogether from "../Components/WorkTogether";
import Insights from '../Components/Insights';
import ClientTestimonials from "../Components/ClientTestimonials";
import ScrollToTopButton from "../Components/ScrollToTopButton";
export default function Home() {
  return (
   <>
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
   </>
  );
}
