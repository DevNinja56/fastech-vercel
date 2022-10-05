import React from "react";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect, useRef, useLayoutEffect } from "react";

const MainBanner = () => {
  const isRenderedRef = useRef(false);
  useEffect(() => {
    if (!isRenderedRef.current) {
      var elements = document.getElementsByClassName("txt-rotate");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-rotate");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);

      isRenderedRef.current = true;
    }
  }, []);

  // ------------------------------------------------
  // ------------------------------------------------

  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  // ------------------------------------------------
  // ------------------------------------------------

  return (
    <>
      <div className="main-banner-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="main-banner-content">
                <h1 className="main_heading_step_animation">
                  Fastech offers the Ultimate Digital Transformation for
                  <p />
                  <span
                    className="txt-rotate"
                    data-period="1000"
                    data-rotate='[ "Businesses", "Innovators", "Startups", "Online Stores", "Entrepreneurs" ]'
                  ></span>
                </h1>

                <p>
                  Join a steadfast software development company to take your
                  business to the next level. We create powerful digital
                  solutions for businesses, startups, and entrepreneurs.
                </p>

                <div className="banner-btn">
                  <Link href="/contact">
                    <a className="default-btn">
                      Schedule a Call <i className="ri-arrow-right-line"></i>
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="main-banner-animation-image">
                {/* Do not remove the div, is required! */}
                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img1.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img2.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img3.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img4.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img5.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img6.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img7.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img8.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img9.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img10.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img11.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img12.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img13.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img14.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-img15.png"
                    alt="fastech-image"
                  />
                </div>

                <div>
                  <img
                    src="/images/main-banner/banner-one/fastech-main-pic.png"
                    alt="fastech-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="main-banner-shape-1">
          <img
            src="/images/main-banner/banner-one/fastech-shape-1.png"
            alt="fastech-image"
          />
        </div>
        <div className="main-banner-shape-2">
          <img
            src="/images/main-banner/banner-one/fastech-shape-2.png"
            alt="fastech-image"
          />
        </div>
        <div className="main-banner-shape-3">
          <img
            src="/images/main-banner/banner-one/fastech-shape-3.png"
            alt="fastech-image"
          />
        </div>
        <div className="main-banner-shape-4">
          <img
            src="/images/main-banner/banner-one/fastech-shape-4.png"
            alt="fastech-image"
          />
        </div>
      </div>

      {/* Main Banner Style */}
      <style jsx>{`
        .main_heading_step_animation {
          font-weight: 200;
          margin: 0.4em 0;
          font-size: 3.5em;
        }

        .main-banner-area {
          padding-top: 175px;
          padding-bottom: 175px;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .main-banner-content .tag {
          display: inline-block;
          background-color: #f4f8fc;
          padding: 12px 25px 12px 55px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          position: relative;
        }
        .main-banner-content .tag img {
          position: absolute;
          left: 25px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
        .main-banner-content h1 {
          font-size: 58px;
          margin-top: -200px;
          margin-bottom: 20px;
          font-weight: bold;
        }
        .main-banner-content p {
          margin-bottom: 0;
        }
        .main-banner-content .banner-btn {
          margin-top: 30px;
        }

        // Main banner animation image
        .main-banner-animation-image {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .main-banner-animation-image div {
          position: absolute;
        }
        .main-banner-animation-image div:nth-child(1) {
          left: 0;
          top: 0;
        }
        .main-banner-animation-image div:nth-child(2) {
          left: 90px;
          top: 220px;
          z-index: 1;
        }
        .main-banner-animation-image div:nth-child(3) {
          left: 0;
          top: 220px;
        }
        .main-banner-animation-image div:nth-child(4) {
          left: 45px;
          bottom: 110px;
          z-index: 1;
        }
        .main-banner-animation-image div:nth-child(5) {
          left: 55px;
          bottom: 140px;
          z-index: 1;
        }
        .main-banner-animation-image div:nth-child(6) {
          left: 160px;
          top: 115px;
        }
        .main-banner-animation-image div:nth-child(7) {
          bottom: -120px;
          left: 295px;
        }
        .main-banner-animation-image div:nth-child(8) {
          top: 0;
          left: 280px;
        }
        .main-banner-animation-image div:nth-child(9) {
          z-index: -1;
          right: 0;
          top: -145px;
        }
        .main-banner-animation-image div:nth-child(10) {
          z-index: -1;
          right: 0;
          top: 225px;
        }
        .main-banner-animation-image div:nth-child(11) {
          right: 200px;
          top: 0;
        }
        .main-banner-animation-image div:nth-child(12) {
          right: 0;
          bottom: -35px;
        }
        .main-banner-animation-image div:nth-child(13) {
          right: 0;
          top: -110px;
          z-index: -1;
        }
        .main-banner-animation-image div:nth-child(14) {
          right: 0;
        }
        .main-banner-animation-image div:nth-child(15) {
          right: 300px;
          top: -120px;
          z-index: -1;
        }
        .main-banner-animation-image div:last-child {
          display: none;
        }

        // shape
        .main-banner-shape-1 {
          position: absolute;
          top: 10%;
          left: 35%;
          -webkit-transform: translateY(-10%) translateX(-35%);
          transform: translateY(-10%) translateX(-35%);
        }
        .main-banner-shape-2 {
          position: absolute;
          bottom: 20%;
          left: 35%;
          -webkit-transform: translateY(-20%) translateX(-35%);
          transform: translateY(-20%) translateX(-35%);
        }
        .main-banner-shape-3 {
          position: absolute;
          bottom: 5%;
          left: 50%;
          -webkit-transform: translateY(-5%) translateX(-50%);
          transform: translateY(-5%) translateX(-50%);
        }
        .main-banner-shape-4 {
          position: absolute;
          bottom: 10%;
          left: 50%;
          -webkit-transform: translateY(-10%) translateX(-50%);
          transform: translateY(-10%) translateX(-50%);
        }
        .main-banner-shape-5 {
          position: absolute;
          top: 20%;
          left: 35%;
          -webkit-transform: translateY(-20%) translateX(-35%);
          transform: translateY(-20%) translateX(-35%);
        }
        .main-banner-shape-6 {
          position: absolute;
          top: 25%;
          left: 40%;
          -webkit-transform: translateY(-25%) translateX(-40%);
          transform: translateY(-25%) translateX(-40%);
        }
        .main-banner-shape-7 {
          position: absolute;
          top: 20%;
          right: 15%;
          -webkit-transform: translateY(-20%) translateX(-15%);
          transform: translateY(-20%) translateX(-15%);
        }
        .main-banner-shape-8 {
          position: absolute;
          bottom: 20%;
          left: 38%;
          -webkit-transform: translateY(-20%) translateX(-38%);
          transform: translateY(-20%) translateX(-38%);
        }

        // Responsive Style
        @media only screen and (max-width: 767px) {
          .main-banner-area {
            padding-top: 60px;
            padding-bottom: 60px;
          }
          .main-banner-content {
            text-align: center;
          }
          .main-banner-content h1 {
            font-size: 30px;
          }
          .main-banner-content p {
            font-size: 15px;
          }
          .main-banner-animation-image {
            margin-top: 35px;
            text-align: center;
          }
          .main-banner-animation-image div {
            position: relative;
          }
          .main-banner-animation-image div:nth-child(1) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(2) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(3) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(4) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(5) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(6) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(7) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(8) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(9) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(10) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(11) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(12) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(13) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(14) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(15) {
            display: none;
          }
          .main-banner-animation-image div:last-child {
            display: block;
          }
          .main-banner-shape-1 {
            display: none;
          }
          .main-banner-shape-2 {
            display: none;
          }
          .main-banner-shape-3 {
            display: none;
          }
          .main-banner-shape-4 {
            display: none;
          }
          .main-banner-shape-5 {
            display: none;
          }
          .main-banner-shape-6 {
            display: none;
          }
          .main-banner-shape-7 {
            display: none;
          }
          .main-banner-shape-8 {
            display: none;
          }
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          .main-banner-area {
            padding-top: 80px;
            padding-bottom: 80px;
          }
          .main-banner-content {
            text-align: center;
          }
          .main-banner-content h1 {
            font-size: 50px;
          }
          .main-banner-content p {
            font-size: 15px;
          }
          .main-banner-animation-image {
            margin-top: 45px;
            text-align: center;
          }
          .main-banner-animation-image div {
            position: relative;
          }
          .main-banner-animation-image div:nth-child(1) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(2) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(3) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(4) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(5) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(6) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(7) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(8) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(9) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(10) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(11) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(12) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(13) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(14) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(15) {
            display: none;
          }
          .main-banner-animation-image div:last-child {
            display: block;
          }
          .main-banner-shape-1 {
            display: none;
          }
          .main-banner-shape-2 {
            display: none;
          }
          .main-banner-shape-3 {
            display: none;
          }
          .main-banner-shape-4 {
            display: none;
          }
          .main-banner-shape-5 {
            display: none;
          }
          .main-banner-shape-6 {
            display: none;
          }
          .main-banner-shape-7 {
            display: none;
          }
          .main-banner-shape-8 {
            display: none;
          }
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          .main-banner-area {
            padding-top: 100px;
            padding-bottom: 100px;
          }
          .main-banner-content h1 {
            font-size: 35px;
          }
          .main-banner-content p {
            font-size: 15px;
          }
          .main-banner-animation-image {
            text-align: center;
          }
          .main-banner-animation-image div {
            position: relative;
          }
          .main-banner-animation-image div:nth-child(1) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(2) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(3) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(4) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(5) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(6) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(7) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(8) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(9) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(10) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(11) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(12) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(13) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(14) {
            display: none;
          }
          .main-banner-animation-image div:nth-child(15) {
            display: none;
          }
          .main-banner-animation-image div:last-child {
            display: block;
          }
        }

        @media only screen and (min-width: 1200px) and (max-width: 1399px) {
          .main-banner-area {
            padding-top: 260px;
            padding-bottom: 260px;
          }
          .main-banner-content h1 {
            font-size: 45px;
          }
          .main-banner-content p {
            font-size: 15px;
          }
          .main-banner-animation-image div:nth-child(4) {
            bottom: 55px;
          }
          .main-banner-animation-image div:nth-child(5) {
            bottom: 80px;
          }
          .main-banner-animation-image div:nth-child(7) {
            bottom: -170px;
          }
          .main-banner-animation-image div:nth-child(8) {
            top: -60px;
            left: 170px;
          }
          .main-banner-animation-image div:nth-child(9) {
            top: -200px;
          }
          .main-banner-animation-image div:nth-child(10) {
            top: 140px;
          }
          .main-banner-animation-image div:nth-child(11) {
            right: 190px;
            top: -146px;
          }
          .main-banner-animation-image div:nth-child(12) {
            right: 0;
            bottom: -5px;
          }
          .main-banner-animation-image div:nth-child(13) {
            top: -180px;
          }
        }

        @media only screen and (min-width: 1600px) {
          .main-banner-area {
            padding-top: 220px;
            padding-bottom: 220px;
          }
        }

        @media only screen and (max-width: 1200px) {
          .main-banner-content h1 {
            margin-top: 70px !important;
          }
        }
        @media only screen and (max-width: 2652px) {
          .main-banner-content h1 {
            margin-top: -70px;
          }
        }

        @media only screen and (max-width: 1399px) {
          .main-banner-content h1 {
            margin-top: -100px;
          }
        }

        @media only screen and (max-width: 990px) {
          .main-banner-content h1 {
            margin-top: 0px !important;
          }
        }
      `}</style>
    </>
  );
};

export default MainBanner;
