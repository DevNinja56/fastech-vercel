import React from "react";
import dynamic from "next/dynamic";
import CarouselOneData from "./CarouselOneData";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  slideSpeed: 300,
  autoplayHoverPause: false,
  margin: 40,
  autoplay: true,
  samrtSpeed: 300,
  paginationSpeed: 500,
  autoplayTimeout: 2000,
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
                      {Object.keys(data).map((key) => (
                        <div className="single-partner" key={key}>
                          <img src={data[key]} alt={data[key]} />
                        </div>
                      ))}
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
          max-width: 180px;
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
