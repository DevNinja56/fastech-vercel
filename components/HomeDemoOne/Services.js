import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Services We Offer</h2>
            <p>
              With immense experience, Fastech is the leading provider of
              software, app and web development projects. Fastech can help you
              achieve hard to reach goals with the perfect blend of technology,
              expertise and innovation.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="fal fa-laptop-code"></i>
                </div>
                <h3>
                  <Link href="/web-design-development">
                    <a>Web Design & Development</a>
                  </Link>
                </h3>
                <p>
                  Our web development team creates intuitive user experiences
                  wrapped up in beautiful designs. Everything we create is
                  custom and precisely made to your specification.
                </p>

                <Link href="/web-design-development">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-36CC72">
                  <i className="fal fa-mobile-android"></i>
                </div>
                <h3>
                  <Link href="/mobile-app-development">
                    <a>Mobile App Development</a>
                  </Link>
                </h3>
                <p>
                  Our team builds nimble and elegant apps for both iOS and
                  Android platforms. Our engineers work closely with you to
                  understand your specifications and develop apps that provide
                  an intuitive end user experience.
                </p>

                <Link href="/mobile-app-development">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-FF414B">
                  <i className="fal fa-pencil-paintbrush"></i>
                </div>
                <h3>
                  <Link href="/ui-ux-design">
                    <a>UI/UX Design</a>
                  </Link>
                </h3>
                <p>
                  Step in your targeted customer’s shoes to gauge what they
                  think, feel and want by investing in professional UX design.
                  It not only boosts ROI, search rankings, customer retention
                  but is also your best bet to grow.
                </p>

                <Link href="/ui-ux-design">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-FF6D3D">
                  <i className="fal fa-bags-shopping"></i>
                </div>
                <h3>
                  <Link href="IndustryDetails/e-commerce">
                    <a>Ecommerce Development</a>
                  </Link>
                </h3>
                <p>
                  Our certified Shopify/Wordpress developers and web designers
                  work exclusively on the Shopify/Woocommerce platform to build
                  beautiful custom-tailored eCommerce storefront that boost your
                  business.
                </p>

                <Link href="IndustryDetails/e-commerce">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-8932F8">
                  <i className="ri-cloud-line"></i>
                </div>
                <h3>
                  <Link href="/Dev-Ops">
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

                <Link href="/Dev-Ops">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-FFCA40">
                  <i className="fal fa-chart-line"></i>
                </div>
                <h3>
                  <Link href="/software-quality-assurance">
                    <a>Software Quality Assurance</a>
                  </Link>
                </h3>
                <p>
                  With deep domain expertise, our engineer's design customized
                  QA frameworks and implement strategies like security and
                  performance testing to enhance usability and identify flaws.
                </p>

                <Link href="/software-quality-assurance">
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
          <img
            src="/images/services/fastech-shape-1.png"
            alt="fastech-services-image"
          />
        </div>
        <div className="services-shape-2">
          <img
            src="/images/services/fastech-shape-2.png"
            alt="fastech-services-image"
          />
        </div>
        <div className="services-shape-3">
          <img
            src="/images/services/fastech-shape-3.png"
            alt="fastech-services-image"
          />
        </div>
        <div className="services-shape-4">
          <img
            src="/images/services/fastech-shape-4.png"
            alt="fastech-services-image"
          />
        </div>
      </div>

      {/* Services Card Style */}
      <style jsx>{`
        .service_icons {
          font-size: 35px;
        }
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
          bottom: 10%;
          left: 35%;
          -webkit-transform: translateY(-10%) translateX(-35%);
          transform: translateY(-10%) translateX(-35%);
          z-index: 1;
        }

        // Responsive Style
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
    </>
  );
};

export default Services;
