import React, { useState } from "react";
import Link from "../../utils/ActiveLink";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-navbar">
          {/* <div className="container"> */}
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link href="/">
              <a className="navbar-brand">
                <img className="logo_main" src="/images/logo.png" alt="logo" />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link href="/services">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        router.push("/services");
                      }}
                      className="nav-link"
                    >
                      Services <i className="ri-add-line"></i>
                    </a>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/web-design-development");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/web-design_development.svg"
                            className="icons_img_meg_menu"
                          />
                          Web Design & Development
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/mobile-app-development");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/nav-icons/app-development.svg"
                            className="icons_img_meg_menu"
                          />
                          Mobile App Development
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/Software-Project-Management");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/nav-icons/software_project_management.svg"
                            className="icons_img_meg_menu"
                          />
                          Software Project Management
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/Dev-Ops");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/nav-icons/Devops.svg"
                            className="icons_img_meg_menu"
                          />
                          Dev Ops
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/ui-ux-design");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/nav-icons/uiux.svg"
                            className="icons_img_meg_menu"
                          />
                          UI/UX Design
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/software-quality-assurance");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/nav/SQA.svg"
                            className="icons_img_meg_menu"
                          />
                          Software Quality Assurance
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a onClick={(e) => e.preventDefault()} className="nav-link">
                      Industries <i className="ri-add-line"></i>
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/IndustryDetails/e-commerce");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/nav-icons/ecommerce.svg"
                            className="icons_img_meg_menu"
                          />
                          E-Commerce
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/IndustryDetails/food-and-grocery");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/nav-icons/food&grocery.svg"
                            className="icons_img_meg_menu"
                          />
                          Food & Grocery
                        </a>
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                                            <Link href="#">
                                                <a onClick={e => {
                                                    e.preventDefault();
                                                    router.push('/IndustryDetails/features-one')
                                                }} className="nav-link">
                                                    <img src="/images/nav-icons/featuresone.svg" className="icons_img_meg_menu" />Features One</a>
                                            </Link>
                                        </li> */}

                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/IndustryDetails/on-demand-services");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/nav-icons/ondemandservice.svg"
                            className="icons_img_meg_menu"
                          />
                          On Demand Services
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/IndustryDetails/health-care");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/nav-icons/healthcare.svg"
                            className="icons_img_meg_menu"
                          />
                          Healthcare
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/IndustryDetails/fintech");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/nav-icons/fintech.svg"
                            className="icons_img_meg_menu"
                          />
                          Fintech
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/IndustryDetails/travel-and-tourism");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/nav-icons/Travel&tourism.svg"
                            className="icons_img_meg_menu"
                          />
                          Travel & Tourism
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="#">
                        <a
                          onClick={() => {
                            toggleNavbar();
                            router.push("/IndustryDetails/education");
                          }}
                          className="nav-link"
                        >
                          <img
                            src="/images/nav-icons/education.svg"
                            className="icons_img_meg_menu"
                          />
                          Education
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a onClick={(e) => e.preventDefault()} className="nav-link">
                      Dedicated Developers <i className="ri-add-line"></i>
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/developers-detail">
                        <a onClick={toggleNavbar} className="nav-link">
                          <img
                            src="/images/nav-icons/Mernstack.svg"
                            className="icons_img_meg_menu"
                          />
                          Mern Stack
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#">
                        <a onClick={toggleNavbar} className="nav-link">
                          <img
                            src="/images/nav-icons/React.svg"
                            className="icons_img_meg_menu"
                          />
                          React js
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#">
                        <a onClick={toggleNavbar} className="nav-link">
                          <img
                            src="/images/nav-icons/React.svg"
                            className="icons_img_meg_menu"
                          />
                          Reactive Native
                        </a>
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                                                <Link href="/services-details">
                                                    <a onClick={toggleNavbar} className="nav-link">Services Details</a>
                                                </Link>
                                            </li> */}
                  </ul>
                </li>

                {/* <li className="nav-item">
                  <Link href="#">
                    <a onClick={(e) => e.preventDefault()} className="nav-link">
                      Content Hub <i className="ri-add-line"></i>
                    </a>
                  </Link>

                  <ul className="dropdown-menu menu_small">
                    <li className="nav-item">
                      <Link href="/blog">
                        <a onClick={toggleNavbar} className="nav-link">
                          <img
                            src="/images/nav-icons/blog.svg"
                            className="icons_img_meg_menu"
                          />
                          Blog
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                                            <Link href="/pricing">
                                                <a onClick={toggleNavbar} className="nav-link">
                                                    <img src="/images/icons.svg" className="icons_img_meg_menu" />Tech News</a>
                                            </Link>
                                        </li>

                    <li className="nav-item">
                                                <Link href="/gallery">
                                                    <a onClick={toggleNavbar} className="nav-link">Gallery</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq">
                                                    <a onClick={toggleNavbar} className="nav-link">Faq's</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Events <i className='ri-arrow-right-s-line'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/events">
                                                            <a onClick={toggleNavbar} className="nav-link">Events</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/events-details">
                                                            <a onClick={toggleNavbar} className="nav-link">Events Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/profile-authentication">
                                                    <a onClick={toggleNavbar} className="nav-link">Profile Authentication</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/membership-levels">
                                                    <a onClick={toggleNavbar} className="nav-link">Membership Levels</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/404">
                                                    <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/coming-soon">
                                                    <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy">
                                                    <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/terms-of-service">
                                                    <a onClick={toggleNavbar} className="nav-link">Terms of Service</a>
                                                </Link>
                                            </li>
                  </ul>
                </li> */}

                <li className="nav-item">
                  <Link href="#">
                    <a onClick={(e) => e.preventDefault()} className="nav-link">
                      Company <i className="ri-add-line"></i>
                    </a>
                  </Link>

                  <ul className="dropdown-menu menu_small">
                    <li className="nav-item">
                      <Link href="/about-us">
                        <a onClick={toggleNavbar} className="nav-link">
                          <img
                            src="/images/nav-icons/aboutus.svg"
                            className="icons_img_meg_menu"
                          />
                          About Us
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/career">
                        <a onClick={toggleNavbar} className="nav-link">
                          <img
                            src="/images/nav-icons/career.svg"
                            className="icons_img_meg_menu"
                          />
                          Careers
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/portfolio">
                        <a onClick={toggleNavbar} className="nav-link">
                          <img
                            src="/images/nav-icons/Portfolio.svg"
                            className="icons_img_meg_menu"
                          />
                          Portfolio
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/blog">
                    <a
                      onClick={(e) => {
                        e.preventDefault();

                        router.push("/blog");
                      }}
                      className="nav-link"
                    >
                      Blogs
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/pricing">
                    <a
                      onClick={(e) => {
                        e.preventDefault();

                        router.push("/pricing");
                      }}
                      className="nav-link"
                    >
                      Pricing
                    </a>
                  </Link>

                  {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-right-sidebar">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Right Sidebar</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details">
                                                    <a onClick={toggleNavbar} className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                </li>

                {/* <li className="nav-item">
                                        <Link href="/contact">
                                            <a onClick={toggleNavbar} className="nav-link">Contact Us</a>
                                        </Link>
                                    </li> */}
              </ul>
            </div>

            <div className="others-options d-flex align-items-center">
              {/* <div className="option-item">
                                    <i className="search-btn ri-search-line" onClick={handleToggleSearchModal}></i>
                                </div> */}

              <div className="option-item lets_talk_btn">
                <Link href="/contact">
                  <a className="default-btn">
                    Let’s Talk
                    <i className="ri-message-line"></i>
                    <span></span>
                  </a>
                </Link>
              </div>

              {/* <div className="option-item">
                                    <div className="side-menu-btn" onClick={handleToggleSidebarModal}>
                                        <i className="ri-menu-4-line"></i>
                                    </div>
                                </div> */}
            </div>
          </nav>
          {/* </div> */}
        </div>
      </div>

      {/* Navbar, Search Form & Sidebar Modal Style */}
      <style jsx>{`
        // Navbar Area CSS
        .menu_small {
          display: grid !important;
          width: 15rem !important;
        }
        .menu_small li {
          width: 100% !important;
        }
        .icons_img_meg_menu {
          width: 15%;
          margin-right: 10px;
        }
        .logo_main {
          width: 8rem;
        }
        .main-navbar {
          padding: 10px 0;
        }
        .main-navbar .navbar {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          padding: 0;
        }
        .main-navbar .navbar .navbar-brand {
          padding: 0;
        }
        .main-navbar .navbar ul {
          padding-left: 0;
          list-style-type: none;
          margin-bottom: 0;
        }
        .main-navbar .navbar .navbar-nav .nav-item {
          position: relative;
          margin-left: 15px;
          margin-right: 15px;
        }
        .main-navbar .navbar .navbar-nav .nav-item a {
          color: var(--paragraph-color);
          font-size: var(--font-size);
          font-weight: 600;
          padding-left: 0;
          padding-right: 0;
          padding-top: 25px;
          padding-bottom: 25px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .main-navbar .navbar .navbar-nav .nav-item a i {
          font-size: 14px;
          position: relative;
          top: 2px;
          display: inline-block;
          margin-left: -2px;
          margin-right: -2px;
        }
        .main-navbar .navbar .navbar-nav .nav-item a:hover,
        .main-navbar .navbar .navbar-nav .nav-item a:focus,
        .main-navbar .navbar .navbar-nav .nav-item a.active {
          color: var(--main-color);
        }
        .main-navbar .navbar .navbar-nav .nav-item:last-child {
          margin-right: 0;
        }
        .main-navbar .navbar .navbar-nav .nav-item:first-child {
          margin-left: 0;
        }

        .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu {
          border: none;
          top: 70px;
          left: 0;
          z-index: 99;
          opacity: 0;
          width: 36rem;
          display: block;
          border-radius: 12px;
          padding: 15px 0;
          margin-top: 15px;
          position: absolute;
          visibility: hidden;
          background: #ffffff;
          padding: 10px;
          -webkit-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
          -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
        }
        .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li {
          margin: 0;
          display: inline-block;
          width: 50%;
        }
        .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a {
          padding: 10px 8px;

          position: relative;
          display: block;
          border-bottom: 1px solid #e9ecef;
          margin: 10px;
          font-size: 13px;
          font-weight: 400;
          line-height: 19.5px;
          color: rgb(0, 0, 0);
        }

        .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a:hover,
        .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a:focus,
        .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a.active {
          background-color: white;
          border-radius: 5px;
          box-shadow: 0 8px 24px hsl(210deg 8% 62% / 20%);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          a:hover::before,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          a:focus::before,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          a.active::before {
          opacity: 1;
          visibility: visible;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu {
          top: 0;
          opacity: 0;
          left: -100%;
          margin-top: 15px;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu {
          top: 0;
          opacity: 0;
          left: 100%;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: black;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu {
          top: 0;
          opacity: 0;
          left: -100%;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu {
          top: 0;
          opacity: 0;
          left: 100%;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu {
          top: 0;
          opacity: 0;
          left: -100%;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu {
          top: 0;
          opacity: 0;
          left: 100%;
          visibility: hidden;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }

        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li:hover
          .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li:hover
          .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li:hover
          .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li:hover
          .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li:hover
          .dropdown-menu {
          opacity: 1;
          visibility: visible;
        }
        .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li.active a {
          color: var(--main-color);
        }
        .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li:hover
          .dropdown-menu {
          opacity: 1;
          visibility: visible;
          margin-top: 0;
        }
        .main-navbar .navbar .navbar-nav .nav-item:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          margin-top: 0;
        }
        .main-navbar .navbar .others-options .option-item {
          position: relative;
          margin-right: 25px;
        }
        .main-navbar .navbar .others-options .option-item:last-child {
          margin-right: 0;
        }
        .main-navbar .navbar .others-options .option-item .search-btn {
          cursor: pointer;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
          font-size: 25px;
          transition: var(--transition);
        }
        .main-navbar .navbar .others-options .option-item .search-btn:hover {
          color: var(--main-color);
        }
        .main-navbar .navbar .others-options .option-item .close-btn {
          cursor: pointer;
          display: none;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--paragraph-color);
          font-size: 25px;
          transition: var(--transition);
        }
        .main-navbar .navbar .others-options .option-item .close-btn:hover {
          color: var(--main-color);
        }
        .main-navbar .navbar .others-options .option-item .close-btn.active {
          display: block;
        }
        .main-navbar .navbar .others-options .option-item .default-btn {
          background-color: #1f69f6;
          color: var(--white-color);
          padding: 12px 50px 12px 25px;
        }
        .main-navbar .navbar .others-options .option-item .default-btn span {
          background-color: #171e29;
        }
        .main-navbar .navbar .others-options .option-item .side-menu-btn i {
          font-size: 25px;
          color: var(--paragraph-color);
          cursor: pointer;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .main-navbar
          .navbar
          .others-options
          .option-item
          .side-menu-btn
          i:hover {
          color: var(--main-color);
        }
        .navbar-box-style .main-navbar {
          padding: 0;
        }
        .navbar-box-style .main-navbar .navbar {
          padding: 10px 30px;
          background: var(--white-color);
          border-radius: 5px;
        }
        .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item a {
          color: var(--paragraph-color);
        }
        .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item a:hover,
        .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item a:focus,
        .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item a.active {
          color: var(--optional-color);
        }
        .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item:hover a,
        .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item.active a {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          a::before {
          background-color: var(--optional-color);
        }

        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a {
          color: var(--paragraph-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:hover,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a:focus,
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          a.active {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li
          .dropdown-menu
          li.active
          a {
          color: var(--optional-color);
        }
        .navbar-box-style
          .main-navbar
          .navbar
          .navbar-nav
          .nav-item
          .dropdown-menu
          li.active
          a {
          color: var(--optional-color);
        }
        .navbar-box-color .main-navbar {
          background-color: #f4f8fc;
        }
        .navbar-area {
          padding-left: 30px !important;
          padding-right: 30px !important;
        }
        .navbar-area.is-sticky {
          padding-left: 30px !important;
          padding-right: 30px !important;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          background: var(--white-color);
          -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
          box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .navbar-area.is-sticky.navbar-box-style .main-navbar {
          padding: 10px 0;
        }
        .navbar-area.is-sticky.navbar-box-style .main-navbar .navbar {
          padding: 0;
        }
        .navbar-area.is-sticky.navbar-box-color .main-navbar {
          background-color: var(--white-color);
        }

        // Navbar toggler
        .navbar-toggler {
          border: none;
          border-radius: 0;
          padding: 0;
        }
        .navbar-toggler:focus {
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .navbar-toggler .icon-bar {
          width: 35px;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
          background: #2e2f46;
          height: 4px;
          display: block;
          border-radius: 3px;
        }
        .navbar-toggler .top-bar {
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          -webkit-transform-origin: 10% 10%;
          transform-origin: 10% 10%;
          left: 4px;
          position: relative;
        }
        .navbar-toggler .middle-bar {
          opacity: 0;
          margin: 5px 0;
        }
        .navbar-toggler .bottom-bar {
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
          -webkit-transform-origin: 10% 90%;
          transform-origin: 10% 90%;
          left: 4px;
          position: relative;
        }
        .navbar-toggler.collapsed .top-bar {
          -webkit-transform: rotate(0);
          transform: rotate(0);
          left: 0;
        }
        .navbar-toggler.collapsed .middle-bar {
          opacity: 1;
        }
        .navbar-toggler.collapsed .bottom-bar {
          -webkit-transform: rotate(0);
          transform: rotate(0);
          left: 0;
        }

        // Search Overlay CSS
        .search-overlay {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 99999;
          opacity: 0;
          visibility: hidden;
          -webkit-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
          overflow: hidden;
        }
        .search-overlay .search-overlay-layer {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          -webkit-transform: translateX(100%);
          transform: translateX(100%);
        }
        .search-overlay .search-overlay-layer:nth-child(1) {
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          -webkit-transition: all 0.3s ease-in-out 0s;
          transition: all 0.3s ease-in-out 0s;
        }
        .search-overlay .search-overlay-layer:nth-child(2) {
          left: 0;
          background-color: rgba(0, 0, 0, 0.4);
          -webkit-transition: all 0.3s ease-in-out 0.3s;
          transition: all 0.3s ease-in-out 0.3s;
        }
        .search-overlay .search-overlay-layer:nth-child(3) {
          left: 0;
          background-color: rgba(0, 0, 0, 0.7);
          -webkit-transition: all 0.9s ease-in-out 0.6s;
          transition: all 0.9s ease-in-out 0.6s;
        }
        .search-overlay .search-overlay-close {
          position: absolute;
          top: 40px;
          right: 40px;
          width: 50px;
          z-index: 2;
          text-align: center;
          cursor: pointer;
          padding: 10px;
          -webkit-transition: all 0.9s ease-in-out 1.5s;
          transition: all 0.9s ease-in-out 1.5s;
          opacity: 0;
          visibility: hidden;
        }
        .search-overlay .search-overlay-close .search-overlay-close-line {
          width: 100%;
          height: 3px;
          float: left;
          margin-bottom: 5px;
          background-color: #fff;
          -webkit-transition: all 500ms ease;
          transition: all 500ms ease;
        }
        .search-overlay
          .search-overlay-close
          .search-overlay-close-line:nth-child(1) {
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        .search-overlay
          .search-overlay-close
          .search-overlay-close-line:nth-child(2) {
          margin-top: -7px;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        .search-overlay .search-overlay-close:hover .search-overlay-close-line {
          background: var(--optional-color);
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
        }
        .search-overlay .search-overlay-form {
          -webkit-transition: all 0.9s ease-in-out 1.4s;
          transition: all 0.9s ease-in-out 1.4s;
          opacity: 0;
          visibility: hidden;
          position: absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translateY(-50%) translateX(-50%);
          transform: translateY(-50%) translateX(-50%);
          z-index: 2;
          max-width: 500px;
          width: 500px;
        }
        .search-overlay .search-overlay-form form {
          position: relative;
        }
        .search-overlay .search-overlay-form form .input-search {
          display: block;
          width: 100%;
          height: 60px;
          border: none;
          border-radius: 30px;
          color: var(--black-color);
          padding: 3px 0 0 25px;
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search::-webkit-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          letter-spacing: 0.5px;
          color: var(--blackColor);
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search:-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          letter-spacing: 0.5px;
          color: var(--blackColor);
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search::-ms-input-placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          letter-spacing: 0.5px;
          color: var(--blackColor);
        }
        .search-overlay .search-overlay-form form .input-search::placeholder {
          -webkit-transition: var(--transition);
          transition: var(--transition);
          letter-spacing: 0.5px;
          color: var(--blackColor);
        }
        .search-overlay .search-overlay-form form .input-search:focus {
          outline: 0;
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search:focus::-webkit-input-placeholder {
          color: transparent;
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search:focus:-ms-input-placeholder {
          color: transparent;
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search:focus::-ms-input-placeholder {
          color: transparent;
        }
        .search-overlay
          .search-overlay-form
          form
          .input-search:focus::placeholder {
          color: transparent;
        }
        .search-overlay .search-overlay-form form button {
          position: absolute;
          right: 5px;
          top: 5px;
          width: 50px;
          color: var(--white-color);
          height: 50px;
          border-radius: 50%;
          background-color: var(--main-color);
          -webkit-transition: var(--transition);
          transition: var(--transition);
          border: none;
          font-size: 20px;
          line-height: 50px;
        }
        .search-overlay .search-overlay-form form button:hover {
          background-color: var(--black-color);
          color: var(--white-color);
        }
        .search-overlay.search-overlay-active.search-overlay {
          opacity: 1;
          visibility: visible;
        }
        .search-overlay.search-overlay-active.search-overlay
          .search-overlay-layer {
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
        .search-overlay.search-overlay-active.search-overlay
          .search-overlay-close {
          opacity: 1;
          visibility: visible;
        }
        .search-overlay.search-overlay-active.search-overlay
          .search-overlay-form {
          opacity: 1;
          visibility: visible;
        }

        // Sidebar Modal CSS
        .modal.right {
          left: auto;
          right: -100%;
        }
        .modal.right .modal-dialog {
          position: fixed;
          margin: auto;
          width: 420px;
          height: 100%;
          -webkit-transform: translate3d(0%, 0, 0);
          transform: translate3d(0%, 0, 0);
        }
        .modal.right .modal-content {
          height: 100%;
          overflow-y: auto;
          background-color: var(--white-color);
          border: none;
          border-radius: 0;
        }
        .modal.right .modal-content button.close {
          float: unset;
          position: absolute;
          right: 20px;
          top: 30px;
          background-color: transparent;
          color: var(--black-color);
          z-index: 2;
          opacity: 1;
          border: none;
          text-shadow: unset;
          -webkit-box-shadow: unset;
          box-shadow: unset;
          font-size: 25px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .modal.right .modal-content button.close:hover {
          color: red;
        }
        .modal.right .modal-dialog {
          right: -100%;
          -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
          transition: opacity 0.3s linear, right 0.3s ease-out;
        }
        .modal.right.show {
          right: 0;
        }
        .modal.right.show .modal-dialog {
          right: 0;
        }
        .sidebarModal.modal {
          background-color: rgba(0, 0, 0, 0.3);
          display: block;
          opacity: 1;
        }
        .sidebarModal.modal .modal-body {
          padding: 35px 30px 45px;
        }
        .sidebarModal.modal .modal-body .sidebar-content {
          margin-top: 35px;
        }
        .sidebarModal.modal .modal-body .sidebar-content h3 {
          font-size: 22px;
          margin-bottom: 15px;
        }
        .sidebarModal.modal .modal-body .sidebar-content .sidebar-btn {
          margin-top: 25px;
        }
        .sidebarModal.modal .modal-body .sidebar-contact-info {
          margin-top: 30px;
        }
        .sidebarModal.modal .modal-body .sidebar-contact-info h3 {
          font-size: 22px;
          margin-bottom: 0;
        }
        .sidebarModal.modal .modal-body .sidebar-contact-info .info-list {
          padding-left: 0;
          margin-top: 30px;
          margin-bottom: 0;
        }
        .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li {
          list-style-type: none;
          font-size: 14px;
          color: var(--paragraph-color);
          font-weight: 500;
          margin-bottom: 20px;
          position: relative;
          padding-left: 22px;
        }
        .sidebarModal.modal
          .modal-body
          .sidebar-contact-info
          .info-list
          li:last-child {
          margin-bottom: 0;
        }
        .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li a {
          color: var(--paragraph-color);
        }
        .sidebarModal.modal
          .modal-body
          .sidebar-contact-info
          .info-list
          li
          a:hover {
          color: var(--main-color);
        }
        .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li i {
          position: absolute;
          left: 0;
          top: 2px;
          font-size: var(--font-size);
          color: var(--main-color);
        }
        .sidebarModal.modal
          .modal-body
          .sidebar-contact-info
          .info-list
          li
          .ri-mail-line {
          color: #ff414b;
        }
        .sidebarModal.modal
          .modal-body
          .sidebar-contact-info
          .info-list
          li
          .ri-map-pin-line {
          color: #36cc72;
        }
        .sidebarModal.modal .modal-body .sidebar-social-list {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 0;
          margin-top: 30px;
        }
        .sidebarModal.modal .modal-body .sidebar-social-list li {
          display: inline-block;
          margin-right: 8px;
        }
        .sidebarModal.modal .modal-body .sidebar-social-list li:last-child {
          margin-right: 0;
        }
        .sidebarModal.modal .modal-body .sidebar-social-list li i {
          display: inline-block;
          height: 35px;
          width: 35px;
          line-height: 35px;
          background-color: var(--main-color);
          text-align: center;
          color: var(--white-color);
          font-size: var(--font-size);
          border-radius: 50%;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .sidebarModal.modal .modal-body .sidebar-social-list li i:hover {
          -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
          background-color: var(--optional-color);
          color: var(--white-color);
        }

        @media only screen and (max-width: 1199px) {
          .navbar-area {
            background-color: var(--white-color);
            padding-top: 15px;
            padding-bottom: 15px;
          }
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .modal.right .modal-dialog {
            width: 310px;
          }
        }

        @media only screen and (max-width: 550px) {
          .search-overlay .search-overlay-form {
            max-width: 300px;
            width: 300px;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          // Navbar
          .navbar-area {
            padding-top: 10px;
            padding-bottom: 10px;
          }
          .main-navbar {
            padding: 0;
          }
          .main-navbar .navbar .navbar-nav .nav-item {
            margin-left: 9px;
            margin-right: 9px;
          }
          .main-navbar .navbar .navbar-nav .nav-item a {
            font-size: 15px;
            padding-top: 20px;
            padding-bottom: 20px;
          }
          .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu {
            width: 250px;
          }
          .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a {
            font-size: 14px;
            padding: 8px 20px;
          }
          .main-navbar .navbar .others-options .option-item {
            margin-right: 15px;
          }
          .main-navbar .navbar .others-options .option-item .default-btn {
            padding: 10px 40px 10px 20px;
            font-size: 13px;
          }
          .main-navbar .navbar .others-options .option-item .default-btn i {
            right: 20px;
          }
        }

        @media only screen and (max-width: 991px) {
          // Navbar
          .navbar-area {
            box-shadow: 0 0 10px #ddd;
          }
          .main-navbar {
            padding: 0;
          }
          .main-navbar .navbar .navbar-nav {
            border-top: 1px solid #eee;
            overflow-y: auto;
            max-height: 60vh;
            margin-top: 10px !important;
            padding-right: 15px;
            padding-top: 15px;
          }
          .main-navbar .navbar .navbar-nav .nav-item {
            margin: 0;
          }
          .main-navbar .navbar .navbar-nav .nav-item a {
            padding-top: 8px;
            font-size: 15px;
            padding-bottom: 8px;
          }
          .main-navbar .navbar .navbar-nav .nav-item a i {
            display: none;
          }
          .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu {
            position: relative;
            opacity: 1;
            visibility: visible;
            width: 100%;
            margin-top: 10px;
            top: 0 !important;
            border: 1px solid #eee;
            margin-top: 0;
            margin-bottom: 10px;
          }
          .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a {
            padding: 8px 15px;
            font-size: 14px;
          }
          .main-navbar
            .navbar
            .navbar-nav
            .nav-item
            .dropdown-menu
            li
            .dropdown-menu {
            position: relative;
            opacity: 1;
            visibility: visible;
            width: 90%;
            margin-top: 10px;
            top: 0 !important;
            border: 1px solid #eee;
            margin-top: 0;
            margin-bottom: 10px;
            left: 15px;
          }
          .main-navbar .navbar .others-options {
            position: absolute;
            right: 45px;
            top: 5px;
          }
          .main-navbar .navbar .others-options .option-item {
            margin-right: 10px;
          }
          .main-navbar .navbar .others-options .option-item .default-btn {
            padding: 5px 8px;
            font-size: 14px;
            position: relative;
            top: -5.5px;
          }
          .main-navbar .navbar .others-options .option-item .default-btn i {
            display: none;
          }
        }
        @media screen and (max-width: 992px) {
          .lets_talk_btn {
            margin-top: 23px !important;
          }
          .dropdown-menu {
            display: grid !important;
            width: 100% !important;
            padding: 0px !important;
            margin: 0px !important;
          }
          .dropdown-menu li {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
