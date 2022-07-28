import React from "react";
import MainBanner from "../components/HomeDemoOne/MainBanner";
import CarouselOne from "../components/Carousel/CarouselOne";
import AboutUsContent from "../components/HomeDemoOne/AboutUsContent";
import Services from "../components/HomeDemoOne/Services";
import TechSupport from "../components/Common/TechSupport";
import RecentCaseStudy from "../components/CaseStudy/RecentCaseStudy";
import PopularBlogPost from "../components/Common/PopularBlogPost";
import CTA from "../components/Common/CTA";
import ContactForm from "../components/Contact/ContactForm";
import SubscriptionModal from "../components/subscriptionModal/modal";

const IndexPage = () => {
  return (
    <>
      <MainBanner />

      <SubscriptionModal />

      <CarouselOne />

      <Services />

      <AboutUsContent />

      <TechSupport />

      <RecentCaseStudy />

      <PopularBlogPost />

      <CTA />

      <ContactForm />
    </>
  );
};

export default IndexPage;
