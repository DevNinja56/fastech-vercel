import React from "react";
import BenifitApi from "./benifitData";

const BenifitTech = () => {
  return (
    <>
      <div className="container benifit_wrapper">
        <div className="row m-0">
          <div className="col-12 text-center mb-5">
            <h1>
              Perks and <span className="blue_title">Benefits</span>
            </h1>
            <p>
              Fastech cares about the financial and emotional well-being of its
              employees. While working
              <br /> with Fastech, you get the following perks and benefits:
            </p>
          </div>
        </div>

        <div className="row m-0">
          {BenifitApi.map((data) => {
            return (
              <>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12  mb-4">
                  <div className="benifit_card">
                    <div className="benifit_image_wrapper">
                      <div className={data.image}></div>
                    </div>
                    <p className="benifit_card_title">{data.title}</p>
                    <p className="benifit_card_text">{data.text}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <style jsx>{`
          .benifit_wrapper {
            margin-top: 100px;
            margin-bottom: 100px;
          }
          .benifit_card {
            border: 2px solid #dee2e6;
            padding: 15px;
            border-radius: 5px;
            height: 100%;
            cursor: pointer;
          }
          .benifit_card:hover {
            border: 2px solid #1f69f6;
          }
          .benifit_image_wrapper {
            font-size: 55px;
            color: #1f69f6;
          }

          .benifit_card_title {
            font-size: 20px;
            color: black;
          }
        `}</style>
      </div>
    </>
  );
};

export default BenifitTech;
