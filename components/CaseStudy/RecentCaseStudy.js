import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import OwlCarousel from "react-owl-carousel3";

const carouselItems = [
  {
    link: "https://magictask.io/",
    img: "/images/new-portfolio/ragzon-web1.webp",
  },
  {
    link: "https://magictask.io/",
    img: "/images/new-portfolio/ragzon-web1.webp",
  },
  {
    link: "https://magictask.io/",
    img: "/images/new-portfolio/ragzon-web1.webp",
  },
  {
    link: "https://magictask.io/",
    img: "/images/new-portfolio/ragzon-web1.webp",
  },
];

const options = {
  loop: true,
  nav: false,
  dots: true,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  rewind: true,
  slideBy: 1,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1200: {
      items: 2,
    },
  },
};

const CaseStudyCarousal = ({ itemsToMap = carouselItems }) => {
  return (
    <>
      <OwlCarousel {...options}>
        {itemsToMap.map(({ img, link }, i) => (
          <div key={i}>
            <a style={{ width: "100%" }} href={link} target={"_blank"}>
              <div className="Image_parent">
                <Image height={500} width={500} src={img} alt="image" />
              </div>
            </a>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
};

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
            <CaseStudyCarousal />
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
