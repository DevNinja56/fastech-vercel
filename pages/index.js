import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeDemoOne/MainBanner';
import CarouselOne from '../components/Carousel/CarouselOne';
import FeaturesCard from '../components/HomeDemoOne/FeaturesCard';
import AboutUsContent from '../components/HomeDemoOne/AboutUsContent';
import Services from '../components/HomeDemoOne/Services';
import TechSupport from '../components/Common/TechSupport';
import RecentCaseStudy from '../components/CaseStudy/RecentCaseStudy';
import OurRespectiveClients from '../components/Common/OurRespectiveClients';
import PricePlansOne from '../components/PricePlans/PricePlansOne';
import PopularBlogPost from '../components/Common/PopularBlogPost';
import CTA from '../components/Common/CTA';
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/_App/Footer';
import TopHeaderTwo from '../components/_App/TopHeaderTwo';

const IndexPage = () => {
    return (
        <>

            <MainBanner />

            <CarouselOne />

            <Services />

            <AboutUsContent />

            <TechSupport />

            <RecentCaseStudy />

            <PopularBlogPost />

            <CTA />

            <ContactForm />

        </>
    )
}

export default IndexPage;