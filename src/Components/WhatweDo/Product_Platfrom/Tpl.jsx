import React from "react";
import "./Common.css";
import { Link } from "react-router-dom";
import img1 from "./Images/tpl.First.jpg";
import img2 from "./Images/tpl.challages.jpg";
import img3 from "./Images/tpl.innovative.jpg";
import img4 from "./Images/tpl.government.jpg";
import bg from "./../../Images/header-bg.png";
import FadeOnScroll from "../../Animate/Motion";

function Thirdpartylogistic() {
  return (
    <div>
       <FadeOnScroll >
        <header
          className="text-white text-center py-5 position-relative"
          style={{
            // backgroundColor: "rgb(233, 239, 241)",
            backgroundColor:"white",
            minHeight: "12rem",
            // height:'100%',
            overflow: "hidden",
            boxShadow: "rgb(235 231 231) 1px -16px 20px 0px inset",
          }}
        >
          {/* Left-Aligned Image */}
          <img
            src={bg} // Adjust the path to your image
            alt="Decorative background"
            className="position-absolute"
            style={{
              left: 940,  
              top: 0, // Position at the top
              height: "100%", // Fill the height of the header
              width: "auto", // Maintain aspect ratio; set a specific width if needed
              zIndex: 0, // Position it behind the header content
            }}
          />

          {/* Bottom Left Content */}
          <div
            className="position-absolute bottom-0 start-0 p-4 fs-5 fw-normal"
            style={{ zIndex: 1 }} // Ensure this is on top of the image
          >
            <span className="small" style={{ color: "#1236d0" }}>
              <a href="/" style={{ color: "#1236d0" }}>
                What we Do ? /
              </a>{" "}
              <a href="#" style={{ color: "#1236d0" }}>
                Product Platform
              </a>{" "}
              / 3PL Solution
            </span>
          </div>

          {/* Header Content */}
          <div
            className="text-center py-5 text-dark "
            style={{ position: "relative", zIndex: 1 }}
          >
            <h2 className="display-4 mb-3 fw-bold" style={{ color: "#1236d0" }}>
            Logistics Solutions
            </h2>

            <div className="lead mb-4 mx-auto text-center px-3 col-10" style={{ color: "#1236d0" }}>
            Transforming supply chain management by outsourcing logistics to third-party providers for streamlined operations and cost savings.
            </div>
          </div>
        </header>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
        <div className="container py-5 px-5">
          <div className="row align-items-center justify-content-between bg-light p-4 rounded-3 position-relative">
            {/* Text Content */}
            <div className="col-md-5 mt-4 mb-2 order-md-1 order-2">
              <span className="badge bg-primary rounded-pill px-2 py-2 mb-3">
                3PL Solution
              </span>
              <h2
                className=" display-6 text-primary "
                style={{ fontWeight: 300,fontSize:'32px' }}
              >
                3PL: Foundation of Contemporary Supply Chains
              </h2>
              <p className="text-muted mb-4">
                Third-Party Logistics (3PL) involves outsourcing logistics and
                supply chain functions to specialized providers. These 3PL
                partners handle key operations such as warehousing,
                transportation, inventory management, and order fulfillment,
                allowing businesses to streamline their supply chains and reduce
                operational complexity.This strategic approach enhances
                operational efficiency, improves service quality, and provides
                scalable solutions to meet evolving market demands.
              </p>
              <Link to="/Support" className="btn btn-danger">
                Talk to our Experts
              </Link>
            </div>

            {/* Video Content */}
            <div className="col-md-5 text-md-end mt-4 mt-md-0 mb-2 order-md-2 order-1">
              <img
                src={img1}
                alt="Cloudstry Technologies"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
        <section className="image-video-text-interactivity fadeInUp mb-5">
          <div className="container mt-5 mb-5 px-5">
            <div className="row align-items-center mb-5">
              {/* Image Section */}
              <div className="col-md-6 mb-5 mb-md-0">
                <img
                  className="img-fluid rounded"
                  height={365}
                  width={504}
                  src={img2}
                  alt="Cloudstry Technologies"
                />
              </div>

              {/* Text Section */}
              <div className="col-md-6 mb-5">
                <h3 className="text-primary fw-light mb-3">
                  Navigating Core 3PL Challenges
                </h3>
                <p className="">
                  Third-party logistics (3PL) providers face a variety of
                  challenges that impact their ability to deliver effective
                  services. Key issues include:
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      Cross-border shipping faces delays and increased costs due
                      to additional checks and inspections at multiple points by
                      intermediary countries.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      Real-time visibility and tracking can be difficult,
                      leading to inefficiencies in inventory and shipment
                      management.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      Controlling logistics costs remains a significant
                      challenge, necessitating ongoing optimization and
                      strategic cost-saving measures.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      Risk management is crucial but challenging, involving
                      strategies to handle disruptions, delays, or damage to
                      goods.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      Ensuring high-quality customer service during peak periods
                      or disruptions can strain resources and affect service
                      consistency.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      Compliance with evolving regulations and industry
                      standards demands dedicated attention and resources.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
        <section
          className="image-video-text-interactivity fadeInUp mb-5"
          style={{ marginTop: "5rem" }}
        >
          <div className="container mt-5 px-5">
            <div className="row align-items-center">
              {/* Text Section */}
              <div className="col-md-6 order-md-1 order-2">
                <h3 className="text-primary fw-light mb-3">
                  Innovative 3PL Strategies: Cloudstry Expertise
                </h3>
                <p>
                  Cloudstry Tech is dedicated to addressing the complexities of
                  third-party logistics (3PL) by providing innovative solutions
                  designed to tackle existing challenges and enhance operational
                  efficiency
                </p>

                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      Leverage extensive 3PL networks to facilitate expansion
                      into new markets with ease and efficiency.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      Allow businesses to redirect focus to key areas such as
                      product development and marketing by outsourcing logistics
                      functions.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      Gain access to sophisticated logistics technologies and
                      industry best practices, ensuring continuous improvement
                      in supply chain management.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      Adapt logistics services seamlessly to accommodate
                      fluctuating demand, mitigating the burden of fixed
                      operational costs.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      Optimize logistics expenses by leveraging 3PL's ability to
                      negotiate favorable rates with carriers, leading to
                      considerable savings.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="col-md-6 text-md-end mt-4 mt-md-0 order-md-2 order-1 mb-2">
                <img
                  className="img-fluid rounded"
                  height={365}
                  width={504}
                  src={img3}
                  alt=" Cloudstry Technologies"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeOnScroll>
      <hr />

      <FadeOnScroll animation="up">
        <div className="container my-5 py-5 px-5">
          <div className="half-underline-container">
            <h3
              className="text-primary text-danger text-center display-5   half-underline"
              style={{ marginBottom: "4rem" }}
            >
              Government Focus
            </h3>
          </div>
          <div className="row align-items-center justify-content-between   p-4 rounded-3 position-relative">
            {/* Text Content */}
            <div className="col-md-6 mt-4 mb-2 order-md-1 order-2">
              <h2
                className=" display-6 text-primary "
                style={{fontSize:'32px'}}
              >
                Economic Growth Through Advanced 3PL Strategies
              </h2>
              <p className="text-muted mb-4" style={{fontSize:'15.7px'}}>
                The pivotal influence of Third-Party Logistics (3PL) on
                stimulating economic growth and elevating global competitiveness
                is increasingly acknowledged, especially within the{" "}
                <span className="text-primary fw-bold">
                  India-Middle East economic corridor
                </span>
                . As supply chains become more intricate, the focus on
                developing advanced 3PL systems to optimize trade and logistics
                operations is intensifying.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Development of logistics corridors and special economic
                    zones to attract investment and refine logistics networks.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Introduction of tax incentives and regulatory measures to
                    enhance transparency, efficiency, and sustainability in the
                    logistics domain.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Encouragement of public-private partnerships to drive
                    innovation and investment in digital technologies and
                    automation.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Mitigation of logistical bottlenecks and reduction of
                    operational costs through cutting-edge technologies and
                    strategic infrastructure enhancements.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Boosting industry competitiveness by enhancing overall
                    supply chain efficiency and agility.
                  </span>
                </li>
              </ul>

              <Link to="/Industries/Government" className="btn btn-danger">
                Talk to our Experts
              </Link>
            </div>

            {/* Video Content */}
            <div className="col-md-5 text-md-end mt-4 mt-md-0 mb-2 order-md-2 order-1">
              <img
                src={img4}
                alt="Cloudstry Technologies"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </FadeOnScroll>

      {/* Content Sections */}
    </div>
  );
}

export default Thirdpartylogistic;
