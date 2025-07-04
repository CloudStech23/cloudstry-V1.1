import React, { useEffect, useState } from "react";
import img1 from "../Images/software ai.png";
import cloud from "../Images/cloud.jpg";
import ai from "../Images/ai.jpg";
import devops from "./Images/ss.devops.jpg";
import soft1 from "./Images/ss.challange.png";
import soft2 from "./Images/ss.solution.jpg";
import soft3 from "./Images/ss.fourth.jpg";
import soft4 from "./Images/ss.last.jpg";
import bg from "../Images/header-bg.png";
import "./Software.css";
// import '../WhatweDo/Product_Platfrom/Common.css'
import { Link } from "react-router-dom";
import FadeOnScroll from "../Animate/Motion";
import { Helmet } from "react-helmet-async";

function Softwareservices() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Add event listener to monitor window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-light">
      <Helmet>
        <title> Software Solutions | CloudstryTech</title>
        <meta name="description" content=" " />
        <meta
          name="keywords"
          content="Cloudstry Technologies,Cloudstry Technologies Software Solutions"
        />
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.cloudstrytech.com/solutions/software-services "
        />

        <meta
          property="og:title"
          content="Software Solutions | Cloudstry Technologies"
        />
        <meta property="og:description" content=" " />
        <meta
          property="og:url"
          content="https://www.cloudstrytech.com/solutions/software-services"
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
                What we Do ? /
              </a>{" "}
              <a href="#" style={{ color: "#1236d0" }}>
                IT Solutions
              </a>{" "}
              / Software Services
            </span>
          </div>

          {/* Header Content */}
          <div
            className="text-center py-5 text-dark "
            style={{ position: "relative", zIndex: 1 }}
          >
            <h2 className="display-4 mb-3 fw-bold" style={{ color: "#1236d0" }}>
              Innovative Software Solutions
            </h2>

            <div
              className="lead mb-4 mx-auto text-center px-3 col-10"
              style={{ color: "#1236d0" }}
            >
              Customized software solutions are essential for businesses
              navigating today's digital world. They can streamline operations,
              spark innovation, and align technology with strategic objectives.
            </div>
          </div>
        </header>
      </FadeOnScroll>

      {/* Hero Section */}

      <FadeOnScroll animation="up">
        <div className="container px-5 py-5">
          <div className="row align-items-center justify-content-between bg-white mt-3 mb-3 shadow px-4 rounded-3 position-relative">
            {/* Text Content */}
            <div
              className="col-md-5 order-first order-md-last text-md-end mt-md-0 mb-2"
              style={{ marginTop: "-20px" }}
            >
              <img
                src={img1}
                alt="Software services"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 mb-2 order-last order-md-first">
              <h2
                className="display-6 text-primary"
                style={{ fontWeight: 300, fontSize: "32px" }}
              >
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
                that cater to specific operational needs, ensuring that
                businesses not only stay competitive but also lead in their
                respective markets. As technology evolves, the emphasis on
                agility, scalability, and security has never been more critical,
                with companies seeking software services that offer robust,
                future-proof solutions to complex challenges.
              </p>
              <Link to="/support" className="btn btn-danger">
                Start With Us
              </Link>
            </div>

            {/* Video Content */}
          </div>
        </div>
      </FadeOnScroll>

      {/* Card Section */}
      <FadeOnScroll animation="up">
        <section className="py-5 px-5">
          <div className="container px-4 my-3">
            {/* <h3 className="text-danger fw-light display-5 text-center .customheading">Transformative Solutions</h3> */}
            <div className="row gx-5 px-4">
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
                      enhancing decision-making is crucial in today’s
                      data-driven world.
                    </p>
                    <p className=" transparent mt-2 ">
                      <Link to="/" className="text-danger fw-bold">
                        Learn more
                      </Link>
                      <i
                        className="fa fa-arrow-right text-danger mt-1 mx-1  trans"
                        aria-hidden="true"
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-80 shadow border-0 service-card">
                  <div className="blackblur d">
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
                      costs, and quickly adapt to changing market demands
                      through seamless access to computing power and storage.
                    </p>
                    <p className=" transparent mt-2 ">
                      <Link to="/" className="text-danger fw-bold">
                        Learn more
                      </Link>
                      <i
                        className="fa fa-arrow-right text-danger mt-1 mx-1  trans"
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
                      src={devops}
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
                      DevOps is revolutionizing the software development
                      lifecycle by integrating development and operations to
                      enhance collaboration, efficiency, and continuous
                      delivery. This approach streamlines workflows, accelerates
                      deployment, and ensures high-quality software through
                      automation and real-time feedback loops.
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
      </FadeOnScroll>

      {/* Issuer Section */}
      <FadeOnScroll animation="up">
        <div className="container px-5">
          <div className="row mb-5">
            <div className="col-md-6 d-xl-block d-none">
              <img
                src={soft1}
                alt="Software Challenges"
                className="img-fluid order-first order-md-last"
              />
            </div>
            <div className="col-md-6 order-last order-md-first ">
              <h3 className="text-primary display-7 fw-light mb-3">
                What are the Essential Software Challenges ?
              </h3>
              <ul className="list-unstyled mt-4">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Scalability: Solutions engineered to expand alongside
                    business growth, adapting to increased demands and changing
                    needs.
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
                    accessible interfaces to boost usability and user
                    engagement.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Integration Complexity: Approaches to streamline and
                    simplify the integration of new software with existing
                    systems.
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
          </div>
        </div>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
        <div className="row gx-0 px-5 py-5 ">
          <div className="col-xl-6 col-lg-4 d-flex  justify-content-center align-items-center">
            <img
              className="img-fluid"
              src={soft2}
              alt="Cloudstry Technologies"
              style={{ width: "36rem" }}
            />
          </div>
          <div className="col-md-5 mb-5">
            <h3
              className="text-primary display-7 mb-3"
              style={{ fontWeight: 300 }}
            >
              Tailored Software Solutions for Diverse Needs
            </h3>
            <p
              className=" mb-2 fw-normal text-muted"
              style={{ color: "#353535" }}
            >
              Cloudstry's software solutions address a range of business
              requirements with precision and expertise. Our offerings ensure
              that technology seamlessly integrates with organizational goals
              and operational needs.
            </p>

            <ul className="list-unstyled mt-4">
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  Custom Software Development: Bespoke solutions designed to
                  meet specific business requirements and align with
                  organizational goals.
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
                  Cloud-Based Solutions: Deployment on cloud platforms to
                  improve scalability, accessibility, and collaborative
                  capabilities.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
        <div className="container px-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-5 order-first order-md-last">
              <img src={soft3} alt="Software Services" className="img-fluid" />
            </div>
            <div className="col-md-6 mb-5 order-last order-md-first">
              <h3 className="text-primary fw-light display-7 mb-3">
                Why Choose Our Software Services?
              </h3>
              <p className="text-muted mb-2">
                Cloudstry stands out with its dedication to delivering
                exceptional software solutions tailored to diverse business
                needs. Discover the advantages of choosing our services.
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
          </div>
        </div>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
        {isSmallScreen && (
          <section>
            <div className="col-lg-6 p-4 shadow mx-2">
              <h3 className="text-primary font-weight-bold mb-4">
                A Commitment to Excellence You Can Trust
              </h3>
              <p>
                At Cloudstry Tech, we stand by the quality and reliability of
                our solutions. Our commitment to innovation and customer
                satisfaction is at the core of everything we do. We believe in
                the power of technology to transform businesses, and we’re here
                to ensure that our clients succeed with confidence. Join us on
                this journey and experience the difference that true dedication
                and expertise can make. Your success is our promise.
              </p>
              <Link className="btn btn-danger text-white" to="/support">
                Connect with us
              </Link>
            </div>
          </section>
        )}
      </FadeOnScroll>

      <FadeOnScroll>
        <section
          style={{ position: "relative", marginTop: "1rem" }}
          className="px-5 py-5 d-xl-block d-none mb-4"
        >
          <div
            style={{
              position: "absolute",
              top: "19%",
              right: "33%",
              transform: "translateX(50%)",
              background: "#efefef",
              borderRadius: "8px",
              padding: "2rem",
              maxWidth: "80%",
              zIndex: 2,
            }}
            className="col-lg-6 d-xl-block d-none"
          >
            <h3 className="text-primary font-weight-bold mb-4">
              A Commitment to Excellence You Can Trust
            </h3>
            <p>
              At Cloudstry Tech, we stand by the quality and reliability of our
              solutions. Our commitment to innovation and customer satisfaction
              is at the core of everything we do. We believe in the power of
              technology to transform businesses, and we’re here to ensure that
              our clients succeed with confidence. Join us on this journey and
              experience the difference that true dedication and expertise can
              make. Your success is our promise.
            </p>
            <Link className="btn btn-danger text-white" to="/support">
              Connect with us
            </Link>
          </div>

          <div
            style={{ position: "relative", zIndex: 1, width: "100%" }}
            className="px-5"
          >
            <img
              className="img-fluid rounded"
              src={soft4}
              alt="Industry"
              style={{ width: "800px", height: "500px" }}
            />
          </div>
        </section>
      </FadeOnScroll>
    </div>
  );
}

export default Softwareservices;
