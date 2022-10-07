import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import AppChatbot from "../AppChatbot";

const ChatBotModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTimeout(() => setShow(true), 15000);
  }, []);


  return (
    <>
      <div className="container">
        <Button className="chat_bot_btn" variant="primary" onClick={handleShow}>
          <img
            className="chat_img_btn"
            src="/images/chatbot/fastech-images.webp"
            alt="fastech-chatbot"
          />
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body closeButton>
            <span className="modal_close" onClick={handleClose}>
              <i className="fal fa-times modal_cross"></i>
            </span>
            <AppChatbot setShow={setShow} />
          </Modal.Body>
        </Modal>
      </div>

      <style jsx>{`
      .chat_img_btn{
        height: 80px;
        width: 80px;
        border-radius: 100%;
      }
      
        .modal_paragraph{
          line-height: 25px;
        }
          .modal_close {
            cursor: pointer;
    position: absolute;
    right: 28px;
    top: 7px;
    z-index: 10;
    background-color: #fff6;
    border-radius: -10%;
    8%: ;
    width: 2;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 4px;
    padding-bottom: 0px;
    border-radius: 27px;
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
            .chat_img_btn{
              height: 63px;
              width: 63px;
              border-radius: 100%;
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

export default ChatBotModal;
