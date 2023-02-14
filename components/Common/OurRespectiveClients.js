import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 500,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
};

const OurRespectiveClients = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      <div className="clients-area ">
        <div className="container">
          <div className="section-title">
            <h2>Our Respected Clients</h2>
            <p>Find out what our clients have to say about us</p>
          </div>

          {display ? (
            <OwlCarousel
              className="clients-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="clients-item">
                <p>
                  “They are very well-put-together and have the resources to get
                  stuff done no matter what the issue or topic is.”
                </p>

                <div className="title-name">
                  <h3>Anders</h3>
                  <span>Internet Money</span>
                </div>

                <div className="shape-1">
                  <img
                    src="/images/clients/ragzon-shape-4.png"
                    alt="ragzon-clients-image"
                  />
                </div>

                <div className="shape-2">
                  <img
                    src="/images/clients/ragzon-shape-5.png"
                    alt="ragzon-clients-image"
                  />
                </div>

                <div className="shape-3">
                  <img
                    src="/images/clients/ragzon-shape-6.png"
                    alt="ragzon-clients-image"
                  />
                </div>
              </div>

              <div className="clients-item">
                <p>
                  “We are pleasantly surprised by the process that Ragzon team
                  adopted to handle this complex integration. Their engineers
                  became core part of our team and took the ownership of the
                  whole project in a very professional way.”
                </p>

                <div className="title-name">
                  <h3>Frazer C.</h3>
                  <span>CEO Yourdailypa.com</span>
                </div>

                <div className="shape-1">
                  <img
                    src="/images/clients/ragzon-shape-4.png"
                    alt="ragzon-clients-image"
                  />
                </div>

                <div className="shape-2">
                  <img
                    src="/images/clients/ragzon-shape-5.png"
                    alt="ragzon-clients-image"
                  />
                </div>

                <div className="shape-3">
                  <img
                    src="/images/clients/ragzon-shape-6.png"
                    alt="ragzon-clients-image"
                  />
                </div>
              </div>

              <div className="clients-item">
                <p>
                  “Ragzon has helped us bring on more partners more quickly
                  because we’re able to augment our internal team and get work
                  done faster.”
                </p>

                <div className="title-name">
                  <h3>Atif Zahoor</h3>
                  <span>CEO Zara Construction Group USA</span>
                </div>

                <div className="shape-1">
                  <img
                    src="/images/clients/ragzon-shape-4.png"
                    alt="ragzon-clients-image"
                  />
                </div>

                <div className="shape-2">
                  <img
                    src="/images/clients/ragzon-shape-5.png"
                    alt="ragzon-clients-image"
                  />
                </div>

                <div className="shape-3">
                  <img
                    src="/images/clients/ragzon-shape-6.png"
                    alt="ragzon-clients-image"
                  />
                </div>
              </div>

              <div className="clients-item">
                <p>
                  "Ragzon developed the application on time and within the
                  budget, meeting all of the project's milestones and pleasing
                  the client. Their development skills and proactiveness
                  accelerated the timeline and delivery of the proiect.""
                </p>

                <div className="title-name">
                  <h3>Jason Martin</h3>
                  <span>ProperFans</span>
                </div>

                <div className="shape-1">
                  <img
                    src="/images/clients/ragzon-shape-4.png"
                    alt="ragzon-clients-image"
                  />
                </div>

                <div className="shape-2">
                  <img
                    src="/images/clients/ragzon-shape-5.png"
                    alt="ragzon-clients-image"
                  />
                </div>

                <div className="shape-3">
                  <img
                    src="/images/clients/ragzon-shape-6.png"
                    alt="ragzon-clients-image"
                  />
                </div>
              </div>

              <div className="clients-item">
                <p>
                  "Put in a lot of effort and are technically very well
                  positioned. I really appreciate the professionalism and
                  expertise from the IT engineers. Ragon is the best experinece
                  I've had for remote developers"
                </p>

                <div className="title-name">
                  <h3>PE</h3>
                  <span>Gamified Task Management System</span>
                </div>

                <div className="shape-1">
                  <img
                    src="/images/clients/ragzon-shape-4.png"
                    alt="ragzon-clients-image"
                  />
                </div>

                <div className="shape-2">
                  <img
                    src="/images/clients/ragzon-shape-5.png"
                    alt="ragzon-clients-image"
                  />
                </div>

                <div className="shape-3">
                  <img
                    src="/images/clients/ragzon-shape-6.png"
                    alt="ragzon-clients-image"
                  />
                </div>
              </div>
              <div className="clients-item">
                <p>
                  "I couldn't be more pleased with the Ragzon team. Their
                  engineering product is top-notch. as is their client relations
                  and account management. From the beginning, they felt like
                  members of our own team-true partners rather than vendore"
                </p>

                <div className="title-name">
                  <h3>Mark Sommers</h3>
                  <span>My Therapy Assistant</span>
                </div>

                <div className="shape-1">
                  <img
                    src="/images/clients/ragzon-shape-4.png"
                    alt="ragzon-clients-image"
                  />
                </div>

                <div className="shape-2">
                  <img
                    src="/images/clients/ragzon-shape-5.png"
                    alt="ragzon-clients-image"
                  />
                </div>

                <div className="shape-3">
                  <img
                    src="/images/clients/ragzon-shape-6.png"
                    alt="ragzon-clients-image"
                  />
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>

        {/* Shape Images */}
        <div className="clients-shape-1">
          <img
            src="/images/clients/ragzon-shape-1.png"
            alt="ragzon-clients-image"
          />
        </div>
        <div className="clients-shape-2">
          <img
            src="/images/clients/ragzon-shape-2.png"
            alt="ragzon-clients-image"
          />
        </div>
        <div className="clients-shape-3">
          <img
            src="/images/clients/ragzon-shape-3.png"
            alt="ragzon-clients-image"
          />
        </div>
      </div>

      {/* Clients Style */}
      <style jsx>{`
        .clients-area {
          background-color: #f4f8fc;
          position: relative;
          overflow: hidden;
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .clients-item {
          background-color: var(--white-color);
          padding: 45px;
          position: relative;
          z-index: 1;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          border-radius: 5px;
        }
        .clients-item img {
          display: inline-block !important;
          width: auto !important;
          border-radius: 50%;
        }
        .clients-item p {
          margin-bottom: 25px;
        }
        .clients-item .title-name h3 {
          font-size: 20px;
          margin-bottom: 0;
        }
        .clients-item .title-name span {
          display: inline-block;
          margin-top: 10px;
          color: #79798d;
          font-size: 14px;
        }
        .clients-item .star-rating {
          position: absolute;
          top: 50px;
          right: 45px;
        }
        .clients-item .star-rating i {
          font-size: 20px;
          color: #ffca40;
          margin-right: 5px;
        }
        .clients-item .star-rating i:last-child {
          margin-right: 0;
        }

        // Shape Images
        .clients-item .shape-1 {
          position: absolute;
          top: 25%;
          left: 45%;
          -webkit-transform: translateY(-25%) translateX(-45%);
          transform: translateY(-25%) translateX(-45%);
          z-index: -1;
        }
        .clients-item .shape-2 {
          position: absolute;
          bottom: 20%;
          right: 20%;
          -webkit-transform: translateY(-20%) translateX(-20%);
          transform: translateY(-20%) translateX(-20%);
          z-index: -1;
        }
        .clients-item .shape-3 {
          position: absolute;
          bottom: 16%;
          right: 16%;
          -webkit-transform: translateY(-16%) translateX(-16%);
          transform: translateY(-16%) translateX(-16%);
          z-index: -1;
        }

        // shape
        .clients-shape-1 {
          position: absolute;
          top: 22%;
          left: 20%;
          -webkit-transform: translateY(-22%) translateX(-20%);
          transform: translateY(-22%) translateX(-20%);
          z-index: -1;
        }
        .clients-shape-2 {
          position: absolute;
          top: 28%;
          left: 18%;
          -webkit-transform: translateY(-28%) translateX(-18%);
          transform: translateY(-28%) translateX(-18%);
          z-index: -1;
        }
        .clients-shape-3 {
          position: absolute;
          bottom: 15%;
          right: 12%;
          -webkit-transform: translateY(-15%) translateX(-12%);
          transform: translateY(-15%) translateX(-12%);
          z-index: -1;
          max-width: 100px;
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .clients-item {
            padding: 35px 20px;
          }
          .clients-shape-1 {
            display: none;
          }
          .clients-shape-2 {
            display: none;
          }
          .clients-shape-3 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .clients-item {
            padding: 35px 20px;
          }
          .clients-item p {
            font-size: 14px;
          }
          .clients-shape-1 {
            display: none;
          }
          .clients-shape-2 {
            display: none;
          }
          .clients-shape-3 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .clients-shape-1 {
            display: none;
          }
          .clients-shape-2 {
            display: none;
          }
          .clients-shape-3 {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default OurRespectiveClients;
