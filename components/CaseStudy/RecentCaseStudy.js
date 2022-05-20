import React from "react";
import Link from "next/link";

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
            <div className="col-lg-6">
              <div className="single-cases">
                <div className="cases-image">
                  <Link href="/portfolio">
                    <a>
                      <img src="/images/cases-study/web2.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="cases-content">
                  <div className="tags">
                    <Link href="/portfolio">
                      <a className="links_colors">App Development</a>
                    </Link>
                    <Link href="/portfolio">
                      <a className="links_colors">Web Development</a>
                    </Link>
                  </div>

                  <h3>
                    <Link href="/portfolio">
                      <a className="links_colors">Shopperhits</a>
                    </Link>
                  </h3>
                  <p>
                    It is an eCommerce store where people can buy products on
                    best-bargained prices.
                  </p>
                </div>
              </div>

              <div className="single-cases">
                <div className="cases-image">
                  <Link href="/portfolio">
                    <a>
                      <img src="/images/cases-study/mob1.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="cases-content">
                  <div className="tags">
                    <Link href="/portfolio">
                      <a className="links_colors">App Development</a>
                    </Link>
                  </div>

                  <h3>
                    <Link href="/portfolio">
                      <a className="links_colors">Camlist</a>
                    </Link>
                  </h3>
                  <p>
                    It gives you easy access to search thousands of dogs,
                    puppies, cats, kittens, rabbits, horses and other pets for
                    sale and adoption.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="single-cases">
                <div className="cases-image">
                  <Link href="/portfolio">
                    <a>
                      <img src="/images/cases-study/web1.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="cases-content">
                  <div className="tags">
                    <Link href="/portfolio">
                      <a className="links_colors">App Development</a>
                    </Link>
                    <Link href="/portfolio">
                      <a className="links_colors">Web Development</a>
                    </Link>
                  </div>

                  <h3>
                    <Link href="/portfolio">
                      <a className="links_colors">Online Education Portal</a>
                    </Link>
                  </h3>
                  <p>
                    An online education portal with study material, quizzes, and
                    mock exams for students.
                  </p>
                </div>
              </div>

              <div className="single-cases">
                <div className="cases-image">
                  <Link href="/portfolio">
                    <a>
                      <img src="/images/cases-study/mob2.jpg" alt="image" />
                    </a>
                  </Link>
                </div>

                <div className="cases-content">
                  <div className="tags">
                    <Link href="/portfolio">
                      <a className="links_colors">App Development</a>
                    </Link>
                  </div>

                  <h3>
                    <Link href="/portfolio">
                      <a className="links_colors">Postwork</a>
                    </Link>
                  </h3>
                  <p>
                    On demand ride service app is an awesome cheap rideshare cab
                    pp and service platform that connects you with dedicated and
                    independent ocal taxi drivers, cab drivers.
                  </p>
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
          <img src="/images/cases-study/shape-1.png" alt="image" />
        </div>
        <div className="cases-shape-2">
          <img src="/images/cases-study/shape-2.png" alt="image" />
        </div>
        <div className="cases-shape-3">
          <img src="/images/cases-study/shape-3.png" alt="image" />
        </div>
        <div className="cases-shape-4">
          <img src="/images/cases-study/shape-4.png" alt="image" />
        </div>
        <div className="cases-shape-5">
          <img src="/images/cases-study/shape-5.png" alt="image" />
        </div>
        <div className="cases-shape-6">
          <img src="/images/cases-study/shape-4.png" alt="image" />
        </div>
        <div className="cases-shape-7">
          <img src="/images/cases-study/shape-5.png" alt="image" />
        </div>
      </div>

      {/* Recent Case Study Style */}
      <style jsx>{`
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
        }
        .single-cases .cases-image img {
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-cases .cases-content {
          margin-top: 30px;
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
        .single-cases .cases-content h3 {
          font-size: 25px;
          margin-top: 25px;
          margin-bottom: 15px;
        }
        .single-cases .cases-content h3 a {
          position: relative;
        }
        .single-cases .cases-content h3 a::before {
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
        .single-cases:hover .cases-image img {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
        .single-cases:hover .cases-content h3 a {
          color: var(--main-color);
        }
        .single-cases:hover .cases-content h3 a::before {
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
          .single-cases .cases-content h3 {
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
          .single-cases .cases-content h3 {
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
