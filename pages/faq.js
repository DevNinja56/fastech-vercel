import React from "react";
import PageBanner from "../components/Common/PageBanner";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FAQs = () => {
  return (
    <>
      {/* <NavbarFour /> */}

      <PageBanner
        pageTitle="FAQ's"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQs"
      />

      <div className="faq-area ptb-100">
        <div className="container">
          <div className="faq-accordion accordion-box">
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is Fastech all about?
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Fastech (Pvt) Ltd has focused on developing and maintaining
                    custom software solutions for small enterprises to big
                    conglomerates. With increased efficiency, we established a
                    diversified client base across the globe – we worked with
                    15+ companies, 50+ happy clients, and delivered 100+
                    projects. 97% of our business patrons return for a second
                    engagement. Find out more details on our About Us page.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How you stand out the market competition?
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Our professional integrity, solid work ethics, and
                    take-a-dare aptitude raises us above our peers. Our
                    friendly, candid, and professional team of IT, business and
                    marketing experts take collective responsibility of every
                    single venture. We are demonstrating our capability to
                    consistently provide IT products and services that meet
                    clients and regulatory requirements. We are adding
                    good-paying IT jobs to our local community.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What's the timeline to start a new project?
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    It all depends on project nature and scope of work. However,
                    usually, the pre-project evaluation and documentation take
                    3-4 days. Our design and planning phase takes 1 week. We
                    initiate development after that.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do you provide post-development support?
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Yes, we engage our dedicated software engineers to keep your
                    product in shape. We quickly respond to clients’ needs,
                    address their concerns about bug-tracking and fixing.
                    Moreover, we provide ongoing support for our designed
                    software solutions based on product license. We also handle
                    proposed feature enhancements and developments.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do you outsource IT services?
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Yes, we do. You can hire our dedicated resources who will
                    work only for you. You can engage an individual or the
                    entire team on hourly, part-time or full-time contract basis
                    whatever suits you.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="f">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What's the typical team size?
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    For each project, typical team size is 2-3 developers
                    depending on the project scope, workload and timeline for
                    deliverables. Each development team is supported by UI/UX
                    designers, QA engineers, project coordinators, and more
                    developers if required. These sharing support resources for
                    each project helps us accelerate the completion process with
                    reduced costs for the clients.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="ticket-box">
            <h3>Have Any Question in Mind Please Call or Mail Us</h3>

            <div className="box-one">
              <i className="ri-customer-service-line"></i>
              <a href="tel:3128959800">+92 (310) 458 2456</a>
            </div>

            <div className="box-two">
              <i className="ri-earth-line"></i>
              <a href="mailto:info@thefastech.com">info@thefastech.com</a>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="faq-shape-1">
          <img src="/images/faq/shape-1.png" alt="image" />
        </div>
        <div className="faq-shape-2">
          <img src="/images/faq/shape-2.png" alt="image" />
        </div>
        <div className="faq-shape-3">
          <img src="/images/faq/shape-3.png" alt="image" />
        </div>
        <div className="faq-shape-4">
          <img src="/images/faq/shape-4.png" alt="image" />
        </div>
        <div className="faq-shape-5">
          <img src="/images/faq/shape-5.png" alt="image" />
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default FAQs;
