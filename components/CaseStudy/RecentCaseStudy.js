import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const RecentCaseStudy = () => {
  return (
    <>
      <div className="cases-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Recent Work Portfolio</h2>
            <p>
              We offer top of the line solutions to ensure a successful business
              for you. Check out some of our awesome projects with creative
              ideas and great design.
            </p>
          </div>

          <div className="row">
            {/* web portfolio  */}

            {/* Magic Task  */}
            <div className="col-md-4 col-sm-12">
              <div className="single-cases">
                <div className="cases-image">
                  <a href="https://magictask.io/" target="_blank">
                    <div className="Image_parent">
                      <Image
                        height={500}
                        width={500}
                        src="/images/new-portfolio/ragzon-web1.webp"
                        alt="image"
                      />
                    </div>
                  </a>
                </div>

                <div className="cases-content">
                  <h2>
                    <a
                      className="links_colors"
                      href="https://magictask.io/"
                      target="_blank"
                    >
                      Magic Task
                    </a>
                  </h2>
                  <p>
                    Advance and customized project management tool with
                    different frontend themes.
                  </p>
                  <a
                    className="projects-btn"
                    href="https://magictask.io/"
                    target="blank"
                  >
                    Read More{" "}
                    <i className="ri-arrow-right-line home_prtfolio_arrow"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* Proper Fans  */}
            <div className="col-md-4 col-sm-12">
              <div className="single-cases">
                <div className="cases-image">
                  <Link href="https://staging.properfans.com" target="_blank">
                    <a>
                      <div className="Image_parent">
                        <Image
                          height={500}
                          width={500}
                          src="/images/new-portfolio/ragzon-web8.webp"
                          alt="image"
                        />
                      </div>
                    </a>
                  </Link>
                </div>

                <div className="cases-content">
                  <h2>
                    <Link href="https://staging.properfans.com" target="_blank">
                      <a className="links_colors">ProperFans</a>
                    </Link>
                  </h2>
                  <p>
                    A subscription based dedicated social media platform for
                    premium content creators and fans.
                  </p>
                  <Link href="https://staging.properfans.com" target="blank">
                    <a className="projects-btn" target="blank">
                      Read More{" "}
                      <i className="ri-arrow-right-line home_prtfolio_arrow"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="single-cases">
                <div className="cases-image">
                  <a href="https://www.jobgeniedevs.com/" target="_blank">
                    <div className="Image_parent">
                      <Image
                        // layout="fill"
                        height={500}
                        width={500}
                        src="/images/new-portfolio/ragzon-web2.webp"
                        alt="image"
                        className="Box_images"
                      />
                    </div>
                  </a>
                </div>

                <div className="cases-content">
                  <h2>
                    <a
                      className="links_colors"
                      href="https://www.jobgeniedevs.com/"
                      target="_blank"
                    >
                      Job Genie
                    </a>
                  </h2>
                  <p>
                    A project management tool where different tasks are listed
                    and user pay subscription fees to get into the system. It is
                    similar to topcoder.com
                  </p>
                  <a
                    className="projects-btn"
                    thref="https://www.jobgeniedevs.com/"
                    target="blank"
                  >
                    Read More{" "}
                    <i className="ri-arrow-right-line home_prtfolio_arrow"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="single-cases">
                <div className="cases-image">
                  <a href="https://bitnob.com/" target="_blank">
                    <div className="Image_parent">
                      <Image
                        height={500}
                        width={500}
                        src="/images/new-portfolio/ragzon-web3.webp"
                        alt="image"
                      />
                    </div>
                  </a>
                </div>

                <div className="cases-content">
                  <h2>
                    <a
                      className="links_colors"
                      href="https://bitnob.com/"
                      target="_blank"
                    >
                      Bitnob
                    </a>
                  </h2>
                  <p>
                    Modern web interface of a safe, instant, cheap and modern
                    way to pay and get paid globally.
                  </p>
                  <a
                    className="projects-btn"
                    href="https://bitnob.com/"
                    target="blank"
                  >
                    Read More{" "}
                    <i className="ri-arrow-right-line home_prtfolio_arrow"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="single-cases">
                <div className="cases-image">
                  <a href="https://imaginovation.net/" target="_blank">
                    <div className="Image_parent">
                      <Image
                        height={500}
                        width={500}
                        src="/images/new-portfolio/ragzon-web4.webp"
                        alt="image"
                      />
                    </div>
                  </a>
                </div>

                <div className="cases-content">
                  <h2>
                    <a
                      className="links_colors"
                      href="https://imaginovation.net/"
                      target="_blank"
                    >
                      Imaginovation
                    </a>
                  </h2>
                  <p>
                    An IT Company’s services-based website according to modern
                    design standards.
                  </p>
                  <Link href="https://imaginovation.net/" target="blank">
                    <a className="projects-btn" target="blank">
                      Read More{" "}
                      <i className="ri-arrow-right-line home_prtfolio_arrow"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="single-cases">
                <div className="cases-image">
                  <Link href="https://modjen.com/password" target="_blank">
                    <a>
                      <div className="Image_parent">
                        <Image
                          height={500}
                          width={500}
                          src="/images/new-portfolio/ragzon-web5.webp"
                          alt="image"
                        />
                      </div>
                    </a>
                  </Link>
                </div>

                <div className="cases-content">
                  <h2>
                    <Link href="https://modjen.com/password" target="_blank">
                      <a className="links_colors">Ecommerece dashboard</a>
                    </Link>
                  </h2>
                  <p>
                    Ecommerce Admin Dashboard with all the features like product
                    management, category-subcategory management and attributes.
                  </p>
                  <Link href="https://modjen.com/password" target="blank">
                    <a className="projects-btn" target="blank">
                      Read More{" "}
                      <i className="ri-arrow-right-line home_prtfolio_arrow"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="cases-view-all-btn">
              <Link href="/portfolio">
                <a className="default-btn">
                  View All Projects
                  <i className="ri-briefcase-line"></i>
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="cases-shape-1">
          <image src="/images/cases-study/ragzon-shape-1.png" alt="image" />
        </div>
        <div className="cases-shape-2">
          <image src="/images/cases-study/ragzon-shape-2.png" alt="image" />
        </div>
        <div className="cases-shape-3">
          <image src="/images/cases-study/ragzon-shape-3.png" alt="image" />
        </div>
        <div className="cases-shape-4">
          <image src="/images/cases-study/ragzon-shape-4.png" alt="image" />
        </div>
        <div className="cases-shape-5">
          <image src="/images/cases-study/ragzon-shape-5.png" alt="image" />
        </div>
        <div className="cases-shape-6">
          <image src="/images/cases-study/ragzon-shape-4.png" alt="image" />
        </div>
        <div className="cases-shape-7">
          <image src="/images/cases-study/ragzon-shape-5.png" alt="image" />
        </div>
      </div>

      {/* Recent Case Study Style */}
      <style jsx>{`
        
        .projects-btn:hover {
          letter-spacing: 1px;
        }
        .home_prtfolio_arrow {
          vertical-align: middle;
        }
        .links_portfolio {
          color: #1f69f6;
          cursor: pointer;
        }
        .cases-area {
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .single-cases {
          margin-bottom: 30px;
        }
        .single-cases .cases-image {
          overflow: hidden;
          border: 1px solid #ecf1f9;
          height: 100%
          width: 100%;
          
        }
        .single-cases .cases-image image {
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }

        .single-cases .cases-content .tags a {
          color: var(--main-color);
          padding: 5px 15px;
          display: inline-block;
          background-color: #eaf0ff;
          font-size: 14px;
          font-weight: 500;
          border-radius: 5px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          margin-right: 15px;
        }
        .single-cases .cases-content .tags a:last-child {
          margin-right: 0;
        }
        .single-cases .cases-content .tags a:hover {
          background-color: var(--main-color);
          color: var(--white-color);
        }
        .single-cases .cases-content h2 {
          font-size: 30px;
          margin-top: 25px;
          margin-bottom: 15px;
        }
        .single-cases .cases-content h2 a {
          position: relative;
        }
        .single-cases .cases-content h2 a::before {
          content: "";
          position: absolute;
          width: 0%;
          height: 100%;
          left: 0;
          top: 0;
          border-bottom: 1px solid var(--main-color);
          -webkit-transition: var(--transition);
          transition: var(--transition);
          z-index: -1;
        }
        .single-cases:hover .cases-image a {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }

        .single-cases:hover .cases-content h2 a {
          color: var(--main-color);
        }
        .single-cases:hover .cases-content h2 a::before {
          width: 100%;
        }

        // Cases View Button
        .cases-view-all-btn {
          text-align: center;
          margin-top: 15px;
        }
        .cases-view-all-btn .default-btn {
          color: white;
          background-color: #1f69f6;
        }
        .cases-view-all-btn .default-btn span {
          background-color: #171e29;
        }
        .cases-view-all-btn .default-btn:hover {
          color: var(--white-color);
        }

        // shape
        .cases-shape-1 {
          position: absolute;
          top: 5%;
          right: 18%;
          -webkit-transform: translateY(-5%) translateX(-18%);
          transform: translateY(-5%) translateX(-18%);
        }
        .cases-shape-2 {
          position: absolute;
          bottom: 8%;
          right: 12%;
          -webkit-transform: translateY(-8%) translateX(-12%);
          transform: translateY(-8%) translateX(-12%);
        }
        .cases-shape-3 {
          position: absolute;
          top: 45%;
          right: 0;
          -webkit-transform: translateY(-45%);
          transform: translateY(-45%);
        }
        .cases-shape-4 {
          position: absolute;
          top: 45%;
          left: 2%;
          -webkit-transform: translateY(-45%) translateX(-2%);
          transform: translateY(-45%) translateX(-2%);
          z-index: -1;
        }
        .cases-shape-5 {
          position: absolute;
          top: 48%;
          left: 2%;
          -webkit-transform: translateY(-48%) translateX(-2%);
          transform: translateY(-48%) translateX(-2%);
          z-index: -1;
        }
        .cases-shape-6 {
          position: absolute;
          top: 45%;
          left: 50%;
          -webkit-transform: translateY(-45%) translateX(-50%);
          transform: translateY(-45%) translateX(-50%);
          z-index: -1;
          opacity: 35%;
        }
        .cases-shape-7 {
          position: absolute;
          top: 46%;
          left: 52%;
          -webkit-transform: translateY(-46%) translateX(-52%);
          transform: translateY(-46%) translateX(-52%);
          z-index: -1;
          opacity: 35%;
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .single-cases .cases-content h2 {
            font-size: 22px;
            margin-top: 20px;
            margin-bottom: 10px;
            line-height: 1.4;
          }
          .cases-shape-1 {
            display: none;
          }
          .cases-shape-2 {
            display: none;
          }
          .cases-shape-3 {
            display: none;
          }
          .cases-shape-4 {
            display: none;
          }
          .cases-shape-5 {
            display: none;
          }
          .cases-shape-6 {
            display: none;
          }
          .cases-shape-7 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .cases-shape-1 {
            display: none;
          }
          .cases-shape-2 {
            display: none;
          }
          .cases-shape-3 {
            display: none;
          }
          .cases-shape-4 {
            display: none;
          }
          .cases-shape-5 {
            display: none;
          }
          .cases-shape-6 {
            display: none;
          }
          .cases-shape-7 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .single-cases .cases-content h2 {
            font-size: 23px;
            margin-bottom: 15px;
          }
          .cases-shape-1 {
            display: none;
          }
          .cases-shape-2 {
            display: none;
          }
          .cases-shape-3 {
            display: none;
          }
          .cases-shape-4 {
            display: none;
          }
          .cases-shape-5 {
            display: none;
          }
          .cases-shape-6 {
            display: none;
          }
          .cases-shape-7 {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default RecentCaseStudy;
