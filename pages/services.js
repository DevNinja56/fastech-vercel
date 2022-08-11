import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import CTA from "../components/Common/CTA";
import AboutUsContent from "../components/HomeDemoFour/AboutUsContent";
import FAQCOMPONENT from "../components/Faq/FaqComponent";
import ContactForm from "../components/Contact/ContactForm";
import TechDevelop from "../components/TechComponent/TechDevelop";
import RecentCaseStudiesCards from "../components/CaseStudy/RecentCaseStudiesCard";

const Services = () => {
  return (
    <>
      <PageBanner
        pageTitle="Our Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
      />

      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="icon">
                  <i className="fal fa-laptop-code"></i>
                </div>
                <h3>
                  <Link href="/services-details">
                    <a>Web Design & Development</a>
                  </Link>
                </h3>
                <p>
                  Our web development team creates intuitive user experiences
                  wrapped up in beautiful designs. Everything we create is
                  custom and precisely made to your specification.
                </p>

                <Link href="/services-details">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="icon bg-36CC72">
                  <i className="fal fa-mobile-android"></i>
                </div>
                <h3>
                  <Link href="/services-details">
                    <a>Mobile App Development</a>
                  </Link>
                </h3>
                <p>
                  Our team builds nimble and elegant apps for both iOS and
                  Android platforms. Our engineers work closely with you to
                  understand your specifications and develop apps that provide
                  an intuitive end user experience.
                </p>

                <Link href="/services-details">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="icon bg-FF414B">
                  <i className="fal fa-pencil-paintbrush"></i>
                </div>
                <h3>
                  <Link href="/services-details">
                    <a>UI/UX Design</a>
                  </Link>
                </h3>
                <p>
                  Step in your targeted customer’s shoes to gauge what they
                  think, feel and want by investing in professional UX design.
                  It not only boosts ROI, search rankings, customer retention
                  but is also your best bet to grow.
                </p>

                <Link href="/services-details">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="icon bg-FF6D3D">
                  <i className="fal fa-bags-shopping"></i>
                </div>
                <h3>
                  <Link href="/services-details">
                    <a>Ecommerce Development</a>
                  </Link>
                </h3>
                <p>
                  Our certified Shopify/Wordpress developers and web designers
                  work exclusively on the Shopify/Woocommerce platform to build
                  beautiful custom-tailored eCommerce storefront that boost your
                  business.
                </p>

                <Link href="/services-details">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="icon bg-8932F8">
                  <i className="ri-cloud-line"></i>
                </div>
                <h3>
                  <Link href="/services-details">
                    <a>DevOps</a>
                  </Link>
                </h3>
                <p>
                  Improve interoperability among the teams through
                  collaboration, speed and early defect detection to foster
                  growth of quality digital application development that will
                  not only balance the risk and reward but also fully meet your
                  expectations.
                </p>

                <Link href="/services-details">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services-item">
                <div className="icon bg-FFCA40">
                  <i className="fal fa-chart-line"></i>
                </div>
                <h3>
                  <Link href="/services-details">
                    <a>Software Quality Assurance</a>
                  </Link>
                </h3>
                <p>
                  With deep domain expertise, our engineer's design customized
                  QA frameworks and implement strategies like security and
                  performance testing to enhance usability and identify flaws.
                </p>

                <Link href="/services-details">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>
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

        {/* Services Card Style */}
        <style jsx>{`
          .services-area {
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
          .single-services-item {
            margin-bottom: 30px;
            padding: 35px;
            border-radius: 5px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
            border: 1px solid #eeeeee;
            text-align: left;
          }
          .single-services-item .icon {
            margin-bottom: 30px;
          }
          .single-services-item .icon i {
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
          .single-services-item .icon.bg-36CC72 i {
            background-color: #ebfaf1;
            color: #36cc72;
          }
          .single-services-item .icon.bg-FF414B i {
            background-color: #ffeced;
            color: #ff414b;
          }
          .single-services-item .icon.bg-FF6D3D i {
            background-color: #fff0ec;
            color: #ff6d3d;
          }
          .single-services-item .icon.bg-8932F8 i {
            background-color: #f3ebfe;
            color: #8932f8;
          }
          .single-services-item .icon.bg-FFCA40 i {
            background-color: #fffaec;
            color: #ffca40;
          }
          .single-services-item h3 {
            margin-bottom: 15px;
            font-size: 25px;
          }
          .single-services-item h3 a {
            color: var(--black-color);
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-services-item p {
            margin-bottom: 15px;
            font-size: 15px;
          }
          .single-services-item .services-btn {
            font-size: 15px;
            font-weight: 500;
            position: relative;
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-services-item .services-btn i {
            position: absolute;
            right: -20px;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            font-size: 15px;
          }
          .single-services-item:hover {
            background-color: var(--white-color);
            -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
          }
          .single-services-item:hover .icon i {
            background-color: var(--main-color);
            color: var(--white-color);
          }
          .single-services-item:hover .icon.bg-36CC72 i {
            background-color: #36cc72;
          }
          .single-services-item:hover .icon.bg-FF414B i {
            background-color: #ff414b;
          }
          .single-services-item:hover .icon.bg-FF6D3D i {
            background-color: #ff6d3d;
          }
          .single-services-item:hover .icon.bg-8932F8 i {
            background-color: #8932f8;
          }
          .single-services-item:hover .icon.bg-FFCA40 i {
            background-color: #ffca40;
          }
          .single-services-item:hover h3 a {
            color: var(--main-color);
          }
          .single-services-item:hover .services-btn {
            color: var(--main-color);
            letter-spacing: 1px;
          }

          // shape
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
            bottom: 0;
            left: 35%;
            -webkit-transform: translateY(-10%) translateX(-35%);
            transform: translateY(-10%) translateX(-35%);
            z-index: 1;
          }

          // Responsive Style
          @media only screen and (max-width: 767px) {
            .single-services-item {
              padding: 30px 20px;
            }
            .single-services-item .icon {
              margin-bottom: 25px;
            }
            .single-services-item h3 {
              font-size: 20px;
              margin-bottom: 10px;
            }
            .single-services-item p {
              margin-bottom: 12px;
            }
            .services-shape-1,
            .services-shape-2,
            .services-shape-3,
            .services-shape-4,
            .services-shape-5 {
              display: none;
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .single-services-item {
              padding: 30px 20px;
            }
            .single-services-item .icon {
              margin-bottom: 25px;
            }
            .single-services-item h3 {
              font-size: 20px;
              margin-bottom: 15px;
            }
            .services-shape-1,
            .services-shape-2,
            .services-shape-3,
            .services-shape-4,
            .services-shape-5 {
              display: none;
            }
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .single-services-item {
              padding: 35px 15px;
            }
            .single-services-item h3 {
              font-size: 20px;
            }
          }

          @media only screen and (min-width: 1200px) and (max-width: 1399px) {
            .single-services-item {
              padding: 30px;
            }
            .single-services-item h3 a {
              font-size: 24px;
            }
          }
        `}</style>
      </div>

      {/* why choose us section  */}
      <div className="choose_area pt-1">
        <div className="row m-0 pt-5 pb-4">
          <div className="col-12 text-center">
            <h2>
              Web Development and Designing <br />
              <span className="choose_subheading">Tools and Technologies</span>
            </h2>
          </div>
        </div>
        <div className="row m-0 justify-content-center pt-5 mx-5 rows_width">
          <div className="col-lg-2 col-md-4 col-6 pb-3 text-center">
            <img
              src="/images/javascript-logo.svg"
              alt=""
              className="choose_logos"
            />
            <p>Javascript</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 pb-4 text-center">
            <img src="/images/PHP.svg" alt="" className="choose_logos" />
            <p>PHP</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 pb-4 text-center">
            <img src="/images/HTML5.svg" alt="" className="choose_logos" />
            <p>HTML5</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 pb-4 text-center">
            <img src="/images/Drupal.svg" alt="" className="choose_logos" />
            <p>Drupal</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 pb-4 text-center">
            <img src="/images/Joomla.svg" alt="" className="choose_logos" />
            <p>Joomla</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 pb-4 text-center">
            <img src="/images/Wordpress.svg" alt="" className="choose_logos" />
            <p>WordPress</p>
          </div>
        </div>
        <div className="row m-0 pt-2 pb-4 mx-5 justify-content-center rows_width">
          <div className="col-lg-2 col-md-4 col-6 pb-4 text-center">
            <img src="/images/Magento.svg" alt="" className="choose_logos" />
            <p>Magento</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 pb-4 text-center">
            <img src="/images/NodeJS-1.svg" alt="" className="choose_logos" />
            <p>Node .JS</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 pb-4 text-center">
            <img src="/images/MongoDB-1.svg" alt="" className="choose_logos" />
            <p>Mongo DB</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 pb-4 text-center">
            <img src="/images/MySQL-1.svg" alt="" className="choose_logos" />
            <p>MySQL</p>
          </div>
          <div className="col-lg-2 col-md-4 col-6 pb-4 text-center">
            <img
              src="/images/Microsoft-SQL-1.svg"
              alt=""
              className="choose_logos"
            />
            <p>MS SQL</p>
          </div>
        </div>

        {/* why choose us style  */}
        <style jsx>{`
          .choose_subheading {
            color: #1f69f6;
          }
          .choose_area {
            background-color: #fafafa;
          }
          .choose_logos {
            height: 70px;
            width: 70px;
          }
          @media only screen and (max-width: 425px) {
            .rows_width {
              margin-left: 15px !important;
              margin-right: 15px !important;
            }
          }
        `}</style>
      </div>

      {/* <div className="pb-100 mt-5">
                <WorkProcess />
            </div> */}

      {/* <TechSupport /> */}

      {/* <OurRespectiveClients /> */}

      <AboutUsContent />

      <TechDevelop />

      <RecentCaseStudiesCards />

      <div className="ptb-50">
        <CTA />
      </div>

      <FAQCOMPONENT />

      <ContactForm />

      {/* <Footer /> */}
    </>
  );
};

export default Services;
