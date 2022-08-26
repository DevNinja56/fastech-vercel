import React, { useEffect } from "react";
import MainBanner from "../components/HomeDemoOne/MainBanner";
import CarouselOne from "../components/Carousel/CarouselOne";
import AboutUsContent from "../components/HomeDemoOne/AboutUsContent";
import Services from "../components/HomeDemoOne/Services";
import TechSupport from "../components/Common/TechSupport";
import RecentCaseStudy from "../components/CaseStudy/RecentCaseStudy";
import PopularBlogPost from "../components/Common/PopularBlogPost";
import CTA from "../components/Common/CTA";
import ContactForm from "../components/Contact/ContactForm";
import Certification from "../components/Certification/certification";
import OurRespectiveClients from "../components/Common/OurRespectiveClients";

const IndexPage = () => {
  return (
    <>
      <MainBanner />

      <CarouselOne />

      <Services />

      <AboutUsContent />

      <TechSupport />

      <RecentCaseStudy />

      <OurRespectiveClients />

      <ContactForm />

      <PopularBlogPost />

      <CTA />

      <Certification />
    </>
  );
};

export default IndexPage;
