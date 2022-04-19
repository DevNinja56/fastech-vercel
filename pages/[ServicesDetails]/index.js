import React, { useState, createContext } from "react";
import { ServicesApi } from "../../api-services";
import CTA from "../../components/Common/CTA";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import TechDevelop from "../../components/TechComponent/TechDevelop";



export async function getStaticPaths() {

  const paths = ServicesApi?.map((obj) => ({
    params: { ServicesDetails: obj.slug },
  }));

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const dataId = context.params.ServicesDetails;


  let servicesData = ServicesApi;

  return {
    props: {
      servicesData,
      dataId,
    },
  };
}

const DetailServices = ({ servicesData, dataId }) => {
  return (
    <>
      {/* banner  */}
      <div className="main-banner-area">
        <div className="container">
          <div className="row">
            {servicesData?.map((obj) => {
              if (obj.slug === dataId) {
                return (
                  <>
                    <div className="col-lg-5 col-md-12">
                      <div className="main-banner-content">
                        <ScrollAnimation
                          animateIn="fadeInLeft"
                          delay={50}
                          animateOnce={true}
                        ></ScrollAnimation>

                        <ScrollAnimation
                          animateIn="fadeInLeft"
                          delay={100}
                          animateOnce={true}
                        >
                          <h1 className="main_heading_step_animation">
                            {obj.heading}
                          </h1>
                        </ScrollAnimation>

                        <ScrollAnimation
                          animateIn="fadeInLeft"
                          delay={150}
                          animateOnce={true}
                        >
                          <p>{obj.paragraph}</p>
                        </ScrollAnimation>

                        <div className="banner-btn">
                          <ScrollAnimation
                            animateIn="fadeInRight"
                            delay={200}
                            animateOnce={true}
                          >
                            <Link href="/about-us">
                              <a className="default-btn">
                                Discuss Your Project{" "}
                                <i className="ri-arrow-right-line"></i>
                                <span></span>
                              </a>
                            </Link>
                          </ScrollAnimation>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                      <div className="main-banner-animation-image">
                        {/* Do not remove the div, is required! */}
                        <div>
                          <ScrollAnimation
                            animateIn="fadeInDown"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInDown"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInDown"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInDown"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInUp"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInDown"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInDown"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInDown"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInDown"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInDown"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInDown"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInLeft"
                            delay={100}
                            animateOnce={true}
                          >
                            <img
                              className="main_img_all"
                              src={obj.banner_img}
                              alt="image"
                            />
                          </ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInLeft"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInLeft"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <ScrollAnimation
                            animateIn="fadeInLeft"
                            delay={100}
                            animateOnce={true}
                          ></ScrollAnimation>
                        </div>

                        <div>
                          <img src={obj.banner_img} alt="image" />
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>

        {/* Shape Images */}
        <div className="main-banner-shape-1">
          <img src="/images/main-banner/banner-one/shape-1.png" alt="image" />
        </div>
        <div className="main-banner-shape-2">
          <img src="/images/main-banner/banner-one/shape-2.png" alt="image" />
        </div>
        <div className="main-banner-shape-3">
          <img src="/images/main-banner/banner-one/shape-3.png" alt="image" />
        </div>
        <div className="main-banner-shape-4">
          <img src="/images/main-banner/banner-one/shape-4.png" alt="image" />
        </div>

        <style jsx>{`
        .main_heading_step_animation {
  font-weight: 200;
  margin: 0.4em 0;
  font-size: 3.5em;
}

.main-banner-area {
  padding-top: 175px;
  padding-bottom: 175px;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.main-banner-content .tag {
  display: inline-block;
  background-color: #f4f8fc;
  padding: 12px 25px 12px 55px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  position: relative;
}
.main-banner-content .tag img {
  position: absolute;
  left: 25px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.main-banner-content h1 {
  font-size: 60px;
  margin-top: -200px;
  margin-bottom: 20px;
  font-weight: bold;
}
.main-banner-content p {
  margin-bottom: 0;
}
.main-banner-content .banner-btn {
  margin-top: 30px;
}

.main-banner-animation-image {
  position: relative;
  width: 100%;
  height: 100%;
}
.main-banner-animation-image div {
  position: absolute;
}
.main-banner-animation-image div:nth-child(1) {
  left: 0;
  top: 0;
}
.main-banner-animation-image div:nth-child(2) {
  left: 90px;
  top: 220px;
  z-index: 1;
}
.main-banner-animation-image div:nth-child(3) {
  left: 0;
  top: 220px;
}
.main-banner-animation-image div:nth-child(4) {
  left: 45px;
  bottom: 110px;
  z-index: 1;
}
.main-banner-animation-image div:nth-child(5) {
  left: 55px;
  bottom: 140px;
  z-index: 1;
}
.main-banner-animation-image div:nth-child(6) {
  left: 160px;
  top: 115px;
}
.main-banner-animation-image div:nth-child(7) {
  bottom: -120px;
  left: 295px;
}
.main-banner-animation-image div:nth-child(8) {
  top: 0;
  left: 280px;
}
.main-banner-animation-image div:nth-child(9) {
  z-index: -1;
  right: 0;
  top: -145px;
}
.main-banner-animation-image div:nth-child(10) {
  z-index: -1;
  right: 0;
  top: 225px;
}
.main-banner-animation-image div:nth-child(11) {
  right: 200px;
  top: 0;
}
.main-banner-animation-image div:nth-child(12) {
  right: 0;
  bottom: -35px;
}
.main-banner-animation-image div:nth-child(13) {
  right: 0;
  top: -110px;
  z-index: -1;
}
.main-banner-animation-image div:nth-child(14) {
  right: 0;
}
.main-banner-animation-image div:nth-child(15) {
  right: 300px;
  top: -120px;
  z-index: -1;
}
.main-banner-animation-image div:last-child {
  display: none;
}

.main-banner-shape-1 {
  position: absolute;
  top: 10%;
  left: 35%;
  -webkit-transform: translateY(-10%) translateX(-35%);
  transform: translateY(-10%) translateX(-35%);
}
.main-banner-shape-2 {
  position: absolute;
  bottom: 20%;
  left: 35%;
  -webkit-transform: translateY(-20%) translateX(-35%);
  transform: translateY(-20%) translateX(-35%);
}
.main-banner-shape-3 {
  position: absolute;
  bottom: 5%;
  left: 50%;
  -webkit-transform: translateY(-5%) translateX(-50%);
  transform: translateY(-5%) translateX(-50%);
}
.main-banner-shape-4 {
  position: absolute;
  bottom: 10%;
  left: 50%;
  -webkit-transform: translateY(-10%) translateX(-50%);
  transform: translateY(-10%) translateX(-50%);
}
.main-banner-shape-5 {
  position: absolute;
  top: 20%;
  left: 35%;
  -webkit-transform: translateY(-20%) translateX(-35%);
  transform: translateY(-20%) translateX(-35%);
}
.main-banner-shape-6 {
  position: absolute;
  top: 25%;
  left: 40%;
  -webkit-transform: translateY(-25%) translateX(-40%);
  transform: translateY(-25%) translateX(-40%);
}
.main-banner-shape-7 {
  position: absolute;
  top: 20%;
  right: 15%;
  -webkit-transform: translateY(-20%) translateX(-15%);
  transform: translateY(-20%) translateX(-15%);
}
.main-banner-shape-8 {
  position: absolute;
  bottom: 20%;
  left: 38%;
  -webkit-transform: translateY(-20%) translateX(-38%);
  transform: translateY(-20%) translateX(-38%);
}

@media only screen and (max-width: 767px) {
  .main-banner-area {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .main-banner-content {
    text-align: center;
  }
  .main-banner-content h1 {
    font-size: 30px;
  }
  .main-banner-content p {
    font-size: 15px;
  }
  .main-banner-animation-image {
    margin-top: 35px;
    text-align: center;
  }
  .main-banner-animation-image div {
    position: relative;
  }
  .main-banner-animation-image div:nth-child(1) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(2) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(3) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(4) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(5) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(6) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(7) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(8) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(9) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(10) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(11) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(12) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(13) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(14) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(15) {
    display: none;
  }
  .main-banner-animation-image div:last-child {
    display: block;
  }
  .main-banner-shape-1 {
    display: none;
  }
  .main-banner-shape-2 {
    display: none;
  }
  .main-banner-shape-3 {
    display: none;
  }
  .main-banner-shape-4 {
    display: none;
  }
  .main-banner-shape-5 {
    display: none;
  }
  .main-banner-shape-6 {
    display: none;
  }
  .main-banner-shape-7 {
    display: none;
  }
  .main-banner-shape-8 {
    display: none;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .main-banner-area {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .main-banner-content {
    text-align: center;
  }
  .main-banner-content h1 {
    font-size: 50px;
  }
  .main-banner-content p {
    font-size: 15px;
  }
  .main-banner-animation-image {
    margin-top: 45px;
    text-align: center;
  }
  .main-banner-animation-image div {
    position: relative;
  }
  .main-banner-animation-image div:nth-child(1) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(2) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(3) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(4) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(5) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(6) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(7) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(8) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(9) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(10) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(11) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(12) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(13) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(14) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(15) {
    display: none;
  }
  .main-banner-animation-image div:last-child {
    display: block;
  }
  .main-banner-shape-1 {
    display: none;
  }
  .main-banner-shape-2 {
    display: none;
  }
  .main-banner-shape-3 {
    display: none;
  }
  .main-banner-shape-4 {
    display: none;
  }
  .main-banner-shape-5 {
    display: none;
  }
  .main-banner-shape-6 {
    display: none;
  }
  .main-banner-shape-7 {
    display: none;
  }
  .main-banner-shape-8 {
    display: none;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .main-banner-area {
    padding-top: 0px;
    padding-bottom: 100px;
  }
  .main-banner-content h1 {
    font-size: 35px;
  }
  .main-banner-content p {
    font-size: 15px;
  }
  .main-banner-animation-image {
    text-align: center;
  }
  .main-banner-animation-image div {
    position: relative;
  }
  .main-banner-animation-image div:nth-child(1) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(2) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(3) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(4) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(5) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(6) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(7) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(8) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(9) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(10) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(11) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(12) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(13) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(14) {
    display: none;
  }
  .main-banner-animation-image div:nth-child(15) {
    display: none;
  }
  .main-banner-animation-image div:last-child {
    display: block;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .main-banner-animation-image {
    margin-top: 50px;
  }
  .main-banner-area {
    padding-top: 260px;
    padding-bottom: 105px;
  }
  .main-banner-content h1 {
    font-size: 45px;
    margin-bottom: 30px;
  }
  .main-banner-content p {
    font-size: 15px;
  }
  .main-banner-animation-image div:nth-child(4) {
    bottom: 55px;
  }
  .main-banner-animation-image div:nth-child(5) {
    bottom: 80px;
  }
  .main-banner-animation-image div:nth-child(7) {
    bottom: -170px;
  }
  .main-banner-animation-image div:nth-child(8) {
    top: -60px;
    left: 170px;
  }
  .main-banner-animation-image div:nth-child(9) {
    top: -200px;
  }
  .main-banner-animation-image div:nth-child(10) {
    top: 140px;
  }
  .main-banner-animation-image div:nth-child(11) {
    right: 190px;
    top: -146px;
  }
  .main-banner-animation-image div:nth-child(12) {
    right: 0;
    bottom: -5px;
  }
  .main-banner-animation-image div:nth-child(13) {
    top: -180px;
  }
}

@media only screen and (min-width: 1600px) {
  .main-banner-area {
    padding-top: 220px;
    padding-bottom: 220px;
  }
}
@media only screen and (max-width: 1200px) {
  .main-banner-content h1 {
    margin-top: 105px !important;
  }
}
@media only screen and (max-width: 2652px) {
  .main-banner-content h1 {
    margin-top: -70px;
  }
}

@media only screen and (max-width: 1399px) {
  .main-banner-content h1 {
    margin-top: -100px;
  }
}

@media only screen and (max-width: 990px) {
  .main-banner-content h1 {
    margin-top: 0px !important;
  }
}

        `}</style>
      </div>

      {/* services  */}
      <div className="services-area">
        <div className="container">
          {servicesData?.map((obj) => {
            if (obj.slug === dataId) {
              return (
                <>
                  <div className="section-title">
                    <h2>{obj.service_Heading}</h2>
                    <p>{obj.service_Text}</p>
                  </div>
                </>
              );
            }
          })}

          <div className="row justify-content-center">
            {servicesData
              .filter((item) => item.slug === dataId)[0]
              .mobileAppServices?.map((data) => (
                <>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-services">
                      <div className={data.colorClass}>
                        <i className={data.iconPath}></i>
                      </div>
                      <h3>
                        <Link href="/services-details">
                          <a>{data.heading}</a>
                        </Link>
                      </h3>
                      <p>{data.paragraph}</p>

                      <Link href="/services-details">
                        <a className="services-btn">
                          Read More <i className="ri-arrow-right-line"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img src="/images/services/shape-1.png" alt="image" />
        </div>
        <div className="services-shape-2">
          <img src="/images/services/shape-2.png" alt="image" />
        </div>
        <div className="services-shape-3">
          <img src="/images/services/shape-3.png" alt="image" />
        </div>
        <div className="services-shape-4">
          <img src="/images/services/shape-4.png" alt="image" />
        </div>

        <style jsx>{`
        .services-area {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.single-services {
  margin-bottom: 30px;
  padding: 35px;
  border-radius: 5px;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  border: 1px solid #eeeeee;
}
.single-services .icon {
  margin-bottom: 25px;
}
.single-services .icon i {
  display: inline-block;
  height: 80px;
  width: 80px;
  line-height: 80px;
  background-color: #e5f0ff;
  color: var(--main-color);
  text-align: center;
  font-size: 45px;
  border-radius: 5px;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}

.single-services .icon.bg-36CC72 i {
  background-color: #ebfaf1;
  color: #36cc72;
}
.single-services .icon.bg-FF414B i {
  background-color: #ffeced;
  color: #ff414b;
}
.single-services .icon.bg-FF6D3D i {
  background-color: #fff0ec;
  color: #ff6d3d;
}
.single-services .icon.bg-8932F8 i {
  background-color: #f3ebfe;
  color: #8932f8;
}
.single-services .icon.bg-FFCA40 i {
  background-color: #fffaec;
  color: #ffca40;
}
.single-services h3 {
  margin-bottom: 15px;
}
.single-services h3 a {
  color: var(--black-color);
  font-size: 25px;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.single-services p {
  margin-bottom: 15px;
  font-size: 15px;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.single-services .services-btn {
  font-size: 15px;
  font-weight: 500;
  position: relative;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.single-services .services-btn i {
  position: absolute;
  right: -20px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 15px;
}
.single-services:hover {
  background-color: var(--white-color);
  -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}
.single-services:hover .icon i {
  background-color: var(--main-color);
  color: var(--white-color);
}
.single-services:hover .icon.bg-36CC72 i {
  background-color: #36cc72;
}
.single-services:hover .icon.bg-FF414B i {
  background-color: #ff414b;
}
.single-services:hover .icon.bg-FF6D3D i {
  background-color: #ff6d3d;
}
.single-services:hover .icon.bg-8932F8 i {
  background-color: #8932f8;
}
.single-services:hover .icon.bg-FFCA40 i {
  background-color: #ffca40;
}
.single-services:hover h3 a {
  color: var(--main-color);
}
.single-services:hover .services-btn {
  color: var(--main-color);
  letter-spacing: 1px;
}

.services-shape-1 {
  position: absolute;
  top: 20%;
  left: 45%;
  -webkit-transform: translateY(-20%) translateX(-45%);
  transform: translateY(-20%) translateX(-45%);
  z-index: 1;
}
.services-shape-2 {
  position: absolute;
  top: 15%;
  left: 45%;
  -webkit-transform: translateY(-15%) translateX(-45%);
  transform: translateY(-15%) translateX(-45%);
  z-index: 1;
}
.services-shape-3 {
  position: absolute;
  top: 45%;
  left: 2%;
  -webkit-transform: translateY(-45%) translateX(-2%);
  transform: translateY(-45%) translateX(-2%);
  z-index: -1;
}
.services-shape-4 {
  position: absolute;
  top: 45%;
  right: 0%;
  -webkit-transform: translateY(-45%) translateX(-5%);
  transform: translateY(-45%) translateX(-5%);
  z-index: -1;
}
.services-shape-5 {
  position: absolute;
  bottom: 10%;
  left: 35%;
  -webkit-transform: translateY(-10%) translateX(-35%);
  transform: translateY(-10%) translateX(-35%);
  z-index: 1;
}

@media only screen and (max-width: 767px) {
  .single-services {
    padding: 30px 15px;
    text-align: center;
  }
  .single-services .icon {
    margin-bottom: 30px;
  }
  .single-services h3 a {
    font-size: 20px;
  }
  .services-shape-1 {
    display: none;
  }
  .services-shape-2 {
    display: none;
  }
  .services-shape-3 {
    display: none;
  }
  .services-shape-4 {
    display: none;
  }
  .services-shape-5 {
    display: none;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .single-services {
    padding: 30px 20px;
  }
  .single-services .icon {
    margin-bottom: 30px;
  }
  .single-services h3 a {
    font-size: 20px;
  }
  .services-shape-1 {
    display: none;
  }
  .services-shape-2 {
    display: none;
  }
  .services-shape-3 {
    display: none;
  }
  .services-shape-4 {
    display: none;
  }
  .services-shape-5 {
    display: none;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .single-services {
    padding: 35px 20px;
  }
  .single-services h3 a {
    font-size: 20px;
  }
  .services-shape-1 {
    display: none;
  }
  .services-shape-2 {
    display: none;
  }
  .services-shape-3 {
    display: none;
  }
  .services-shape-4 {
    display: none;
  }
  .services-shape-5 {
    display: none;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1399px) {
  .single-services {
    padding: 30px;
  }
  .single-services h3 a {
    font-size: 24px;
  }
}
        `}</style>
      </div>

      {/* portfolio  */}
      <div className="portfolio">
        <div className="projects-area pt-100">
          <div className="container">
            {servicesData?.map((obj) => {
              if (obj.slug === dataId) {
                return (
                  <>
                    <div className="section-title">
                      <h2>{obj.portfolio_heading}</h2>
                      <p>{obj.portfolio_text}</p>
                    </div>
                  </>
                );
              }
            })}

            <div className="row">
              {servicesData
                .filter((item) => item.slug === dataId)[0]
                .main_poortfolio?.map((obj) => (
                  <>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-projects-box">
                        <div className="projects-image">
                          <Link href="/case-study-details">
                            <a>
                              <img src={obj.portfolio_img} alt="image" />
                            </a>
                          </Link>
                        </div>

                        <div className="projects-content">
                          <h3>
                            <Link href="/case-study-details">
                              <a>{obj.portfolio_heading}</a>
                            </Link>
                          </h3>
                          <p>{obj.portfolio_text}</p>

                          <Link href="/case-study-details">
                            <a className="projects-btn">
                              Read More <i className="ri-arrow-right-line"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>

          {/* Shape Images */}
          <div className="projects-shape-1">
            <img src="/images/projects/shape-1.png" alt="image" />
          </div>
          <div className="projects-shape-2">
            <img src="/images/projects/shape-2.png" alt="image" />
          </div>
          <div className="projects-shape-3">
            <img src="/images/projects/shape-3.png" alt="image" />
          </div>
          <div className="projects-shape-4">
            <img src="/images/projects/shape-4.png" alt="image" />
          </div>
          <div className="projects-shape-5">
            <img src="/images/projects/shape-5.png" alt="image" />
          </div>
        </div>

        <style jsx>{`
        .projects-area {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.single-projects-box {
  margin-bottom: 30px;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.single-projects-box .projects-image {
  overflow: hidden;
  border: 1px solid #ecf1f9;
}
.single-projects-box .projects-image img {
  -webkit-transition: var(--transition);
  transition: var(--transition);
  display: inline-block;
}
.single-projects-box .projects-content {
  margin-top: 25px;
}
.single-projects-box .projects-content h3 {
  font-size: 25px;
  margin-bottom: 15px;
}
.single-projects-box .projects-content h3 a {
  color: var(--black-color);
}
.single-projects-box .projects-content p {
  margin-bottom: 15px;
}
.single-projects-box .projects-content .projects-btn {
  color: var(--paragraph-color);
  position: relative;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-weight: 500;
}
.single-projects-box .projects-content .projects-btn i {
  position: absolute;
  right: -20px;
  top: 58%;
  -webkit-transform: translateY(-58%);
  transform: translateY(-58%);
  font-size: 14px;
}
.single-projects-box:hover {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}
.single-projects-box:hover .projects-image img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.single-projects-box:hover .projects-content h3 a {
  color: var(--main-color);
}
.single-projects-box:hover .projects-content .projects-btn {
  letter-spacing: 1px;
  color: var(--main-color);
}

.projects-shape-1 {
  position: absolute;
  top: 25%;
  left: 0;
  -webkit-transform: translateY(-25%);
  transform: translateY(-25%);
}
.projects-shape-2 {
  position: absolute;
  top: 20%;
  left: 30%;
  -webkit-transform: translateY(-20%) translateX(-30%);
  transform: translateY(-20%) translateX(-30%);
  z-index: -1;
}
.projects-shape-3 {
  position: absolute;
  top: 10%;
  right: 15%;
  -webkit-transform: translateY(-10%) translateX(-15%);
  transform: translateY(-10%) translateX(-15%);
}
.projects-shape-4 {
  position: absolute;
  bottom: 15%;
  right: 15%;
  -webkit-transform: translateY(-15%) translateX(-15%);
  transform: translateY(-15%) translateX(-15%);
}
.projects-shape-5 {
  position: absolute;
  bottom: 10%;
  right: 12%;
  -webkit-transform: translateY(-10%) translateX(-12%);
  transform: translateY(-10%) translateX(-12%);
}

@media only screen and (max-width: 767px) {
  .projects-shape-1,
  .projects-shape-2,
  .projects-shape-3,
  .projects-shape-4,
  .projects-shape-5 {
    display: none;
  }
  .single-projects-box .projects-content h3 {
    font-size: 21px;
    margin-bottom: 15px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .projects-shape-1,
  .projects-shape-2,
  .projects-shape-3,
  .projects-shape-4,
  .projects-shape-5 {
    display: none;
  }
  .single-projects-box .projects-content h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .projects-shape-1,
  .projects-shape-2,
  .projects-shape-3,
  .projects-shape-4,
  .projects-shape-5 {
    display: none;
  }
  .single-projects-box .projects-content h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }
}
        `}</style>
      </div>

      {/* dedicated developers  */}
      <div className="dedicated_dev">
        <div className="process-area">
          <div className="container">
            <div className="process-inner-box">
              {servicesData?.map((obj) => {
                if (obj.slug === dataId) {
                  return (
                    <>
                      <div className="row text-center mb-5 pb-5 Dedicated_Dev">
                        <h1>{obj.dedicated_dev_heading}</h1>
                        <h4>{obj.dedicated_dev_text}</h4>
                      </div>
                    </>
                  );
                }
              })}

              <div className="row">
                {servicesData
                  .filter((item) => item.slug === dataId)[0]
                  .dedicated_dev_items?.map((obj) => (
                    <>
                      <div className="col-lg-3 col-6 text-center">
                        <img
                          className="dedicated_img"
                          src={obj.dedicated_dev_img}
                          alt=""
                        />
                        <p className="dedicated_title">
                          {obj.dedicated_dev_text}
                        </p>
                      </div>
                    </>
                  ))}
              </div>

              <div className="process-bar-shape">
                <img src="/images/process-bar.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
        .dedicated_img {
  height: 120px;
  width: 120px;
}
.Dedicated_Dev {
  font-weight: 600;
}
.Blue_tag {
  color: #1f69f6;
}
.Blue_tag_2 {
  color: #1f69f6;
  font-size: 26px !important;
}
.dedicated_title {
  color: black;
  font-weight: 600;
  font-size: 18px;
}
.process-inner-box {
  background-color: #f4f8fc;
  padding-bottom: 65px;
  padding-left: 50px;
  padding-right: 50px;
  position: relative;
  z-index: 1;
  border-radius: 5px;
}
.single-process {
  background-color: var(--main-color);
  padding: 35px 25px;
  max-width: 165px;
  margin: 0 auto 30px;
  text-align: center;
  position: relative;
  z-index: 1;
  -webkit-transition: var(--transition);
  transition: var(--transition);
}
.single-process::before {
  content: "";
  position: absolute;
  right: -15px;
  bottom: -15px;
  z-index: -1;
  width: 100%;
  height: 100%;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  background-color: var(--white-color);
}
.single-process::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  background-color: var(--main-color);
}
.single-process i {
  font-size: 35px;
  color: var(--white-color);
}
.single-process p {
  font-size: 18px;
  color: var(--white-color);
  margin-top: 5px;
}
.single-process.bg-36CC72::after {
  background-color: #36cc72;
}
.single-process.bg-FF414B::after {
  background-color: #ff414b;
}
.single-process.bg-FF6D3D::after {
  background-color: #ff6d3d;
}
.single-process:hover {
  -webkit-animation: bounce 1s;
  animation: bounce 1s;
}
.process-bar-shape {
  z-index: -1;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
  right: 0;
  text-align: center;
}

@media only screen and (max-width: 767px) {
  .process-inner-box {
    padding-top: 50px;
    padding-bottom: 35px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .single-process {
    padding: 20px 10px;
  }
  .single-process p {
    font-size: 14px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
}

        `}</style>
      </div>

      {/* Dev Technologies 1 */}
      <TechDevelop />

      {/* about section */}
      <div className="about_section">
        <div className="experiences-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="experiences-item">
                  <div className="experiences-content">
                    <div className="tag">
                      <img
                        src="/images/favicon.png"
                        alt="image"
                        className="tag_img"
                      />
                    </div>
                    {servicesData?.map((obj) => {
                      if (obj.slug === dataId) {
                        return (
                          <>
                            <h3>{obj.about_heading}</h3>
                          </>
                        );
                      }
                    })}
                  </div>

                  {servicesData
                    .filter((item) => item.slug === dataId)[0]
                    .about_items?.map((obj) => (
                      <>
                        <div className="experiences-inner-content">
                          <img
                            className="model_img"
                            src={obj.about_img}
                            alt="image"
                          />
                          <p>{obj.about_text}</p>
                        </div>
                      </>
                    ))}

                  <div className="experiences-btn">
                    <Link href="/about-us">
                      <a className="default-btn">
                        Schedule a Call
                        <i className="ri-arrow-right-line"></i>
                        <span></span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              {servicesData?.map((obj) => {
                if (obj.slug === dataId) {
                  return (
                    <>
                      <div className="col-lg-6">
                        <div className="experiences-image">
                          <img
                            className="pl-5"
                            src={obj.about_main_img}
                            alt="image"
                          />
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </div>

          {/* Shape Images */}
          <div
            className="experiences-shape-1"
            data-speed="0.08"
            data-revert="true"
          >
            <img src="/images/experiences/shape-1.png" alt="image" />
          </div>
          <div
            className="experiences-shape-2"
            data-speed="0.06"
            data-revert="true"
          >
            <img src="/images/experiences/shape-2.png" alt="image" />
          </div>
          <div
            className="experiences-shape-3"
            data-speed="0.08"
            data-revert="true"
          >
            <img src="/images/experiences/shape-3.png" alt="image" />
          </div>
          <div
            className="experiences-shape-4"
            data-speed="0.06"
            data-revert="true"
          >
            <img src="/images/experiences/shape-2.png" alt="image" />
          </div>
          <div
            className="experiences-shape-5"
            data-speed="0.08"
            data-revert="true"
          >
            <img src="/images/experiences/shape-3.png" alt="image" />
          </div>
          <div
            className="experiences-shape-6"
            data-speed="0.06"
            data-revert="true"
          >
            <img src="/images/experiences/shape-4.png" alt="image" />
          </div>
          <div
            className="experiences-shape-7"
            data-speed="0.08"
            data-revert="true"
          >
            <img src="/images/experiences/shape-5.png" alt="image" />
          </div>
        </div>
        <style jsx>{`
        .model_img {
  height: 25px;
  width: 100px;
  margin-top: 8px;
}
.tag_img {
  width: 33px;
}
.experiences-area {
  position: relative;
  z-index: 1;
}
.experiences-area::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 50%;
  background-color: #f4f8fc;
  left: 0;
  top: 0;
  z-index: -1;
}
.experiences-area::after {
  position: absolute;
  content: "";
  height: 100%;
  width: 50%;
  background-color: var(--white-color);
  right: 0;
  top: 0;
  z-index: -1;
}
.experiences-item {
  padding-top: 80px;
  padding-bottom: 80px;
  padding-right: 30px;
}
.experiences-item .experiences-content .tag {
  display: inline-block;
  height: 50px;
  width: 50px;
  line-height: 50px;
  background-color: var(--white-color);
  text-align: center;
  border-radius: 50px;
  -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
  box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
}
.experiences-item .experiences-content h3 {
  font-size: 40px;
  margin-top: 25px;
  margin-bottom: 20px;
  line-height: 1.4;
}
.experiences-item .experiences-inner-content {
  position: relative;
  margin-top: 30px;
  padding-left: 80px;
}
.experiences-item .experiences-inner-content img {
  position: absolute;
  left: 0;
  top: 0;
}
.experiences-item .experiences-btn {
  margin-top: 30px;
  padding-left: 85px;
}
.experiences-image {
  text-align: right;
}
.experiences-shape-1 {
  position: absolute;
  top: 8%;
  left: 40%;
  -webkit-transform: translateY(-8%) translateX(-40%);
  transform: translateY(-8%) translateX(-40%);
  z-index: -1;
}
.experiences-shape-2 {
  position: absolute;
  top: 50%;
  left: 2%;
  -webkit-transform: translateY(-50%) translateX(-2%);
  transform: translateY(-50%) translateX(-2%);
  z-index: -1;
}
.experiences-shape-3 {
  position: absolute;
  top: 52%;
  left: 5%;
  -webkit-transform: translateY(-52%) translateX(-5%);
  transform: translateY(-52%) translateX(-5%);
  z-index: -1;
}
.experiences-shape-4 {
  position: absolute;
  bottom: 10%;
  left: 35%;
  -webkit-transform: translateY(-10%) translateX(-35%);
  transform: translateY(-10%) translateX(-35%);
  z-index: -1;
}
.experiences-shape-5 {
  position: absolute;
  bottom: 8%;
  left: 36%;
  -webkit-transform: translateY(-8%) translateX(-36%);
  transform: translateY(-8%) translateX(-36%);
  z-index: -1;
}
.experiences-shape-6 {
  position: absolute;
  bottom: 10%;
  left: 48%;
  -webkit-transform: translateY(-10%) translateX(-48%);
  transform: translateY(-10%) translateX(-48%);
  z-index: 1;
}
.experiences-shape-7 {
  position: absolute;
  bottom: 2%;
  left: 48%;
  -webkit-transform: translateY(-2%) translateX(-48%);
  transform: translateY(-2%) translateX(-48%);
  z-index: 1;
}

@media only screen and (max-width: 767px) {
  .experiences-area {
    padding-bottom: 50px;
  }
  .experiences-area::after {
    background-color: #f4f8fc;
  }
  .experiences-item {
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 0;
  }
  .experiences-item .experiences-content h3 {
    font-size: 24px;
  }
  .experiences-item .experiences-content p {
    font-size: 15px;
  }
  .experiences-item .experiences-inner-content {
    padding-left: 0;
    text-align: center;
  }
  .experiences-item .experiences-inner-content img {
    position: relative;
    margin-bottom: 15px;
  }
  .experiences-item .experiences-btn {
    padding-left: 0;
    text-align: center;
  }
  .experiences-image {
    text-align: center;
  }
  .experiences-shape-1 {
    display: none;
  }
  .experiences-shape-2 {
    display: none;
  }
  .experiences-shape-3 {
    display: none;
  }
  .experiences-shape-4 {
    display: none;
  }
  .experiences-shape-5 {
    display: none;
  }
  .experiences-shape-6 {
    display: none;
  }
  .experiences-shape-7 {
    display: none;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .experiences-area {
    padding-bottom: 50px;
  }
  .experiences-area::after {
    background-color: #f4f8fc;
  }
  .experiences-item {
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 0;
  }
  .experiences-image {
    text-align: center;
  }
  .experiences-shape-1 {
    display: none;
  }
  .experiences-shape-2 {
    display: none;
  }
  .experiences-shape-3 {
    display: none;
  }
  .experiences-shape-4 {
    display: none;
  }
  .experiences-shape-5 {
    display: none;
  }
  .experiences-shape-6 {
    display: none;
  }
  .experiences-shape-7 {
    display: none;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .experiences-item {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .experiences-item .experiences-content h3 {
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 15px;
  }
  .experiences-item .experiences-content p {
    font-size: 14px;
  }
  .experiences-item .experiences-inner-content p {
    font-size: 14px;
  }
}

        `}</style>
      </div>

      {/* Faq's */}
      <div className="faq-area pt-100">
        <div className="container">
          <div className="row mb-5">
            {servicesData?.map((obj) => {
              if (obj.slug === dataId) {
                return (
                  <>
                    <div className="col-12 text-center">
                      <h2>{obj.faq_heading}</h2>
                    </div>
                  </>
                );
              }
            })}
          </div>

          {servicesData
            .filter((item) => item.slug === dataId)[0]
            .faq_items?.map((obj) => (
              <>
                <div className="faq-accordion accordion-box">
                  <Accordion allowZeroExpanded preExpanded={["a"]}>
                    <AccordionItem uuid="">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          {obj.faq_item_heading}
                        </AccordionItemButton>
                      </AccordionItemHeading>

                      <AccordionItemPanel>
                        <p>{obj.faq_item_text}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </>
            ))}

          {servicesData?.map((obj) => {
            if (obj.slug === dataId) {
              return <></>;
            }
          })}
        </div>

        {/* Shape Images */}
        <div className="faq-shape-1">
          <img src="/images/faq/shape-1.png" alt="image" />
        </div>
        <div className="faq-shape-2">
          <img src="/images/faq/shape-2.png" alt="image" />
        </div>
        <div className="faq-shape-3">
          <img src="/images/faq/shape-3.png" alt="image" />
        </div>
        <div className="faq-shape-4">
          <img src="/images/faq/shape-4.png" alt="image" />
        </div>
        {/* <div className="faq-shape-5">
          <img src="/images/faq/shape-5.png" alt="image" />
        </div> */}
      </div>

      {/* call to action  */}
      <div className="web_cta_padding">
        <CTA />
      </div>
    </>
  );
};

export default DetailServices;
