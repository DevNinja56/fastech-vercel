import React from "react";
import Link from "next/link";

const Certification = () => {
  return (
    <>
      <div className="container">
        <div className="section-title mt-5">
          <h2 className="pt-5">CERTIFICATIONS</h2>
          <p>
            Our certifications support our claim that we provide quality
            business solutions.
          </p>
        </div>
      </div>

      <div className="certification_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 mt-3">
              <div className="certificate_box">
                <img
                  src="/images/certification/cf1.jpg"
                  className="certificate_img"
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-2 col-md-4 mt-3">
              <div className="certificate_box">
                <img
                  src="/images/certification/cf2.jpg"
                  className="certificate_img"
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-2 col-md-4 mt-3">
              <div className="certificate_box">
                <img
                  src="/images/certification/cf3.png"
                  className="certificate_img"
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-2 col-md-4 mt-3">
              <div className="certificate_box">
                <img
                  src="/images/certification/cf4.png"
                  className="certificate_img"
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-2 col-md-4 mt-3">
              <div className="certificate_box">
                <img
                  src="/images/certification/cf5.png"
                  className="certificate_img"
                  alt="img"
                />
              </div>
            </div>

            <div className="col-lg-2 col-md-4 mt-3">
              <div className="certificate_box">
                <img
                  src="/images/certification/cf6.png"
                  className="certificate_img"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Card Style */}
      <style jsx>{`
        .certification_area {
          position: relative;
          overflow: hidden;
          background-image: url(/images/certification/cfbg.png);
          background-position: 0px;
          background-size: cover;
          padding-bottom: 170px;
        }
        .certificate_box {
          border: 1px solid #ffffff73;
          box-shadow: 0.643px 0.766px 0px 0px rgb(12 34 66 / 9%),
            10.285px 12.257px 38px 0px rgb(12 34 66 / 13%);
          background-color: #fff;
          padding: 10px 10px 10px 10px;
          border-radius: 20px;
          text-align: center;
          vertical-align: center;
          height: 170px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .certificate_img {
          max-width: 100px;
          max-height: 130px;
          width: 100%;
        }
        @media screen and (max-width: 768px) {
          background-image: none !important;
        }
      `}</style>
    </>
  );
};

export default Certification;