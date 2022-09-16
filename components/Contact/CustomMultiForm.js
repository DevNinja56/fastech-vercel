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
  const [countryName, setCountryName] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (countryName) => {
    setCountryName(countryName);
    console.log(countryName);
  };
  return (
    <>
      <div className="form-group">
        <Select
          options={options}
          countryName={countryName}
          onChange={changeHandler}
          placeholder="Select Country"
        />
      </div>
    </>
  );
};

const CustomMultiForm = () => {
  // const [apiData, setApiData] = useState("");
  const [showUi, setShowUi] = useState(false);
  const [shown, setShown] = useState(true);
  // const [selectedOptions, setSelectedOptions] = useState();
  const [firstStep, setFirstStep] = useState();
  const [secondStep, setSecondStep] = useState();
  const [formEmail, setFormEmail] = useState();
  const [companyName, setCompanyName] = useState();
  const [contactName, setContactName] = useState();
  // const [thirdStep, setThirdStep] = useState({
  //   email: "",
  //   name: "",
  //   contactName: "",
  //   country: "",
  // });

  console.log(formEmail);
  console.log(companyName);
  console.log(contactName);

  const handleFormData = () => {
    Swal.fire("Congrats!", "Your records submitted successfuly  !", "success");
    let apiPostData = {
      Name: companyName,
      Email: formEmail,
      Number: contactName,
    };

    console.log("api data is ==>", apiPostData);

    fetch("http://localhost:3000/api/formdata/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiPostData),
    }).then((res) => {
      if (res.status === 200) {
        console.log("api post success");
      } else {
        console.log("api post failed");
      }
    });
  };

  // selection buttons
  const firstHandleGet = () => {
    setShowUi(1);
    setShown();
  };
  const secondHandleGet = () => {
    setShowUi(2);
    setShown();
  };

  // other functions
  // function handleSelect(data) {
  //   setSelectedOptions(data);
  // }
  // const inputsData = (e) => {
  //   setThirdStep((prevState) => {
  //     return { ...prevState, [e.target.name]: e.target.value };
  //   });
  // };

  // const formData = {
  //   selectedOptions,
  //   firstStep,
  //   secondStep,
  //   thirdStep,
  //   countryName,
  // };

  // console.log("form data ===>", formData);

  // const handleSubmit = () => {
  //   Swal.fire("Congrats!", "Your records submitted successfuly  !", "success");

  //   console.log("Sending");
  //   var apiData = formData;
  //   console.log("Api Data ==>", apiData);
  //   fetch("/api/mail", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   }).then((res) => {
  //     console.log("Response received");
  //     if (res.status === 200) {
  //       console.log("Response succeeded!");
  //     } else {
  //       console.log("succeeded failed");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  return (
    <>
      <div className="App">
        <div
          className="Buttons_menu"
          style={{ display: shown ? "block" : "none" }}
        >
          <h3 className="pt-5">How can we help you today ?</h3>
          <button className="form_btn_1" onClick={firstHandleGet}>
            have a project or idea 🚀
          </button>

          <button className="form_btn_2" onClick={secondHandleGet}>
            want to hire a developer 💼
          </button>
        </div>

        {/* <div>{showUi}</div> */}

        <div>
          {showUi == 1 ? (
            <>
              <StepProgressBar
                startingStep={0}
                previousBtnName="previous"
                onSubmit={(e) => {
                  handleFormData();
                }}
                steps={[
                  {
                    label: "",
                    name: "Completed",
                    content: (
                      <>
                        <h5>
                          Awesome! Please tell us a little about your Company /
                          Project.
                        </h5>

                        <div className="row">
                          <div className="col-12">
                            <div className="mt-3">
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Enter Message"
                                required
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </>
                    ),
                  },
                  {
                    label: "",
                    name: "Finish",
                    content: (
                      <>
                        <h5>
                          Final step to get developers started on your project
                        </h5>
                        <form
                          onSubmit={() => {
                            handleFormData();
                          }}
                        >
                          <div className="row">
                            <div className="col-12 mt-3">
                              <div className="row form_wrapper">
                                <div className="col-lg-12 col-md-12 mb-1">
                                  <div className="form-group mb-3">
                                    <input
                                      type="text"
                                      name="name"
                                      id="name"
                                      onChange={(e) => {
                                        setCompanyName(e.target.value);
                                      }}
                                      placeholder="Name"
                                      className="form-control form_field"
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-12 col-md-12 mb-1">
                                  <div className="form-group mb-3">
                                    <input
                                      type="email"
                                      name="email"
                                      id="email"
                                      onChange={(e) => {
                                        setFormEmail(e.target.value);
                                      }}
                                      placeholder="Email"
                                      className="form-control form_field"
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-12 col-md-12 mb-1">
                                  <div className="form-group mb-3">
                                    <input
                                      type="number"
                                      id="contactName"
                                      name="contactName"
                                      onChange={(e) => {
                                        setContactName(e.target.value);
                                      }}
                                      placeholder="Number"
                                      className="form-control form_field"
                                      required
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
                        </form>
                      </>
                    ),
                  },
                ]}
              />
            </>
          ) : showUi == 2 ? (
            <>
              {" "}
              <>
                <StepProgressBar
                  startingStep={0}
                  previousBtnName="previous"
                  onSubmit={() => {
                    handleFormData();
                  }}
                  steps={[
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
                          <h5>
                            Final step to get developers started on your project
                          </h5>
                          <form
                            onSubmit={() => {
                              handleFormData();
                            }}
                          >
                            <div className="row">
                              <div className="col-12 mt-3">
                                <div className="row form_wrapper">
                                  <div className="col-lg-12 col-md-12 mb-1">
                                    <div className="form-group mb-3">
                                      <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        onChange={(e) => {
                                          setCompanyName(e.target.value);
                                        }}
                                        placeholder="Name"
                                        className="form-control form_field"
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-12 col-md-12 mb-1">
                                    <div className="form-group mb-3">
                                      <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        onChange={(e) => {
                                          setFormEmail(e.target.value);
                                        }}
                                        placeholder="Email"
                                        className="form-control form_field"
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div className="col-lg-12 col-md-12 mb-1">
                                    <div className="form-group mb-3">
                                      <input
                                        type="number"
                                        id="contactName"
                                        name="contactName"
                                        onChange={(e) => {
                                          setContactName(e.target.value);
                                        }}
                                        placeholder="Number"
                                        className="form-control form_field"
                                        required
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
                          </form>
                        </>
                      ),
                    },
                  ]}
                />
              </>
            </>
          ) : (
            <p></p>
          )}
        </div>
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
