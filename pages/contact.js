import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import FunFacts from "../components/Common/FunFacts";
import OurRespectiveClients from "../components/Common/OurRespectiveClients";

const ContactPage = () => {
  return (
    <>
      <PageBanner
        pageTitle="Contact Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
      />

      <ContactForm />

      <OurRespectiveClients />

      <FunFacts />

      {/* <ContactInfo /> */}

      {/* <Footer /> */}
    </>
  );
};

export default ContactPage;
