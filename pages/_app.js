import "../public/css/bootstrap.min.css";
import "../public/css/animate.min.css";
import "../public/css/remixicon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-image-lightbox/style.css";
import "react-tabs/style/react-tabs.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
// import "../public/css/custompages.css";

import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import TopHeaderTwo from "../components/_App/TopHeaderTwo";

import Layout from "../components/_App/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>

      <Layout>
        <TopHeaderTwo />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default MyApp;
