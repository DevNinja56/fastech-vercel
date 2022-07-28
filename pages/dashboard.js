import React, { useState, useRef } from "react";
import PageBanner from "../components/Common/PageBanner";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const myRef = useRef(null);

  const handleSubmit = (e) => {
    Swal.fire("Congrats!", "You responce submitted successfuly!", "success");
    e.preventDefault();
    console.log("Sending");
    let data = {
      Job_title: title,
      Positions: position,
      Department: department,
      Due_date: date,
      Location: location,
      Job_description: description,
    };

    fetch("/api/dashboard", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log("I got the data --> ", data));

    setTitle("");
    setPosition("");
    setDepartment("");
    setDate("");
    setLocation("");
    setDescription("");
    myRef.current.reset();
  };
  return (
    <>
      <PageBanner
        pageTitle="Dashboard"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Dashboard"
      />
      <div className="contact-area">
        <div className="container">
          <div className="contact-form">
            <div className="row left_profile_wrapper">
              <h2 className="contact_heading">
                <span className="contact_sub_heading">Adding Developers</span>
                <span className="Blue_tag"> Position</span>
              </h2>

              <div className="row">
                <div className="col-12">
                  <form onSubmit={handleSubmit} ref={myRef}>
                    <div className="row form_wrapper">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="title"
                            placeholder="Job Title"
                            className="form-control"
                            value={title}
                            onChange={(e) => {
                              setTitle(e.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="Positions"
                            placeholder="Positions"
                            className="form-control"
                            value={position}
                            onChange={(e) => {
                              setPosition(e.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="Department"
                            placeholder="Department"
                            className="form-control"
                            value={department}
                            onChange={(e) => {
                              setDepartment(e.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="date"
                            name="date"
                            placeholder="Due date"
                            className="form-control"
                            value={date}
                            onChange={(e) => {
                              setDate(e.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="Location"
                            placeholder="Location"
                            className="form-control"
                            value={location}
                            onChange={(e) => {
                              setLocation(e.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <textarea
                            cols="30"
                            rows="6"
                            name="Description"
                            placeholder="Job Description..."
                            className="form-control"
                            value={description}
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12 text-start">
                        <button type="submit" className="default-btn">
                          Submit
                          <i className="ri-arrow-right-line"></i>
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .profile_icons_images {
          width: 36px !important;
        }
        .profile_img_left {
          margin-left: 20px !important;
          width: 36px !important;
        }
        .Sale_profile_icons {
          margin-top: -10px !important;
        }
        .profile_data {
          margin-left: 0px;
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
          margin-bottom: 15px;
        }
        .sales_profile {
          display: flex;
        }
        .contact_heading {
          color: #1f69f6;
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

export default Dashboard;
