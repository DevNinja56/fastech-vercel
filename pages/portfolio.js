import React from "react";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import CTA from "../components/Common/CTA";
import SubscriptionModal from "../components/subscriptionModal/modal";

const Portfolio = () => {
  return (
    <>
      <SubscriptionModal />
      <PageBanner
        pageTitle="Our Portfolio"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio"
      />

      <div className="container">
        <div className="row Tech_wrapper">
          <div className="col-12 text-center">
            <h1>Our Awesome Projects</h1>
          </div>

          {/* portfolio  */}
          <div className="portfolio">
            <div className="projects-area pt-100">
              <div className="container">
                <div className="row">
                  {/* web portfilio */}
                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://magictask.io/">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-web1.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://magictask.io/">
                            <a className="links_colors" target="blank">
                              Magic Task
                            </a>
                          </Link>
                        </h3>
                        <p>
                          Advance and customized project management tool with
                          different frontend themes.
                        </p>

                        <Link href="https://magictask.io/" target="blank">
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://www.jobgeniedevs.com/">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-web2.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://www.jobgeniedevs.com/">
                            <a className="links_colors" target="blank">
                              Job Genie
                            </a>
                          </Link>
                        </h3>
                        <p>
                          A project management tool where different tasks are
                          listed and user pay subscription fees to get into the
                          system.
                        </p>

                        <Link
                          href="https://www.jobgeniedevs.com/"
                          target="blank"
                        >
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://bitnob.com/">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-web3.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://bitnob.com/">
                            <a className="links_colors" target="blank">
                              Bitnob
                            </a>
                          </Link>
                        </h3>
                        <p>
                          Modern web interface of a safe, instant, cheap and
                          modern way to pay and get paid globally.
                        </p>

                        <Link href="https://bitnob.com/" target="blank">
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://imaginovation.net/">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-web4.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://imaginovation.net/">
                            <a className="links_colors" target="blank">
                              Imaginovation
                            </a>
                          </Link>
                        </h3>
                        <p>
                          An IT Company’s services-based website according to
                          modern design standards.
                        </p>

                        <Link href="https://imaginovation.net/" target="blank">
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://modjen.com/password">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-web5.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://modjen.com/password">
                            <a className="links_colors" target="blank">
                              Ecommerece dashboard
                            </a>
                          </Link>
                        </h3>
                        <p>
                          Ecommerce Admin Dashboard with all the features like
                          product management, category-subcategory management.
                        </p>

                        <Link href="https://modjen.com/password" target="blank">
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="#">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-web6.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="#">
                            <a className="links_colors" target="blank">
                              LinkedinExtension
                            </a>
                          </Link>
                        </h3>
                        <p>
                          A project used to scrap leads from linkedin which are
                          used to make pipelines for marketing.
                        </p>

                        <Link href="#" target="blank">
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://modjen.com/">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-web7.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://modjen.com/">
                            <a className="links_colors" target="blank">
                              Multivendor Ecommerce
                            </a>
                          </Link>
                        </h3>
                        <p>
                          A multivendor ecommerce site like Myntra.com An IT
                          Company’s services-based website.
                        </p>

                        <Link href="https://modjen.com/" target="blank">
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://staging.properfans.com">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-web8.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://staging.properfans.com">
                            <a className="links_colors" target="blank">
                              ProperFans
                            </a>
                          </Link>
                        </h3>
                        <p>
                          A subscription based dedicated social media platform
                          for premium content creators and fans.
                        </p>

                        <Link
                          href="https://staging.properfans.com"
                          target="blank"
                        >
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://wehelprx.com">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-web9.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://wehelprx.com">
                            <a className="links_colors" target="blank">
                              Medical Dashboard
                            </a>
                          </Link>
                        </h3>
                        <p>
                          Sales management system for Medical representative.
                        </p>

                        <Link href="https://wehelprx.com" target="blank">
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://shopperhits.com">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-web10.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://shopperhits.com">
                            <a className="links_colors" target="blank">
                              Shoperhits
                            </a>
                          </Link>
                        </h3>
                        <p>
                          Shopperhits is an eCommerce store where people can buy
                          products on best-bargained prices.
                        </p>

                        <Link href="https://shopperhits.com" target="blank">
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://www.beautflo.com">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-web11.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://www.beautflo.com">
                            <a className="links_colors" target="blank">
                              Beaut Flo
                            </a>
                          </Link>
                        </h3>
                        <p>
                          An makeup Ecommerce website that is an ultimate beauty
                          destination including the 600+ premium skincare.
                        </p>

                        <Link href="https://www.beautflo.com" target="blank">
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://gosnabby.com">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-web12.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://gosnabby.com">
                            <a className="links_colors" target="blank">
                              Go Snabby
                            </a>
                          </Link>
                        </h3>
                        <p>
                          It simplifies special event food sales. Manage food
                          transactions for concession stands, cafeterias.
                        </p>

                        <Link href="https://gosnabby.com" target="blank">
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* apps portfolio  */}

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://play.google.com/store/apps/details?id=com.fivesechealth">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-mob1.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://play.google.com/store/apps/details?id=com.fivesechealth">
                            <a className="links_colors" target="blank">
                              Fivesec Health
                            </a>
                          </Link>
                        </h3>
                        <p>
                          Make it easy to stay healthy with delicious and
                          nourishing plant-based recipes in your pocket.
                        </p>

                        <Link
                          href="https://play.google.com/store/apps/details?id=com.fivesechealth"
                          target="blank"
                        >
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://apps.apple.com/us/app/rentberry-apartment-rentals/id1388237443">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-mob2.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://apps.apple.com/us/app/rentberry-apartment-rentals/id1388237443">
                            <a className="links_colors" target="blank">
                              Rentberry
                            </a>
                          </Link>
                        </h3>
                        <p>
                          Rentberry facilitates and speeds up the whole range of
                          house hunting procedures: Search among thousands of
                          apartment.
                        </p>

                        <Link
                          href="https://apps.apple.com/us/app/rentberry-apartment-rentals/id1388237443"
                          target="blank"
                        >
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://play.google.com/store/apps/details?id=com.potsworkprovider">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-mob4.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://play.google.com/store/apps/details?id=com.potsworkprovider">
                            <a className="links_colors" target="blank">
                              Potswork-Request Services
                            </a>
                          </Link>
                        </h3>
                        <p>
                          Postwork: Request a ride service app is an awesome
                          cheap rideshare cab app and service platform.
                        </p>

                        <Link
                          href="https://play.google.com/store/apps/details?id=com.potsworkprovider"
                          target="blank"
                        >
                          <a className="projects-btn" target="blank">
                            Read More <i className="ri-arrow-right-line"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-projects-box">
                      <div className="projects-image">
                        <Link href="https://play.google.com/store/apps/details?id=com.camelan">
                          <a target="blank">
                            <img
                              src="/images/new-portfolio/fastech-mob3.png"
                              alt="image"
                            />
                          </a>
                        </Link>
                      </div>

                      <div className="projects-content">
                        <h3>
                          <Link href="https://play.google.com/store/apps/details?id=com.camelan">
                            <a className="links_colors" target="blank">
                              Camlist- Just Prts
                            </a>
                          </Link>
                        </h3>
                        <p>
                          Camlist gives you easy access to search thousands of
                          dogs, puppies, cats, kittens, rabbits, horses and
                          other pets.
                        </p>

                        <Link
                          href="https://play.google.com/store/apps/details?id=com.camelan"
                          target="blank"
                        >
                          <a className="projects-btn" target="blank">
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
              .links_portfolio {
                color: #1f69f6;
                cursor: pointer;
              }
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
