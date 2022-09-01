import React from "react";
import dynamic from "next/dynamic";
import CarouselOneData from "./CarouselOneData";
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
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
};

const CarouselOne = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className="partner-area">
        <div className="container">
          <div className="partner-box">
            <div className="section-title">
              <h2>Our Trusted Clients</h2>
            </div>
            {CarouselOneData.map((data) => {
              return (
                <>
                  {display ? (
                    <OwlCarousel
                      className="partner-slides owl-carousel owl-theme"
                      {...options}
                    >
                      <div className="single-partner">
                        <img src={data.img_1} alt="fastech-review-image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_2} alt="fastech-review-image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_3} alt="fastech-review-image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_4} alt="fastech-review-image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_5} alt="fastech-review-image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_6} alt="fastech-review-image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_7} alt="fastech-review-image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_8} alt="fastech-review-image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_9} alt="fastech-review-image" />
                      </div>

                      <div className="single-partner">
                        <img src={data.img_10} alt="fastech-review-image" />
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

        {/* Shape Images */}
        <div className="partner-shape-1">
          <img src="/images/partner/shape-1.png" alt="image" />
        </div>
        <div className="partner-shape-2">
          <img src="/images/partner/shape-2.png" alt="image" />
        </div>
      </div>

      {/* Partner Style */}
      <style jsx>{`
        .section-title {
          margin-top: -30px;
        }
        .section-title h2 {
          font-size: 35px;
        }
        .partner-area {
          position: relative;
          z-index: 1;
        }
        .partner-box {
          background-color: #f4f8fc;
          padding-top: 70px;
          padding-bottom: 70px;
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

        @media only screen and (max-width: 768px) {
          .section-title h2 {
            font-size: 25px;
          }
        }
      `}</style>
    </>
  );
};

export default CarouselOne;
