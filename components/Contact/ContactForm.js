import React, { useState, useRef, useEffect } from "react";
import FooterCarousel from "../Common/FooterCarousel";
import CustomMultiForm from "./CustomMultiForm";

const ContactForm = () => {
  return (
    <>
      <div className="contact-area">
        <div className="container">
          <div className="contact-form">
            <div className="row left_profile_wrapper">
              <h2 className="contact_heading">
                <span className="contact_sub_heading">Talk to our</span>
                <span className="Blue_tag"> Sales Team</span>
              </h2>

              <div className="col-12 col-lg-6">
                <div className="col-12 text-start profile_sub_heading">
                  <h2>
                    Get in touch today to discuss
                    <br /> about your project
                  </h2>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="sales_profile">
                    <div className="image_wrapper">
                      <img
                        src="/images/fastech-daniyalpic1.png"
                        alt="fastech-ceo-img"
                      />
                    </div>
                    <div className="profile_data text-start">
                      <p>
                        <h5 className="ceo_profile_name">Daniyal Samim</h5>
                      </p>
                      <p className="sale_profile_status">
                        daniyal@thefastech.com
                      </p>
                      <p className="sale_profile_number">+92-3334397893</p>
                    </div>
                  </div>
                  <div className="social_icons">
                    <div className="Sale_profile_icons text-start">
                      <span>
                        <a href="mailto:daniyal@thefastech.com" target="_blank">
                          <img
                            src="/images/fastech-Icon material-email.svg"
                            className="profile_icons_images"
                            alt="fastech-social-icons"
                          />
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://www.linkedin.com/company/thefastech/"
                          target="_blank"
                        >
                          <img
                            src="/images/fastech-icons8-linkedin.svg"
                            className="profile_icons_images profile_img_left"
                            alt="fastech-social-icons"
                          />
                        </a>
                      </span>
                      <span>
                        <a href="https://wa.me/923334397893" target="_blank">
                          <img
                            src="/images/fastech-icons8-whatsapp.svg"
                            className="profile_img_left"
                            alt="fastech-social-icons"
                          />
                        </a>
                      </span>
                      <span>
                        <a
                          href="skype:live:.cid.da22d8437a6e35ca?chat"
                          target="_blank"
                        >
                          <img
                            src="/images/fastech-icons8-skype.svg"
                            className="profile_icons_images profile_img_left"
                            alt="fastech-social-icons"
                          />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-6 col-sm-3 col-lg-3 text-start">
                    <h2>100+</h2>
                    <p>Successful projects</p>
                  </div>
                  <div className="col-6 col-sm-3 col-lg-3 text-start">
                    <h2>99%</h2>
                    <p>Customer satisfaction</p>
                  </div>
                  <div className="col-6 col-sm-3 col-lg-3 text-start">
                    <h2>25+</h2>
                    <p>Our Developers</p>
                  </div>
                  <div className="col-6 col-sm-3 col-lg-3 text-start">
                    <h2>5+</h2>
                    <p>Years of experience</p>
                  </div>
                </div>

                <div className="col-12 col-lg-12 bg-light text-start mt-5 mb-4">
                  <FooterCarousel />
                </div>
              </div>
              <div className="col-12 col-lg-6 p-0">
                <CustomMultiForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .select_field {
          border: none;
          background-color: #f8f8f8;
          margin-top: 0px !important;
        }
        .select_field:focus {
          outline: none !important;
        }
        .ceo_profile_name {
          font-weight: 700 !important;
        }
        .sale_profile_status {
          font-size: 14px !important;
          color: #1f69f6 !important;
          font-weight: 500 !important;
        }
        .sale_profile_number {
          font-weight: 500 !important;
          font-size: 14px !important;
          margin-top: -17px !important;
          color: #1f69f6 !important;
        }
        .form_wrapper {
          background-color: white;
          padding-top: 30px;
          padding-bottom: 30px;
          padding-left: 15px;
          padding-right: 15px;
          border-radius: 10px;
          margin: 0px;
        }
        .contact-area {
          background-color: #f8f8f8;
          background-image: url(/images/contact-bg.svg);
          background-size: 70% 100%;
          background-repeat: no-repeat;
          background-position: 160%;
          padding-top: 70px;
          padding-bottom: 70spx;
        }
        .profile_icons_images {
          width: 36px !important;
          cursor: pointer;
        }
        .profile_img_left {
          margin-left: 20px !important;
          width: 36px !important;
        }
        .Sale_profile_icons {
          margin-top: 50px !important;
          margin-bottom: -25px !important;
        }
        .profile_data {
          margin-left: 20px;
          margin-top: 20px;
        }
        .sale_profile_status {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          color: rgb(33, 37, 41);
          margin-top: -10px !important;
        }
        .profile_sub_heading {
          margin-bottom: 25px;
        }
        .sales_profile {
          display: flex;
        }
        .contact_sub_heading {
          color: #171e29;
        }
        .contact-form {
          text-align: center;
          max-width: 1100px;
          margin: auto;
        }
        .contact_heading {
          margin-bottom: 75px;
          color: #1f69f6;
        }

        .contact-form h3 {
          font-size: 28px;
          margin-bottom: 45px;
        }

        .contact-form .form-group {
          margin-bottom: 20px;
        }

        .contact-form .form-group .form-control {
          display: block;
          width: 100%;
          height: 45px;
          outline: 0;
          background-color: #f8f8f8;
          border: 0px solid #e6edf6;
          border-radius: 5px;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-size: 15px;
        }

        .contact-form .form-group .form-control::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }

        .contact-form .form-group .form-control:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }

        .contact-form .form-group .form-control::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }

        .contact-form .form-group .form-control::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }

        .contact-form .form-group .form-control:focus {
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }

        .contact-form
          .form-group
          .form-control:focus::-webkit-input-placeholder {
          color: transparent;
        }

        .contact-form .form-group .form-control:focus:-ms-input-placeholder {
          color: transparent;
        }

        .contact-form .form-group .form-control:focus::-ms-input-placeholder {
          color: transparent;
        }

        .contact-form .form-group .form-control:focus::placeholder {
          color: transparent;
        }

        .contact-form .form-group textarea.form-control {
          height: auto;
          padding: 15px;
          line-height: 1.5rem;
        }

        .contact-form .form-group .help-block.with-errors ul {
          color: red;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: left;
        }

        .contact-form .form-group .help-block.with-errors ul li {
          font-size: 14px;
        }

        .contact-form #msgSubmit {
          margin: 0;
          font-size: 1.3rem;
        }

        .contact-form #msgSubmit.text-danger,
        .contact-form #msgSubmit.text-success {
          margin-top: 25px;
          font-size: 18px;
          font-weight: 500;
        }

        .contact-form .default-btn {
          margin-top: 10px;
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
        }
        @media only screen and (max-width: 992px) {
          .contact-area {
            background-image: none !important;
          }
        }
        @media only screen and (max-width: 576px) {
          .profile_img_left {
            margin-left: 10px !important;
          }
          .row left_profile_wrapper {
            padding-left: 100px !important;
          }
        }

        @media only screen and (max-width: 576px) {
        }
      `}</style>
    </>
  );
};

export default ContactForm;
