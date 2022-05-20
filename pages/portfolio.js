import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import CTA from "../components/Common/CTA";

const Portfolio = () => {
  return (
    <>
      <PageBanner
        pageTitle="Our Portfolio"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio"
      />

      <div className="container">
        <div className="row Tech_wrapper">
          <div className="col-12 text-center">
            <h1>
              Our <span>Awesom</span> WorkSpace
            </h1>
          </div>

          {/* portfolio  */}
          <div className="portfolio">
            <div className="projects-area pt-100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="/case-study-details">
                          <a>
                            <img
                              src="/images/projects/portfolio1.jpg"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="/case-study-details">
                            <a>Online Education Portal</a>
                          </Link>
                        </h3>
                        <p>
                          An online education portal with study material,
                          quizzes, and mock exams for students preparing for CFA
                          and FRM examinations.
                        </p>

                        <Link href="/case-study-details">
                          <a className="projects-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="/case-study-details">
                          <a>
                            <img
                              src="/images/projects/portfolio2.jpg"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="/case-study-details">
                            <a>Shopperhits</a>
                          </Link>
                        </h3>
                        <p>
                          It is an eCommerce store where people can buy products
                          on best-bargained prices.
                        </p>

                        <Link href="/case-study-details">
                          <a className="projects-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="/case-study-details">
                          <a>
                            <img
                              src="/images/projects/portfolio3.jpg"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="/case-study-details">
                            <a>Sky Store</a>
                          </Link>
                        </h3>
                        <p>
                          It is an easy way to buy or rent the biggest
                          blockbusters or all-time classic movies whenever you
                          want, any time, anywhere.
                        </p>

                        <Link href="/case-study-details">
                          <a className="projects-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="/case-study-details">
                          <a>
                            <img
                              src="/images/projects/portfolio4.jpg"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="/case-study-details">
                            <a>Upkeepr</a>
                          </Link>
                        </h3>
                        <p>
                          It is a consumer-friendly, easy-to-use app to keep
                          track of everything you need to do to keep your stuff
                          well-maintained with quick access to all your online
                          records
                        </p>

                        <Link href="/case-study-details">
                          <a className="projects-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="/case-study-details">
                          <a>
                            <img
                              src="/images/projects/portfolio5.jpg"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="/case-study-details">
                            <a>Go Snabby</a>
                          </Link>
                        </h3>
                        <p>
                          It simplifies special event food sales. Manage food
                          transactions for concession stands, cafeterias, and
                          special events in one place.
                        </p>

                        <Link href="/case-study-details">
                          <a className="projects-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="/case-study-details">
                          <a>
                            <img
                              src="/images/projects/portfolio6 (2).jpg"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="/case-study-details">
                            <a>Beautflo</a>
                          </Link>
                        </h3>
                        <p>
                          An makeup Ecommerce website that is an ultimate beauty
                          destination including the 600+ premium skincare,
                          haircare & makeup brands.
                        </p>

                        <Link href="/case-study-details">
                          <a className="projects-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="/case-study-details">
                          <a>
                            <img src="/images/projects/m1.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="/case-study-details">
                            <a>Fivesec Health</a>
                          </Link>
                        </h3>
                        <p>
                          An fitness app which make it easy to stay healthy with
                          delicious and nourishing plant-based recipes in your
                          pocket. Simple to use with guided meal plans and new
                          recipes every week.
                        </p>

                        <Link href="/case-study-details">
                          <a className="projects-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="/case-study-details">
                          <a>
                            <img src="/images/projects/m2.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="/case-study-details">
                            <a>Potswork - Request Services</a>
                          </Link>
                        </h3>
                        <p>
                          It is an eCommerce store where people can buy products
                          on best-bargained prices.
                        </p>

                        <Link href="/case-study-details">
                          <a className="projects-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="/case-study-details">
                          <a>
                            <img src="/images/projects/m3.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="/case-study-details">
                            <a>Rentberry Apartment Rentals</a>
                          </Link>
                        </h3>
                        <p>
                          It facilitates and speeds up the whole range of house
                          hunting procedures. Search among thousands of
                          apartment listings.
                        </p>

                        <Link href="/case-study-details">
                          <a className="projects-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="/case-study-details">
                          <a>
                            <img src="/images/projects/m4.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="/case-study-details">
                            <a>Camlist - Just Pets</a>
                          </Link>
                        </h3>
                        <p>
                          It gives you an easy access to search thousands of
                          dogs, puppies, cats, kittens, rabbits, horses and
                          other pets for sale and adoption.
                        </p>

                        <Link href="/case-study-details">
                          <a className="projects-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="/case-study-details">
                          <a>
                            <img src="/images/projects/m5.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="/case-study-details">
                            <a>retailo</a>
                          </Link>
                        </h3>
                        <p>
                          It is a stock ordering wholesale app for retailers,
                          where they can choose inventory from a variety of 400+
                          brands.
                        </p>

                        <Link href="/case-study-details">
                          <a className="projects-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="/case-study-details">
                          <a>
                            <img src="/images/projects/m6.jpg" alt="image" />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="/case-study-details">
                            <a>Oh Polly - Clothing & Fashion</a>
                          </Link>
                        </h3>
                        <p>
                          An ecommerce app with focus on female wears where you
                          can shop full selection of swimwear, loungewear and
                          partywear all here in one place.
                        </p>

                        <Link href="/case-study-details">
                          <a className="projects-btn">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
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
        </div>
      </div>

      <CTA />
    </>
  );
};

export default Portfolio;
