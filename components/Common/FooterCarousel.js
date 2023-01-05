import React from "react";
import dynamic from "next/dynamic";
import ReviewCarouselData from "../ReviewsCarousel/ReviewCarouselData";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  smartSpeed: 500,
  margin: 40,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='ri-arrow-left-line'></i>",
    "<i class='ri-arrow-right-line'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const FooterCarousel = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className="partner-box">
        {ReviewCarouselData.map((data) => {
          return (
            <>
              {display ? (
                <OwlCarousel
                  className="partner-slides owl-carousel owl-theme"
                  {...options}
                >
                  <div className="single-partner">
                    <img src={data.img_1} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_2} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_3} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_4} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_5} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_6} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_7} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_8} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_9} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_10} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_11} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_12} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_13} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_14} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_15} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_16} alt="ragzon-footer-review-img" />
                  </div>

                  <div className="single-partner">
                    <img src={data.img_17} alt="ragzon-footer-review-img" />
                  </div>
                </OwlCarousel>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>

      {/* Partner Style */}
      <style jsx>{`
        .partner-area {
          position: relative;
          z-index: 1;
          background-color: transparent;
        }
        .single-partner {
          text-align: center;
        }
        .single-partner img {
          width: auto !important;
          display: inline-block !important;
        }
        .partner-shape-1 {
          position: absolute;
          top: -20%;
          left: 15%;
          -webkit-transform: translateY(-20%) translateX(-20%);
          transform: translateY(-20%) translateX(-20%);
          z-index: -1;
        }
        .partner-shape-2 {
          position: absolute;
          bottom: -50%;
          right: 10%;
          -webkit-transform: translateY(-28%) translateX(-10%);
          transform: translateY(-28%) translateX(-10%);
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .partner-shape-1 {
            display: none;
          }
          .partner-shape-2 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .partner-shape-1 {
            display: none;
          }
          .partner-shape-2 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
        }
      `}</style>
    </>
  );
};

export default FooterCarousel;
