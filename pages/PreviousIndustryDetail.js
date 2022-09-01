// import React from 'react';
// import NavbarFour from '../components/_App/NavbarFour';
// import PageBanner from '../components/Common/PageBanner';
// import Link from 'next/link';
// import WorkProcessTwo from '../components/Common/WorkProcessTwo';
// import IntroVideoStyleTwo from '../components/Common/IntroVideoStyleTwo';
// import OurRespectiveClients from '../components/Common/OurRespectiveClients';
// import CTA from '../components/Common/CTA';
// import Footer from '../components/_App/Footer';
// import MainBannerSmall from '../components/HomeDemoOne/MainBannerSmall';
// import RecentCaseStudiesCards from '../components/CaseStudy/RecentCaseStudiesCard';
// import TechDevelop from '../components/TechComponent/TechDevelop';
// import FAQCOMPONENT from '../components/Faq/FaqComponent';
// import AboutUsContent from '../components/HomeDemoOne/AboutUsContent';
// import WorkProcess from '../components/Common/WorkProcess';
// import ScrollAnimation from 'react-animate-on-scroll';
// import { useEffect } from 'react';

import React from "react";

const PreviousIndustryDetail = () => {
  return <div>PreviousIndustryDetail</div>;
};

export default PreviousIndustryDetail;

// const IndustryDetail = () => {
//     return (
//         <>

//             <div className="main-banner-area">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-5 col-md-12">
//                             <div className="main-banner-content">
//                                 <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>

//                                 </ScrollAnimation>

//                                 <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce={true}>

//                                     <h1 className='main_heading_step_animation'>Ecommerce Development Services

//                                     </h1>

//                                 </ScrollAnimation>

//                                 <ScrollAnimation animateIn="fadeInLeft" delay={150} animateOnce={true}>
//                                     <p>Partner with an experienced eCommerce website development company to scale your online store</p>
//                                 </ScrollAnimation>

//                                 <div className="banner-btn">
//                                     <ScrollAnimation animateIn="fadeInRight" delay={200} animateOnce={true}>
//                                         <Link href="/about-us">
//                                             <a className="default-btn">
//                                                 Schedule a Call <i className="ri-arrow-right-line"></i><span></span>
//                                             </a>
//                                         </Link>
//                                     </ScrollAnimation>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-7 col-md-12">
//                             <div className="main-banner-animation-image">
//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInDown" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInDown" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInDown" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInDown" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInDown" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInDown" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInDown" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInDown" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInDown" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInDown" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce={true}>
//                                         <img src="/images/ecommerce.png" alt="image" />
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <ScrollAnimation animateIn="fadeInLeft" delay={100} animateOnce={true}>
//                                     </ScrollAnimation>
//                                 </div>

//                                 <div>
//                                     <img src="/images/ecommerce.png" alt="image" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="main-banner-shape-1">
//                     <img src="/images/main-banner/banner-one/shape-1.png" alt="image" />
//                 </div>
//                 <div className="main-banner-shape-2">
//                     <img src="/images/main-banner/banner-one/shape-2.png" alt="image" />
//                 </div>
//                 <div className="main-banner-shape-3">
//                     <img src="/images/main-banner/banner-one/shape-3.png" alt="image" />
//                 </div>
//                 <div className="main-banner-shape-4">
//                     <img src="/images/main-banner/banner-one/shape-4.png" alt="image" />
//                 </div>

//                 <style jsx>{`
//             .main_heading_step_animation{
//                 font-weight: 200;
//                 margin: 0.4em 0;
//                 font-size: 3.5em;
//             }

//                 .main-banner-area {
//                     padding-top: 175px;
//                     padding-bottom: 140px;
//                     position: relative;
//                     z-index: 1;
//                     overflow: hidden;
//                 }
//                 .main-banner-content .tag {
//                     display: inline-block;
//                     background-color: #F4F8FC;
//                     padding: 12px 25px 12px 55px;
//                     border-radius: 50px;
//                     font-size: 14px;
//                     font-weight: 500;
//                     position: relative;
//                 }
//                 .main-banner-content .tag img {
//                     position: absolute;
//                     left: 25px;
//                     top: 50%;
//                     -webkit-transform: translateY(-50%);
//                             transform: translateY(-50%);
//                 }
//                 .main-banner-content h1 {
//                     font-size: 60px;
//                     margin-top: -200px;
//                     margin-bottom: 20px;
//                     font-weight: bold;
//                 }
//                 .main-banner-content p {
//                     margin-bottom: 0;
//                 }
//                 .main-banner-content .banner-btn {
//                     margin-top: 30px;

//                 }

//                 // Main banner animation image
//                 .main-banner-animation-image {
//                     position: relative;
//                     width: 100%;
//                     height: 100%;
//                 }
//                 .main-banner-animation-image div {
//                     position: absolute;
//                 }
//                 .main-banner-animation-image div:nth-child(1) {
//                     left: 0;
//                     top: 0;
//                 }
//                 .main-banner-animation-image div:nth-child(2) {
//                     left: 90px;
//                     top: 220px;
//                     z-index: 1;
//                 }
//                 .main-banner-animation-image div:nth-child(3) {
//                     left: 0;
//                     top: 220px;
//                 }
//                 .main-banner-animation-image div:nth-child(4) {
//                     left: 45px;
//                     bottom: 110px;
//                     z-index: 1;
//                 }
//                 .main-banner-animation-image div:nth-child(5) {
//                     left: 55px;
//                     bottom: 140px;
//                     z-index: 1;
//                 }
//                 .main-banner-animation-image div:nth-child(6) {
//                     left: 160px;
//                     top: 115px;
//                 }
//                 .main-banner-animation-image div:nth-child(7) {
//                     bottom: -120px;
//                     left: 295px;
//                 }
//                 .main-banner-animation-image div:nth-child(8) {
//                     top: 0;
//                     left: 280px;
//                 }
//                 .main-banner-animation-image div:nth-child(9) {
//                     z-index: -1;
//                     right: 0;
//                     top: -145px;
//                 }
//                 .main-banner-animation-image div:nth-child(10) {
//                     z-index: -1;
//                     right: 0;
//                     top: 225px;
//                 }
//                 .main-banner-animation-image div:nth-child(11) {
//                     right: 200px;
//                     top: 0;
//                 }
//                 .main-banner-animation-image div:nth-child(12) {
//                     right: 0;
//                     bottom: -35px;
//                 }
//                 .main-banner-animation-image div:nth-child(13) {
//                     right: 0;
//                     top: -110px;
//                     z-index: -1;
//                 }
//                 .main-banner-animation-image div:nth-child(14) {
//                     right: 0;
//                 }
//                 .main-banner-animation-image div:nth-child(15) {
//                     right: 300px;
//                     top: -120px;
//                     z-index: -1;
//                 }
//                 .main-banner-animation-image div:last-child {
//                     display: none;
//                 }

//                 // shape
//                 .main-banner-shape-1 {
//                     position: absolute;
//                     top: 10%;
//                     left: 35%;
//                     -webkit-transform: translateY(-10%) translateX(-35%);
//                             transform: translateY(-10%) translateX(-35%);

//                 }
//                 .main-banner-shape-2 {
//                     position: absolute;
//                     bottom: 20%;
//                     left: 35%;
//                     -webkit-transform: translateY(-20%) translateX(-35%);
//                             transform: translateY(-20%) translateX(-35%);

//                 }
//                 .main-banner-shape-3 {
//                     position: absolute;
//                     bottom: 5%;
//                     left: 50%;
//                     -webkit-transform: translateY(-5%) translateX(-50%);
//                             transform: translateY(-5%) translateX(-50%);
//                 }
//                 .main-banner-shape-4 {
//                     position: absolute;
//                     bottom: 10%;
//                     left: 50%;
//                     -webkit-transform: translateY(-10%) translateX(-50%);
//                             transform: translateY(-10%) translateX(-50%);
//                 }
//                 .main-banner-shape-5 {
//                     position: absolute;
//                     top: 20%;
//                     left: 35%;
//                     -webkit-transform: translateY(-20%) translateX(-35%);
//                             transform: translateY(-20%) translateX(-35%);
//                 }
//                 .main-banner-shape-6 {
//                     position: absolute;
//                     top: 25%;
//                     left: 40%;
//                     -webkit-transform: translateY(-25%) translateX(-40%);
//                             transform: translateY(-25%) translateX(-40%);
//                 }
//                 .main-banner-shape-7 {
//                     position: absolute;
//                     top: 20%;
//                     right: 15%;
//                     -webkit-transform: translateY(-20%) translateX(-15%);
//                             transform: translateY(-20%) translateX(-15%);
//                 }
//                 .main-banner-shape-8 {
//                     position: absolute;
//                     bottom: 20%;
//                     left: 38%;
//                     -webkit-transform: translateY(-20%) translateX(-38%);
//                             transform: translateY(-20%) translateX(-38%);
//                 }

//                 // Responsive Style
//                 @media only screen and (max-width: 767px) {
//                     .main-banner-area {
//                         padding-top: 60px;
//                         padding-bottom: 60px;
//                     }
//                     .main-banner-content {
//                         text-align: center;
//                     }
//                     .main-banner-content h1 {
//                         font-size: 30px;
//                     }
//                     .main-banner-content p {
//                         font-size: 15px;
//                     }
//                     .main-banner-animation-image {
//                         margin-top: 35px;
//                         text-align: center;
//                     }
//                     .main-banner-animation-image div {
//                         position: relative;
//                     }
//                     .main-banner-animation-image div:nth-child(1) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(2) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(3) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(4) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(5) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(6) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(7) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(8) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(9) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(10) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(11) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(12) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(13) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(14) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(15) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:last-child {
//                         display: block;
//                     }
//                     .main-banner-shape-1 {
//                         display: none;
//                     }
//                     .main-banner-shape-2 {
//                         display: none;
//                     }
//                     .main-banner-shape-3 {
//                         display: none;
//                     }
//                     .main-banner-shape-4 {
//                         display: none;
//                     }
//                     .main-banner-shape-5 {
//                         display: none;
//                     }
//                     .main-banner-shape-6 {
//                         display: none;
//                     }
//                     .main-banner-shape-7 {
//                         display: none;
//                     }
//                     .main-banner-shape-8 {
//                         display: none;
//                     }
//                 }

//                 @media only screen and (min-width : 768px) and (max-width : 991px) {
//                     .main-banner-area {
//                         padding-top: 80px;
//                         padding-bottom: 80px;
//                     }
//                     .main-banner-content {
//                         text-align: center;
//                     }
//                     .main-banner-content h1 {
//                         font-size: 50px;
//                     }
//                     .main-banner-content p {
//                         font-size: 15px;
//                     }
//                     .main-banner-animation-image {
//                         margin-top: 45px;
//                         text-align: center;
//                     }
//                     .main-banner-animation-image div {
//                         position: relative;
//                     }
//                     .main-banner-animation-image div:nth-child(1) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(2) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(3) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(4) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(5) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(6) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(7) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(8) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(9) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(10) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(11) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(12) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(13) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(14) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(15) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:last-child {
//                         display: block;
//                     }
//                     .main-banner-shape-1 {
//                         display: none;
//                     }
//                     .main-banner-shape-2 {
//                         display: none;
//                     }
//                     .main-banner-shape-3 {
//                         display: none;
//                     }
//                     .main-banner-shape-4 {
//                         display: none;
//                     }
//                     .main-banner-shape-5 {
//                         display: none;
//                     }
//                     .main-banner-shape-6 {
//                         display: none;
//                     }
//                     .main-banner-shape-7 {
//                         display: none;
//                     }
//                     .main-banner-shape-8 {
//                         display: none;
//                     }
//                 }

//                 @media only screen and (min-width : 992px) and (max-width : 1199px) {
//                     .main-banner-area {
//                         padding-top: 100px;
//                         padding-bottom: 100px;
//                     }
//                     .main-banner-content h1 {
//                         font-size: 35px;
//                     }
//                     .main-banner-content p {
//                         font-size: 15px;
//                     }
//                     .main-banner-animation-image {
//                         text-align: center;
//                     }
//                     .main-banner-animation-image div {
//                         position: relative;
//                     }
//                     .main-banner-animation-image div:nth-child(1) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(2) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(3) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(4) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(5) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(6) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(7) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(8) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(9) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(10) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(11) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(12) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(13) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(14) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:nth-child(15) {
//                         display: none;
//                     }
//                     .main-banner-animation-image div:last-child {
//                         display: block;
//                     }
//                 }

//                 @media only screen and (min-width: 1200px) and (max-width: 1399px) {
//                     .main-banner-area {
//                         padding-top: 260px;
//                         padding-bottom: 160px;
//                     }
//                     .main-banner-content h1 {
//                         font-size: 45px;
//                     }
//                     .main-banner-content p {
//                         font-size: 15px;
//                     }
//                     .main-banner-animation-image div:nth-child(4) {
//                         bottom: 55px;
//                     }
//                     .main-banner-animation-image div:nth-child(5) {
//                         bottom: 80px;
//                     }
//                     .main-banner-animation-image div:nth-child(7) {
//                         bottom: -170px;
//                     }
//                     .main-banner-animation-image div:nth-child(8) {
//                         top: -60px;
//                         left: 170px;
//                     }
//                     .main-banner-animation-image div:nth-child(9) {
//                         top: -200px;
//                     }
//                     .main-banner-animation-image div:nth-child(10) {
//                         top: 140px;
//                     }
//                     .main-banner-animation-image div:nth-child(11) {
//                         right: 190px;
//                         top: -146px;
//                     }
//                     .main-banner-animation-image div:nth-child(12) {
//                         right: 0;
//                         bottom: -5px;
//                     }
//                     .main-banner-animation-image div:nth-child(13) {
//                         top: -180px;
//                     }
//                 }

//                 @media only screen and (min-width: 1600px) {
//                     .main-banner-area {
//                         padding-top: 220px;
//                         padding-bottom: 160px;
//                     }
//                 }
//                 @media only screen and (max-width: 1200px) {
//                     .main-banner-content h1{
//                         margin-top: 70px !important;
//                     }
//                 }
//                 @media only screen and (max-width: 2652px) {
//                     .main-banner-content h1{
//                         margin-top: -70px;
//                     }
//                 }

//                 @media only screen and (max-width: 1399px) {
//                     .main-banner-content h1{
//                         margin-top: -100px;
//                     }
//                 }

//                 @media only screen and (max-width: 990px) {
//                     .main-banner-content h1{
//                         margin-top: 0px !important;
//                     }
//                 }
//             `}</style>
//             </div>

//             <div className="services-area pb-60">
//                 <div className="container">
//                     <div className="section-title">
//                         <h2>Offering a Range of eCommerce Website Design and Development Services</h2>
//                     </div>
//                     <div className="row justify-content-center">
//                         <div className="col-lg-4 col-md-6">
//                             <div className="single-services">
//                                 <div className="icon">
//                                     <i className="fal fa-pencil-paintbrush"></i>
//                                 </div>
//                                 <h3>
//                                     <Link href="/services-details">
//                                         <a>Custom eCommerce Platforms</a>
//                                     </Link>
//                                 </h3>
//                                 <p>With experience in custom eCommerce website development, our web developers build engaging eCommerce platforms that drive online sales. We focus on designing and developing eCommerce web solutions tailored to your needs.</p>

//                                 <Link href="/services-details">
//                                     <a className="services-btn">
//                                         Read More <i className="ri-arrow-right-line"></i>
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6">
//                             <div className="single-services">
//                                 <div className="icon bg-36CC72">
//                                     <i className="fal fa-code"></i>
//                                 </div>
//                                 <h3>
//                                     <Link href="/services-details">
//                                         <a>Ecommerce Website Solutions</a>
//                                     </Link>
//                                 </h3>
//                                 <p>If you need a custom eCommerce website and are worried about steep ecommerce website development prices, hiring InvoZone eCommerce developers is your best bet. With top eCommerce web development services, we develop an inspiring eCommerce web solution.</p>

//                                 <Link href="/services-details">
//                                     <a className="services-btn">
//                                         Read More <i className="ri-arrow-right-line"></i>
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6">
//                             <div className="single-services">
//                                 <div className="icon bg-FF414B">
//                                     <i className="fal fa-laptop-code"></i>
//                                 </div>
//                                 <h3>
//                                     <Link href="/services-details">
//                                         <a>Custom eCommerce Design</a>
//                                     </Link>
//                                 </h3>
//                                 <p>Creating a brand association makes consumers aware of brand quality and custom designs are a great way of reflecting your business values and brand. We create irresistible custom eCommerce web designs to level up your branding.</p>

//                                 <Link href="/services-details">
//                                     <a className="services-btn">
//                                         Read More <i className="ri-arrow-right-line"></i>
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6">
//                             <div className="single-services">
//                                 <div className="icon bg-FF6D3D">
//                                     <i className="fal fa-layer-group"></i>
//                                 </div>
//                                 <h3>
//                                     <Link href="/services-details">
//                                         <a>WooCommerce Development</a>
//                                     </Link>
//                                 </h3>
//                                 <p>We are well aware of the power of WooCommerce development platforms and provide dedicated teams. So you can hire Woocommerce developers to boost online sales.</p>

//                                 <Link href="/services-details">
//                                     <a className="services-btn">
//                                         Read More <i className="ri-arrow-right-line"></i>
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6">
//                             <div className="single-services">
//                                 <div className="icon bg-8932F8">
//                                     <i className="fal fa-link"></i>
//                                 </div>
//                                 <h3>
//                                     <Link href="/services-details">
//                                         <a>Shopify Development</a>
//                                     </Link>
//                                 </h3>
//                                 <p>Shopify is suitable for entry-level B2C (Business to Customers) Ecommerce web development. InvoZone offers Shopify development solutions focusing on ease of use to minimize development time and cost.</p>

//                                 <Link href="/services-details">
//                                     <a className="services-btn">
//                                         Read More <i className="ri-arrow-right-line"></i>
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>

//                         <div className="col-lg-4 col-md-6">
//                             <div className="single-services">
//                                 <div className="icon bg-FFCA40">
//                                     <i className="fal fa-chart-line"></i>
//                                 </div>
//                                 <h3>
//                                     <Link href="/services-details">
//                                         <a>Magento Development</a>
//                                     </Link>
//                                 </h3>
//                                 <p>Our developers know how to combine technology and creativity to build b2b and b2c Magento eCommerce solutions that grow your business and reduce costs.</p>

//                                 <Link href="/services-details">
//                                     <a className="services-btn">
//                                         Read More <i className="ri-arrow-right-line"></i>
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 <div className="services-shape-1">
//                     <img src="/images/services/shape-1.png" alt="image" />
//                 </div>
//                 <div className="services-shape-2">
//                     <img src="/images/services/shape-2.png" alt="image" />
//                 </div>
//                 <div className="services-shape-3">
//                     <img src="/images/services/shape-3.png" alt="image" />
//                 </div>
//                 <div className="services-shape-4">
//                     <img src="/images/services/shape-4.png" alt="image" />
//                 </div>

//                 <style jsx>{`
//                     .services-area {
//                         position: relative;
//                         z-index: 1;
//                         overflow: hidden;
//                     }
//                     .single-services {
//                         margin-bottom: 30px;
//                         padding: 35px;
//                         border-radius: 5px;
//                         -webkit-transition: var(--transition);
//                         transition: var(--transition);
//                         border: 1px solid #eeeeee;
//                     }
//                     .single-services .icon {
//                         margin-bottom: 25px;
//                     }
//                     .single-services .icon i {
//                         display: inline-block;
//                         height: 80px;
//                         width: 80px;
//                         line-height: 80px;
//                         background-color: #E5F0FF;
//                         color: var(--main-color);
//                         text-align: center;
//                         font-size: 45px;
//                         border-radius: 5px;
//                         -webkit-transition: var(--transition);
//                         transition: var(--transition);
//                     }
//                     .single-services .icon.bg-36CC72 i {
//                         background-color: #EBFAF1;
//                         color: #36CC72;
//                     }
//                     .single-services .icon.bg-FF414B i {
//                         background-color: #FFECED;
//                         color: #FF414B;
//                     }
//                     .single-services .icon.bg-FF6D3D i {
//                         background-color: #FFF0EC;
//                         color: #FF6D3D;
//                     }
//                     .single-services .icon.bg-8932F8 i {
//                         background-color: #F3EBFE;
//                         color: #8932F8;
//                     }
//                     .single-services .icon.bg-FFCA40 i {
//                         background-color: #FFFAEC;
//                         color: #FFCA40;
//                     }
//                     .single-services h3 {
//                         margin-bottom: 15px;
//                     }
//                     .single-services h3 a {
//                         color: var(--black-color);
//                         font-size: 25px;
//                         -webkit-transition: var(--transition);
//                         transition: var(--transition);
//                     }
//                     .single-services p {
//                         margin-bottom: 15px;
//                         font-size: 15px;
//                         -webkit-transition: var(--transition);
//                         transition: var(--transition);
//                     }
//                     .single-services .services-btn {
//                         font-size: 15px;
//                         font-weight: 500;
//                         position: relative;
//                         -webkit-transition: var(--transition);
//                         transition: var(--transition);
//                     }
//                     .single-services .services-btn i {
//                         position: absolute;
//                         right: -20px;
//                         top: 50%;
//                         -webkit-transform: translateY(-50%);
//                                 transform: translateY(-50%);
//                         font-size: 15px;
//                     }
//                     .single-services:hover {
//                         background-color: var(--white-color);
//                         -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
//                                 box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
//                         -webkit-transform: translateY(-10px);
//                                 transform: translateY(-10px);
//                     }
//                     .single-services:hover .icon i {
//                         background-color: var(--main-color);
//                         color: var(--white-color);
//                     }
//                     .single-services:hover .icon.bg-36CC72 i {
//                         background-color: #36CC72;
//                     }
//                     .single-services:hover .icon.bg-FF414B i {
//                         background-color: #FF414B;
//                     }
//                     .single-services:hover .icon.bg-FF6D3D i {
//                         background-color: #FF6D3D;
//                     }
//                     .single-services:hover .icon.bg-8932F8 i {
//                         background-color: #8932F8;
//                     }
//                     .single-services:hover .icon.bg-FFCA40 i {
//                         background-color: #FFCA40;
//                     }
//                     .single-services:hover h3 a {
//                         color: var(--main-color);
//                     }
//                     .single-services:hover .services-btn {
//                         color: var(--main-color);
//                         letter-spacing: 1px;
//                     }

//                     // shape
//                     .services-shape-1 {
//                         position: absolute;
//                         top: 20%;
//                         left: 45%;
//                         -webkit-transform: translateY(-20%) translateX(-45%);
//                                 transform: translateY(-20%) translateX(-45%);
//                         z-index: 1;
//                     }
//                     .services-shape-2 {
//                         position: absolute;
//                         top: 15%;
//                         left: 45%;
//                         -webkit-transform: translateY(-15%) translateX(-45%);
//                                 transform: translateY(-15%) translateX(-45%);
//                         z-index: 1;
//                     }
//                     .services-shape-3 {
//                         position: absolute;
//                         top: 45%;
//                         left: 2%;
//                         -webkit-transform: translateY(-45%) translateX(-2%);
//                                 transform: translateY(-45%) translateX(-2%);
//                         z-index: -1;
//                     }
//                     .services-shape-4 {
//                         position: absolute;
//                         top: 45%;
//                         right: 0%;
//                         -webkit-transform: translateY(-45%) translateX(-5%);
//                                 transform: translateY(-45%) translateX(-5%);
//                         z-index: -1;
//                     }
//                     .services-shape-5 {
//                         position: absolute;
//                         bottom: 10%;
//                         left: 35%;
//                         -webkit-transform: translateY(-10%) translateX(-35%);
//                                 transform: translateY(-10%) translateX(-35%);
//                         z-index: 1;
//                     }

//                     // Responsive Style
//                     @media only screen and (max-width: 767px) {
//                         .single-services {
//                             padding: 30px 15px;
//                             text-align: center;
//                         }
//                         .single-services .icon {
//                             margin-bottom: 30px;
//                         }
//                         .single-services h3 a {
//                             font-size: 20px;
//                         }
//                         .services-shape-1 {
//                             display: none;
//                         }
//                         .services-shape-2 {
//                             display: none;
//                         }
//                         .services-shape-3 {
//                             display: none;
//                         }
//                         .services-shape-4 {
//                             display: none;
//                         }
//                         .services-shape-5 {
//                             display: none;
//                         }
//                     }

//                     @media only screen and (min-width : 768px) and (max-width : 991px) {
//                         .single-services {
//                             padding: 30px 20px;
//                         }
//                         .single-services .icon {
//                             margin-bottom: 30px;
//                         }
//                         .single-services h3 a {
//                             font-size: 20px;
//                         }
//                         .services-shape-1 {
//                             display: none;
//                         }
//                         .services-shape-2 {
//                             display: none;
//                         }
//                         .services-shape-3 {
//                             display: none;
//                         }
//                         .services-shape-4 {
//                             display: none;
//                         }
//                         .services-shape-5 {
//                             display: none;
//                         }
//                     }

//                     @media only screen and (min-width : 992px) and (max-width : 1199px) {
//                         .single-services {
//                             padding: 35px 20px;
//                         }
//                         .single-services h3 a {
//                             font-size: 20px;
//                         }
//                         .services-shape-1 {
//                             display: none;
//                         }
//                         .services-shape-2 {
//                             display: none;
//                         }
//                         .services-shape-3 {
//                             display: none;
//                         }
//                         .services-shape-4 {
//                             display: none;
//                         }
//                         .services-shape-5 {
//                             display: none;
//                         }
//                     }

//                     @media only screen and (min-width : 1200px) and (max-width : 1399px) {
//                         .single-services {
//                             padding: 30px;
//                         }
//                         .single-services h3 a {
//                             font-size: 24px;
//                         }
//                     }
//                 `}</style>
//             </div>

//             <div className='tech_dev pb-5'>
//                 <TechDevelop />
//             </div>

//             <div className="about_section">
//                 <div className="experiences-area">
//                     <div className="container">
//                         <div className="row align-items-center">
//                             <div className="col-lg-6">
//                                 <div className="experiences-item">
//                                     <div className="experiences-content">
//                                         <div className="tag">
//                                             <img src="/images/fastech-favicon.png" alt="fastech-image" className='tag_img' />
//                                         </div>
//                                         <h3>Why Hire eCommerce WebsiteDevelopers from Fastech?</h3>

//                                     </div>

//                                     <div className="experiences-inner-content">

//                                         <p><i className="far fa-check tick_icons"></i>  Flexible engagement models</p>
//                                     </div>

//                                     <div className="experiences-inner-content">
//                                         <p className="About_content"><i className="far fa-check tick_icons"></i> Streamlined communications and comprehensive reporting</p>
//                                     </div>

//                                     <div className="experiences-inner-content">
//                                         <p className="About_content"><i className="far fa-check tick_icons"></i> Transparent pricing</p>
//                                     </div>

//                                     <div className="experiences-inner-content">
//                                         <p className="About_content"><i className="far fa-check tick_icons"></i> Competence in custom software, Shopify, Magento and wooCommerce</p>
//                                     </div>

//                                     <div className="experiences-inner-content">
//                                         <p className="About_content"><i className="far fa-check tick_icons"></i> Hands-on experience in software development for eCommerce industry</p>
//                                     </div>

//                                     <div className="experiences-inner-content">
//                                         <p className="About_content"><i className="far fa-check tick_icons"></i> Deep understanding of eCommerce development technologies</p>
//                                     </div>

//                                     <div className="experiences-inner-content">
//                                         <p className="About_content"><i className="far fa-check tick_icons"></i> Data privacy protection</p>
//                                     </div>

//                                     <div className="experiences-inner-content">
//                                         <p className="About_content"><i className="far fa-check tick_icons"></i> Individual approach to every client</p>
//                                     </div>

//                                     <div className="experiences-btn">
//                                         <Link href="/about-us">
//                                             <a className="default-btn">
//                                                 Read More
//                                                 <i className="ri-arrow-right-line"></i>
//                                                 <span></span>
//                                             </a>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-lg-6">
//                                 <div className="experiences-image">
//                                     <img className='pl-5' src="/images/Flexible-engagement-models (2).png" alt="image" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="experiences-shape-1" data-speed="0.08" data-revert="true">
//                         <img src="/images/experiences/shape-1.png" alt="image" />
//                     </div>
//                     <div className="experiences-shape-2" data-speed="0.06" data-revert="true">
//                         <img src="/images/experiences/shape-2.png" alt="image" />
//                     </div>
//                     <div className="experiences-shape-3" data-speed="0.08" data-revert="true">
//                         <img src="/images/experiences/shape-3.png" alt="image" />
//                     </div>
//                     <div className="experiences-shape-4" data-speed="0.06" data-revert="true">
//                         <img src="/images/experiences/shape-2.png" alt="image" />
//                     </div>
//                     <div className="experiences-shape-5" data-speed="0.08" data-revert="true">
//                         <img src="/images/experiences/shape-3.png" alt="image" />
//                     </div>
//                     <div className="experiences-shape-6" data-speed="0.06" data-revert="true">
//                         <img src="/images/experiences/shape-4.png" alt="image" />
//                     </div>
//                     <div className="experiences-shape-7" data-speed="0.08" data-revert="true">
//                         <img src="/images/experiences/shape-5.png" alt="image" />
//                     </div>
//                 </div>

//                 <style jsx>{`
//             .About_content{
//                 margin-top: -25px;
//             }
//             .tick_icons{
//                   color: #1F69F6;
//                   font-size: 18px;
//                }
//                .tag_img{
//                    width: 33px;
//                }
//                 .experiences-area {
//                     position: relative;
//                     z-index: 1;
//                 }
//                 .experiences-area::before {
//                     position: absolute;
//                     content: "";
//                     height: 100%;
//                     width: 50%;
//                     background-color: #F4F8FC;
//                     left: 0;
//                     top: 0;
//                     z-index: -1;
//                 }
//                 .experiences-area::after {
//                     position: absolute;
//                     content: "";
//                     height: 100%;
//                     width: 50%;
//                     background-color: var(--white-color);
//                     right: 0;
//                     top: 0;
//                     z-index: -1;
//                 }
//                 .experiences-item {
//                     padding-top: 80px;
//                     padding-bottom: 80px;
//                     padding-right: 30px;
//                 }
//                 .experiences-item .experiences-content .tag {
//                     display: inline-block;
//                     height: 50px;
//                     width: 50px;
//                     line-height: 50px;
//                     background-color: var(--white-color);
//                     text-align: center;
//                     border-radius: 50px;
//                     -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
//                             box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
//                 }
//                 .experiences-item .experiences-content h3 {
//                     font-size: 40px;
//                     margin-top: 25px;
//                     margin-bottom: 20px;
//                     line-height: 1.4;
//                 }
//                 .experiences-item .experiences-inner-content {
//                     position: relative;
//                     margin-top: 30px;
//                     padding-left: 50px;
//                 }
//                 .experiences-item .experiences-inner-content img {
//                     position: absolute;
//                     left: 0;
//                     top: 0;
//                 }
//                 .experiences-item .experiences-btn {
//                     margin-top: 30px;
//                     padding-left: 55px;
//                 }
//                 .experiences-image {
//                     text-align: right;
//                 }
//                 .experiences-shape-1 {
//                     position: absolute;
//                     top: 8%;
//                     left: 40%;
//                     -webkit-transform: translateY(-8%) translateX(-40%);
//                             transform: translateY(-8%) translateX(-40%);
//                     z-index: -1;
//                 }
//                 .experiences-shape-2 {
//                     position: absolute;
//                     top: 50%;
//                     left: 2%;
//                     -webkit-transform: translateY(-50%) translateX(-2%);
//                             transform: translateY(-50%) translateX(-2%);
//                     z-index: -1;
//                 }
//                 .experiences-shape-3 {
//                     position: absolute;
//                     top: 52%;
//                     left: 5%;
//                     -webkit-transform: translateY(-52%) translateX(-5%);
//                             transform: translateY(-52%) translateX(-5%);
//                     z-index: -1;
//                 }
//                 .experiences-shape-4 {
//                     position: absolute;
//                     bottom: 10%;
//                     left: 35%;
//                     -webkit-transform: translateY(-10%) translateX(-35%);
//                             transform: translateY(-10%) translateX(-35%);
//                     z-index: -1;
//                 }
//                 .experiences-shape-5 {
//                     position: absolute;
//                     bottom: 8%;
//                     left: 36%;
//                     -webkit-transform: translateY(-8%) translateX(-36%);
//                             transform: translateY(-8%) translateX(-36%);
//                     z-index: -1;
//                 }
//                 .experiences-shape-6 {
//                     position: absolute;
//                     bottom: 10%;
//                     left: 48%;
//                     -webkit-transform: translateY(-10%) translateX(-48%);
//                             transform: translateY(-10%) translateX(-48%);
//                     z-index: 1;
//                 }
//                 .experiences-shape-7 {
//                     position: absolute;
//                     bottom: 2%;
//                     left: 48%;
//                     -webkit-transform: translateY(-2%) translateX(-48%);
//                             transform: translateY(-2%) translateX(-48%);
//                     z-index: 1;
//                 }

//                 // Responsive Style
//                 @media only screen and (max-width: 767px) {
//                     .experiences-area {
//                         padding-bottom: 50px;
//                     }
//                     .experiences-area::after {
//                         background-color: #F4F8FC;
//                     }
//                     .experiences-item {
//                         padding-top: 50px;
//                         padding-bottom: 50px;
//                         padding-right: 0;
//                     }
//                     .experiences-item .experiences-content h3 {
//                         font-size: 24px;
//                     }
//                     .experiences-item .experiences-content p {
//                         font-size: 15px;
//                     }
//                     .experiences-item .experiences-inner-content {
//                         padding-left: 0;
//                         text-align: center;
//                     }
//                     .experiences-item .experiences-inner-content img {
//                         position: relative;
//                         margin-bottom: 15px;
//                     }
//                     .experiences-item .experiences-btn {
//                         padding-left: 0;
//                         text-align: center;
//                     }
//                     .experiences-image {
//                         text-align: center;
//                     }
//                     .experiences-shape-1 {
//                         display: none;
//                     }
//                     .experiences-shape-2 {
//                         display: none;
//                     }
//                     .experiences-shape-3 {
//                         display: none;
//                     }
//                     .experiences-shape-4 {
//                         display: none;
//                     }
//                     .experiences-shape-5 {
//                         display: none;
//                     }
//                     .experiences-shape-6 {
//                         display: none;
//                     }
//                     .experiences-shape-7 {
//                         display: none;
//                     }
//                 }

//                 @media only screen and (min-width : 768px) and (max-width : 991px) {
//                     .experiences-area {
//                         padding-bottom: 50px;
//                     }
//                     .experiences-area::after {
//                         background-color: #F4F8FC;
//                     }
//                     .experiences-item {
//                         padding-top: 50px;
//                         padding-bottom: 50px;
//                         padding-right: 0;
//                     }
//                     .experiences-image {
//                         text-align: center;
//                     }
//                     .experiences-shape-1 {
//                         display: none;
//                     }
//                     .experiences-shape-2 {
//                         display: none;
//                     }
//                     .experiences-shape-3 {
//                         display: none;
//                     }
//                     .experiences-shape-4 {
//                         display: none;
//                     }
//                     .experiences-shape-5 {
//                         display: none;
//                     }
//                     .experiences-shape-6 {
//                         display: none;
//                     }
//                     .experiences-shape-7 {
//                         display: none;
//                     }
//                 }

//                 @media only screen and (min-width : 992px) and (max-width : 1199px) {
//                     .experiences-item {
//                         padding-top: 50px;
//                         padding-bottom: 50px;
//                     }
//                     .experiences-item .experiences-content h3 {
//                         font-size: 30px;
//                         margin-top: 20px;
//                         margin-bottom: 15px;
//                     }
//                     .experiences-item .experiences-content p {
//                         font-size: 14px;
//                     }
//                     .experiences-item .experiences-inner-content p {
//                         font-size: 14px;
//                     }
//                 }
//             `}</style>
//             </div>

//             <div className="dedicated_dev pt-5 pb-5">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12 text-center mb-5 mt-3 pb-3">
//                             <h1>Entrust Your Technology Development<br /> Needs to Fastech</h1>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-6 col-md-12">
//                             <div className="single-services">
//                                 <div className="icon">
//                                     <i className="fal fa-pencil-paintbrush"></i>
//                                 </div>
//                                 <h3>
//                                     <Link href="/services-details">
//                                         <a>Dedicated Remote Team</a>
//                                     </Link>
//                                 </h3>
//                                 <p>If you’re looking for an offshore development team, this remote model perfectly matches your requirements. Hire a dedicated remote team and get 100% control over your resources.</p>

//                                 <Link href="/services-details">
//                                     <a className="services-btn">
//                                         Read More <i className="ri-arrow-right-line"></i>
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 col-md-12">
//                             <div className="single-services">
//                                 <div className="icon bg-36CC72">
//                                     <i className="fal fa-code"></i>
//                                 </div>
//                                 <h3>
//                                     <Link href="/services-details">
//                                         <a>Project-Based Model</a>
//                                     </Link>
//                                 </h3>
//                                 <p>Want to focus on business? Hand in your technical development to us. We define expected deliverables and timelines with a fixed budget.</p>

//                                 <Link href="/services-details">
//                                     <a className="services-btn">
//                                         Read More <i className="ri-arrow-right-line"></i>
//                                     </a>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     <style jsx>{`

//                     .services-area {
//                         position: relative;
//                         z-index: 1;
//                         overflow: hidden;
//                     }
//                     .single-services {
//                         margin-bottom: 30px;
//                         padding: 35px;
//                         border-radius: 5px;
//                         -webkit-transition: var(--transition);
//                         transition: var(--transition);
//                         border: 1px solid #eeeeee;
//                         background-color: white;
//                     }
//                     .single-services .icon {
//                         margin-bottom: 25px;
//                     }
//                     .single-services .icon i {
//                         display: inline-block;
//                         height: 80px;
//                         width: 80px;
//                         line-height: 80px;
//                         background-color: #E5F0FF;
//                         color: var(--main-color);
//                         text-align: center;
//                         font-size: 45px;
//                         border-radius: 5px;
//                         -webkit-transition: var(--transition);
//                         transition: var(--transition);
//                     }
//                     .single-services .icon.bg-36CC72 i {
//                         background-color: #EBFAF1;
//                         color: #36CC72;
//                     }
//                     .single-services .icon.bg-FF414B i {
//                         background-color: #FFECED;
//                         color: #FF414B;
//                     }
//                     .single-services .icon.bg-FF6D3D i {
//                         background-color: #FFF0EC;
//                         color: #FF6D3D;
//                     }
//                     .single-services .icon.bg-8932F8 i {
//                         background-color: #F3EBFE;
//                         color: #8932F8;
//                     }
//                     .single-services .icon.bg-FFCA40 i {
//                         background-color: #FFFAEC;
//                         color: #FFCA40;
//                     }
//                     .single-services h3 {
//                         margin-bottom: 15px;
//                     }
//                     .single-services h3 a {
//                         color: var(--black-color);
//                         font-size: 25px;
//                         -webkit-transition: var(--transition);
//                         transition: var(--transition);
//                     }
//                     .single-services p {
//                         margin-bottom: 15px;
//                         font-size: 15px;
//                         -webkit-transition: var(--transition);
//                         transition: var(--transition);
//                     }
//                     .single-services .services-btn {
//                         font-size: 15px;
//                         font-weight: 500;
//                         position: relative;
//                         -webkit-transition: var(--transition);
//                         transition: var(--transition);
//                     }
//                     .single-services .services-btn i {
//                         position: absolute;
//                         right: -20px;
//                         top: 50%;
//                         -webkit-transform: translateY(-50%);
//                                 transform: translateY(-50%);
//                         font-size: 15px;
//                     }
//                     .single-services:hover {
//                         background-color: var(--white-color);
//                         -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
//                                 box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
//                         -webkit-transform: translateY(-10px);
//                                 transform: translateY(-10px);
//                     }
//                     .single-services:hover .icon i {
//                         background-color: var(--main-color);
//                         color: var(--white-color);
//                     }
//                     .single-services:hover .icon.bg-36CC72 i {
//                         background-color: #36CC72;
//                     }
//                     .single-services:hover .icon.bg-FF414B i {
//                         background-color: #FF414B;
//                     }
//                     .single-services:hover .icon.bg-FF6D3D i {
//                         background-color: #FF6D3D;
//                     }
//                     .single-services:hover .icon.bg-8932F8 i {
//                         background-color: #8932F8;
//                     }
//                     .single-services:hover .icon.bg-FFCA40 i {
//                         background-color: #FFCA40;
//                     }
//                     .single-services:hover h3 a {
//                         color: var(--main-color);
//                     }
//                     .single-services:hover .services-btn {
//                         color: var(--main-color);
//                         letter-spacing: 1px;
//                     }

//                     // shape
//                     .services-shape-1 {
//                         position: absolute;
//                         top: 20%;
//                         left: 45%;
//                         -webkit-transform: translateY(-20%) translateX(-45%);
//                                 transform: translateY(-20%) translateX(-45%);
//                         z-index: 1;
//                     }
//                     .services-shape-2 {
//                         position: absolute;
//                         top: 15%;
//                         left: 45%;
//                         -webkit-transform: translateY(-15%) translateX(-45%);
//                                 transform: translateY(-15%) translateX(-45%);
//                         z-index: 1;
//                     }
//                     .services-shape-3 {
//                         position: absolute;
//                         top: 45%;
//                         left: 2%;
//                         -webkit-transform: translateY(-45%) translateX(-2%);
//                                 transform: translateY(-45%) translateX(-2%);
//                         z-index: -1;
//                     }
//                     .services-shape-4 {
//                         position: absolute;
//                         top: 45%;
//                         right: 0%;
//                         -webkit-transform: translateY(-45%) translateX(-5%);
//                                 transform: translateY(-45%) translateX(-5%);
//                         z-index: -1;
//                     }
//                     .services-shape-5 {
//                         position: absolute;
//                         bottom: 10%;
//                         left: 35%;
//                         -webkit-transform: translateY(-10%) translateX(-35%);
//                                 transform: translateY(-10%) translateX(-35%);
//                         z-index: 1;
//                     }

//                     // Responsive Style
//                     @media only screen and (max-width: 767px) {
//                         .single-services {
//                             padding: 30px 15px;
//                             text-align: center;
//                         }
//                         .single-services .icon {
//                             margin-bottom: 30px;
//                         }
//                         .single-services h3 a {
//                             font-size: 20px;
//                         }
//                         .services-shape-1 {
//                             display: none;
//                         }
//                         .services-shape-2 {
//                             display: none;
//                         }
//                         .services-shape-3 {
//                             display: none;
//                         }
//                         .services-shape-4 {
//                             display: none;
//                         }
//                         .services-shape-5 {
//                             display: none;
//                         }
//                     }

//                     @media only screen and (min-width : 768px) and (max-width : 991px) {
//                         .single-services {
//                             padding: 30px 20px;
//                         }
//                         .single-services .icon {
//                             margin-bottom: 30px;
//                         }
//                         .single-services h3 a {
//                             font-size: 20px;
//                         }
//                         .services-shape-1 {
//                             display: none;
//                         }
//                         .services-shape-2 {
//                             display: none;
//                         }
//                         .services-shape-3 {
//                             display: none;
//                         }
//                         .services-shape-4 {
//                             display: none;
//                         }
//                         .services-shape-5 {
//                             display: none;
//                         }
//                     }

//                     @media only screen and (min-width : 992px) and (max-width : 1199px) {
//                         .single-services {
//                             padding: 35px 20px;
//                         }
//                         .single-services h3 a {
//                             font-size: 20px;
//                         }
//                         .services-shape-1 {
//                             display: none;
//                         }
//                         .services-shape-2 {
//                             display: none;
//                         }
//                         .services-shape-3 {
//                             display: none;
//                         }
//                         .services-shape-4 {
//                             display: none;
//                         }
//                         .services-shape-5 {
//                             display: none;
//                         }
//                     }

//                     @media only screen and (min-width : 1200px) and (max-width : 1399px) {
//                         .single-services {
//                             padding: 30px;
//                         }
//                         .single-services h3 a {
//                             font-size: 24px;
//                         }
//                     }
//                 `}</style>
//                 </div>
//             </div>

//             <div className="description">
//                 <div className="container mt-5">
//                     <div className="row">
//                         <div className="col-12 text-center mb-3">
//                             <h1>How to Choose a Web Developer for Your eCommerce Website Development?</h1>
//                         </div>
//                     </div>

//                     <div className="sub_description_wrapper">
//                         <div className="row m-0">
//                             <div className="col-12">
//                                 <p>eCommerce has increasingly become popular in today’s globalized world and is considered a catalyst for economic growth. The history of eCommerce is correlated to the history of the internet. Why? Because simply put, the advent of the internet made the whole idea of eCommerce achievable.</p>
//                                 <p>Back in 1994, Jeff Bezos, founder of Amazon, introduced people to the exciting new world of online shopping that paved the way for modern-day eCommerce. If I remember correctly, Amazon started as an online marketplace for books but now it sells everything starting from electronics to video games, you name it.</p>
//                                 <p>Surprisingly, Amazon made over 252 million USD in the first year of its arrival alone, hundreds of similar businesses have followed ever since such as eBay – the then vintage collector – another pioneer of eCommerce development. eBay has over 180 million (and counting) active buyers today.</p>
//                                 <p>The entire idea behind this anecdote is to make you aware of the economic significance of eCommerce in the current day and age, and I hope I didn’t disappoint. Convenience, accessibility, security, and seamless customer experience are some of the most important pillars of novel web-based eCommerce solutions.</p>
//                                 <p>Furthermore, intuitive eCommerce website designing can not only aid your online businesses to deliver a better customer experience but can potentially generate more convertible leads. Before jumping into the whole ‘how to choose a web developer or an agency to fulfil your development requirements’ let’s just look at the basics.</p>
//                                 <h4>What is eCommerce Website Development?</h4>
//                                 <p>In layman’s terms, eCommerce or electronic commerce refers to the buying and selling of products over the internet, and the development of professional eCommerce websites is eCommerce development. That wasn’t so hard now, was it?</p>
//                                 <p>Before the inception of eCommerce, brick-and-mortar stores (traditional retail) ruled the market. But as a matter of fact, we have seen many retailers reinventing the brick and mortar to align themselves with the digital age. For example; along with establishing an online presence, they are moving core business operations online, too. Best of both worlds. Amirite?</p>
//                                 <h4>Rise of eCommerce Amid Pandemic</h4>
//                                 <p>Having said that, custom eCommerce development is revolutionizing commercial activities profoundly, around the globe. Moreso, customer buying behaviors are rapidly changing due to the Pandemic. The number of physical shoppers dwindled as we approached this period of social distancing and isolation. Walmart’s eCommerce sales grew 97.0% in the second quarter of 2021, and the ongoing pandemic continued to drive consumers to buy online.</p>
//                                 <p>The growth of eCommerce during this time is significant as it was the only other way for consumers to make their usual purchases in complete safety. Therefore businesses are preferring custom software over off-the-shelf solutions, as it allows them to match their exact business requirements without having to worry about non-functional requirements such as customer security and reliability.</p>
//                                 <h4>Tools for Building an eCommerce Website</h4>
//                                 <p>Why do I need an eCommerce website builder? The undemanding answer would be: to save time and money. You need a user-friendly and manageable eCommerce website to sell online. But the eCommerce website development process requires skills and effort. You can’t just snap your fingers and expect it to happen overnight especially if you lack the in-house expertise for coding.</p>
//                                 <p>Therefore, eCommerce outsourcing is the right choice to meet your custom development needs. They offer some of the best eCommerce developers to design your website from scratch and all the right tools to simplify and streamline the entire development process so you can start selling quickly. If you are doing development in-house you simply don’t want to choose the wrong eCommerce website builder, only to realize it later that you can not handle it.</p>
//                                 <h4>Shopify – A Fully Integrated Store</h4>
//                                 <p>Many businesses prefer Shopify development over other tools. It has always been considered the best eCommerce website development platform; hands down. Shopify was founded some 10 years ago by Tobi of Snowdevil – a snowboard selling company. Just like the founders of Wix, he realized the challenges of selling stuff online. Shopify app development offers business owners a flexible website builder for conversions and ultimately sales. You can easily find Shopify web designers everywhere since the platform is used by over 1,000,000 businesses in 175 countries, offering great tools for beginners with no coding experience.</p>
//                                 <ul>
//                                     <li>Offering market competitive pricing.</li>
//                                     <li>Mobile-optimized themes</li>
//                                     <li>Seamless social media integration.</li>
//                                     <li>Over 100 add-ons and extensions for every industry.</li>
//                                     <li>24/7 (exceptional) customer support.</li>
//                                     <li>Free SSL Certificate included in all plans.</li>
//                                     <li>A drag-and-drop page builder.</li>
//                                     <li>The massive community forum and robust knowledge base.</li>
//                                 </ul>
//                                 <h4>WooCommerce – Easily Manage your Products</h4>
//                                 <p>There are an estimated 2.3 million eCommerce stores around the world and WooCommerce website development is favored by the majority due to its free open-source nature and of course, majority rules. WooCommerce is an eCommerce plugin for WordPress which is another popular website development platform.</p>
//                                 <p>According to studies, 30% of eCommerce websites are developed through WooCommerce. Because apart from just being an open-source platform WooCommerce has flexible and powerful features. It was launched not so long ago, in 2011. After which it quickly gained popularity mainly because of it’s simple installation and customization. It allows WooCommerce expert developers to easily build and optimize eCommerce stores for potential clients at affordable rates. Besides, finding a WooCommerce development company is easier.</p>
//                                 <ul>
//                                     <li>Offering market competitive pricing.</li>
//                                     <li>Mobile-optimized themes</li>
//                                     <li>Seamless social media integration.</li>
//                                     <li>Over 100 add-ons and extensions for every industry.</li>
//                                     <li>24/7 (exceptional) customer support.</li>
//                                     <li>Free SSL Certificate included in all plans.</li>
//                                     <li>A drag-and-drop page builder.</li>
//                                     <li>The massive community forum and robust knowledge base.</li>
//                                 </ul>
//                                 <h4>Magento – Create Engaging & Shoppable Experiences</h4>
//                                 <p>Some of the biggest companies in the world such as Canon, CocaCola, Ford, Lenovo, Nike, etc. are relying on Magento for eCommerce website development. Among other development platforms, Magento has established a strong foothold in the market since 2007 and is considered one of the top 3 eCommerce development platforms.</p>
//                                 <p>Many businesses prefer Magento development over WooCommerce for its business intelligence. Unlike WooCommerce development, Magento is self-hosted and offers advanced security features. It was acquired by Adobe in 2018, and now offers two versions: Magento Open Source and Magento Commerce.</p>
//                                 <ul>
//                                     <li>Offering market competitive pricing.</li>
//                                     <li>Mobile-optimized themes</li>
//                                     <li>Seamless social media integration.</li>
//                                     <li>Over 100 add-ons and extensions for every industry.</li>
//                                     <li>24/7 (exceptional) customer support.</li>
//                                     <li>Free SSL Certificate included in all plans.</li>
//                                     <li>A drag-and-drop page builder.</li>
//                                     <li>The massive community forum and robust knowledge base.</li>
//                                 </ul>
//                                 <h4>BigCommerce – eCommerce for a New Era</h4>
//                                 <p>BigCommerce has been accelerating businesses towards success since 2009. It is a customer-centric platform offering an easy-to-use interface and intuitive dashboard for eCommerce management. Almost every eCommerce website development platform offers SEO optimization tools, similarly, BigCommerce follows advanced SEO practices such as auto-optimized titles and URLs. Additionally, its modern themes are mobile-friendly and accessible; free and paid both.</p>
//                                 <ul>
//                                     <li>Offering market competitive pricing.</li>
//                                     <li>Mobile-optimized themes</li>
//                                     <li>Seamless social media integration.</li>
//                                     <li>Over 100 add-ons and extensions for every industry.</li>
//                                     <li>24/7 (exceptional) customer support.</li>
//                                     <li>Free SSL Certificate included in all plans.</li>
//                                     <li>A drag-and-drop page builder.</li>
//                                     <li>The massive community forum and robust knowledge base.</li>
//                                 </ul>
//                                 <h4>Wix – Create your Website</h4>
//                                 <p>Wix was founded by Avishai Abrahami, Nadav Abrahami, and Giora Kaplan in 2006. The idea was born on a beach. Yes literally. The trio of developers were building a website for a start-up when they realized the struggle of developing a website from scratch. Hence, they decided to develop a platform that would make life easier for everyone. Wix came to the market as a simple website builder. Later, more features were added to upscale the tool. Now, it allows users to build professional websites for every industry including eCommerce.</p>
//                                 <ul>
//                                     <li>Offering market competitive pricing.</li>
//                                     <li>Mobile-optimized themes</li>
//                                     <li>Seamless social media integration.</li>
//                                     <li>Over 100 add-ons and extensions for every industry.</li>
//                                     <li>24/7 (exceptional) customer support.</li>
//                                     <li>Free SSL Certificate included in all plans.</li>
//                                     <li>A drag-and-drop page builder.</li>
//                                     <li>The massive community forum and robust knowledge base.</li>
//                                 </ul>
//                                 <h4>The Different Types of eCommerce Business Models </h4>
//                                 <p>Thinking of starting your own eCommerce business? Then you should totally familiarize yourself with different eCommerce models so that you can know about the potential market opportunities, threats, and challenges. So let’s dig in:</p>
//                                 <h4>Business to Business (B2B)</h4>
//                                 <p>As the name suggests, this model includes business-to-business transactions or exchanges, meaning both sellers and buyers or end-users are business entities such as producers, wholesalers, retailers, etc. Interestingly, U.S. business-to-business (B2B) eCommerce transactions are anticipated to reach $1.8 trillion by 2023; accounting for an estimated 17% of all B2B sales in the country.</p>
//                                 <ul>
//                                     <li>Longer sales cycles.</li>
//                                     <li>Higher-order volume and value.</li>
//                                     <li>Long-term partnerships for recurring purchases.</li>
//                                 </ul>
//                                 <p>General Electric is one of the most popular examples of B2B eCommerce. In 2017, it was featured on the Fortune 500 list as the 13th largest company in the United States.</p>
//                                 <h4>Business to Consumer (B2C)</h4>
//                                 <p>I am sure everyone is familiar with B2C eCommerce Model. It’s all about businesses directly selling their products or merchandise to consumers or buyers. Remember when the other day you were scrolling through Amazon searching The Witcher 3 for a game night with your buddies; Amazon being the business and you the consumer – a perfect example of B2C.</p>
//                                 <h4>Cost of Hiring a Web Developer for eCommerce Website Development</h4>
//                                 <p>It all comes down to this very important question: how much does it cost to build an eCommerce website? Well, obviously the price varies but an estimation could range from $5000 to $100,000 or even more. It all depends on the company’s size and requirements. It’s not just website development but different factors that contribute to the overall costs. Basic custom eCommerce website development with advanced features will cost around $10,000 to $16,000. Following variables are included:</p>
//                                 <ul>
//                                     <li>Licensing</li>
//                                     <li>Hosting</li>
//                                     <li>Domain name</li>
//                                     <li>UI/ UX design</li>
//                                     <li>Custom Development</li>
//                                     <li>No. of web pages</li>
//                                     <li>Functionality</li>
//                                     <li>Themes</li>
//                                     <li>Add-ons</li>
//                                     <li>Plug-ins</li>
//                                     <li>Extensions</li>
//                                     <li>Integrations</li>
//                                     <li>Responsiveness</li>
//                                     <li>Interactivity</li>
//                                     <li>Payment processing</li>
//                                     <li>Setup/ Configuration</li>
//                                     <li>Quality Assurance</li>
//                                     <li>Project Management</li>
//                                     <li>Training</li>
//                                     <li>Maintenance</li>
//                                     <li>Vendor fee: Outsourced, freelance, or in-house</li>

//                                 </ul>
//                                 <p>Investing in eCommerce infrastructure is extremely important to beat your competition. Below are some ways InvoZone can develop your next eCommerce project for you:</p>
//                                 <ul>
//                                     <li>Offering market competitive pricing.</li>
//                                     <li>Mobile-optimized themes</li>
//                                     <li>Seamless social media integration.</li>
//                                     <li>Over 100 add-ons and extensions for every industry.</li>
//                                     <li>24/7 (exceptional) customer support.</li>
//                                     <li>Free SSL Certificate included in all plans.</li>
//                                     <li>A drag-and-drop page builder.</li>
//                                     <li>The massive community forum and robust knowledge base.</li>
//                                 </ul>
//                                 <h6>So feel free to <a href="#">contact us</a> with your eCommerce website development needs, today.</h6>
//                             </div>

//                         </div>
//                         <style jsx>{`
//                          .sub_description_wrapper{
//                             height: 500px;
//                             overflow-y: scroll;
//                             padding-top: 10px;
//                             padding-bottom: 10px;
//                             padding-left: 5px;
//                             padding-right: 5px;
//                             border-radius: 5px;
//                             background-color: #F4F8FC;
//                             margin-top: 20px;
//                          }

//                         `}</style>
//                     </div>
//                 </div>
//             </div>

//             <CTA />

//         </>
//     )
// }

// export default IndustryDetail;
