import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import PricePlansOne from '../components/PricePlans/PricePlansOne';
import CTA from '../components/Common/CTA';
import WorkProcess from '../components/Common/WorkProcess';
import OurRespectiveClients from '../components/Common/OurRespectiveClients';


const Pricing = () => {
    return (
        <>
            {/* <NavbarFour /> */}

            <PageBanner
                pageTitle="Pricing Plans"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Pricing"
            />

            <PricePlansOne />

            <OurRespectiveClients />

           

            <CTA />

        </>
    )
}

export default Pricing;