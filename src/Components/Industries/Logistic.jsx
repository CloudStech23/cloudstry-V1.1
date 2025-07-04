import React from "react";
import "./Common.css";
import { Link } from "react-router-dom";
import bg from "../Images/header-bg.png";
import img1 from "./Images/gov.first.jpg";
import img2 from "./Images/lg.second.jpg";
import img3 from "./Images/gov.seven.jpg";
import FadeOnScroll from "../Animate/Motion";
import { Helmet } from "react-helmet-async";

function Logistic() {
  return (
    <div>
      <Helmet>
        <title> Logistic | CloudstryTech</title>
        <meta
          name="description"
          content="Optimizing logistics and supply chain management with advanced IT solutions, ensuring efficiency, automation, and real-time tracking "
        />
        <meta name="keywords" content="Cloudstry Technologies" />
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.cloudstrytech.com/industries/logistic "
        />

        <meta
          property="og:title"
          content=" Logistic | Cloudstry Technologies"
        />
        <meta
          property="og:description"
          content="Optimizing logistics and supply chain management with advanced IT solutions, ensuring efficiency, automation, and real-time tracking"
        />
        <meta
          property="og:url"
          content="https://www.cloudstrytech.com/industries/logistic"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <FadeOnScroll>
        <header
          className="text-white text-center py-5 position-relative"
          style={{
            // backgroundColor: "rgb(233, 239, 241)",
            backgroundColor: "white",
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
                Industries We Serve /
              </a>{" "}
              <a href="#" style={{ color: "#1236d0" }}>
                Logistic
              </a>{" "}
            </span>
          </div>

          {/* Header Content */}
          <div
            className="text-center py-5 text-dark "
            style={{ position: "relative", zIndex: 1 }}
          >
            <h2
              className="display-4 px-1 mb-3 fw-bold"
              style={{ color: "#1236d0" }}
            >
              Revolutionizing Logistics
            </h2>

            <div
              className="lead mb-4 mx-auto text-center px-4 col-10"
              style={{ color: "#1236d0" }}
            >
              Streamline supply chain with our innovative technology solutions.
              From real-time tracking to AI-driven optimization, discover how we
              enhance efficiency, reduce costs, and drive success in the
              logistics sector
            </div>
          </div>
        </header>

        <section
          className="image-video-text-interactivity fadeInUp mb-5"
          style={{ marginTop: "10rem" }}
        >
          <div className="container mb-5 px-5">
            <div className="row align-items-center mb-5">
              {/* Image Section */}
              <div className="col-md-6 mb-5 mb-md-0">
                <img
                  className="img-fluid  "
                  height={365}
                  width={504}
                  src={img1}
                  alt="Logistic"
                />
              </div>

              {/* Text Section */}
              <div className="col-md-6 ">
                <h3 className="text-primary fw-light mb-3">
                  Major Challenges in the Logistics Sector !
                </h3>
                <p className="text-muted">
                  The logistics industry faces several critical challenges that
                  impact efficiency and effectiveness
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Supply Chain Visibility:</span>
                      Lack of real-time visibility into supply chain operations
                      can lead to inefficiencies and delays.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Inventory Management:</span>
                      Balancing inventory levels to meet demand while minimizing
                      excess stock and storage costs is a complex task.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Route Optimization:</span>
                      Efficiently planning and optimizing delivery routes to
                      reduce transportation costs and improve delivery times is
                      a challenge.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Data Integration:</span>
                      Integrating data from various sources and systems to gain
                      actionable insights and improve decision-making is often
                      difficult.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Regulatory Compliance:</span>
                      Navigating complex regulatory requirements and ensuring
                      compliance across different regions can be challenging.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="mt-4" />
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
                  How Digitalization Solving Logistics Challenges ?
                </h3>
                <p>
                  Digitalization is revolutionizing the logistics sector by
                  addressing these key challenges:
                </p>

                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Enhanced Visibility:</span> IoT
                      and tracking technologies provide real-time visibility
                      into shipments and inventory, improving transparency and
                      coordination.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Intelligent Inventory Management:
                      </span>{" "}
                      Advanced analytics and AI help predict demand and optimize
                      inventory levels, reducing costs and enhancing efficiency.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Route Optimization Solutions:
                      </span>{" "}
                      Digital tools and algorithms optimize delivery routes,
                      reducing fuel consumption, improving delivery times, and
                      minimizing costs.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Seamless Data Integration:
                      </span>{" "}
                      Integrated platforms and data analytics unify information
                      from various sources, providing actionable insights and
                      improving decision-making.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Automated Compliance:</span>{" "}
                      Digital solutions automate compliance processes, ensuring
                      adherence to regulatory requirements and reducing manual
                      effort.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="col-md-6 text-md-end mt-4 mt-md-0 order-md-2 order-1 mb-5">
                <img
                  className="img-fluid  "
                  height={365}
                  width={504}
                  src={img2}
                  alt=" "
                />
              </div>
            </div>
            <hr className="mt-4" />
          </div>
        </section>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
        <section
          className="image-video-text-interactivity fadeInUp mb-5"
          style={{ marginTop: "6rem" }}
        >
          <div className="container mb-5 px-5">
            <div className="row align-items-center mb-5">
              {/* Image Section */}
              <div className="col-md-6 mb-5 mb-md-0">
                <img
                  className="img-fluid"
                  height={365}
                  width={504}
                  src={img3}
                  alt=" "
                />
              </div>

              {/* Text Section */}
              <div className="col-md-6 ">
                <h3 className="text-primary fw-light mb-3">
                  How We Can Support the Logistics Industry ?
                </h3>
                <p className="text-muted">
                  Cloudstry Technologies offers a range of IT solutions tailored
                  to the logistics sector’s needs:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Real-Time Tracking Systems:
                      </span>{" "}
                      Implement advanced tracking systems that provide real-time
                      updates on shipments and inventory, enhancing visibility
                      and control.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        AI-Driven Inventory Solutions:
                      </span>{" "}
                      Utilize AI and machine learning to manage inventory more
                      efficiently, predict demand, and optimize stock levels.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Route Optimization Tools:</span>{" "}
                      Deploy route optimization software to enhance delivery
                      efficiency, reduce costs, and improve customer
                      satisfaction.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Integrated Data Platforms:
                      </span>{" "}
                      Our solutions integrate data from multiple sources to
                      provide a unified view of operations and support
                      data-driven decision-making.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Compliance Management Systems:
                      </span>{" "}
                      Ensure regulatory compliance with automated systems that
                      simplify and streamline adherence to complex regulations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="mt-4" />
          </div>
        </section>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
        <section className="pb-5 mt-5 mb-4">
          <div className="container px-5">
            <div className="half-underline-container">
              <h3
                className="text-primary text-danger text-center display-6  mt-5  half-underline"
                style={{ marginBottom: "2rem" }}
              >
                Key Features for the Logistics Industry
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-10 col-xl-8 mx-auto">
                <div
                  className="p-5 bg-white shadow  rounded"
                  style={{ width: "100%", height: "auto" }}
                >
                  <div className="media feature-card">
                    <h3 className="text-primary fw-normal mb-3">
                      Advanced 3PL Logistics Services
                      <p className="text-muted h6 mt-2">
                        Cloudstry Technologies is thrilled to be involved in
                        groundbreaking projects that are revolutionizing the
                        logistics sector:
                      </p>
                    </h3>
                    <div className="media-body ml-3">
                      <div className="blockquote border-0 p-0">
                        <p className="font-italic text-muted fs-6">
                          Our 3PL (Third-Party Logistics) services offer
                          comprehensive solutions for warehousing, distribution,
                          and fulfillment, optimizing supply chain and reducing
                          operational costs. Our expertise in 3PL logistics
                          ensures efficient management of logistics needs, from
                          inventory handling to delivery, providing you with
                          scalable and flexible solutions tailored to business
                          requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeOnScroll>
    </div>
  );
}

export default Logistic;
