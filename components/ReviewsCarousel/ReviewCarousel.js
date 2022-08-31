import React from "react";
import dynamic from "next/dynamic";
import ReviewCarouselData from "./ReviewCarouselData";
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
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
};

const ReviewCarousel = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className="partner-area">
        <div className="container">
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
                        <img src={data.img_1} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_2} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_3} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_4} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_5} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_6} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_7} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_8} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_9} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_10} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_11} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_12} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_13} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_14} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_15} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_16} alt="image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_17} alt="image" />
                      </div>
                    </OwlCarousel>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
          </div>
        </div>

        <div className="partner-shape-2">
          <img src="/images/partner/shape-2.png" alt="image" />
        </div>
      </div>

      {/* Partner Style */}
      <style jsx>{`
        .partner-area {
          position: relative;
          z-index: 1;
        }
        .partner-box {
          background-color: #fff;
          padding-top: 30px;
          padding-bottom: 30px;
          padding-left: 50px;
          padding-right: 50px;
          border-radius: 5px;
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
          .partner-box {
            padding-top: 50px;
            padding-bottom: 50px;
            padding-left: 20px;
            padding-right: 20px;
          }
          .partner-shape-1 {
            display: none;
          }
          .partner-shape-2 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .partner-box {
            padding-top: 50px;
            padding-bottom: 50px;
            padding-left: 20px;
            padding-right: 20px;
          }
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

export default ReviewCarousel;
