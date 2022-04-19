import React from 'react';
import NavbarFour from '../components/_App/NavbarFour';
import Footer from '../components/_App/Footer';
import FeaturesCard from '../components/HomeDemoOne/FeaturesCard';
// import FunFacts from '../components/Common/FunFacts';
import TechSupport from '../components/Common/TechSupport';
import Team from '../components/Common/Team';
import OurRespectiveClients from '../components/Common/OurRespectiveClients';
import Faqs from '../components/Common/Faqs';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import RecentCaseStudiesCards from '../components/CaseStudy/RecentCaseStudiesCard';
import CTA from '../components/Common/CTA';
import FunFacts from '../components/Common/FunFacts';
import PageBanner from '../components/Common/PageBanner';



const AboutUs = () => {
    return (
        <>


            {/* <NavbarFour /> */}

            <PageBanner
                pageTitle="About Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About Us"
            />


            <>


                {/* About Us Style */}
                <style jsx>{`
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
                        background-color: #E5F0FF;
                        color: var(--main-color);
                        text-align: center;
                        font-size: 45px;
                        border-radius: 5px;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .single-services .icon.bg-36CC72 i {
                        background-color: #EBFAF1;
                        color: #36CC72;
                    }
                    .single-services .icon.bg-FF414B i {
                        background-color: #FFECED;
                        color: #FF414B;
                    }
                    .single-services .icon.bg-FF6D3D i {
                        background-color: #FFF0EC;
                        color: #FF6D3D;
                    }
                    .single-services .icon.bg-8932F8 i {
                        background-color: #F3EBFE;
                        color: #8932F8;
                    }
                    .single-services .icon.bg-FFCA40 i {
                        background-color: #FFFAEC;
                        color: #FFCA40;
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
                        background-color: #36CC72;
                    }
                    .single-services:hover .icon.bg-FF414B i {
                        background-color: #FF414B;
                    }
                    .single-services:hover .icon.bg-FF6D3D i {
                        background-color: #FF6D3D;
                    }
                    .single-services:hover .icon.bg-8932F8 i {
                        background-color: #8932F8;
                    }
                    .single-services:hover .icon.bg-FFCA40 i {
                        background-color: #FFCA40;
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

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
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

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
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

                    @media only screen and (min-width : 1200px) and (max-width : 1399px) {
                        .single-services {
                            padding: 30px;
                        }
                        .single-services h3 a {
                            font-size: 24px;
                        }
                    }
                    .about-area {
                        position: relative;
                        z-index: 1;
                        overflow: hidden;
                    }
                    .about-area::before {
                        position: absolute;
                        content: "";
                        height: 100%;
                        width: 50%;
                        background-color: #F4F8FC;
                        left: 0;
                        top: 0;
                        z-index: -1;
                    }
                    .about-area::after {
                        position: absolute;
                        content: "";
                        height: 100%;
                        width: 50%;
                        background-color: var(--white-color);
                        right: 0;
                        top: 0;
                        z-index: -1;
                    }

                    .about-image {
                        padding-top: 75px;
                        padding-bottom: 75px;
                        padding-right: 30px;
                    }
                    .about-item {
                        padding-left: 50px;
                    }
                    .about-item .about-content .tag {
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
                    .about-item .about-content h3 {
                        font-size: 40px;
                        margin-top: 25px;
                        margin-bottom: 20px;
                        line-height: 1.4;
                    }
                    .about-item .about-content p {
                        position: relative;
                        z-index: 1;
                    }
                    .about-item .about-inner-content {
                        position: relative;
                        margin-top: 30px;
                        padding-left: 80px;
                    }
                    .about-item .about-inner-content img {
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    .about-item .about-inner-content h4 {
                        font-size: 22px;
                        margin-bottom: 12px;
                        font-weight: 500;
                    }
                    .about-item .about-btn {
                        margin-top: 30px;
                        padding-left: 85px;
                    }
                    .about-item .about-btn .default-btn {
                        background-color: var(--optional-color);
                    }
                    .about-item .about-btn .default-btn span {
                        background-color: var(--main-color);
                    }
                    
                    // shape
                    .about-shape-1 {
                        position: absolute;
                        top: 8%;
                        left: 10%;
                        -webkit-transform: translateY(-8%) translateX(-10%);
                                transform: translateY(-8%) translateX(-10%);
                    }
                    .about-shape-2 {
                        position: absolute;
                        bottom: 2%;
                        left: 5%;
                        -webkit-transform: translateY(-2%) translateX(-5%);
                                transform: translateY(-2%) translateX(-5%);
                    }
                    .about-shape-3 {
                        position: absolute;
                        top: 5%;
                        right: 15%;
                        -webkit-transform: translateY(-5%) translateX(-15%);
                                transform: translateY(-5%) translateX(-15%);
                    }
                    .about-shape-4 {
                        position: absolute;
                        top: 30%;
                        left: 50%;
                        -webkit-transform: translateY(-30%) translateX(-50%);
                                transform: translateY(-30%) translateX(-50%);
                    }
                    .about-shape-5 {
                        position: absolute;
                        top: 35%;
                        left: 50%;
                        -webkit-transform: translateY(-35%) translateX(-50%);
                                transform: translateY(-35%) translateX(-50%);
                    }
                    .about-shape-6 {
                        position: absolute;
                        bottom: 10%;
                        right: 20%;
                        -webkit-transform: translateY(-10%) translateX(-20%);
                                transform: translateY(-10%) translateX(-20%);
                    }
                    .about-shape-7 {
                        position: absolute;
                        bottom: 5%;
                        right: 18%;
                        -webkit-transform: translateY(-5%) translateX(-18%);
                                transform: translateY(-5%) translateX(-18%);
                    }

                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .about-area {
                            padding-bottom: 50px;
                        }
                        .about-area::after {
                            background-color: #F4F8FC;
                        }
                        .about-image {
                            padding-top: 50px;
                            padding-bottom: 50px;
                            padding-right: 0;
                            text-align: center;
                        }
                        .about-item {
                            padding-left: 0;
                        }
                        .about-item .about-content h3 {
                            font-size: 24px;
                        }
                        .about-item .about-content p {
                            font-size: 15px;
                        }
                        .about-item .about-inner-content {
                            padding-left: 0;
                            text-align: center;
                        }
                        .about-item .about-inner-content img {
                            position: relative;
                            margin-bottom: 15px;
                        }
                        .about-item .about-btn {
                            padding-left: 0;
                            text-align: center;
                        }
                        .about-shape-1 {
                            display: none;
                        }
                        .about-shape-2 {
                            display: none;
                        }
                        .about-shape-3 {
                            display: none;
                        }
                        .about-shape-4 {
                            display: none;
                        }
                        .about-shape-5 {
                            display: none;
                        }
                        .about-shape-6 {
                            display: none;
                        }
                        .about-shape-7 {
                            display: none;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        .about-area {
                            padding-bottom: 70px;
                        }
                        .about-area::after {
                            background-color: #F4F8FC;
                        }
                        .about-image {
                            padding-top: 50px;
                            padding-bottom: 50px;
                            padding-right: 0;
                            text-align: center;
                        }
                        .about-item {
                            padding-left: 0;
                        }
                        .about-shape-1 {
                            display: none;
                        }
                        .about-shape-2 {
                            display: none;
                        }
                        .about-shape-3 {
                            display: none;
                        }
                        .about-shape-4 {
                            display: none;
                        }
                        .about-shape-5 {
                            display: none;
                        }
                        .about-shape-6 {
                            display: none;
                        }
                        .about-shape-7 {
                            display: none;
                        }
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        .about-image {
                            padding-top: 0;
                            padding-bottom: 0;
                            padding-right: 0;
                        }
                        .about-item {
                            padding-left: 15px;
                        }
                        .about-item .about-content p {
                            font-size: 14px;
                        }
                        .about-item .about-inner-content p {
                            font-size: 14px;
                        }
                    }
                `}</style>
            </>

            <Team />

            <FunFacts />
 
            <OurRespectiveClients />

            <CTA />

        </>
    )
}

export default AboutUs;