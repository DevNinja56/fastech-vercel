import React, { useState, useRef, useEffect } from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import Select from "react-select";

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

const CustomMultiForm = () => {
  const [selectedOptions, setSelectedOptions] = useState();
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  console.log("field =>", selectedOptions);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [number, setNumber] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  // const myRef = useRef(null);

  //   const [contact, setContact] = useState(INITIAL_STATE);

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setContact((prevState) => ({ ...prevState, [name]: value }));
  //     console.log("form data is => ", contact);
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const url = `${baseUrl}/api/contact`;
  //       const { name, email, number, subject, text } = contact;
  //       const payload = { name, email, number, subject, text };
  //       const response = await axios.post(url, payload);
  //       console.log("responce is => ", response);
  //       setContact(INITIAL_STATE);
  //       alertContent();
  //     } catch (error) {
  //       console.log("Error is => ", error);
  //     }
  //   };

  // const handleSubmit = (e) => {
  //   Swal.fire("Congrats!", "Your records submitted successfuly!", "success");
  //   e.preventDefault();
  //   console.log("Sending");
  //   let data = {
  //     name,
  //     email,
  //     number,
  //     subject,
  //     message,
  //   };
  //   fetch("/api/mail", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((res) => {
  //     console.log("Response received");
  //     if (res.status === 200) {
  //       console.log("Response succeeded!");
  //       setSubmitted(true);
  //       myRef.current.reset();
  //       setName("");
  //       setEmail("");
  //       setNumber("");
  //       setSubject("");
  //       setMessage("");
  //     }
  //   });
  // };

  return (
    <>
      <div className="App">
        <StepProgressBar
          startingStep={0}
          previousBtnName="previous"
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
                    <div className="col-sm-12 col-md-6">
                      <div className="col_boxes">
                        <img
                          src="/images/box-img/coffee-cup.png"
                          alt="img"
                          className="box_img"
                        />
                        <p className="box_title">One Engineer</p>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="col_boxes">
                        <img
                          src="/images/box-img/teamwork.png"
                          alt="img"
                          className="box_img"
                        />
                        <p className="box_title">A small team</p>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="col_boxes">
                        <img
                          src="/images/box-img/meeting.png"
                          alt="img"
                          className="box_img"
                        />
                        <p className="box_title">A large team</p>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="col_boxes">
                        <img
                          src="/images/box-img/doubtful.png"
                          alt="img"
                          className="box_img"
                        />
                        <p className="box_title">I am not sure</p>
                      </div>
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
                    <div className="col-sm-12 col-md-6">
                      <div className="col_boxes">
                        <img
                          src="/images/box-img/calendar.png"
                          alt="img"
                          className="box_img"
                        />
                        <p className="box_title">Immediately</p>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="col_boxes">
                        <img
                          src="/images/box-img/calendar (1).png"
                          alt="img"
                          className="box_img"
                        />
                        <p className="box_title">In 1 to 2 weeks</p>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="col_boxes">
                        <img
                          src="/images/box-img/hourglass.png"
                          alt="img"
                          className="box_img"
                        />
                        <p className="box_title">2 weeks from now</p>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                      <div className="col_boxes">
                        <img
                          src="/images/box-img/doubtful.png"
                          alt="img"
                          className="box_img"
                        />
                        <p className="box_title">I am not sure</p>
                      </div>
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
                    Please sign up so we can connect you with the right
                    developer's
                  </h5>

                  <div className="row">
                    <div className="col-12">
                      <form>
                        <div className="row form_wrapper">
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
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
                                placeholder="Company Name"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                name="number"
                                placeholder="Contact Name"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <select
                                className="form-control"
                                aria-label="Default select example"
                              >
                                <option selected>Select Country</option>
                                <option value="1">Pakistan</option>
                                <option value="2">China</option>
                                <option value="3">Saudia</option>
                                <option value="4">Afghanistan</option>
                              </select>
                            </div>
                          </div>

                          {/* <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="default-btn">
                                                Send Message
                                                <i className="ri-arrow-right-line"></i>
                                                <span></span>
                                            </button>
                                        </div> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              ),
            },
          ]}
        />
      </div>

      <style jsx>{`
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
