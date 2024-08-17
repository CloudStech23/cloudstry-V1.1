import React from 'react'
import { Carousel } from "react-bootstrap";

function Petadhar() {
  return (
    <div>
     
      <div className="container my-5 py-5">
        <div className="row align-items-center bg-light p-4 rounded-3 position-relative">
          {/* Text Content */}
          <div className="col-md-7">
            <span className="badge bg-primary mb-3">
              REACH Ad Hoc Orchestrator
            </span>
            <h2 className="fw-bold text-primary">
              Sequenced customer engagement
            </h2>
            <p className="text-muted mb-4">
              Avoid spreadsheets and manual uploads by automating personalized
              maintenance notifications with REACH Orchestration. Alleviate
              customer stress and complaints by keeping them informed of
              infrastructure upgrades, vegetation management, and periodic
              refreshes. The platform associates work orders & infrastructure
              with impacted customers and communication preferences, and
              delivers messages across text, email, voice, mobile, and print in
              accordance with your logic.
            </p>
            <a
              href="https://agent511.com/contact-us/"
              className="btn btn-danger"
            >
              Talk to our Experts
            </a>
          </div>

          {/* Video Content */}
          <div className="col-md-5 text-md-end mt-4 mt-md-0">
            <img
              src="https://via.placeholder.com/500x300.png?text=Dummy+Image"
              alt="Dummy"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <section className="image-video-text-interactivity fadeInUp mb-5">
        <div className="container">
        <h3 className="text-primary fw-bold text-center mb-4">Why pet adhar</h3>
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src="https://agent511.com/app/uploads/2023/01/AGENT511-REACH-Orchestration.png"
                alt="AGENT511 REACH Orchestration"
              />
            </div>

            {/* Text Section */}
            <div className="col-md-6">
              <h3 className="text-primary fw-bold mb-3">
                Avoid spreadsheets and door hangers
              </h3>
              <p>
                Automate real-time customer communications for immediate
                maintenance updates:
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  REACH is synchronized with customers and assets to instantly
                  correlate work orders with impacted customers
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Customized workflow to perform recurring notification
                  reminders and updates for the duration of the event
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Multichannel digital and print template management and
                  delivery
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Automatic channel selection based upon timeliness (from 3rd
                  class letter to SMS)
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Once the event occurs, restoration alerts continue the
                  customer engagement
                </li>
              </ul>
              <a
                className="btn btn-danger"
                href="https://agent511.com/contact-us/"
              >
                Talk to our Experts
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 bg-light text-center">
        <section className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-8 mx-auto">
                <div className="p-5 bg-white shadow  rounded">
                  <Carousel interval={2000} controls={false} indicators={false}>
                    <Carousel.Item>
                      <div className="media feature-card">
                         
                          <div
                            className=" mb-4 feature-title"
                            style={{ fontWeight: 500 }}
                          >
                            Why Cloud Services ?
                          </div>
                          <div className="media-body ml-3">
                            <div className="blockquote border-0 p-0">
                              <p className="font-italic lead">
                                Cloud services offer scalability, flexibility,
                                and cost-efficiency by eliminating the need for
                                physical infrastructure. They facilitate
                                seamless collaboration, enhance security, and
                                provide robust disaster recovery capabilities.
                                Leveraging cloud services accelerates
                                innovation, improves time-to-market, and ensures
                                business agility in a dynamic digital
                                environment.
                              </p>
                            </div>
                          </div>
                         
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="media feature-card">
                         
                          <div
                            className=" mb-4 feature-title"
                            style={{ fontWeight: 500 }}
                          >
                            Cloud Collboration Market/Industries
                          </div>
                          <div className="media-body ml-3">
                            <div className="blockquote border-0 p-0">
                              <p className="font-italic lead">
                                Collaborating cloud services with industry needs
                                involves tailoring cloud solutions to address
                                specific challenges and opportunities within
                                different sectors. By understanding industry
                                requirements, cloud providers can offer
                                specialized services and tools designed to
                                enhance efficiency, security, and compliance.
                              </p>
                            </div>
                          </div>
                        
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="media feature-card">
                      
                          <div
                            className=" mb-4 feature-title"
                            style={{ fontWeight: 400 }}
                          >
                            Aligning Cloud Services with Cloudstry
                          </div>
                          <div className="media-body ml-3">
                            <div className="blockquote border-0 p-0">
                              <p className="font lead">
                                <strong>
                                  " Unveiling the Power of Our Cloud Services:
                                  Your Path to Success "
                                </strong>
                                <br />
                                Explore our tailored cloud solutions, designed
                                to enhance your business with personalized
                                strategies. Benefit from optimized operations,
                                enhanced collaboration, and accelerated growth,
                                tailored to your unique needs, to triumph in
                                today's dynamic marketplace.
                              </p>
                            </div>
                          </div>
                        
                      </div>
                    </Carousel.Item>

                    {/* <Carousel.Item>
                    <div className="media">
                      <div className="h1 mb-4">Enhancing Operational Efficiency</div>
                      <div className="media-body ml-3">
                        <div className="blockquote border-0 p-0">
                          <p className="font-italic lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="media">
                      <div className="h1 mb-4">Enhancing Operational Efficiency</div>
                      <div className="media-body ml-3">
                        <div className="blockquote border-0 p-0">
                          <p className="font-italic lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="media">
                      <div className="h1 mb-4" style={{fontSize:'2rem'}}>Enhancing Operational Efficiency</div>
                      <div className="media-body ml-3">
                        <div className="blockquote border-0 p-0">
                          <p className="font-italic lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          
                        </div>
                      </div>
                    </div>
                  </Carousel.Item> */}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <div className="container mt-5">
        <h3 className="text-primary fw-bold text-center mb-4">How it works</h3>
        <div className="row gx-0">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-3 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src="https://badgecert.com/wp-content/uploads/2020/07/Macbook.png"
              alt="Macbook"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-3 d-flex flex-column justify-content-center">
            <h3
              className="mb-4"
              style={{ fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              For Issuers
            </h3>
            <p
              className="mb-4"
              style={{ fontSize: "20px", color: "rgb(109, 110, 113)" }}
            >
              Say goodbye to paper certificates! You can now facilitate the
              creating, issuing, storing, and sharing of BadgeCerts — portable
              digital badges that verify an earner’s accomplishments, skills,
              credentials, contributions and experiences.
            </p>
            <p
              className="mb-4"
              style={{ fontSize: "20px", color: "rgb(109, 110, 113)" }}
            >
              Thousands of organizations use BadgeCert’s platform every day.
            </p>
            <ul
              className="list-unstyled ps-3 mb-4"
              style={{ fontSize: "20px", color: "rgb(109, 110, 113)" }}
            >
              <li className="mb-2">100% verifiable and secure</li>
              <li className="mb-2">
                Full control over badge expiration rules and micro-credential
                pathways towards skills mastery
              </li>
              <li className="mb-2">
                Ability to record digital badges on a Blockchain to add another
                layer of verification and security
              </li>
              <li className="mb-2">24/7 analytics tool with real-time data</li>
              <li className="mb-2">
                Language customization for international markets
              </li>
              <li className="mb-2">
                LMS & CRM integration through BadgeCert APIs
              </li>
            </ul>
            <a
              href="https://badgecert.com/how-it-works/"
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "rgb(0, 168, 196)",
                borderRadius: "10px",
                fontSize: "20px",
                boxShadow: "rgba(0, 0, 0, 0.14) 0px 14px 32px",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="row gx-0">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-3 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src="https://badgecert.com/wp-content/uploads/2020/07/Macbook.png"
              alt="Macbook"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pb-3 d-flex flex-column justify-content-center">
            <h3
              className="mb-4"
              style={{ fontSize: "30px", fontWeight: 500, lineHeight: 1.2 }}
            >
              For Issuers
            </h3>
            <p
              className="mb-4"
              style={{ fontSize: "20px", color: "rgb(109, 110, 113)" }}
            >
              Say goodbye to paper certificates! You can now facilitate the
              creating, issuing, storing, and sharing of BadgeCerts — portable
              digital badges that verify an earner’s accomplishments, skills,
              credentials, contributions and experiences.
            </p>
            <p
              className="mb-4"
              style={{ fontSize: "20px", color: "rgb(109, 110, 113)" }}
            >
              Thousands of organizations use BadgeCert’s platform every day.
            </p>
            <ul
              className="list-unstyled ps-3 mb-4"
              style={{ fontSize: "20px", color: "rgb(109, 110, 113)" }}
            >
              <li className="mb-2">100% verifiable and secure</li>
              <li className="mb-2">
                Full control over badge expiration rules and micro-credential
                pathways towards skills mastery
              </li>
              <li className="mb-2">
                Ability to record digital badges on a Blockchain to add another
                layer of verification and security
              </li>
              <li className="mb-2">24/7 analytics tool with real-time data</li>
              <li className="mb-2">
                Language customization for international markets
              </li>
              <li className="mb-2">
                LMS & CRM integration through BadgeCert APIs
              </li>
            </ul>
            <a
              href="https://badgecert.com/how-it-works/"
              className="btn btn-primary btn-lg"
              style={{
                backgroundColor: "rgb(0, 168, 196)",
                borderRadius: "10px",
                fontSize: "20px",
                boxShadow: "rgba(0, 0, 0, 0.14) 0px 14px 32px",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div> */}

      {/* Content Sections */}
      <section className="mb-5">
         
        <div className="container">
          {/* First Row */}
          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                className="img-fluid rounded"
                src="https://agent511.com/app/uploads/2023/01/AGENT511-REACH-Orchestration-3.png"
                alt="Industry"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="text-primary font-weight-bold mb-4">
                Customer Engagement for the Event Lifecycle
              </h3>
              <p>Inform customers from work order creation to completion:</p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  Trigger personalized template-based restoration alerts that
                  include reasons and anticipated duration.
                </li>
                <li className="mb-3">
                  Staged and on-demand templates offer flexibility to maximize
                  relevance and personalization.
                </li>
                <li className="mb-3">
                  Randomized branded surveys after restoration maximize
                  engagement.
                </li>
                <li>Two-way reporting & status requests.</li>
              </ul>
              <a
                className="btn btn-danger text-white"
                href="https://agent511.com/contact-us/"
              >
                Talk to Our Experts
              </a>
            </div>
          </div> 

          <section style={{ position: "relative", marginTop: "5rem" }}>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <img
          className="img-fluid rounded"
          src="https://agent511.com/app/uploads/2023/01/AGENT511-REACH-Orchestration-3.png"
          alt="Industry"
          style={{ width: "1000px", height: "700px" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "25%",
          transform: "translateX(50%)", // Adjust this to control horizontal overlap
          background: "gray",
        //   border: "1px solid black",
          borderRadius: "8px",
          padding: "2rem",
          maxWidth: "80%", // Ensures the content doesn't overflow the viewport
          zIndex: 2,
        }}
      >
        <h3 className="text-primary font-weight-bold mb-4">
          Customer Engagement for the Event Lifecycle
        </h3>
        <p>Inform customers from work order creation to completion:</p>
        <ul className="list-unstyled">
          <li className="mb-3">
            Trigger personalized template-based restoration alerts that
            include reasons and anticipated duration.
          </li>
          <li className="mb-3">
            Staged and on-demand templates offer flexibility to maximize
            relevance and personalization.
          </li>
          <li className="mb-3">
            Randomized branded surveys after restoration maximize
            engagement.
          </li>
          <li>Two-way reporting & status requests.</li>
        </ul>
        <a
          className="btn btn-danger text-white"
          href="https://agent511.com/contact-us/"
        >
          Talk to Our Experts
        </a>
      </div>
    </section>

          
           
         
        </div>

      </section>
    </div>
     
  )
}

export default Petadhar;