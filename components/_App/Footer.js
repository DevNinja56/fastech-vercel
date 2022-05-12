import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <div className="widget-logo">
                  <Link href="/">
                    <a>
                      <img
                        className="logo_main"
                        src="/images/logo.png"
                        alt="image"
                      />
                    </a>
                  </Link>
                </div>
                <p>
                  Fastech offers software development consulting services for
                  businesses, startups, and enterprises. Partner with a reliable
                  software development company to scale up your engineering
                  capacity.
                </p>

                <ul className="widget-info">
                  <li>
                    <i className="ri-customer-service-line"></i>
                    <a href="tel:3128959800">+92 (310) 458 2456</a>
                  </li>

                  <li>
                    <i className="ri-global-line"></i>
                    <a href="mailto:info@thefastech.com">info@thefastech.com</a>
                  </li>

                  <li>
                    <i className="ri-map-pin-line"></i>
                    Office no. 526, 5th Floor Siddiq Trade Center, Lahore
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6 pl-5">
              <div className="single-footer-widget">
                <h3>Services</h3>

                <ul className="footer-links-list">
                  <li>
                    <Link href="/web-design-development">
                      <a>Web Design & Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Mobile App Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Software Project Management</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Softeare Quality Assurance</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>UI/UX Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Dev Ops</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Quick Link</h3>

                <ul className="footer-links-list">
                  <li>
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                  {/* <li>
                                        <Link href="/case-study">
                                            <a>Case Study</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/gallery">
                                            <a>Gallery</a>
                                        </Link>
                                    </li> */}
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>Faq’s</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">
                      <a>Terms of Service</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Newsletter</h3>

                <div className="widget-newsletter">
                  {/* <div className="newsletter-content">
                                        <p>Best solution for your it startup business consectetur adipiscing elit.</p>
                                    </div> */}

                  <form className="newsletter-form">
                    <input
                      type="email"
                      className="input-newsletter"
                      placeholder="Enter email"
                      name="EMAIL"
                      required
                    />

                    <button type="submit" className="submit">
                      <i className="ri-send-plane-2-line"></i>
                    </button>
                  </form>
                </div>

                <ul className="widget-social">
                  <li>
                    <a
                      href="https://www.facebook.com/theafastech"
                      target="_blank"
                    >
                      <i className="ri-facebook-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Fastech5" target="_blank">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/thefastech"
                      target="_blank"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-skype"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyright © {currentYear} All Rights Reserved | Developed by{" "}
                <span className="footer_name">Fastech</span>
              </p>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="footer-shape-1">
          <img src="/images/footer/shape-1.png" alt="image" />
        </div>
        <div className="footer-shape-2">
          <img src="/images/footer/shape-2.png" alt="image" />
        </div>
        <div className="footer-shape-3">
          <img src="/images/footer/shape-3.png" alt="image" />
        </div>
        <div className="footer-shape-4">
          <img src="/images/footer/shape-4.png" alt="image" />
        </div>
        <div className="footer-shape-5">
          <img src="/images/footer/shape-5.png" alt="image" />
        </div>
      </footer>

      {/* Footer Style */}
      <style jsx>{`
        .submit:hover {
          background-color: #171e29 !important;
        }
        .footer_name {
          color: #1f69f6;
          font-weight: bold;
          cursor: pointer;
        }
        .footer_name:hover {
          color: #171e29;
          transition: 1s;
        }
        .logo_main {
          width: 8rem;
          margin-top: -20px;
        }
        .footer-area {
          background-color: #f4f8fc;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .single-footer-widget {
          margin-bottom: 30px;
        }
        .single-footer-widget .widget-logo {
          margin-bottom: 0px;
        }
        .single-footer-widget p {
          margin-bottom: 0;
        }
        .single-footer-widget .widget-info {
          padding-left: 0;
          margin-top: 20px;
          margin-bottom: 0;
        }
        .single-footer-widget .widget-info li {
          list-style-type: none;
          margin-bottom: 15px;
          position: relative;
          padding-left: 22px;
        }
        .single-footer-widget .widget-info li i {
          position: absolute;
          left: 0;
          top: 4px;
          color: var(--main-color);
        }
        .single-footer-widget .widget-info li .ri-global-line {
          color: #ff414b;
        }
        .single-footer-widget .widget-info li .ri-map-pin-line {
          color: #36cc72;
        }
        .single-footer-widget .widget-info li:last-child {
          margin-bottom: 0;
        }
        .single-footer-widget h3 {
          margin-bottom: 25px;
          font-size: 22px;
        }
        .single-footer-widget .footer-links-list {
          padding-left: 0;
          margin-bottom: 0;
          list-style-type: none;
        }
        .single-footer-widget .footer-links-list li {
          margin-bottom: 10px;
        }
        .single-footer-widget .footer-links-list li a {
          color: var(--paragraph-color);
          display: inline-block;
        }
        .single-footer-widget .footer-links-list li a:hover {
          color: var(--main-color);
          letter-spacing: 1px;
        }
        .single-footer-widget .footer-links-list li:last-child {
          margin-bottom: 0;
        }
        .single-footer-widget .widget-newsletter .newsletter-content {
          margin-bottom: 20px;
        }
        .single-footer-widget .widget-newsletter .newsletter-content p {
          font-size: var(--font-size);
          margin-bottom: 0;
        }
        .single-footer-widget .widget-newsletter .newsletter-form {
          margin-top: 30px;
          position: relative;
        }
        .single-footer-widget
          .widget-newsletter
          .newsletter-form
          .input-newsletter {
          display: block;
          width: 100%;
          background-color: var(--white-color);
          border: 1px solid var(--main-color);
          height: 60px;
          padding: 15px;
          border-radius: 5px;
          outline: 0;
          color: var(--black-color);
        }
        .single-footer-widget
          .widget-newsletter
          .newsletter-form
          .input-newsletter:focus::-webkit-input-placeholder {
          color: transparent;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }

        .single-footer-widget
          .widget-newsletter
          .newsletter-form
          .input-newsletter:focus:-ms-input-placeholder {
          color: transparent;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-footer-widget
          .widget-newsletter
          .newsletter-form
          .input-newsletter:focus::-ms-input-placeholder {
          color: transparent;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-footer-widget
          .widget-newsletter
          .newsletter-form
          .input-newsletter:focus::placeholder {
          color: transparent;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-footer-widget .widget-newsletter .newsletter-form button {
          position: absolute;
          right: 0;
          top: 0;
          height: 60px;
          width: 70px;
          line-height: 65px;
          background-color: var(--main-color);
          border: none;
          -webkit-transition: var(--transition);
          transition: var(--transition);
          color: var(--white-color);
          border-radius: 0 5px 5px 0;
          font-size: 25px;
        }
        .single-footer-widget .widget-newsletter .newsletter-form button:hover,
        .single-footer-widget .widget-newsletter .newsletter-form button:focus {
          background-color: var(--optional-color);
          color: var(--white-color);
        }
        .single-footer-widget
          .widget-newsletter
          .newsletter-form
          #validator-newsletter {
          color: red;
          margin-top: 10px;
          font-weight: 400;
          font-size: 15px;
        }
        .single-footer-widget .widget-social {
          padding-left: 0;
          margin-bottom: 0;
          margin-top: 30px;
        }
        .single-footer-widget .widget-social li {
          display: inline-block;
          list-style-type: none;
          margin-bottom: 0;
          margin-right: 10px;
        }
        .single-footer-widget .widget-social li:last-child {
          margin-right: 0;
        }

        .single-footer-widget .widget-social li i {
          display: inline-block;
          height: 40px;
          width: 40px;
          line-height: 40px;
          background-color: var(--white-color);
          color: var(--main-color);
          -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
          border-radius: 50px;
          text-align: center;
          font-size: 18px;
          -webkit-transition: var(--transition);
          transition: var(--transition);
        }
        .single-footer-widget .widget-social li i:hover {
          background-color: var(--main-color);
          color: var(--white-color);
          -webkit-transform: translateY(-5px);
          transform: translateY(-5px);
        }

        // Shape Images
        .footer-shape-1 {
          position: absolute;
          top: 40%;
          left: 5%;
          -webkit-transform: translateY(-40%) translateX(-5%);
          transform: translateY(-40%) translateX(-5%);
          z-index: -1;
          opacity: 50%;
        }
        .footer-shape-2 {
          position: absolute;
          top: 45%;
          left: 10%;
          -webkit-transform: translateY(-45%) translateX(-10%);
          transform: translateY(-45%) translateX(-10%);
          z-index: -1;
          opacity: 50%;
        }
        .footer-shape-3 {
          position: absolute;
          bottom: 25%;
          left: 40%;
          -webkit-transform: translateY(-25%) translateX(-40%);
          transform: translateY(-25%) translateX(-40%);
          z-index: -1;
        }
        .footer-shape-4 {
          position: absolute;
          bottom: 23%;
          right: 20%;
          -webkit-transform: translateY(-23%) translateX(-23%);
          transform: translateY(-23%) translateX(-23%);
          z-index: -1;
        }
        .footer-shape-5 {
          position: absolute;
          top: 10%;
          right: 5%;
          -webkit-transform: translateY(-10%) translateX(-5%);
          transform: translateY(-10%) translateX(-5%);
          z-index: -1;
        }

        // copyright-area
        .copyright-area {
          margin-top: 70px;
          padding-bottom: 35px;
        }
        .copyright-area .copyright-area-content {
          text-align: center;
          background-color: var(--white-color);
          padding: 30px;
          border-radius: 5px;
        }
        .copyright-area .copyright-area-content p a {
          display: inline-block;
          font-weight: 600;
          color: var(--main-color);
        }
        .copyright-area .copyright-area-content p a:hover {
          color: var(--optional-color);
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .single-footer-widget h3 {
            margin-bottom: 15px;
          }
          .footer-shape-1 {
            display: none;
          }
          .footer-shape-2 {
            display: none;
          }
          .footer-shape-3 {
            display: none;
          }
          .footer-shape-4 {
            display: none;
          }
          .footer-shape-5 {
            display: none;
          }
          .copyright-area {
            margin-top: 20px;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .footer-shape-1 {
            display: none;
          }
          .footer-shape-2 {
            display: none;
          }
          .footer-shape-3 {
            display: none;
          }
          .footer-shape-4 {
            display: none;
          }
          .footer-shape-5 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .single-footer-widget p {
            margin-bottom: 0;
            font-size: 15px;
          }
          .single-footer-widget .widget-info li {
            font-size: 15px;
          }
          .single-footer-widget .footer-links-list li {
            font-size: 15px;
          }
          .single-footer-widget .widget-newsletter .newsletter-content p {
            font-size: 15px;
          }

          .footer-shape-1 {
            display: none;
          }
          .footer-shape-2 {
            display: none;
          }
          .footer-shape-3 {
            display: none;
          }
          .footer-shape-4 {
            display: none;
          }
          .footer-shape-5 {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
