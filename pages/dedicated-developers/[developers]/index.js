import React from "react";
import Link from "next/link";
import CTA from "../../../components/Common/CTA";
import { DevelopersApi } from "../../../api-developers/index";

export async function getStaticPaths() {
  const paths = DevelopersApi?.map((obj) => ({
    params: { developers: obj.slug },
  }));
  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps(context) {
  const dataId = context.params.developers;
  let developersData = DevelopersApi;
  return {
    props: {
      developersData,
      dataId,
    },
  };
}

const DevelopersDetail = ({ developersData, dataId }) => {
  return (
    <>
      {/* banner  */}
      <div className="main-banner-area">
        <div className="container">
          <div className="row">
            {developersData?.map((obj) => {
              if (obj.slug === dataId) {
                return (
                  <>
                    <div className="col-lg-5 col-md-12">
                      <div className="main-banner-content">
                        <h1 className="main_heading_step_animation">
                          {obj.heading}
                        </h1>

                        <p>{obj.paragraph}</p>

                        <div className="banner-btn">
                          <Link href="/contact">
                            <a className="default-btn">
                              Schedule a Call{" "}
                              <i className="ri-arrow-right-line"></i>
                              <span></span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                      <div className="main-banner-animation-image">
                        {/* Do not remove the div, is required! */}
                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div className="">
                          <img src={obj.banner_img} alt="image" />
                        </div>

                        <div></div>

                        <div></div>

                        <div></div>

                        <div>
                          <img src={obj.banner_img} alt="image" />
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>

        {/* Shape Images */}
        <div className="main-banner-shape-1">
          <img
            src="/images/main-banner/banner-one/ragzon-shape-1.png"
            alt="image"
          />
        </div>
        <div className="main-banner-shape-2">
          <img
            src="/images/main-banner/banner-one/ragzon-shape-2.png"
            alt="image"
          />
        </div>
        <div className="main-banner-shape-3">
          <img
            src="/images/main-banner/banner-one/ragzon-shape-3.png"
            alt="image"
          />
        </div>
        <div className="main-banner-shape-4">
          <img
            src="/images/main-banner/banner-one/ragzon-shape-4.png"
            alt="image"
          />
        </div>

        {/* Main Banner Style */}
        <style jsx>{`
          .Deve_Cta {
            margin-bottom: 90px;
          }

          .links_colors:hover {
            background-color: #1f69f6 !important;
          }
          .cases-area {
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
          .single-cases {
            margin-bottom: 30px;
          }
          .single-cases .cases-image {
            overflow: hidden;
          }
          .single-cases .cases-image img {
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-cases .cases-content {
            margin-top: 30px;
          }
          .single-cases .cases-content .tags a {
            color: var(--main-color);
            padding: 5px 15px;
            display: inline-block;
            background-color: #eaf0ff;
            font-size: 14px;
            font-weight: 500;
            border-radius: 5px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
            margin-right: 15px;
          }
          .single-cases .cases-content .tags a:last-child {
            margin-right: 0;
          }
          .single-cases .cases-content .tags a:hover {
            background-color: var(--main-color);
            color: var(--white-color);
          }
          .single-cases .cases-content h3 {
            font-size: 25px;
            margin-top: 25px;
            margin-bottom: 15px;
          }
          .single-cases .cases-content h3 a {
            position: relative;
          }
          .single-cases .cases-content h3 a::before {
            content: "";
            position: absolute;
            width: 0%;
            height: 100%;
            left: 0;
            top: 0;
            border-bottom: 1px solid var(--main-color);
            -webkit-transition: var(--transition);
            transition: var(--transition);
            z-index: -1;
          }
          .single-cases:hover .cases-image img {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
          }
          .single-cases:hover .cases-content h3 a {
            color: var(--main-color);
          }
          .single-cases:hover .cases-content h3 a::before {
            width: 100%;
          }

          // Cases View Button
          .cases-view-all-btn {
            text-align: center;
            margin-top: 15px;
          }
          .cases-view-all-btn .default-btn {
            color: white;
            background-color: #1f69f6;
          }
          .cases-view-all-btn .default-btn span {
            background-color: #171e29;
          }
          .cases-view-all-btn .default-btn:hover {
            color: var(--white-color);
          }

          // shape
          .cases-shape-1 {
            position: absolute;
            top: 5%;
            right: 18%;
            -webkit-transform: translateY(-5%) translateX(-18%);
            transform: translateY(-5%) translateX(-18%);
          }
          .cases-shape-2 {
            position: absolute;
            bottom: 8%;
            right: 12%;
            -webkit-transform: translateY(-8%) translateX(-12%);
            transform: translateY(-8%) translateX(-12%);
          }
          .cases-shape-3 {
            position: absolute;
            top: 45%;
            right: 0;
            -webkit-transform: translateY(-45%);
            transform: translateY(-45%);
          }
          .cases-shape-4 {
            position: absolute;
            top: 45%;
            left: 2%;
            -webkit-transform: translateY(-45%) translateX(-2%);
            transform: translateY(-45%) translateX(-2%);
            z-index: -1;
          }
          .cases-shape-5 {
            position: absolute;
            top: 48%;
            left: 2%;
            -webkit-transform: translateY(-48%) translateX(-2%);
            transform: translateY(-48%) translateX(-2%);
            z-index: -1;
          }
          .cases-shape-6 {
            position: absolute;
            top: 45%;
            left: 50%;
            -webkit-transform: translateY(-45%) translateX(-50%);
            transform: translateY(-45%) translateX(-50%);
            z-index: -1;
            opacity: 35%;
          }
          .cases-shape-7 {
            position: absolute;
            top: 46%;
            left: 52%;
            -webkit-transform: translateY(-46%) translateX(-52%);
            transform: translateY(-46%) translateX(-52%);
            z-index: -1;
            opacity: 35%;
          }

          // Responsive Style
          @media only screen and (max-width: 767px) {
            .single-cases .cases-content h3 {
              font-size: 22px;
              margin-top: 20px;
              margin-bottom: 10px;
              line-height: 1.4;
            }
            .cases-shape-1 {
              display: none;
            }
            .cases-shape-2 {
              display: none;
            }
            .cases-shape-3 {
              display: none;
            }
            .cases-shape-4 {
              display: none;
            }
            .cases-shape-5 {
              display: none;
            }
            .cases-shape-6 {
              display: none;
            }
            .cases-shape-7 {
              display: none;
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .cases-shape-1 {
              display: none;
            }
            .cases-shape-2 {
              display: none;
            }
            .cases-shape-3 {
              display: none;
            }
            .cases-shape-4 {
              display: none;
            }
            .cases-shape-5 {
              display: none;
            }
            .cases-shape-6 {
              display: none;
            }
            .cases-shape-7 {
              display: none;
            }
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .single-cases .cases-content h3 {
              font-size: 23px;
              margin-bottom: 15px;
            }
            .cases-shape-1 {
              display: none;
            }
            .cases-shape-2 {
              display: none;
            }
            .cases-shape-3 {
              display: none;
            }
            .cases-shape-4 {
              display: none;
            }
            .cases-shape-5 {
              display: none;
            }
            .cases-shape-6 {
              display: none;
            }
            .cases-shape-7 {
              display: none;
            }
          }

          .services-area {
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
          .single-services {
            margin-bottom: 30px;
            padding: 35px;
            border-radius: 5px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
            border: 1px solid #eeeeee;
          }
          .single-services .icon {
            margin-bottom: 25px;
          }
          .single-services .icon i {
            display: inline-block;
            height: 80px;
            width: 80px;
            line-height: 80px;
            background-color: #e5f0ff;
            color: var(--main-color);
            text-align: center;
            font-size: 45px;
            border-radius: 5px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-services .icon.bg-36CC72 i {
            background-color: #ebfaf1;
            color: #36cc72;
          }
          .single-services .icon.bg-FF414B i {
            background-color: #ffeced;
            color: #ff414b;
          }
          .single-services .icon.bg-FF6D3D i {
            background-color: #fff0ec;
            color: #ff6d3d;
          }
          .single-services .icon.bg-8932F8 i {
            background-color: #f3ebfe;
            color: #8932f8;
          }
          .single-services .icon.bg-FFCA40 i {
            background-color: #fffaec;
            color: #ffca40;
          }
          .single-services h3 {
            margin-bottom: 15px;
          }
          .single-services h3 a {
            color: var(--black-color);
            font-size: 25px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-services p {
            margin-bottom: 15px;
            font-size: 15px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-services .services-btn {
            font-size: 15px;
            font-weight: 500;
            position: relative;
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-services .services-btn i {
            position: absolute;
            right: -20px;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            font-size: 15px;
          }
          .single-services:hover {
            background-color: var(--white-color);
            -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
          }
          .single-services:hover .icon i {
            background-color: var(--main-color);
            color: var(--white-color);
          }
          .single-services:hover .icon.bg-36CC72 i {
            background-color: #36cc72;
          }
          .single-services:hover .icon.bg-FF414B i {
            background-color: #ff414b;
          }
          .single-services:hover .icon.bg-FF6D3D i {
            background-color: #ff6d3d;
          }
          .single-services:hover .icon.bg-8932F8 i {
            background-color: #8932f8;
          }
          .single-services:hover .icon.bg-FFCA40 i {
            background-color: #ffca40;
          }
          .single-services:hover h3 a {
            color: var(--main-color);
          }
          .single-services:hover .services-btn {
            color: var(--main-color);
            letter-spacing: 1px;
          }

          // shape
          .services-shape-1 {
            position: absolute;
            top: 20%;
            left: 45%;
            -webkit-transform: translateY(-20%) translateX(-45%);
            transform: translateY(-20%) translateX(-45%);
            z-index: 1;
          }
          .services-shape-2 {
            position: absolute;
            top: 15%;
            left: 45%;
            -webkit-transform: translateY(-15%) translateX(-45%);
            transform: translateY(-15%) translateX(-45%);
            z-index: 1;
          }
          .services-shape-3 {
            position: absolute;
            top: 45%;
            left: 2%;
            -webkit-transform: translateY(-45%) translateX(-2%);
            transform: translateY(-45%) translateX(-2%);
            z-index: -1;
          }
          .services-shape-4 {
            position: absolute;
            top: 45%;
            right: 0%;
            -webkit-transform: translateY(-45%) translateX(-5%);
            transform: translateY(-45%) translateX(-5%);
            z-index: -1;
          }
          .services-shape-5 {
            position: absolute;
            bottom: 10%;
            left: 35%;
            -webkit-transform: translateY(-10%) translateX(-35%);
            transform: translateY(-10%) translateX(-35%);
            z-index: 1;
          }

          // Responsive Style
          @media only screen and (max-width: 767px) {
            .single-services {
              padding: 30px 15px;
              text-align: center;
            }
            .single-services .icon {
              margin-bottom: 30px;
            }
            .single-services h3 a {
              font-size: 20px;
            }
            .services-shape-1 {
              display: none;
            }
            .services-shape-2 {
              display: none;
            }
            .services-shape-3 {
              display: none;
            }
            .services-shape-4 {
              display: none;
            }
            .services-shape-5 {
              display: none;
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .single-services {
              padding: 30px 20px;
            }
            .single-services .icon {
              margin-bottom: 30px;
            }
            .single-services h3 a {
              font-size: 20px;
            }
            .services-shape-1 {
              display: none;
            }
            .services-shape-2 {
              display: none;
            }
            .services-shape-3 {
              display: none;
            }
            .services-shape-4 {
              display: none;
            }
            .services-shape-5 {
              display: none;
            }
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .single-services {
              padding: 35px 20px;
            }
            .single-services h3 a {
              font-size: 20px;
            }
            .services-shape-1 {
              display: none;
            }
            .services-shape-2 {
              display: none;
            }
            .services-shape-3 {
              display: none;
            }
            .services-shape-4 {
              display: none;
            }
            .services-shape-5 {
              display: none;
            }
          }

          @media only screen and (min-width: 1200px) and (max-width: 1399px) {
            .single-services {
              padding: 30px;
            }
            .single-services h3 a {
              font-size: 24px;
            }
          }

          .main_heading_step_animation {
            font-weight: 200;
            margin: 0.4em 0;
            font-size: 3.5em;
          }

          .main-banner-area {
            padding-top: 380px;
            padding-bottom: 0px;
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
            font-size: 60px;
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
              padding-top: 0px;
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
              padding-top: 0px;
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
              padding-top: 0px;
              padding-bottom: 0px;
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
              padding-top: 415px;
              padding-bottom: 0px;
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
              padding-top: 380px;
              padding-bottom: 20px;
            }
          }
          @media only screen and (max-width: 992px) {
            .main-banner-content h1 {
              margin-top: 50px !important;
            }
          }
          @media only screen and (max-width: 1200px) {
            .main-banner-content h1 {
              margin-top: 100px;
            }
          }
        `}</style>
      </div>

      {/* services  */}
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="row mt-5 mb-5">
            {developersData?.map((obj) => {
              if (obj.slug === dataId) {
                return (
                  <>
                    <div className="col-12 text-center mb-5">
                      <h1>{obj.service_Heading}</h1>
                    </div>
                  </>
                );
              }
            })}
          </div>
          <div className="row justify-content-center">
            {developersData
              .filter((item) => item.slug === dataId)[0]
              .Services?.map((data) => (
                <>
                  <div className="col-lg-4 col-md-6">
                    <div className="single-services">
                      <div className={data.colorClases}>
                        <i className={data.iconPath}></i>
                      </div>
                      <h3>
                        <Link href="#">
                          <a>{data.heading}</a>
                        </Link>
                      </h3>
                      <p>{data.paragraph}</p>

                      <Link href="#">
                        <a className="services-btn">
                          Read More <i className="ri-arrow-right-line"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img src="/images/services/ragzon-shape-1.png" alt="image" />
        </div>
        <div className="services-shape-2">
          <img src="/images/services/ragzon-shape-2.png" alt="image" />
        </div>
        <div className="services-shape-3">
          <img src="/images/services/ragzon-shape-3.png" alt="image" />
        </div>
        <div className="services-shape-4">
          <img src="/images/services/ragzon-shape-4.png" alt="image" />
        </div>

        <style jsx>{`
          .Deve_Cta {
            margin-bottom: 90px;
          }

          .links_colors:hover {
            background-color: #1f69f6 !important;
          }
          .cases-area {
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
          .single-cases {
            margin-bottom: 30px;
          }
          .single-cases .cases-image {
            overflow: hidden;
          }
          .single-cases .cases-image img {
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-cases .cases-content {
            margin-top: 30px;
          }
          .single-cases .cases-content .tags a {
            color: var(--main-color);
            padding: 5px 15px;
            display: inline-block;
            background-color: #eaf0ff;
            font-size: 14px;
            font-weight: 500;
            border-radius: 5px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
            margin-right: 15px;
          }
          .single-cases .cases-content .tags a:last-child {
            margin-right: 0;
          }
          .single-cases .cases-content .tags a:hover {
            background-color: var(--main-color);
            color: var(--white-color);
          }
          .single-cases .cases-content h3 {
            font-size: 25px;
            margin-top: 25px;
            margin-bottom: 15px;
          }
          .single-cases .cases-content h3 a {
            position: relative;
          }
          .single-cases .cases-content h3 a::before {
            content: "";
            position: absolute;
            width: 0%;
            height: 100%;
            left: 0;
            top: 0;
            border-bottom: 1px solid var(--main-color);
            -webkit-transition: var(--transition);
            transition: var(--transition);
            z-index: -1;
          }
          .single-cases:hover .cases-image img {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
          }
          .single-cases:hover .cases-content h3 a {
            color: var(--main-color);
          }
          .single-cases:hover .cases-content h3 a::before {
            width: 100%;
          }

          // Cases View Button
          .cases-view-all-btn {
            text-align: center;
            margin-top: 15px;
          }
          .cases-view-all-btn .default-btn {
            color: white;
            background-color: #1f69f6;
          }
          .cases-view-all-btn .default-btn span {
            background-color: #171e29;
          }
          .cases-view-all-btn .default-btn:hover {
            color: var(--white-color);
          }

          // shape
          .cases-shape-1 {
            position: absolute;
            top: 5%;
            right: 18%;
            -webkit-transform: translateY(-5%) translateX(-18%);
            transform: translateY(-5%) translateX(-18%);
          }
          .cases-shape-2 {
            position: absolute;
            bottom: 8%;
            right: 12%;
            -webkit-transform: translateY(-8%) translateX(-12%);
            transform: translateY(-8%) translateX(-12%);
          }
          .cases-shape-3 {
            position: absolute;
            top: 45%;
            right: 0;
            -webkit-transform: translateY(-45%);
            transform: translateY(-45%);
          }
          .cases-shape-4 {
            position: absolute;
            top: 45%;
            left: 2%;
            -webkit-transform: translateY(-45%) translateX(-2%);
            transform: translateY(-45%) translateX(-2%);
            z-index: -1;
          }
          .cases-shape-5 {
            position: absolute;
            top: 48%;
            left: 2%;
            -webkit-transform: translateY(-48%) translateX(-2%);
            transform: translateY(-48%) translateX(-2%);
            z-index: -1;
          }
          .cases-shape-6 {
            position: absolute;
            top: 45%;
            left: 50%;
            -webkit-transform: translateY(-45%) translateX(-50%);
            transform: translateY(-45%) translateX(-50%);
            z-index: -1;
            opacity: 35%;
          }
          .cases-shape-7 {
            position: absolute;
            top: 46%;
            left: 52%;
            -webkit-transform: translateY(-46%) translateX(-52%);
            transform: translateY(-46%) translateX(-52%);
            z-index: -1;
            opacity: 35%;
          }

          // Responsive Style
          @media only screen and (max-width: 767px) {
            .single-cases .cases-content h3 {
              font-size: 22px;
              margin-top: 20px;
              margin-bottom: 10px;
              line-height: 1.4;
            }
            .cases-shape-1 {
              display: none;
            }
            .cases-shape-2 {
              display: none;
            }
            .cases-shape-3 {
              display: none;
            }
            .cases-shape-4 {
              display: none;
            }
            .cases-shape-5 {
              display: none;
            }
            .cases-shape-6 {
              display: none;
            }
            .cases-shape-7 {
              display: none;
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .cases-shape-1 {
              display: none;
            }
            .cases-shape-2 {
              display: none;
            }
            .cases-shape-3 {
              display: none;
            }
            .cases-shape-4 {
              display: none;
            }
            .cases-shape-5 {
              display: none;
            }
            .cases-shape-6 {
              display: none;
            }
            .cases-shape-7 {
              display: none;
            }
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .single-cases .cases-content h3 {
              font-size: 23px;
              margin-bottom: 15px;
            }
            .cases-shape-1 {
              display: none;
            }
            .cases-shape-2 {
              display: none;
            }
            .cases-shape-3 {
              display: none;
            }
            .cases-shape-4 {
              display: none;
            }
            .cases-shape-5 {
              display: none;
            }
            .cases-shape-6 {
              display: none;
            }
            .cases-shape-7 {
              display: none;
            }
          }

          .services-area {
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
          .single-services {
            margin-bottom: 30px;
            padding: 35px;
            border-radius: 5px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
            border: 1px solid #eeeeee;
          }
          .single-services .icon {
            margin-bottom: 25px;
          }
          .single-services .icon i {
            display: inline-block;
            height: 80px;
            width: 80px;
            line-height: 80px;
            background-color: #e5f0ff;
            color: var(--main-color);
            text-align: center;
            font-size: 45px;
            border-radius: 5px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-services .icon.bg-36CC72 i {
            background-color: #ebfaf1;
            color: #36cc72;
          }
          .single-services .icon.bg-FF414B i {
            background-color: #ffeced;
            color: #ff414b;
          }
          .single-services .icon.bg-FF6D3D i {
            background-color: #fff0ec;
            color: #ff6d3d;
          }
          .single-services .icon.bg-8932F8 i {
            background-color: #f3ebfe;
            color: #8932f8;
          }
          .single-services .icon.bg-FFCA40 i {
            background-color: #fffaec;
            color: #ffca40;
          }
          .single-services h3 {
            margin-bottom: 15px;
          }
          .single-services h3 a {
            color: var(--black-color);
            font-size: 25px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-services p {
            margin-bottom: 15px;
            font-size: 15px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-services .services-btn {
            font-size: 15px;
            font-weight: 500;
            position: relative;
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-services .services-btn i {
            position: absolute;
            right: -20px;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            font-size: 15px;
          }
          .single-services:hover {
            background-color: var(--white-color);
            -webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
          }
          .single-services:hover .icon i {
            background-color: var(--main-color);
            color: var(--white-color);
          }
          .single-services:hover .icon.bg-36CC72 i {
            background-color: #36cc72;
          }
          .single-services:hover .icon.bg-FF414B i {
            background-color: #ff414b;
          }
          .single-services:hover .icon.bg-FF6D3D i {
            background-color: #ff6d3d;
          }
          .single-services:hover .icon.bg-8932F8 i {
            background-color: #8932f8;
          }
          .single-services:hover .icon.bg-FFCA40 i {
            background-color: #ffca40;
          }
          .single-services:hover h3 a {
            color: var(--main-color);
          }
          .single-services:hover .services-btn {
            color: var(--main-color);
            letter-spacing: 1px;
          }

          // shape
          .services-shape-1 {
            position: absolute;
            top: 20%;
            left: 45%;
            -webkit-transform: translateY(-20%) translateX(-45%);
            transform: translateY(-20%) translateX(-45%);
            z-index: 1;
          }
          .services-shape-2 {
            position: absolute;
            top: 15%;
            left: 45%;
            -webkit-transform: translateY(-15%) translateX(-45%);
            transform: translateY(-15%) translateX(-45%);
            z-index: 1;
          }
          .services-shape-3 {
            position: absolute;
            top: 45%;
            left: 2%;
            -webkit-transform: translateY(-45%) translateX(-2%);
            transform: translateY(-45%) translateX(-2%);
            z-index: -1;
          }
          .services-shape-4 {
            position: absolute;
            top: 45%;
            right: 0%;
            -webkit-transform: translateY(-45%) translateX(-5%);
            transform: translateY(-45%) translateX(-5%);
            z-index: -1;
          }
          .services-shape-5 {
            position: absolute;
            bottom: 10%;
            left: 35%;
            -webkit-transform: translateY(-10%) translateX(-35%);
            transform: translateY(-10%) translateX(-35%);
            z-index: 1;
          }

          // Responsive Style
          @media only screen and (max-width: 767px) {
            .single-services {
              padding: 30px 15px;
              text-align: center;
            }
            .single-services .icon {
              margin-bottom: 30px;
            }
            .single-services h3 a {
              font-size: 20px;
            }
            .services-shape-1 {
              display: none;
            }
            .services-shape-2 {
              display: none;
            }
            .services-shape-3 {
              display: none;
            }
            .services-shape-4 {
              display: none;
            }
            .services-shape-5 {
              display: none;
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .single-services {
              padding: 30px 20px;
            }
            .single-services .icon {
              margin-bottom: 30px;
            }
            .single-services h3 a {
              font-size: 20px;
            }
            .services-shape-1 {
              display: none;
            }
            .services-shape-2 {
              display: none;
            }
            .services-shape-3 {
              display: none;
            }
            .services-shape-4 {
              display: none;
            }
            .services-shape-5 {
              display: none;
            }
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .single-services {
              padding: 35px 20px;
            }
            .single-services h3 a {
              font-size: 20px;
            }
            .services-shape-1 {
              display: none;
            }
            .services-shape-2 {
              display: none;
            }
            .services-shape-3 {
              display: none;
            }
            .services-shape-4 {
              display: none;
            }
            .services-shape-5 {
              display: none;
            }
          }

          @media only screen and (min-width: 1200px) and (max-width: 1399px) {
            .single-services {
              padding: 30px;
            }
            .single-services h3 a {
              font-size: 24px;
            }
          }

          .main_heading_step_animation {
            font-weight: 200;
            margin: 0.4em 0;
            font-size: 3.5em;
          }

          .main-banner-area {
            padding-top: 380px;
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
            font-size: 60px;
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
              padding-top: 0px;
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
              padding-top: 0px;
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
              padding-top: 0px;
              padding-bottom: 50px;
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
              padding-top: 415px;
              padding-bottom: 0px;
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
              padding-top: 380px;
              padding-bottom: 220px;
            }
          }
          @media only screen and (max-width: 992px) {
            .main-banner-content h1 {
              margin-top: 50px !important;
            }
          }
          @media only screen and (max-width: 1200px) {
            .main-banner-content h1 {
              margin-top: 100px;
            }
          }
        `}</style>
      </div>

      {/* About section */}
      <div className="About_us">
        <div className="experiences-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="experiences-item">
                  {developersData?.map((obj) => {
                    if (obj.slug === dataId) {
                      return (
                        <>
                          <div className="experiences-content">
                            <div className="tag">
                              <img
                                src="/images/ragzon-favicon.png"
                                alt="ragzon-image"
                                className="tag_img"
                              />
                            </div>
                            <h3>{obj.about_heading}</h3>
                            <p>{obj.about_paragraph}</p>
                          </div>
                        </>
                      );
                    }
                  })}

                  <div>
                    {developersData
                      .filter((item) => item.slug === dataId)[0]
                      .AboutItems?.map((data) => (
                        <>
                          <div className="experiences-inner-content">
                            <img
                              className="exp_img"
                              src={data.about_img}
                              alt="image"
                            />
                            <p>{data.about_text}</p>
                          </div>
                        </>
                      ))}
                  </div>

                  <div className="experiences-btn">
                    <Link href="/about-us">
                      <a className="default-btn">
                        Schedule a Call
                        <i className="ri-arrow-right-line"></i>
                        <span></span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {developersData?.map((obj) => {
                if (obj.slug === dataId) {
                  return (
                    <>
                      <div className="col-lg-6">
                        <div className="experiences-image">
                          <img
                            className="pl-5"
                            src={obj.about_main_img}
                            alt="image"
                          />
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </div>

          {/* Shape Images */}
          <div
            className="experiences-shape-1"
            data-speed="0.08"
            data-revert="true"
          >
            <img src="/images/experiences/ragzon-shape-1.png" alt="image" />
          </div>
          <div
            className="experiences-shape-2"
            data-speed="0.06"
            data-revert="true"
          >
            <img src="/images/experiences/ragzon-shape-2.png" alt="image" />
          </div>
          <div
            className="experiences-shape-3"
            data-speed="0.08"
            data-revert="true"
          >
            <img src="/images/experiences/ragzon-shape-3.png" alt="image" />
          </div>
          <div
            className="experiences-shape-4"
            data-speed="0.06"
            data-revert="true"
          >
            <img src="/images/experiences/ragzon-shape-2.png" alt="image" />
          </div>
          <div
            className="experiences-shape-5"
            data-speed="0.08"
            data-revert="true"
          >
            <img src="/images/experiences/ragzon-shape-3.png" alt="image" />
          </div>
          <div
            className="experiences-shape-6"
            data-speed="0.06"
            data-revert="true"
          >
            <img src="/images/experiences/ragzon-shape-4.png" alt="image" />
          </div>
          <div
            className="experiences-shape-7"
            data-speed="0.08"
            data-revert="true"
          >
            <img src="/images/experiences/ragzon-shape-5.png" alt="image" />
          </div>
        </div>

        {/* About Us Content Style */}
        <style jsx>{`
          .exp_img {
            height: 60px;
            width: 60px;
          }
          .tag_img {
            width: 33px;
          }
          .experiences-area {
            position: relative;
            z-index: 1;
          }
          .experiences-area::before {
            position: absolute;
            content: "";
            height: 100%;
            width: 50%;
            background-color: #f4f8fc;
            left: 0;
            top: 0;
            z-index: -1;
          }
          .experiences-area::after {
            position: absolute;
            content: "";
            height: 100%;
            width: 50%;
            background-color: var(--white-color);
            right: 0;
            top: 0;
            z-index: -1;
          }
          .experiences-item {
            padding-top: 80px;
            padding-bottom: 80px;
            padding-right: 30px;
          }
          .experiences-item .experiences-content .tag {
            display: inline-block;
            height: 50px;
            width: 50px;
            line-height: 50px;
            background-color: var(--white-color);
            text-align: center;
            border-radius: 50px;
            -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
            box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
          }
          .experiences-item .experiences-content h3 {
            font-size: 40px;
            margin-top: 25px;
            margin-bottom: 20px;
            line-height: 1.4;
          }
          .experiences-item .experiences-inner-content {
            position: relative;
            margin-top: 30px;
            padding-left: 80px;
          }
          .experiences-item .experiences-inner-content img {
            position: absolute;
            left: 0;
            top: 0;
          }
          .experiences-item .experiences-btn {
            margin-top: 30px;
            padding-left: 85px;
          }
          .experiences-image {
            text-align: right;
          }
          .experiences-shape-1 {
            position: absolute;
            top: 8%;
            left: 40%;
            -webkit-transform: translateY(-8%) translateX(-40%);
            transform: translateY(-8%) translateX(-40%);
            z-index: -1;
          }
          .experiences-shape-2 {
            position: absolute;
            top: 50%;
            left: 2%;
            -webkit-transform: translateY(-50%) translateX(-2%);
            transform: translateY(-50%) translateX(-2%);
            z-index: -1;
          }
          .experiences-shape-3 {
            position: absolute;
            top: 52%;
            left: 5%;
            -webkit-transform: translateY(-52%) translateX(-5%);
            transform: translateY(-52%) translateX(-5%);
            z-index: -1;
          }
          .experiences-shape-4 {
            position: absolute;
            bottom: 10%;
            left: 35%;
            -webkit-transform: translateY(-10%) translateX(-35%);
            transform: translateY(-10%) translateX(-35%);
            z-index: -1;
          }
          .experiences-shape-5 {
            position: absolute;
            bottom: 8%;
            left: 36%;
            -webkit-transform: translateY(-8%) translateX(-36%);
            transform: translateY(-8%) translateX(-36%);
            z-index: -1;
          }
          .experiences-shape-6 {
            position: absolute;
            bottom: 10%;
            left: 48%;
            -webkit-transform: translateY(-10%) translateX(-48%);
            transform: translateY(-10%) translateX(-48%);
            z-index: 1;
          }
          .experiences-shape-7 {
            position: absolute;
            bottom: 2%;
            left: 48%;
            -webkit-transform: translateY(-2%) translateX(-48%);
            transform: translateY(-2%) translateX(-48%);
            z-index: 1;
          }

          // Responsive Style
          @media only screen and (max-width: 767px) {
            .experiences-area {
              padding-bottom: 50px;
            }
            .experiences-area::after {
              background-color: #f4f8fc;
            }
            .experiences-item {
              padding-top: 50px;
              padding-bottom: 50px;
              padding-right: 0;
            }
            .experiences-item .experiences-content h3 {
              font-size: 24px;
            }
            .experiences-item .experiences-content p {
              font-size: 15px;
            }
            .experiences-item .experiences-inner-content {
              padding-left: 0;
              text-align: center;
            }
            .experiences-item .experiences-inner-content img {
              position: relative;
              margin-bottom: 15px;
            }
            .experiences-item .experiences-btn {
              padding-left: 0;
              text-align: center;
            }
            .experiences-image {
              text-align: center;
            }
            .experiences-shape-1 {
              display: none;
            }
            .experiences-shape-2 {
              display: none;
            }
            .experiences-shape-3 {
              display: none;
            }
            .experiences-shape-4 {
              display: none;
            }
            .experiences-shape-5 {
              display: none;
            }
            .experiences-shape-6 {
              display: none;
            }
            .experiences-shape-7 {
              display: none;
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .experiences-area {
              padding-bottom: 50px;
            }
            .experiences-area::after {
              background-color: #f4f8fc;
            }
            .experiences-item {
              padding-top: 50px;
              padding-bottom: 50px;
              padding-right: 0;
            }
            .experiences-image {
              text-align: center;
            }
            .experiences-shape-1 {
              display: none;
            }
            .experiences-shape-2 {
              display: none;
            }
            .experiences-shape-3 {
              display: none;
            }
            .experiences-shape-4 {
              display: none;
            }
            .experiences-shape-5 {
              display: none;
            }
            .experiences-shape-6 {
              display: none;
            }
            .experiences-shape-7 {
              display: none;
            }
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .experiences-item {
              padding-top: 50px;
              padding-bottom: 50px;
            }
            .experiences-item .experiences-content h3 {
              font-size: 30px;
              margin-top: 20px;
              margin-bottom: 15px;
            }
            .experiences-item .experiences-content p {
              font-size: 14px;
            }
            .experiences-item .experiences-inner-content p {
              font-size: 14px;
            }
          }
        `}</style>
      </div>

      {/* portfolio  */}
      <div className="portfolio">
        <div className="projects-area pt-100 pb-20">
          <div className="container">
            {developersData?.map((obj) => {
              if (obj.slug === dataId) {
                return (
                  <>
                    <div className="section-title">
                      <h2>{obj.portfolio_heading}</h2>
                      <p>{obj.portfolio_text}</p>
                    </div>
                  </>
                );
              }
            })}

            <div className="row">
              {developersData
                .filter((item) => item.slug === dataId)[0]
                .Portfolio_items?.map((data) => (
                  <>
                    <div className="col-lg-4 col-md-6">
                      <div className="single-projects-box">
                        <div className="projects-image">
                          <Link href="/case-study-details">
                            <a>
                              <img src={data.portfolio_img} alt="image" />
                            </a>
                          </Link>
                        </div>

                        <div className="projects-content">
                          <h3>
                            <Link href="/case-study-details">
                              <a>{data.portfolio_heading}</a>
                            </Link>
                          </h3>
                          <p>{data.portfolio_text}</p>

                          <Link href="/case-study-details">
                            <a className="projects-btn">
                              Read More <i className="ri-arrow-right-line"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>

          {/* Shape Images */}
          <div className="projects-shape-1">
            <img src="/images/projects/shape-1.png" alt="image" />
          </div>
          <div className="projects-shape-2">
            <img src="/images/projects/shape-2.png" alt="image" />
          </div>
          <div className="projects-shape-3">
            <img src="/images/projects/shape-3.png" alt="image" />
          </div>
          <div className="projects-shape-4">
            <img src="/images/projects/shape-4.png" alt="image" />
          </div>
          <div className="projects-shape-5">
            <img src="/images/projects/shape-5.png" alt="image" />
          </div>
        </div>

        <style jsx>{`
          .projects-area {
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
          .single-projects-box {
            margin-bottom: 30px;
            -webkit-transition: var(--transition);
            transition: var(--transition);
          }
          .single-projects-box .projects-image {
            overflow: hidden;
            border: 1px solid #ecf1f9;
          }
          .single-projects-box .projects-image img {
            -webkit-transition: var(--transition);
            transition: var(--transition);
            display: inline-block;
          }
          .single-projects-box .projects-content {
            margin-top: 25px;
          }
          .single-projects-box .projects-content h3 {
            font-size: 25px;
            margin-bottom: 15px;
          }
          .single-projects-box .projects-content h3 a {
            color: var(--black-color);
          }
          .single-projects-box .projects-content p {
            margin-bottom: 15px;
          }
          .single-projects-box .projects-content .projects-btn {
            color: var(--paragraph-color);
            position: relative;
            -webkit-transition: var(--transition);
            transition: var(--transition);
            font-weight: 500;
          }
          .single-projects-box .projects-content .projects-btn i {
            position: absolute;
            right: -20px;
            top: 58%;
            -webkit-transform: translateY(-58%);
            transform: translateY(-58%);
            font-size: 14px;
          }
          .single-projects-box:hover {
            -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
          }
          .single-projects-box:hover .projects-image img {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
          }
          .single-projects-box:hover .projects-content h3 a {
            color: var(--main-color);
          }
          .single-projects-box:hover .projects-content .projects-btn {
            letter-spacing: 1px;
            color: var(--main-color);
          }

          // Projects shape
          .projects-shape-1 {
            position: absolute;
            top: 25%;
            left: 0;
            -webkit-transform: translateY(-25%);
            transform: translateY(-25%);
          }
          .projects-shape-2 {
            position: absolute;
            top: 20%;
            left: 30%;
            -webkit-transform: translateY(-20%) translateX(-30%);
            transform: translateY(-20%) translateX(-30%);
            z-index: -1;
          }
          .projects-shape-3 {
            position: absolute;
            top: 10%;
            right: 15%;
            -webkit-transform: translateY(-10%) translateX(-15%);
            transform: translateY(-10%) translateX(-15%);
          }
          .projects-shape-4 {
            position: absolute;
            bottom: 15%;
            right: 15%;
            -webkit-transform: translateY(-15%) translateX(-15%);
            transform: translateY(-15%) translateX(-15%);
          }
          .projects-shape-5 {
            position: absolute;
            bottom: 10%;
            right: 12%;
            -webkit-transform: translateY(-10%) translateX(-12%);
            transform: translateY(-10%) translateX(-12%);
          }

          // Responsive Style
          @media only screen and (max-width: 767px) {
            .projects-shape-1,
            .projects-shape-2,
            .projects-shape-3,
            .projects-shape-4,
            .projects-shape-5 {
              display: none;
            }
            .single-projects-box .projects-content h3 {
              font-size: 21px;
              margin-bottom: 15px;
            }
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .projects-shape-1,
            .projects-shape-2,
            .projects-shape-3,
            .projects-shape-4,
            .projects-shape-5 {
              display: none;
            }
            .single-projects-box .projects-content h3 {
              font-size: 22px;
              margin-bottom: 15px;
            }
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .projects-shape-1,
            .projects-shape-2,
            .projects-shape-3,
            .projects-shape-4,
            .projects-shape-5 {
              display: none;
            }
            .single-projects-box .projects-content h3 {
              font-size: 20px;
              margin-bottom: 15px;
            }
          }
        `}</style>
      </div>

      <CTA />
    </>
  );
};

export default DevelopersDetail;
