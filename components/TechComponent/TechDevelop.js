import React from "react";
import {
  TechData,
  SecondData,
  ThirdData,
  FourthdData,
  FifthdData,
  SixthdData,
  SeventhData,
  EighthData,
  NinthData,
} from "./TechData";

const TechDevelop = () => {
  return (
    <>
      <div className="container">
        <div className="tech_dev_wrapper">
          <h1 className="main_heading_step_animation">Our Technology Stacks</h1>
          <nav>
            <div
              className="nav nav-tabs custom_tabs"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link custom_items active"
                id="nav-tab-1"
                data-bs-toggle="tab"
                data-bs-target="#nav-1"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Frontend
              </button>
              <button
                className="nav-link custom_items"
                id="nav-tab-2"
                data-bs-toggle="tab"
                data-bs-target="#nav-2"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Backend
              </button>
              <button
                className="nav-link custom_items"
                id="nav-tab-3"
                data-bs-toggle="tab"
                data-bs-target="#nav-3"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Mobile
              </button>
              <button
                className="nav-link custom_items"
                id="nav-tab-4"
                data-bs-toggle="tab"
                data-bs-target="#nav-4"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="false"
              >
                Database
              </button>
              <button
                className="nav-link custom_items"
                id="nav-tab-5"
                data-bs-toggle="tab"
                data-bs-target="#nav-5"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                CMS
              </button>
              <button
                className="nav-link custom_items"
                id="nav-tab-6"
                data-bs-toggle="tab"
                data-bs-target="#nav-6"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Cloud
              </button>
              <button
                className="nav-link custom_items"
                id="nav-tab-7"
                data-bs-toggle="tab"
                data-bs-target="#nav-7"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="false"
              >
                Testing Tools
              </button>
              <button
                className="nav-link custom_items"
                id="nav-tab-8"
                data-bs-toggle="tab"
                data-bs-target="#nav-8"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Full Stacks
              </button>
              <button
                className="nav-link custom_items"
                id="nav-tab-9"
                data-bs-toggle="tab"
                data-bs-target="#nav-9"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                DevOps
              </button>
            </div>
          </nav>
          <div className="tab-content mt-5" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-1"
              role="tabpanel"
              aria-labelledby="nav-tab-1"
            >
              <div className="row m-0">
                {SecondData.map((obj) => {
                  return (
                    <>
                      <div className="col-lg-2 col-md-4 col-6 mt-3">
                        <div className="service_tabs_card">
                          <img
                            className="cards_img"
                            src={obj.image}
                            alt="img"
                          />
                        </div>
                        <div className="card_name">{obj.name}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-2"
              role="tabpanel"
              aria-labelledby="nav-tab-2"
            >
              <div className="row m-0">
                {TechData.map((obj) => {
                  return (
                    <>
                      <div className="col-lg-2 col-md-4 col-6 mt-3">
                        <div className="service_tabs_card">
                          <img
                            className="cards_img"
                            src={obj.image}
                            alt="img"
                          />
                        </div>
                        <div className="card_name">{obj.name}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-3"
              role="tabpanel"
              aria-labelledby="nav-tab-3"
            >
              <div className="row m-0">
                {ThirdData.map((obj) => {
                  return (
                    <>
                      <div className="col-lg-2 col-md-4 col-6 mt-3">
                        <div className="service_tabs_card">
                          <img
                            className="cards_img"
                            src={obj.image}
                            alt="img"
                          />
                        </div>
                        <div className="card_name">{obj.name}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-4"
              role="tabpanel"
              aria-labelledby="nav-tab-4"
            >
              <div className="row m-0">
                {FourthdData.map((obj) => {
                  return (
                    <>
                      <div className="col-lg-2 col-md-4 col-6 mt-3">
                        <div className="service_tabs_card">
                          <img
                            className="cards_img"
                            src={obj.image}
                            alt="img"
                          />
                        </div>
                        <div className="card_name">{obj.name}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-5"
              role="tabpanel"
              aria-labelledby="nav-tab-5"
            >
              <div className="row m-0">
                {FifthdData.map((obj) => {
                  return (
                    <>
                      <div className="col-lg-2 col-md-4 col-6 mt-3">
                        <div className="service_tabs_card">
                          <img
                            className="cards_img"
                            src={obj.image}
                            alt="img"
                          />
                        </div>
                        <div className="card_name">{obj.name}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-6"
              role="tabpanel"
              aria-labelledby="nav-tab-6"
            >
              <div className="row m-0">
                {SixthdData.map((obj) => {
                  return (
                    <>
                      <div className="col-lg-2 col-md-4 col-6 mt-3">
                        <div className="service_tabs_card">
                          <img
                            className="cards_img"
                            src={obj.image}
                            alt="img"
                          />
                        </div>
                        <div className="card_name">{obj.name}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-7"
              role="tabpanel"
              aria-labelledby="nav-tab-7"
            >
              <div className="row m-0">
                {SeventhData.map((obj) => {
                  return (
                    <>
                      <div className="col-lg-2 col-md-4 col-6 mt-3">
                        <div className="service_tabs_card">
                          <img
                            className="cards_img"
                            src={obj.image}
                            alt="img"
                          />
                        </div>
                        <div className="card_name">{obj.name}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-8"
              role="tabpanel"
              aria-labelledby="nav-tab-8"
            >
              <div className="row m-0">
                {EighthData.map((obj) => {
                  return (
                    <>
                      <div className="col-lg-2 col-md-4 col-6 mt-3">
                        <div className="service_tabs_card">
                          <img
                            className="cards_img"
                            src={obj.image}
                            alt="img"
                          />
                        </div>
                        <div className="card_name">{obj.name}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-9"
              role="tabpanel"
              aria-labelledby="nav-tab-9"
            >
              <div className="row m-0">
                {NinthData.map((obj) => {
                  return (
                    <>
                      <div className="col-lg-2 col-md-4 col-6 mt-3">
                        <div className="service_tabs_card">
                          <img
                            className="cards_img"
                            src={obj.image}
                            alt="img"
                          />
                        </div>
                        <div className="card_name">{obj.name}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechDevelop;
