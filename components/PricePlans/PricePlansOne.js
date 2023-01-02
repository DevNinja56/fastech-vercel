import React from "react";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";
import { useEffect, useState, useRef } from "react";
import Swal from "sweetalert2";
import Link from "next/link";

resetIdCounter();

const PricePlansOne = () => {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  // const [select3, setSelect3] = useState("");
  // const [select4, setSelect4] = useState("");
  // const [select5, setSelect5] = useState("");
  // const [select6, setSelect6] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const myRef = useRef(null);

  const handleSubmit = (e) => {
    Swal.fire("Congrats!", "You responce submitted successfuly!", "success");
    e.preventDefault();
    console.log("Sending");
    let data = {
      select1,
      select2,
      // select3,
      // select4,
      // select5,
      // select6,
    };
    fetch("/api/pricings", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("selected responce");
      if (res.status === 200) {
        console.log("selected send");
        setSubmitted(true);
        myRef.current.reset();
        setSelect1("");
        setSelect2("");
        // setSelect3("");
        // setSelect4("");
        // setSelect5("");
        // setSelect6("");
      }
    });
  };

  useEffect(() => {
    <style jsx>{``}</style>;
  });

  return (
    <>
      <div className="plans-area pt-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Pricing</h2>
            <p>Choose Your Best Plans</p>
          </div>

          <div className="price-plans-tab">
            <Tabs>
              {/* <TabList>
                                <Tab>Bill Monthly</Tab>
                                <Tab>Bill Yearly</Tab>
                            </TabList> */}

              <TabPanel>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-plans-table">
                      <div className="plans-header">
                        <h3>Staff/Resource Augmentation</h3>
                        <p>Hire top talent at a fraction of the cost</p>
                      </div>

                      <ul className="plans-features-list">
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Vetted
                          developer profiles in 50 hours
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i>{" "}
                          Staffing within 1-2 weeks
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i>{" "}
                          Availability of developers in every tech stack
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> No
                          hiring and retention stress
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i>{" "}
                          Management and payroll freedom
                        </li>
                      </ul>

                      {/* <div className="pricing_dropdown_wrapper">
                        <form onSubmit={handleSubmit} ref={myRef}>
                          <div className="form-group">
                            <label for="pricing_label text-dark">
                              How early you need developer?
                            </label>

                            <select
                              className="form-select mt-2"
                              aria-label="Default select example"
                              onSelect={(e) => {
                                setSelect1(e.target.value);
                              }}
                            >
                              <option selected>Select...</option>
                              <option value="1">Within a week</option>
                              <option value="2">1 Week Plus</option>
                              <option value="3">As soon as possible</option>
                            </select>
                          </div>

                          <div className="form-group mt-3">
                            <label for="pricing_label text-dark">
                              For how long?
                            </label>
                            <select
                              className="form-select mt-2"
                              aria-label="Default select example"
                              onSelect={(e) => {
                                setSelect2(e.target.value);
                              }}
                            >
                              <option selected>Select...</option>
                              <option value="1">1-3 Months</option>
                              <option value="2">3-6 Months</option>
                              <option value="3">6-10 Months</option>
                              <option value="4">10+ Months</option>
                            </select>
                          </div>

                          <div className="form-group mt-3">
                            <label for="pricing_label text-dark">
                              For how long?
                            </label>
                            <select
                              className="form-select mt-2"
                              aria-label="Default select example"
                            >
                              <option
                                selected
                                onSelect={(e) => {
                                  setSelect2(e.target.value);
                                }}
                              >
                                Select...
                              </option>
                              <option value="1">1-3 Months</option>
                              <option value="2">3-6 Months</option>
                              <option value="3">6-10 Months</option>
                              <option value="4">10+ Months</option>
                            </select>
                          </div>

                          
                        </form> 
                      </div> */}

                      <a>Strategic Planning</a>

                      <div className="plans-btn">
                        <Link href="/contact">
                          <a className="default-btn">
                            Get A Free Qoute
                            <i className="ri-arrow-right-line"></i>
                            <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-plans-table active-box">
                      <div className="plans-header">
                        <h3>Product Development</h3>
                        <p>Get your products built from scratch</p>
                      </div>

                      <ul className="plans-features-list">
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Product
                          Development
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Free
                          Cost estimation
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Expert
                          UI/UX design
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i>{" "}
                          Prototype and wireframing
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Premium
                          code quality
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Free
                          dedicated project management
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Free
                          dedicated quality assurance
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Timely
                          delivery
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Weekly
                          sprints
                        </li>
                      </ul>

                      {/* <div className="pricing_dropdown_wrapper">
                        <div className="form-group">
                          <label for="pricing_label text-dark">
                            What are you looking to develop?
                          </label>
                          <select
                            className="form-select mt-2"
                            aria-label="Default select example"
                          >
                            <option selected>Select...</option>
                            <option value="1">
                              Complete Product Development
                            </option>
                            <option value="2">UI/UX Design</option>
                            <option value="3">Working Prototype</option>
                            <option value="4">Something Else</option>
                          </select>
                        </div>

                        <div className="form-group mt-3">
                          <label for="pricing_label text-dark">
                            For which platform?
                          </label>
                          <select
                            className="form-select mt-2"
                            aria-label="Default select example"
                          >
                            <option selected>Select...</option>
                            <option value="1">Web</option>
                            <option value="2">Mobile</option>
                            <option value="3">Desktop</option>
                            <option value="4">All of them</option>
                          </select>
                        </div>

                        
                      </div> */}
                      <div className="plans-btn">
                        <Link href="/contact">
                          <a className="default-btn">
                            Get A Free Qoute
                            <i className="ri-arrow-right-line"></i>
                            <span></span>
                          </a>
                        </Link>
                      </div>

                      <div className="popular-tag">
                        <span>Most Popular</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-plans-table">
                      <div className="plans-header">
                        <h3>Dedicated Team</h3>
                        <p>Hire expert development team for succeed</p>
                      </div>

                      <ul className="plans-features-list">
                        <li>
                          <i class="fas fa-check-square tick_icons"></i>{" "}
                          Transparent pricing system
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i>{" "}
                          Personal extended team exclusively working on your
                          project
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Access
                          to a wide range of IT experts from multiple domains
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Project
                          manager allocated by ragzon
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Team
                          flexibility and scalability
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Direct
                          communication with developers
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Extend
                          and reduce team according to your requirements
                        </li>
                      </ul>

                      {/* <div className="pricing_dropdown_wrapper">
                        <div className="form-group">
                          <label for="pricing_label text-dark">
                            How many developers you need?
                          </label>
                          <select
                            className="form-select mt-2"
                            aria-label="Default select example"
                          >
                            <option selected>Select...</option>
                            <option value="1">2-6</option>
                            <option value="2">6-10</option>
                            <option value="3">10+</option>
                          </select>
                        </div>

                        <div className="form-group mt-3">
                          <label for="pricing_label text-dark">
                            For how long?
                          </label>
                          <select
                            className="form-select mt-2"
                            aria-label="Default select example"
                          >
                            <option selected>Select...</option>
                            <option value="1">1-3 Months</option>
                            <option value="2">3-6 Months</option>
                            <option value="3">6-10 Months</option>
                            <option value="4">10+ Months</option>
                          </select>
                        </div>

                        
                      </div> */}
                      <div className="plans-btn">
                        <Link href="/contact">
                          <a className="default-btn">
                            Get A Free Qoute
                            <i className="ri-arrow-right-line"></i>
                            <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="single-plans-table">
                      <div className="plans-header">
                        <h3>Staff/Resource Augmentation</h3>
                        <p>Powerful & Awesome Elements</p>
                      </div>

                      <div className="price">
                        $249 <span>/Yearly</span>
                      </div>

                      <div className="plans-btn">
                        <a href="/contact" className="default-btn">
                          Purchase Now
                          <i className="ri-arrow-right-line"></i>
                          <span></span>
                        </a>
                      </div>

                      <ul className="plans-features-list">
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Up to
                          10 Website
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i>{" "}
                          Lifetime Free Support
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> 10 GB
                          Dedicated Hosting Free
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> 24/7
                          Hours Support
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> SEO
                          Optimized
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-plans-table active-box">
                      <div className="plans-header">
                        <h3>Small Team</h3>
                        <p>Powerful & Awesome Elements</p>
                      </div>

                      <div className="price">
                        $269 <span>/Yearly</span>
                      </div>

                      <div className="plans-btn">
                        <a
                          href="/profile-authenticatio"
                          className="default-btn"
                        >
                          Purchase Now
                          <i className="ri-arrow-right-line"></i>
                          <span></span>
                        </a>
                      </div>

                      <ul className="plans-features-list">
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Up to
                          15 Website
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i>{" "}
                          Lifetime Free Support
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> 15 GB
                          Dedicated Hosting Free
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> 24/7
                          Hours Support
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> SEO
                          Optimized
                        </li>
                      </ul>

                      <div className="popular-tag">
                        <span>Most Popular</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-plans-table">
                      <div className="plans-header">
                        <h3>Business</h3>
                        <p>Powerful & Awesome Elements</p>
                      </div>

                      <div className="price">
                        $279 <span>/Yearly</span>
                      </div>

                      <div className="plans-btn">
                        <a
                          href="/profile-authenticatio"
                          className="default-btn"
                        >
                          Purchase Now
                          <i className="ri-arrow-right-line"></i>
                          <span></span>
                        </a>
                      </div>

                      <ul className="plans-features-list">
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> Up to
                          20 Website
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i>{" "}
                          Lifetime Free Support
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> 20 GB
                          Dedicated Hosting Free
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> 24/7
                          Hours Support
                        </li>
                        <li>
                          <i class="fas fa-check-square tick_icons"></i> SEO
                          Optimized
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>

        {/* Shape Images */}
        <div className="plans-shape-1">
          <img src="/images/plans/shape-1.png" alt="image" />
        </div>
        <div className="plans-shape-2">
          <img src="/images/plans/shape-2.png" alt="image" />
        </div>
        <div className="plans-shape-3">
          <img src="/images/plans/shape-3.png" alt="image" />
        </div>
      </div>

      {/* Price Plans Style */}
      <style jsx>{`
        .pricing_dropdown_wrapper {
          margin-top: 80px;
        }
        .plans-area {
          position: relative;
          z-index: 1;
          background-color: #f4f8fc;
        }
        .plans-area::before {
          position: absolute;
          content: "";
          left: 0;
          right: 0;
          bottom: 0;
          height: 50%;
          width: 100%;
          z-index: -1;
          max-width: 1690px;
          margin: auto;
          border-radius: 5px;
        }

        // single-plans-table
        .single-plans-table {
          background-color: var(--white-color);
          border: 1px solid #e6edf7;
          padding: 50px 45px;
          border-radius: 5px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          margin-bottom: 30px;
          position: relative;
        }
        .single-plans-table.active-box {
          border: 1px solid #1f69f6;
          -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
        }
        .single-plans-table.active-box .plans-btn .default-btn {
          background-color: #1f69f6;
        }
        .single-plans-table .plans-header h3 {
          font-size: 25px;
          margin-bottom: 10px;
        }
        .single-plans-table .plans-header p {
          font-size: 15px;
          margin-bottom: 0;
        }
        .single-plans-table .price {
          font-size: 50px;
          font-weight: 500;
          margin-top: 18px;
        }
        .single-plans-table .price span {
          font-size: 15px;
          font-weight: 500;
          color: var(--paragraph-color);
        }
        .single-plans-table .plans-btn {
          margin-top: 22px;
        }
        .single-plans-table .plans-btn .default-btn {
          width: 100%;
          -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
        }
        .single-plans-table .plans-btn .default-btn i {
          position: relative;
          right: 0;
          top: 2px;
          -webkit-transform: translateY(-2px);
          transform: translateY(-2px);
          margin-left: 5px;
        }
        .single-plans-table .plans-btn .default-btn:hover {
          -webkit-transform: unset;
          transform: unset;
        }
        .single-plans-table .plans-features-list {
          padding-left: 0;
          margin-top: 30px;
          margin-bottom: 0;
        }
        .single-plans-table .plans-features-list li {
          font-size: var(--font-size);
          font-weight: 500;
          list-style-type: none;
          position: relative;
          padding-left: 25px;
          margin-bottom: 15px;
        }
        .single-plans-table .plans-features-list li:last-child {
          margin-bottom: 0;
        }
        .single-plans-table .plans-features-list li i {
          position: absolute;
          left: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          color: #36cc72;
        }
        .single-plans-table .popular-tag {
          position: absolute;
          right: 30px;
          top: 20px;
        }
        .single-plans-table .popular-tag span {
          font-size: 15px;
          color: #1f69f6;
          font-weight: 500;
        }
        .single-plans-table:hover {
          -webkit-transform: translateY(-10px);
          transform: translateY(-10px);
          border: 1px solid #1f69f6;
          -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
        }
        .single-plans-table:hover .plans-btn .default-btn {
          background-color: #1f69f6;
        }

        // view-all-plans-btn
        .view-all-plans-btn {
          text-align: center;
          margin-top: 15px;
        }
        .view-all-plans-btn .plans-btn-one {
          font-size: 15px;
          font-weight: 500;
          color: var(--main-color);
          border-bottom: 1px solid var(--main-color);
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .view-all-plans-btn .plans-btn-one:hover {
          letter-spacing: 1px;
        }

        // shape
        .plans-shape-1 {
          position: absolute;
          top: 40%;
          left: 58%;
          -webkit-transform: translateY(-40%) translateX(-58%);
          transform: translateY(-40%) translateX(-58%);
        }
        .plans-shape-2 {
          position: absolute;
          top: 45%;
          left: 60%;
          -webkit-transform: translateY(-45%) translateX(-60%);
          transform: translateY(-45%) translateX(-60%);
        }
        .plans-shape-3 {
          position: absolute;
          bottom: 22%;
          left: 60%;
          -webkit-transform: translateY(-22%) translateX(-56%);
          transform: translateY(-22%) translateX(-56%);
        }
        .plans-shape-4 {
          position: absolute;
          top: 12%;
          left: 30%;
          -webkit-transform: translateY(-12%) translateX(-30%);
          transform: translateY(-12%) translateX(-30%);
          z-index: -1;
        }
        .plans-shape-5 {
          position: absolute;
          top: 15%;
          left: 32%;
          -webkit-transform: translateY(-15%) translateX(-32%);
          transform: translateY(-15%) translateX(-32%);
          z-index: -1;
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .single-plans-table {
            padding: 30px 20px;
            text-align: center;
          }
          .single-plans-table .popular-tag {
            right: 10px;
            top: 10px;
          }
          .single-plans-table .popular-tag span {
            font-size: 12px;
          }
          .single-plans-table .plans-features-list li {
            font-size: 15px;
            padding: 0;
          }
          .single-plans-table .plans-features-list li i {
            position: relative;
            top: 2px;
          }
          .view-all-plans-btn {
            margin-top: 0;
          }
          .plans-shape-1 {
            display: none;
          }
          .plans-shape-2 {
            display: none;
          }
          .plans-shape-3 {
            display: none;
          }
          .plans-shape-4 {
            display: none;
          }
          .plans-shape-5 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .single-plans-table {
            padding: 35px 25px;
          }
          .single-plans-table .popular-tag {
            right: 10px;
            top: 10px;
          }
          .single-plans-table .popular-tag span {
            font-size: 12px;
          }
          .single-plans-table .plans-features-list li {
            font-size: 15px;
          }
          .view-all-plans-btn {
            margin-top: 0;
          }
          .plans-shape-1 {
            display: none;
          }
          .plans-shape-2 {
            display: none;
          }
          .plans-shape-3 {
            display: none;
          }
          .plans-shape-4 {
            display: none;
          }
          .plans-shape-5 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .single-plans-table {
            padding: 35px 20px;
          }
          .single-plans-table .plans-features-list li {
            font-size: 15px;
          }
          .single-plans-table .popular-tag {
            right: 10px;
            top: 10px;
          }
          .plans-shape-1 {
            display: none;
          }
          .plans-shape-2 {
            display: none;
          }
          .plans-shape-3 {
            display: none;
          }
          .plans-shape-4 {
            display: none;
          }
          .plans-shape-5 {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default PricePlansOne;
