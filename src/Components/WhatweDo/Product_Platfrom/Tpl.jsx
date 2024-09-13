import React from "react";
import "./Common.css";
import { Link } from "react-router-dom";
import img1 from './Images/tpl.First.jpg'
import img2 from './Images/tpl.challages.jpg'
import img3 from './Images/tpl.innovative.jpg'
import img4 from './Images/tpl.government.jpg'
import bg from "./../../Images/bg1.jpg";

function Thirdpartylogistic() {
  return (
    <div>
      <header
        className="text-white text-center py-5 position-relative"
        style={{ height: "19rem", overflow: "hidden" }}
      >
        {/* Background Image */}
        <img
          src={bg}
          alt="Background"
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          style={{ zIndex: 1, objectFit: "cover" }}
        />

        {/* Black Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgb(16 11 11 / 42%)", zIndex: 2 }}
        ></div>

        {/* Navigation Path */}
        <div
          className="position-absolute top-0 p-4 start-0 ms-0 mt-0 fs-5 fw-bold"
          style={{ zIndex: 3 }}
        >
          <span className="small text-white">
            <a href="/" className="text-white">
              What we Do ? /
            </a>{" "}
            <a href="#" className="text-white">
            Product Platform
            </a>{" "}
            /  3PL Solutions
          </span>
        </div>

        {/* Header Content */}
        <div
          className="container text-white mt-5"
          style={{ zIndex: 3, position: "relative" }}
        >
          <h1 className="display-6">
          3PL Solutions for Modern Supply Chains
          </h1>
          <p className="lead">
          Transforming supply chain management by outsourcing logistics to third-party providers for streamlined operations and cost savings.
          </p>
        </div>
      </header>

      <div className="container py-5">
        <div className="row align-items-center justify-content-between bg-light p-4 rounded-3 position-relative">
          {/* Text Content */}
          <div className="col-md-5 mt-4 mb-2">
            <span className="badge bg-primary rounded-pill px-2 py-2 mb-3">
              3PL Solution
            </span>
            <h2
              className=" display-5 text-primary "
              style={{ fontWeight: 300 }}
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
          <div className="col-md-5 text-md-end mt-4 mt-md-0 mb-2">
            <img
              src={img1}
              alt="Cloudstry Technologies"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <section className="image-video-text-interactivity fadeInUp mb-5">
        <div className="container mb-5">
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
              <h3 className="text-primary fw-bold mb-3">
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
                    Real-time visibility and tracking can be difficult, leading
                    to inefficiencies in inventory and shipment management.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Controlling logistics costs remains a significant challenge,
                    necessitating ongoing optimization and strategic cost-saving
                    measures.
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
                    Compliance with evolving regulations and industry standards
                    demands dedicated attention and resources.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="image-video-text-interactivity fadeInUp mb-5"
        style={{ marginTop: "5rem" }}
      >
        <div className="container mt-5">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6">
              <h3 className="text-primary fw-bold mb-3">
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
                    Leverage extensive 3PL networks to facilitate expansion into
                    new markets with ease and efficiency.
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
                    industry best practices, ensuring continuous improvement in
                    supply chain management.
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
            <div className="col-md-6 text-md-end mt-4 mt-md-0">
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
      <hr />

      <div className="container my-5 py-5">
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
          <div className="col-md-6 mt-4 mb-2">
            <h2
              className=" display-7 text-primary "
              style={{ fontWeight: "bold" }}
            >
              Economic Growth Through Advanced 3PL Strategies
            </h2>
            <p className="text-muted mb-4">
              The pivotal influence of Third-Party Logistics (3PL) on
              stimulating economic growth and elevating global competitiveness
              is increasingly acknowledged, especially within the{" "}
              <span className="text-primary fw-bold">
                India-Middle East economic corridor
              </span>
              . As supply chains become more intricate, the focus on developing
              advanced 3PL systems to optimize trade and logistics operations is
              intensifying.
            </p>
            <ul className="list-unstyled mt-4">
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  Development of logistics corridors and special economic zones
                  to attract investment and refine logistics networks.
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
                  Boosting industry competitiveness by enhancing overall supply
                  chain efficiency and agility.
                </span>
              </li>
            </ul>

            <Link to="/Government" className="btn btn-danger">
              Talk to our Experts
            </Link>
          </div>

          {/* Video Content */}
          <div className="col-md-5 text-md-end mt-4 mt-md-0 mb-2">
            <img
              src={img4}
              alt="Cloudstry Technologies"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Content Sections */}
    </div>
  );
}

export default Thirdpartylogistic;
