import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";

const SubscriptionModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      <div className="container">
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Body closeButton>
            <span className="modal_close" onClick={handleClose}>
              <i className="fal fa-times modal_cross"></i>
            </span>
            <div className="modal_body_wraper">
              <div className="modal_body">
                <div className="modal_img_wraper">
                  <img src="/images/modal/mail.png" className="modal_img" />
                </div>
                <h2 className="modal_first_heading">Not Just</h2>
                <h2 className="modal_second_heading">
                  another <sapan className="modal_span">Subscription</sapan>
                </h2>
                <p className="modal_paragraph">
                  Sign up for our weekly newsletter and learn how we solve web
                  development problems for businesses
                </p>
                <input
                  type="email"
                  className="modal_input"
                  placeholder="Your email"
                />
                <div className="banner-btn">
                  <Link href="">
                    <a className="default-btn modal_btn">
                      Submit <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      <style jsx>{`
      .modal_paragraph{
        line-height: 25px;
      }
        .modal_close {
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: 15px;
        }
        }
        .modal_body {
          text-align: center;
        }
        .modal_input {
          width: 100%;
          border-left: none;
          border-right: none;
          border-top: none;
          border-bottom: 2px solid #1f69f6;
          padding-left: 12px;
          padding-right: 12px;
          padding-bottom: 7px;
          margin-top: 15px;
        }
        .modal_input:focus {
          border-bottom: 2px solid #1f69f6;
          outline: none;
        }
        .banner-btn {
          margin-top: 20px;
        }
        .modal_btn {
          width: 100%;
          font-size: 17px;
          padding: 15px 50px 15px 50px !important;
        }

        .modal_img {
          width: 135px;
          margin-bottom: 5px;
          margin-left: 5px;
        }
        .modal_img_wraper {
          margin-top: 45px;
          margin-bottom: 35px;
        }
        .modal_span {
          color: #1f69f6;
        }
        .modal_bodys,
        h2 {
          font-size: 33px;
          font-weight: bold;
        }
        .modal_body_wraper {
          margin-left: 40px;
          margin-right: 40px;
          margin-bottom: 30px;
        }
        .modal_paragraph {
          margin-top: 25px;
          margin-bottom: 15px;
          font-size: 18px;
          line-height: 33px;
          margin: 20px auto 0;
          max-width: 400px;
        }
        .modal_cross {
          font-size: 25px;
        }

        @media screen and (max-width: 472px) {
          .modal_body_wraper {
            margin-left: 20px;
            margin-right: 20px;
          }
        }
        @media screen and (max-width: 432px){
          .modal_paragraph{
            font-size: 15px;
            line-height: 25px;
          }
          .modal_bodys,
        h2 {
          font-size: 25px;
          font-weight: bold;
        }
        }
        @media screen and (max-width: 350px){
          .modal_bodys,
        h2 {
          font-size: 22px;
          font-weight: bold;
        }
        }
      `}</style>
    </>
  );
};

export default SubscriptionModal;
