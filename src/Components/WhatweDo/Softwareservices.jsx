import React from "react";
import img1 from "../Images/software ai.png";
import cloud from "../Images/cloud.jpg";
import ai from "../Images/ai.jpg";
import web3 from "../Images/blockchain.jpg";
import "./Software.css";
// import '../WhatweDo/Product_Platfrom/Common.css'
import { Link } from "react-router-dom";

function Softwareservices() {
  return (
    <div className="bg-light">
      <header className="bg-white text-white text-center py-5 position-relative">
        {/* Navigation Path */}
        <div
          className="position-absolute top-0 p-4 start-0 ms-0 mt-0  fs-5 fw-bold"
          style={{ zIndex: 100 }}
        >
          <span className="small text-primary">
            <a href="/" className="">
              What we Do ? /
            </a>{" "}
            <a href="#">IT Solutions</a> / Software Services
          </span>
        </div>

        {/* Header Content */}
        <div className="container text-primary mt-5">
          <h1 className="display-6">Comprehensive Software Services</h1>
          <p className="lead">
            Customized software solutions are essential for businesses
            navigating today's digital world. They can streamline operations,
            spark innovation, and align technology with strategic objectives.
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center justify-content-between bg-white mt-3 mb-3 shadow px-5 rounded-3 position-relative">
          {/* Text Content */}
          <div className="col-md-6 mb-2">
            <h2 className="display-6 text-primary" style={{ fontWeight: 300 }}>
              Customized Software Solutions for Industry Leadership
            </h2>
            <p className="text-muted mb-4">
              In the current landscape, software services have become
              indispensable, driving innovation and efficiency across
              industries. The shift towards{" "}
              <span className="fw-bold text-primary">
                integrated digital ecosystems
              </span>{" "}
              is transforming traditional business models, allowing
              organizations to streamline operations, enhance customer
              experiences, and unlock new revenue streams. At the industry
              level, there is a growing demand for{" "}
              <span className="text-primary fw-bold">
                bespoke software solutions{" "}
              </span>{" "}
              that cater to specific operational needs, ensuring that businesses
              not only stay competitive but also lead in their respective
              markets. As technology evolves, the emphasis on agility,
              scalability, and security has never been more critical, with
              companies seeking software services that offer robust,
              future-proof solutions to complex challenges.
            </p>
            <Link to="/Support" className="btn btn-danger">
              Start With Us
            </Link>
          </div>

          {/* Video Content */}
          <div
            className="col-md-5 text-md-end mt-md-0 mb-2"
            style={{ marginTop: "-20px" }}
          >
            <img
              src={img1}
              alt="Software services"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <section class="py-5">
        <div class="container px-5 my-3">
          {/* <h3 className="text-danger fw-light display-5 text-center .customheading">Transformative Solutions</h3> */}
          <div class="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="card h-80 shadow border-0 service-card">
                <div className="blackblur">
                  <img
                    className="card-img-top img-fluid"
                    src={ai}
                    alt="AI"
                    style={{ height: "14rem" }}
                  />
                </div>
                {/* Hover text */}
                <div className="card-body p-4 ">
                  <div className="badge bg-primary bg-gradient rounded-pill  mb-2">
                    Machine Intelligence
                  </div>
                  <div className="h4  text-danger mt-2 fw-light">
                    Artifical Intelligence
                  </div>
                  <p className="card-text mb-0">
                    Cognitive computing is revolutionizing industries by
                    enabling systems to process and analyze vast amounts of
                    data, making intelligent decisions that mimic human
                    cognition. Its role in automating complex tasks and
                    enhancing decision-making is crucial in today’s data-driven
                    world.
                  </p>
                  <p class=" transparent mt-2 ">
                    <Link to="/" className="text-danger fw-bold">
                      Learn more
                    </Link>
                    <i
                      class="fa fa-arrow-right text-danger mt-1 mx-1  trans"
                      aria-hidden="true"
                    ></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-80 shadow border-0 service-card">
                <div className="blackblur">
                  <img
                    className="card-img-top img-fluid"
                    src={cloud}
                    alt="AI"
                    style={{ height: "14rem" }}
                  />
                </div>
                {/* Hover text */}
                <div className="card-body p-4 ">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                    Virtual Infrastructure
                  </div>
                  <div className="h4  text-danger fw-light mt-2">
                    Cloud Services
                  </div>
                  <p className="card-text mb-0">
                    Virtual infrastructure is the backbone of modern IT,
                    offering scalable and flexible computing resources. It
                    allows businesses to efficiently manage operations, reduce
                    costs, and quickly adapt to changing market demands through
                    seamless access to computing power and storage.
                  </p>
                  <p class=" transparent mt-2 ">
                    <Link to="/" className="text-danger fw-bold">
                      Learn more
                    </Link>
                    <i
                      class="fa fa-arrow-right text-danger mt-1 mx-1  trans"
                      aria-hidden="true"
                    ></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-80 shadow border-0 service-card">
                <div className="blackblur">
                  <img
                    className="card-img-top img-fluid"
                    src={web3}
                    alt="AI"
                    style={{ height: "14rem" }}
                  />
                </div>
                {/* Hover text */}
                <div className="card-body p-4">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                    Agile Operations
                  </div>
                  <div className="h4 text-danger mt-2 fw-light">
                    DevOps Excellence
                  </div>
                  <p className="card-text mb-0">
                    DevOps is revolutionizing the software development lifecycle
                    by integrating development and operations to enhance
                    collaboration, efficiency, and continuous delivery. This
                    approach streamlines workflows, accelerates deployment, and
                    ensures high-quality software through automation and
                    real-time feedback loops.
                  </p>
                  <p className="transparent mt-2">
                    <Link to="/" className="text-danger fw-bold">
                      Learn more
                    </Link>
                    <i
                      className="fa fa-arrow-right text-danger mt-1 mx-1 trans"
                      aria-hidden="true"
                    ></i>
                  </p>
                </div>
              </div>
            </div>

            <hr className="bg-danger" />
          </div>
        </div>
      </section>

      {/* Issuer Section */}
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <h3
              className="text-primary display-6 mb-3"
              style={{ fontWeight: 300 }}
            >
              What are the Essential Software Challenges ?
            </h3>
            <ul className="list-unstyled mt-4">
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  Scalability: Solutions engineered to expand alongside business
                  growth, adapting to increased demands and changing needs.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  Data Security: Implementation of advanced security protocols
                  to safeguard sensitive information and ensure adherence to
                  data protection standards.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  User Experience: Emphasis on designing intuitive and
                  accessible interfaces to boost usability and user engagement.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  Integration Complexity: Approaches to streamline and simplify
                  the integration of new software with existing systems.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  Cost Management: Strategic budgeting and cost-control
                  techniques to optimize software investments and deliver
                  maximum value.
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img
              src="path-to-your-image.jpg"
              alt="Software Challenges"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div className="row gx-0 py-5 px-5">
        <div
          className="col-xl-6 col-lg-5 d-flex justify-content-left align-items-center"
          style={{ marginBottom: "5rem" }}
        >
          <img
            className="img-fluid"
            src="https://via.placeholder.com/600x400.png?text=Dummy+Image"
            alt="Macbook"
          />
        </div>
        <div className="col-md-6 mb-5">
          <h3
            className="text-primary display-6 mb-3"
            style={{ fontWeight: 300 }}
          >
            Tailored Software Solutions for Diverse Needs
          </h3>
          <p className="h5 mb-2" style={{ fontWeight: 400, color: "#353535" }}>
            Cloudstry's software solutions address a range of business
            requirements with precision and expertise. Our offerings ensure that
            technology seamlessly integrates with organizational goals and
            operational needs.
          </p>

          <ul className="list-unstyled mt-4">
            <li className="mb-2 d-flex align-items-start">
              <i
                className="fa fa-check text-primary me-2"
                style={{ marginTop: "6px" }}
              ></i>
              <span className="d-inline">
                Custom Software Development: Bespoke solutions designed to meet
                specific business requirements and align with organizational
                goals.
              </span>
            </li>
            <li className="mb-2 d-flex align-items-start">
              <i
                className="fa fa-check text-primary me-2"
                style={{ marginTop: "6px" }}
              ></i>
              <span className="d-inline">
                Application Integration: Effortless integration of diverse
                software applications to boost system interoperability and
                enhance efficiency.
              </span>
            </li>
            <li className="mb-2 d-flex align-items-start">
              <i
                className="fa fa-check text-primary me-2"
                style={{ marginTop: "6px" }}
              ></i>
              <span className="d-inline">
                Maintenance and Support: Ongoing support services including
                regular updates, bug fixes, and technical assistance to ensure
                optimal performance and reliability.
              </span>
            </li>
            <li className="mb-2 d-flex align-items-start">
              <i
                className="fa fa-check text-primary me-2"
                style={{ marginTop: "6px" }}
              ></i>
              <span className="d-inline">
                Cloud-Based Solutions: Deployment on cloud platforms to improve
                scalability, accessibility, and collaborative capabilities.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5">
            <h3
              className="text-primary display-6 mb-3"
              style={{ fontWeight: 300 }}
            >
              Why Choose Our Software Services?
            </h3>
            <p
              className="h5 mb-2"
              style={{ fontWeight: 400, color: "#353535" }}
            >
              Cloudstry stands out with its dedication to delivering exceptional
              software solutions tailored to diverse business needs. Discover
              the advantages of choosing our services.
            </p>

            <ul className="list-unstyled mt-4">
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  Expertise and Experience: Proven track record of delivering
                  high-quality software solutions across various industries,
                  supported by a team of skilled professionals.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  Customized Approach: Tailored solutions designed to meet the
                  unique needs and challenges of each client.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  Advanced Technology: Utilization of the latest technologies
                  and industry best practices to deliver innovative and
                  effective software solutions.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  End-to-End Support: Comprehensive support throughout the
                  software lifecycle, from development and implementation to
                  ongoing maintenance and updates.
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6 mb-5">
            <img
              src="path/to/your/image.jpg"
              alt="Software Services"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Closing Thoughts Section */}
      <section
        style={{ position: "relative", marginTop: "1rem" }}
        className="px-5 py-5"
      >
        <div
          style={{
            position: "absolute",
            top: "19%",
            right: "30%",
            transform: "translateX(50%)",
            background: "#efefef",
            borderRadius: "8px",
            padding: "2rem",
            maxWidth: "80%",
            zIndex: 2,
          }}
          className="col-lg-6"
        >
          <h3 className="text-primary font-weight-bold mb-4">
            A Commitment to Excellence You Can Trust
          </h3>
          <p>
            At Cloudstry Tech, we stand by the quality and reliability of our
            solutions. Our commitment to innovation and customer satisfaction is
            at the core of everything we do. We believe in the power of
            technology to transform businesses, and we’re here to ensure that
            our clients succeed with confidence. Join us on this journey and
            experience the difference that true dedication and expertise can
            make. Your success is our promise.
          </p>
          <Link className="btn btn-danger text-white" to="/Support">
            Connect with us
          </Link>
        </div>

        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <img
            className="img-fluid rounded"
            src={ai}
            alt="Industry"
            style={{ width: "800px", height: "500px" }}
          />
        </div>
      </section>
    </div>
  );
}

export default Softwareservices;
