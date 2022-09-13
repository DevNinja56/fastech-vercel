import React, { useState, useEffect, useMemo } from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import Select from "react-select";

import Swal from "sweetalert2";
import countryList from "react-select-country-list";

const optionList = [
  { value: "1", label: "+ HTML" },
  { value: "2", label: "+ CSS" },
  { value: "3", label: "+ Javascript" },
  { value: "4", label: "+ React js" },
  { value: "5", label: "+ Next js" },
  { value: "6", label: "+ Gatsby" },
  { value: "7", label: "+ Node js" },
  { value: "8", label: "+ Express js" },
  { value: "9", label: "+ Quality Assure" },
];

const Step1 = () => {
  const [colorClass, setColorClass] = useState("col_boxes");
  return (
    <>
      <div
        className={colorClass}
        onClick={() => {
          setColorClass((prev) =>
            prev === "col_boxes" ? "col_boxes2" : "col_boxes"
          );
        }}
      >
        <img
          src="/images/box-img/coffee-cup.png"
          alt="img"
          className="box_img"
        />

        <p className="box_title">One Engineer</p>
      </div>
      <style jsx>{`
        .bg1 {
          background-color: yellow;
        }
        .bg2 {
          background-color: green;
        }
        ._2pGos._hsN1w {
          background: red !important;
        }
        .App {
          font-family: sans-serif;
          text-align: center;
          background-color: #ffffff;
          padding: 0px 0px;
          border-radius: 10px;
        }
        .col_boxes {
          border: 1px solid transparent;
          background-color: #efecec;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes2 {
          border: 1px solid #494a60;
          background-color: #dfeafb;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes:hover {
          background-color: #dfeafb;
          cursor: pointer;
        }
        .box_img {
          height: 12vh;
        }
        .box_title {
          font-weight: 700;
          margin-top: 12px;
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
        .contact_heading {
          color: #1f69f6;
        }
        .contact_sub_heading {
          color: #171e29;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group .form-control {
          display: block;
          border: 1px solid #aaaaaa;
          width: 100%;
          height: 60px;
          outline: 0;
          border-radius: 5px;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-size: 15px;
          color: #494a60;
        }
        .form-group .form-control::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:focus {
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .form-group .form-control:focus::-webkit-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus:-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::placeholder {
          color: transparent;
        }
        .form-group textarea.form-control {
          height: auto;
          padding: 15px;
          line-height: 1.5rem;
        }
        .form-group .help-block.with-errors ul {
          color: red;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: left;
        }
        .form-group .help-block.with-errors ul li {
          font-size: 14px;
        }
        .default-btn {
          margin-top: 10px;
        }
        .main_select {
          margin-top: 30px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .dropdown-container {
          max-width: 1000px;
        }
        .main_select > div {
          width: 90%;
        }
      `}</style>
    </>
  );
};
const Step2 = () => {
  const [colorClass, setColorClass] = useState("col_boxes");
  return (
    <>
      <div
        className={colorClass}
        onClick={() => {
          setColorClass((prev) =>
            prev === "col_boxes" ? "col_boxes2" : "col_boxes"
          );
        }}
      >
        <img src="/images/box-img/teamwork.png" alt="img" className="box_img" />

        <p className="box_title">A small team</p>
      </div>
      <style jsx>{`
        .bg1 {
          background-color: yellow;
        }
        .bg2 {
          background-color: green;
        }
        ._2pGos._hsN1w {
          background: red !important;
        }
        .App {
          font-family: sans-serif;
          text-align: center;
          background-color: #ffffff;
          padding: 0px 0px;
          border-radius: 10px;
        }
        .col_boxes {
          border: 1px solid transparent;
          background-color: #efecec;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes2 {
          border: 1px solid #494a60;
          background-color: #dfeafb;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes:hover {
          background-color: #dfeafb;
          cursor: pointer;
        }
        .box_img {
          height: 12vh;
        }
        .box_title {
          font-weight: 700;
          margin-top: 12px;
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
        .contact_heading {
          color: #1f69f6;
        }
        .contact_sub_heading {
          color: #171e29;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group .form-control {
          display: block;
          border: 1px solid #aaaaaa;
          width: 100%;
          height: 60px;
          outline: 0;
          border-radius: 5px;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-size: 15px;
          color: #494a60;
        }
        .form-group .form-control::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:focus {
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .form-group .form-control:focus::-webkit-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus:-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::placeholder {
          color: transparent;
        }
        .form-group textarea.form-control {
          height: auto;
          padding: 15px;
          line-height: 1.5rem;
        }
        .form-group .help-block.with-errors ul {
          color: red;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: left;
        }
        .form-group .help-block.with-errors ul li {
          font-size: 14px;
        }
        .default-btn {
          margin-top: 10px;
        }
        .main_select {
          margin-top: 30px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .dropdown-container {
          max-width: 1000px;
        }
        .main_select > div {
          width: 90%;
        }
      `}</style>
    </>
  );
};
const Step3 = () => {
  const [colorClass, setColorClass] = useState("col_boxes");
  return (
    <>
      <div
        className={colorClass}
        onClick={() => {
          setColorClass((prev) =>
            prev === "col_boxes" ? "col_boxes2" : "col_boxes"
          );
        }}
      >
        <img src="/images/box-img/meeting.png" alt="img" className="box_img" />

        <p className="box_title">A large team</p>
      </div>
      <style jsx>{`
        .bg1 {
          background-color: yellow;
        }
        .bg2 {
          background-color: green;
        }
        ._2pGos._hsN1w {
          background: red !important;
        }
        .App {
          font-family: sans-serif;
          text-align: center;
          background-color: #ffffff;
          padding: 0px 0px;
          border-radius: 10px;
        }
        .col_boxes {
          border: 1px solid transparent;
          background-color: #efecec;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes2 {
          border: 1px solid #494a60;
          background-color: #dfeafb;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes:hover {
          background-color: #dfeafb;
          cursor: pointer;
        }
        .box_img {
          height: 12vh;
        }
        .box_title {
          font-weight: 700;
          margin-top: 12px;
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
        .contact_heading {
          color: #1f69f6;
        }
        .contact_sub_heading {
          color: #171e29;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group .form-control {
          display: block;
          border: 1px solid #aaaaaa;
          width: 100%;
          height: 60px;
          outline: 0;
          border-radius: 5px;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-size: 15px;
          color: #494a60;
        }
        .form-group .form-control::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:focus {
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .form-group .form-control:focus::-webkit-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus:-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::placeholder {
          color: transparent;
        }
        .form-group textarea.form-control {
          height: auto;
          padding: 15px;
          line-height: 1.5rem;
        }
        .form-group .help-block.with-errors ul {
          color: red;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: left;
        }
        .form-group .help-block.with-errors ul li {
          font-size: 14px;
        }
        .default-btn {
          margin-top: 10px;
        }
        .main_select {
          margin-top: 30px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .dropdown-container {
          max-width: 1000px;
        }
        .main_select > div {
          width: 90%;
        }
      `}</style>
    </>
  );
};
const Step4 = () => {
  const [colorClass, setColorClass] = useState("col_boxes");
  return (
    <>
      <div
        className={colorClass}
        onClick={() => {
          setColorClass((prev) =>
            prev === "col_boxes" ? "col_boxes2" : "col_boxes"
          );
        }}
      >
        <img src="/images/box-img/doubtful.png" alt="img" className="box_img" />

        <p className="box_title">I am not sure</p>
      </div>
      <style jsx>{`
        .bg1 {
          background-color: yellow;
        }
        .bg2 {
          background-color: green;
        }
        ._2pGos._hsN1w {
          background: red !important;
        }
        .App {
          font-family: sans-serif;
          text-align: center;
          background-color: #ffffff;
          padding: 0px 0px;
          border-radius: 10px;
        }
        .col_boxes {
          border: 1px solid transparent;
          background-color: #efecec;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes2 {
          border: 1px solid #494a60;
          background-color: #dfeafb;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes:hover {
          background-color: #dfeafb;
          cursor: pointer;
        }
        .box_img {
          height: 12vh;
        }
        .box_title {
          font-weight: 700;
          margin-top: 12px;
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
        .contact_heading {
          color: #1f69f6;
        }
        .contact_sub_heading {
          color: #171e29;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group .form-control {
          display: block;
          border: 1px solid #aaaaaa;
          width: 100%;
          height: 60px;
          outline: 0;
          border-radius: 5px;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-size: 15px;
          color: #494a60;
        }
        .form-group .form-control::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:focus {
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .form-group .form-control:focus::-webkit-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus:-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::placeholder {
          color: transparent;
        }
        .form-group textarea.form-control {
          height: auto;
          padding: 15px;
          line-height: 1.5rem;
        }
        .form-group .help-block.with-errors ul {
          color: red;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: left;
        }
        .form-group .help-block.with-errors ul li {
          font-size: 14px;
        }
        .default-btn {
          margin-top: 10px;
        }
        .main_select {
          margin-top: 30px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .dropdown-container {
          max-width: 1000px;
        }
        .main_select > div {
          width: 90%;
        }
      `}</style>
    </>
  );
};
const Step5 = () => {
  const [colorClass, setColorClass] = useState("col_boxes");
  return (
    <>
      <div
        className={colorClass}
        onClick={() => {
          setColorClass((prev) =>
            prev === "col_boxes" ? "col_boxes2" : "col_boxes"
          );
        }}
      >
        <img src="/images/box-img/calendar.png" alt="img" className="box_img" />

        <p className="box_title">Immediately</p>
      </div>
      <style jsx>{`
        .bg1 {
          background-color: yellow;
        }
        .bg2 {
          background-color: green;
        }
        ._2pGos._hsN1w {
          background: red !important;
        }
        .App {
          font-family: sans-serif;
          text-align: center;
          background-color: #ffffff;
          padding: 0px 0px;
          border-radius: 10px;
        }
        .col_boxes {
          border: 1px solid transparent;
          background-color: #efecec;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes2 {
          border: 1px solid #494a60;
          background-color: #dfeafb;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes:hover {
          background-color: #dfeafb;
          cursor: pointer;
        }
        .box_img {
          height: 12vh;
        }
        .box_title {
          font-weight: 700;
          margin-top: 12px;
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
        .contact_heading {
          color: #1f69f6;
        }
        .contact_sub_heading {
          color: #171e29;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group .form-control {
          display: block;
          border: 1px solid #aaaaaa;
          width: 100%;
          height: 60px;
          outline: 0;
          border-radius: 5px;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-size: 15px;
          color: #494a60;
        }
        .form-group .form-control::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:focus {
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .form-group .form-control:focus::-webkit-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus:-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::placeholder {
          color: transparent;
        }
        .form-group textarea.form-control {
          height: auto;
          padding: 15px;
          line-height: 1.5rem;
        }
        .form-group .help-block.with-errors ul {
          color: red;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: left;
        }
        .form-group .help-block.with-errors ul li {
          font-size: 14px;
        }
        .default-btn {
          margin-top: 10px;
        }
        .main_select {
          margin-top: 30px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .dropdown-container {
          max-width: 1000px;
        }
        .main_select > div {
          width: 90%;
        }
      `}</style>
    </>
  );
};
const Step6 = () => {
  const [colorClass, setColorClass] = useState("col_boxes");
  return (
    <>
      <div
        className={colorClass}
        onClick={() => {
          setColorClass((prev) =>
            prev === "col_boxes" ? "col_boxes2" : "col_boxes"
          );
        }}
      >
        <img
          src="/images/box-img/calendar (1).png"
          alt="img"
          className="box_img"
        />

        <p className="box_title">In 1 to 2 weeks</p>
      </div>

      <style jsx>{`
        .bg1 {
          background-color: yellow;
        }
        .bg2 {
          background-color: green;
        }
        ._2pGos._hsN1w {
          background: red !important;
        }
        .App {
          font-family: sans-serif;
          text-align: center;
          background-color: #ffffff;
          padding: 0px 0px;
          border-radius: 10px;
        }
        .col_boxes {
          border: 1px solid transparent;
          background-color: #efecec;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes2 {
          border: 1px solid #494a60;
          background-color: #dfeafb;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes:hover {
          background-color: #dfeafb;
          cursor: pointer;
        }
        .box_img {
          height: 12vh;
        }
        .box_title {
          font-weight: 700;
          margin-top: 12px;
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
        .contact_heading {
          color: #1f69f6;
        }
        .contact_sub_heading {
          color: #171e29;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group .form-control {
          display: block;
          border: 1px solid #aaaaaa;
          width: 100%;
          height: 60px;
          outline: 0;
          border-radius: 5px;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-size: 15px;
          color: #494a60;
        }
        .form-group .form-control::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:focus {
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .form-group .form-control:focus::-webkit-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus:-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::placeholder {
          color: transparent;
        }
        .form-group textarea.form-control {
          height: auto;
          padding: 15px;
          line-height: 1.5rem;
        }
        .form-group .help-block.with-errors ul {
          color: red;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: left;
        }
        .form-group .help-block.with-errors ul li {
          font-size: 14px;
        }
        .default-btn {
          margin-top: 10px;
        }
        .main_select {
          margin-top: 30px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .dropdown-container {
          max-width: 1000px;
        }
        .main_select > div {
          width: 90%;
        }
      `}</style>
    </>
  );
};
const Step7 = () => {
  const [colorClass, setColorClass] = useState("col_boxes");
  return (
    <>
      <div
        className={colorClass}
        onClick={() => {
          setColorClass((prev) =>
            prev === "col_boxes" ? "col_boxes2" : "col_boxes"
          );
        }}
      >
        <img
          src="/images/box-img/hourglass.png"
          alt="img"
          className="box_img"
        />

        <p className="box_title">2 weeks from now</p>
      </div>
      <style jsx>{`
        .bg1 {
          background-color: yellow;
        }
        .bg2 {
          background-color: green;
        }
        ._2pGos._hsN1w {
          background: red !important;
        }
        .App {
          font-family: sans-serif;
          text-align: center;
          background-color: #ffffff;
          padding: 0px 0px;
          border-radius: 10px;
        }
        .col_boxes {
          border: 1px solid transparent;
          background-color: #efecec;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes2 {
          border: 1px solid #494a60;
          background-color: #dfeafb;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes:hover {
          background-color: #dfeafb;
          cursor: pointer;
        }
        .box_img {
          height: 12vh;
        }
        .box_title {
          font-weight: 700;
          margin-top: 12px;
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
        .contact_heading {
          color: #1f69f6;
        }
        .contact_sub_heading {
          color: #171e29;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group .form-control {
          display: block;
          border: 1px solid #aaaaaa;
          width: 100%;
          height: 60px;
          outline: 0;
          border-radius: 5px;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-size: 15px;
          color: #494a60;
        }
        .form-group .form-control::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:focus {
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .form-group .form-control:focus::-webkit-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus:-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::placeholder {
          color: transparent;
        }
        .form-group textarea.form-control {
          height: auto;
          padding: 15px;
          line-height: 1.5rem;
        }
        .form-group .help-block.with-errors ul {
          color: red;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: left;
        }
        .form-group .help-block.with-errors ul li {
          font-size: 14px;
        }
        .default-btn {
          margin-top: 10px;
        }
        .main_select {
          margin-top: 30px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .dropdown-container {
          max-width: 1000px;
        }
        .main_select > div {
          width: 90%;
        }
      `}</style>
    </>
  );
};
const Step8 = () => {
  const [colorClass, setColorClass] = useState("col_boxes");
  return (
    <>
      <div
        className={colorClass}
        onClick={() => {
          setColorClass((prev) =>
            prev === "col_boxes" ? "col_boxes2" : "col_boxes"
          );
        }}
      >
        <img src="/images/box-img/doubtful.png" alt="img" className="box_img" />

        <p className="box_title">I am not sure</p>
      </div>
      <style jsx>{`
        .bg1 {
          background-color: yellow;
        }
        .bg2 {
          background-color: green;
        }
        ._2pGos._hsN1w {
          background: red !important;
        }
        .App {
          font-family: sans-serif;
          text-align: center;
          background-color: #ffffff;
          padding: 0px 0px;
          border-radius: 10px;
        }
        .col_boxes {
          border: 1px solid transparent;
          background-color: #efecec;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes2 {
          border: 1px solid #494a60;
          background-color: #dfeafb;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes:hover {
          background-color: #dfeafb;
          cursor: pointer;
        }
        .box_img {
          height: 12vh;
        }
        .box_title {
          font-weight: 700;
          margin-top: 12px;
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
        .contact_heading {
          color: #1f69f6;
        }
        .contact_sub_heading {
          color: #171e29;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group .form-control {
          display: block;
          border: 1px solid #aaaaaa;
          width: 100%;
          height: 60px;
          outline: 0;
          border-radius: 5px;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-size: 15px;
          color: #494a60;
        }
        .form-group .form-control::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:focus {
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .form-group .form-control:focus::-webkit-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus:-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::placeholder {
          color: transparent;
        }
        .form-group textarea.form-control {
          height: auto;
          padding: 15px;
          line-height: 1.5rem;
        }
        .form-group .help-block.with-errors ul {
          color: red;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: left;
        }
        .form-group .help-block.with-errors ul li {
          font-size: 14px;
        }
        .default-btn {
          margin-top: 10px;
        }
        .main_select {
          margin-top: 30px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .dropdown-container {
          max-width: 1000px;
        }
        .main_select > div {
          width: 90%;
        }
      `}</style>
    </>
  );
};
const Step9 = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);

    console.log(value);
  };
  return (
    <>
      <div className="form-group">
        <Select
          options={options}
          value={value}
          onChange={changeHandler}
          placeholder="Select Country"
        />
      </div>
    </>
  );
};

const CustomMultiForm = () => {
  const [btnOne, setBtnOne] = useState("");
  const [btnTwo, setBtnTwo] = useState("");

  const [selectedOptions, setSelectedOptions] = useState();
  const [firstStep, setFirstStep] = useState();
  const [secondStep, setSecondStep] = useState();
  const [thirdStep, setThirdStep] = useState({
    email: "",
    name: "",
    contactName: "",
    country: "",
  });

  // const handleGet = () => {
  //   setBtnOne()
  // }

  // console.log("first button =>", btnOne);
  // console.log("second button =>", btnTwo);

  // other functions
  function handleSelect(data) {
    setSelectedOptions(data);
  }

  const inputsData = (e) => {
    setThirdStep((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const formData = { selectedOptions, firstStep, secondStep, thirdStep };

  // console.log("form data ===>", formData);
  // console.log("first ==>", firstStep);
  // console.log("second ==>", secondStep);

  const handleSubmit = () => {
    Swal.fire("Congrats!", "Your records submitted successfuly!", "success");

    console.log("Sending");
    var apiData = formData;
    // console.log("Api Data ==>", apiData);
    fetch("/api/mail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");

        // myRef.current.reset();
      } else {
        console.log("succeeded failed");
      }
    });
  };

  return (
    <>
      <div className="App">
        {/* <>
          <p>what is that</p>
          <button className="btn" onClick={handleGet()} value={btnOne}>
            first
          </button>
          <button className="btn" onClick={} value={btnTwo}>
            second
          </button>
        </> */}
        <StepProgressBar
          startingStep={0}
          previousBtnName="previous"
          onSubmit={(e) => {
            handleSubmit();
          }}
          steps={[
            {
              label: "",
              name: "Start",
              content: (
                <>
                  <h5>Explore and get your dream talent right now!</h5>

                  <div className="row">
                    <div className="col-12 ">
                      <div className="main_select">
                        <div className="">
                          <Select
                            options={optionList}
                            placeholder="Select Desire area of expertise"
                            value={selectedOptions}
                            onChange={handleSelect}
                            isSearchable={true}
                            isMulti
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ),
            },
            {
              label: "",
              name: "Intermediate",
              content: (
                <>
                  <h5>How many team members do you require?</h5>

                  <div className="row">
                    <div
                      className="col-sm-12 col-md-6"
                      onClick={() => {
                        setFirstStep("One Engineer");
                      }}
                    >
                      <Step1 />
                    </div>

                    <div
                      className="col-sm-12 col-md-6"
                      onClick={() => {
                        setFirstStep("Small Team");
                      }}
                    >
                      <Step2 />
                    </div>

                    <div
                      className="col-sm-12 col-md-6"
                      onClick={() => {
                        setFirstStep("Large Team");
                      }}
                    >
                      <Step3 />
                    </div>

                    <div
                      className="col-sm-12 col-md-6"
                      onClick={() => {
                        setFirstStep("Not Sure");
                      }}
                    >
                      <Step4 />
                    </div>
                  </div>
                </>
              ),
            },
            {
              label: "",
              name: "Completed",
              content: (
                <>
                  <h5>When do you need the developer to start?</h5>

                  <div className="row">
                    <div
                      className="col-sm-12 col-md-6"
                      onClick={() => {
                        setSecondStep("Immediately");
                      }}
                    >
                      <Step5 />
                    </div>

                    <div
                      className="col-sm-12 col-md-6"
                      onClick={() => {
                        setSecondStep("In 1 to 2 weeks");
                      }}
                    >
                      <Step6 />
                    </div>

                    <div
                      className="col-sm-12 col-md-6"
                      onClick={() => {
                        setSecondStep("2 weeks from now");
                      }}
                    >
                      <Step7 />
                    </div>

                    <div
                      className="col-sm-12 col-md-6"
                      onClick={() => {
                        setSecondStep("Not Sure");
                      }}
                    >
                      <Step8 />
                    </div>
                  </div>
                </>
              ),
              // validator: step2Validator
            },
            {
              label: "",
              name: "Finish",
              content: (
                <>
                  <h5>Final step to get developers started on your project</h5>

                  <div className="row">
                    <div className="col-12">
                      <div className="row form_wrapper">
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              onChange={inputsData}
                              placeholder="Email Address"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              onChange={inputsData}
                              placeholder="Company Name"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              id="contactName"
                              name="contactName"
                              onChange={inputsData}
                              placeholder="Contact Name"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <div className="some">
                              <Step9 />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ),
            },
          ]}
        />
      </div>

      <style jsx>{`
        .bg1 {
          background-color: yellow;
        }
        .bg2 {
          background-color: green;
        }
        ._2pGos._hsN1w {
          background: red !important;
        }
        .App {
          font-family: sans-serif;
          text-align: center;
          background-color: #ffffff;
          padding: 0px 0px;
          border-radius: 10px;
        }
        .col_boxes {
          border: 1px solid transparent;
          background-color: #efecec;
          border-radius: 5px;
          padding-top: 40px;
          padding-bottom: 40px;
          margin-top: 20px;
          cursor: pointer;
        }
        .col_boxes:hover {
          background-color: #dfeafb;
          cursor: pointer;
        }
        .box_img {
          height: 12vh;
        }
        .box_title {
          font-weight: 700;
          margin-top: 12px;
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
        .contact_heading {
          color: #1f69f6;
        }
        .contact_sub_heading {
          color: #171e29;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group .form-control {
          display: block;
          border: 1px solid #aaaaaa;
          width: 100%;
          height: 60px;
          outline: 0;
          border-radius: 5px;
          -webkit-box-shadow: none;
          box-shadow: none;
          padding: 15px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          font-size: 15px;
          color: #494a60;
        }
        .form-group .form-control::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
        }
        .form-group .form-control:focus {
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .form-group .form-control:focus::-webkit-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus:-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::-ms-input-placeholder {
          color: transparent;
        }
        .form-group .form-control:focus::placeholder {
          color: transparent;
        }
        .form-group textarea.form-control {
          height: auto;
          padding: 15px;
          line-height: 1.5rem;
        }
        .form-group .help-block.with-errors ul {
          color: red;
          margin-bottom: 0;
          margin-top: 10px;
          text-align: left;
        }
        .form-group .help-block.with-errors ul li {
          font-size: 14px;
        }
        .default-btn {
          margin-top: 10px;
        }
        .main_select {
          margin-top: 30px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .dropdown-container {
          max-width: 1000px;
        }
        .main_select > div {
          width: 90%;
        }
      `}</style>
    </>
  );
};

export default CustomMultiForm;
