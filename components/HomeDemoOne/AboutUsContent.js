import React from "react";
import Link from "next/link";

const AboutUsContent = () => {
  return (
    <>
      <div className="experiences-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="experiences-item">
                <div className="experiences-content">
                  <div className="tag">
                    <img
                      src="/images/fastech-favicon.png"
                      alt="fastech-image"
                      className="tag_img"
                    />
                  </div>
                  <h3>Engagement Models</h3>
                  <p>
                    We solve your biggest business pains and help you succeed.
                    Here is how we can work together
                  </p>
                </div>

                <div className="experiences-inner-content">
                  <img
                    className="exp_img"
                    src="/images/experiences/fastech-icon1.svg"
                    alt="image"
                  />
                  <p>
                    Our staff augmentation model is intended to help companies
                    find the right skills for their project.
                  </p>
                </div>

                <div className="experiences-inner-content">
                  <img
                    className="exp_img"
                    src="/images/experiences/fastech-icon2.svg"
                    alt="image"
                  />
                  <p>
                    The project-based model is designed to help you get your
                    product built from ideation to deployment by a team of
                    expert software engineering consultants.
                  </p>
                </div>

                <div className="experiences-inner-content">
                  <img
                    className="exp_img"
                    src="/images/experiences/fastech-icon3.svg"
                    alt="image"
                  />
                  <p>
                    Our team of developers is highly qualified and dedicated to
                    delivering quality development services to clients.
                  </p>
                </div>

                <div className="experiences-btn">
                  <Link href="/contact">
                    <a className="default-btn">
                      Schedule a Call
                      <i className="ri-arrow-right-line"></i>
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="experiences-image">
                <img
                  className="pl-5"
                  src="/images/fastech-Engagement-Models (1).png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div
          className="experiences-shape-1"
          data-speed="0.08"
          data-revert="true"
        >
          <img src="/images/experiences/fastech-shape-1.png" alt="image" />
        </div>
        <div
          className="experiences-shape-2"
          data-speed="0.06"
          data-revert="true"
        >
          <img src="/images/experiences/fastech-shape-2.png" alt="image" />
        </div>
        <div
          className="experiences-shape-3"
          data-speed="0.08"
          data-revert="true"
        >
          <img src="/images/experiences/fastech-shape-3.png" alt="image" />
        </div>
        <div
          className="experiences-shape-4"
          data-speed="0.06"
          data-revert="true"
        >
          <img src="/images/experiences/fastech-shape-2.png" alt="image" />
        </div>
        <div
          className="experiences-shape-5"
          data-speed="0.08"
          data-revert="true"
        >
          <img src="/images/experiences/fastech-shape-3.png" alt="image" />
        </div>
        <div
          className="experiences-shape-6"
          data-speed="0.06"
          data-revert="true"
        >
          <img src="/images/experiences/fastech-shape-4.png" alt="image" />
        </div>
        <div
          className="experiences-shape-7"
          data-speed="0.08"
          data-revert="true"
        >
          <img src="/images/experiences/fastech-shape-5.png" alt="image" />
        </div>
      </div>

      {/* About Us Content Style */}
      <style jsx>{`
        .exp_img {
          height: 60px;
          width: 60px;
        }
        .tag_img {
          width: 33px;
        }
        .experiences-area {
          position: relative;
          z-index: 1;
        }
        .experiences-area::before {
          position: absolute;
          content: "";
          height: 100%;
          width: 50%;
          background-color: #f4f8fc;
          left: 0;
          top: 0;
          z-index: -1;
        }
        .experiences-area::after {
          position: absolute;
          content: "";
          height: 100%;
          width: 50%;
          background-color: var(--white-color);
          right: 0;
          top: 0;
          z-index: -1;
        }
        .experiences-item {
          padding-top: 80px;
          padding-bottom: 80px;
          padding-right: 30px;
        }
        .experiences-item .experiences-content .tag {
          display: inline-block;
          height: 50px;
          width: 50px;
          line-height: 50px;
          background-color: var(--white-color);
          text-align: center;
          border-radius: 50px;
          -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
          box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
        }
        .experiences-item .experiences-content h3 {
          font-size: 40px;
          margin-top: 25px;
          margin-bottom: 20px;
          line-height: 1.4;
        }
        .experiences-item .experiences-inner-content {
          position: relative;
          margin-top: 30px;
          padding-left: 80px;
        }
        .experiences-item .experiences-inner-content img {
          position: absolute;
          left: 0;
          top: 0;
        }
        .experiences-item .experiences-btn {
          margin-top: 30px;
          padding-left: 85px;
        }
        .experiences-image {
          text-align: right;
        }
        .experiences-shape-1 {
          position: absolute;
          top: 8%;
          left: 40%;
          -webkit-transform: translateY(-8%) translateX(-40%);
          transform: translateY(-8%) translateX(-40%);
          z-index: -1;
        }
        .experiences-shape-2 {
          position: absolute;
          top: 50%;
          left: 2%;
          -webkit-transform: translateY(-50%) translateX(-2%);
          transform: translateY(-50%) translateX(-2%);
          z-index: -1;
        }
        .experiences-shape-3 {
          position: absolute;
          top: 52%;
          left: 5%;
          -webkit-transform: translateY(-52%) translateX(-5%);
          transform: translateY(-52%) translateX(-5%);
          z-index: -1;
        }
        .experiences-shape-4 {
          position: absolute;
          bottom: 10%;
          left: 35%;
          -webkit-transform: translateY(-10%) translateX(-35%);
          transform: translateY(-10%) translateX(-35%);
          z-index: -1;
        }
        .experiences-shape-5 {
          position: absolute;
          bottom: 8%;
          left: 36%;
          -webkit-transform: translateY(-8%) translateX(-36%);
          transform: translateY(-8%) translateX(-36%);
          z-index: -1;
        }
        .experiences-shape-6 {
          position: absolute;
          bottom: 10%;
          left: 48%;
          -webkit-transform: translateY(-10%) translateX(-48%);
          transform: translateY(-10%) translateX(-48%);
          z-index: 1;
        }
        .experiences-shape-7 {
          position: absolute;
          bottom: 2%;
          left: 48%;
          -webkit-transform: translateY(-2%) translateX(-48%);
          transform: translateY(-2%) translateX(-48%);
          z-index: 1;
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .experiences-area {
            padding-bottom: 50px;
          }
          .experiences-area::after {
            background-color: #f4f8fc;
          }
          .experiences-item {
            padding-top: 50px;
            padding-bottom: 50px;
            padding-right: 0;
          }
          .experiences-item .experiences-content h3 {
            font-size: 24px;
          }
          .experiences-item .experiences-content p {
            font-size: 15px;
          }
          .experiences-item .experiences-inner-content {
            padding-left: 0;
            text-align: center;
          }
          .experiences-item .experiences-inner-content img {
            position: relative;
            margin-bottom: 15px;
          }
          .experiences-item .experiences-btn {
            padding-left: 0;
            text-align: center;
          }
          .experiences-image {
            text-align: center;
          }
          .experiences-shape-1 {
            display: none;
          }
          .experiences-shape-2 {
            display: none;
          }
          .experiences-shape-3 {
            display: none;
          }
          .experiences-shape-4 {
            display: none;
          }
          .experiences-shape-5 {
            display: none;
          }
          .experiences-shape-6 {
            display: none;
          }
          .experiences-shape-7 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .experiences-area {
            padding-bottom: 50px;
          }
          .experiences-area::after {
            background-color: #f4f8fc;
          }
          .experiences-item {
            padding-top: 50px;
            padding-bottom: 50px;
            padding-right: 0;
          }
          .experiences-image {
            text-align: center;
          }
          .experiences-shape-1 {
            display: none;
          }
          .experiences-shape-2 {
            display: none;
          }
          .experiences-shape-3 {
            display: none;
          }
          .experiences-shape-4 {
            display: none;
          }
          .experiences-shape-5 {
            display: none;
          }
          .experiences-shape-6 {
            display: none;
          }
          .experiences-shape-7 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .experiences-item {
            padding-top: 50px;
            padding-bottom: 50px;
          }
          .experiences-item .experiences-content h3 {
            font-size: 30px;
            margin-top: 20px;
            margin-bottom: 15px;
          }
          .experiences-item .experiences-content p {
            font-size: 14px;
          }
          .experiences-item .experiences-inner-content p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
};

export default AboutUsContent;
