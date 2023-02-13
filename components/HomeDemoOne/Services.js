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
              We will help your business reach its ultimate goals and potential.
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
                    <a>Custom Software Development</a>
                  </Link>
                </h3>
                <p>
                  We provide end-to-end design. development, deployment, and
                  maintenance services according to your specific business
                  needs. experiences integrated with aesthetic designs.
                </p>

                {/* <Link href="/web-design-development">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon">
                  <i className="fal fa-laptop-code"></i>
                </div>
                <h3>
                  <Link href="/web-design-development">
                    <a>Web App Development</a>
                  </Link>
                </h3>
                <p>
                  We create power and scalable web solutions with user
                  experiences integrated with aesthetic designs.
                </p>

                {/* <Link href="/web-design-development">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link> */}
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
                  We provide stellar mobile app development services and are top
                  of the league when it comes to iOS, Android, and hybrid app
                  development.
                </p>

                {/* <Link href="/mobile-app-development">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link> */}
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
                  Get high product adoption and conversion rates with our expert
                  UI/UX design services along with an innovative look for your
                  product.
                </p>

                {/* <Link href="/ui-ux-design">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-FF6D3D">
                  <i className="fal fa-bags-shopping"></i>
                </div>
                <h3>
                  <Link href="industry/e-commerce">
                    <a>Dedicated Teams</a>
                  </Link>
                </h3>
                <p>
                  We grow your team using our development resources and
                  recruitment capabilities.
                </p>

                {/* <Link href="industry/e-commerce">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-8932F8">
                  <i className="ri-cloud-line"></i>
                </div>
                <h3>
                  <Link href="/dev-ops">
                    <a>Blockchain</a>
                  </Link>
                </h3>
                <p>
                  Become a part of a trustless and borderless distributed
                  network with InvoBlox’s real-world blockchain consultancy and
                  development services.
                </p>

                {/* <Link href="/dev-ops">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a> 
                </Link> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services">
                <div className="icon bg-FFCA40">
                  <i className="fal fa-chart-line"></i>
                </div>
                <h3>
                  <Link href="/software-quality-assurance">
                    <a>DevOps Automation Services</a>
                  </Link>
                </h3>
                <p>
                  Our professional team of DevOps ensures that operations and
                  development are running smoothly during the software
                  development lifecycle.
                </p>

                {/* <Link href="/software-quality-assurance">
                  <a className="services-btn">
                    Read More <i className="ri-arrow-right-line"></i>
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img
            src="/images/services/ragzon-shape-1.png"
            alt="ragzon-services-image"
          />
        </div>
        <div className="services-shape-2">
          <img
            src="/images/services/ragzon-shape-2.png"
            alt="ragzon-services-image"
          />
        </div>
        <div className="services-shape-3">
          <img
            src="/images/services/ragzon-shape-3.png"
            alt="ragzon-services-image"
          />
        </div>
        <div className="services-shape-4">
          <img
            src="/images/services/ragzon-shape-4.png"
            alt="ragzon-services-image"
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
