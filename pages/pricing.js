import React from "react";
import PageBanner from "../components/Common/PageBanner";
import PricePlansOne from "../components/PricePlans/PricePlansOne";
import CTA from "../components/Common/CTA";
import OurRespectiveClients from "../components/Common/OurRespectiveClients";

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
  );
};

export default Pricing;
