import React from "react";
import "../Product_Platfrom/Common.css";
import { Link } from "react-router-dom";
import img1 from "./Images/dc.main.png";
import img2 from "./Images/dc.main.jpg";
import img3 from "./Images/dc.second.jpg";
import img4 from "./Images/dc.issue.png";
import img5 from "./Images/dc.earner.png";
import img6 from "./Images/dc.universities.jpg";
import img7 from "./Images/dc.training.jpg";
import img8 from "./Images/dc.association.jpg";
import img9 from "./Images/dc.corporation.jpg";
import bg from "./../../Images/header-bg.png";
import FadeOnScroll from "../../Animate/Motion";
import { Helmet } from "react-helmet-async";
function Digitalcertificate() {
  return (
    <div>
      <Helmet>
        <title> Digital Certificate | CloudstryTech</title>
        <meta name="description" content=" " />
        <meta name="keywords" content="Cloudstry Technologies" />
        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.cloudstrytech.com/product/digital-certificate"
        />

        <meta
          property="og:title"
          content=" Digital Certificate | Cloudstry Technologies"
        />
        <meta property="og:description" content=" " />
        <meta
          property="og:url"
          content="https://www.cloudstrytech.com/product/digital-certificate"
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
                Product Platform
              </a>{" "}
              / Digital Certificate
            </span>
          </div>

          {/* Header Content */}
          <div
            className="text-center py-5 text-dark "
            style={{ position: "relative", zIndex: 1 }}
          >
            <h2 className="display-4 mb-3 fw-bold" style={{ color: "#1236d0" }}>
              Digital Certificate Solutions
            </h2>

            <div
              className="lead mb-4 mx-auto text-center px-3 col-10"
              style={{ color: "#1236d0" }}
            >
              Streamlined digital certification for secure, verified
              interactions, Empowering industries with enhanced compliance.
            </div>
          </div>
        </header>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
        <div className="container mb-5  py-5 px-5">
          <div className="row align-items-center justify-content-between bg-light p-4 rounded-3 position-relative">
            {/* Text Content */}
            <div className="col-md-5 mt-4 mb-2 order-md-1 order-2">
              <span className="badge bg-primary rounded-pill px-2 py-2 mb-3">
                Digital Certificates
              </span>
              <h2
                className=" display-7 text-primary "
                style={{ fontWeight: 250 }}
              >
                Recognize accomplishments with 100% verifiable digital badges
              </h2>
              <p className="text-muted mb-4">
                In an increasingly digital world, the need for secure and
                verifiable credentials is paramount across various sectors, from
                education and professional certifications to corporate training
                and skill-based achievements. Traditional paper certificates are
                not only vulnerable to forgery but also difficult to verify and
                manage, posing significant challenges for organizations and
                individuals alike. The demand for a solution that ensures the
                authenticity and accessibility of credentials is more pressing
                than ever.
              </p>
              <Link to="/support" className="btn btn-danger">
                Talk to our Experts
              </Link>
            </div>

            {/* Video Content */}
            <div className="col-md-5 text-md-end mt-4 mt-md-0 mb-2 order-md-2 order-1">
              <img src={img1} alt="Dummy" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
        <section className="image-video-text-interactivity fadeInUp mb-5">
          <div className="container mb-5 px-5">
            <div className="row align-items-center mb-5">
              {/* Image Section */}
              <div className="col-md-6 mb-5 mb-md-0 ">
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
                  Why choose Digital Certificate ?
                </h3>
                <p className="">
                  The need for secure, verifiable credentials across sectors
                  demands a unified solution that simplifies management while
                  ensuring authenticity:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-3">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span className="" style={{ fontWeight: 700 }}>
                      Unified Credential Management:
                    </span>{" "}
                    <span className="">
                      A platform that consolidates the creation, issuance, and
                      management of digital certificates and badges.
                    </span>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span className="" style={{ fontWeight: 700 }}>
                      Enhanced Security:
                    </span>{" "}
                    <span className="">
                      Provides tamper-proof, cryptographically secured
                      credentials that are trusted and verifiable.
                    </span>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span className="" style={{ fontWeight: 700 }}>
                      Scalable Solutions:
                    </span>{" "}
                    <span className="">
                      Supports a wide range of credentials, from academic
                      degrees to professional certifications and skill-based
                      badges.
                    </span>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span className="" style={{ fontWeight: 700 }}>
                      Ease of Use:
                    </span>{" "}
                    <span className="">
                      Offers user-friendly tools that require minimal technical
                      expertise for managing credentials.
                    </span>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span className="" style={{ fontWeight: 700 }}>
                      Global Accessibility:
                    </span>{" "}
                    <span className="">
                      Ensures that issued credentials are easily shareable and
                      accessible across digital platforms.
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
              <div className="col-md-6 text-md-end order-first order-md-last  mt-4 mt-md-0 mb-2">
                <img
                  className="img-fluid rounded"
                  height={365}
                  width={504}
                  src={img3}
                  alt="Cloudstry Technologies"
                />
              </div>
              {/* Text Section */}
              <div className="col-md-6  order-last order-md-first">
                <h3 className="text-primary fw-light mb-3">
                  Credential Solutions Tailored for Every Sector
                </h3>
                <p className="">
                  Digital certificates redefine how credentials are managed and
                  verified, offering unparalleled security and efficiency far
                  beyond traditional paper-based methods. Embrace the future of
                  credentialing with advanced, industry-ready solutions.
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-4">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span className="d-inline">
                      Fortified with cutting-edge encryption and digital
                      signatures, guaranteeing authenticity and safeguarding
                      against tampering.
                    </span>
                  </li>
                  <li className="mb-4">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span className="d-inline">
                      Instant online verification streamlines credential
                      validation, slashing processing time and boosting
                      operational efficiency.
                    </span>
                  </li>
                  <li className="mb-4">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span className="d-inline">
                      Customizable certificates enable organizations to showcase
                      their branding, complete with logos and authorized
                      signatures.
                    </span>
                  </li>
                  <li className="mb-4">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    <span className="d-inline">
                      Global accessibility ensures credentials can be shared and
                      recognized anytime, anywhere—maximizing reach and ease of
                      use.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Image Section */}
            </div>
          </div>
        </section>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
        <div className="" style={{ marginTop: "7rem" }}>
          <div className="container px-5">
            <div className="text-center">
              <h2 className="fw-light display-6 text-danger mb-5">
                Join Digital Certifcate Community
              </h2>
            </div>
            <div className="row justify-content-center  text-center">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="card bg-light py-4 rounded">
                  <div className="card-body text-primary">
                    <h3 className="fs-1 fw-bold   mb-0">Millions</h3>
                    <p className="fs-5">of earners</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="card bg-light py-4 rounded">
                  <div className="card-body text-primary">
                    <h3 className="fs-1 fw-bold   mb-0">100+</h3>
                    <p className="fs-5">countries</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="card bg-light py-4 rounded">
                  <i className="fa fa-id-card-o" aria-hidden="true"></i>
                  <div className="card-body text-primary">
                    <h3 className="fs-1 fw-bold  mb-0">1M+</h3>
                    <p className="fs-5">credentials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeOnScroll>

      <div className="container" style={{ marginTop: "6rem" }}>
        <div className="half-underline-container">
          <h3
            className="text-danger fw-normal display-6 text-center   half-underline"
            style={{ marginBottom: "4rem" }}
          >
            How it Functions
          </h3>
        </div>
        <FadeOnScroll animation="up">
          <div className="row gx-4 px-5">
            <div
              className="col-xl-6 col-lg-5 d-flex justify-content-left align-items-center"
              style={{ marginBottom: "5rem" }}
            >
              <img
                className="img-fluid"
                src={img4}
                alt="Cloudstry Technologies"
              />
            </div>
            <div className="col-md-6 mb-5">
              <h3 className="text-primary display-6 mb-3">For Issuers</h3>
              <p className="text-muted mb-2 ">
                Transition from paper certificates to digital solutions with
                ease. Cloudstry Tech’s digital certificates streamline the
                creation, issuance, storage, and sharing of verified
                credentials. These certificates validate achievements, skills,
                and experiences efficiently and securely.
              </p>
              <p className="mt-2 h5">
                Organizations across various industries use our platform daily.
                -
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Ensure complete authenticity and security with fully
                    verifiable credentials.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Control badge expiration and micro-credential pathways for
                    skill development.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Record digital badges on a blockchain for added verification
                    and security.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Access real-time data through a 24/7 analytics tool.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Integrate seamlessly with LMS and CRM via our API
                  </span>
                </li>
              </ul>
              <Link className="btn btn-danger mt-2" to="/">
                Learn More
              </Link>
            </div>
          </div>
        </FadeOnScroll>

        <FadeOnScroll animation="up">
          <div className="row gx-0 mt-5 px-5">
            <div
              className="col-xl-6 col-lg-5 d-flex justify-content-left align-items-center"
              style={{ marginBottom: "5rem" }}
            >
              <img
                className="img-fluid"
                src={img5}
                alt="Cloudstry Technologies"
              />
            </div>
            <div className="col-md-6 mb-5">
              <h3
                className="text-primary display-6 mb-3"
                style={{ fontWeight: 300 }}
              >
                For Earners
              </h3>
              <p className="text-muted mb-2 ">
                Become part of a worldwide network of professionals enhancing
                their learning and development with Cloudstry Tech’s innovative
                solutions.
              </p>
              <p className="mt-4 h3 fw-normal text-primary">
                Cloudstry Tech: Elevate Digital Presence
              </p>
              <ul className="list-unstyled mt-0">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Maintain a detailed digital record of achievements and
                    professional activities.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Enjoy 24/7 access to cloud-based portfolio.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Record digital badges on a blockchain for added verification
                    and security.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Upload custom badge artwork to create unique, on-brand
                    digital credentials.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Easily share credentials on social networks, career sites,
                    employer databases, online resumes, and email signatures.
                  </span>
                </li>
              </ul>
              <Link className="btn btn-danger mt-2" to="/">
                Learn More
              </Link>
            </div>
          </div>
        </FadeOnScroll>
      </div>
      <hr />

      {/* Content Sections */}
      <section className="mb-5 gx-0 ">
        <section className="py-5 text-center">
          <div className="half-underline-container">
            <h3
              className="text-primary text-danger text-center display-5   half-underline"
              style={{ marginBottom: "4rem" }}
            >
              Industries We Serve
            </h3>
          </div>
        </section>
        <div className="container px-5">
          {/* First Row */}
          <FadeOnScroll animation="up">
            <div className="row gx-5 mt-4">
              <div
                className="col-xl-6 col-lg-5 d-flex justify-content-left align-items-center"
                style={{ marginBottom: "5rem" }}
              >
                <img
                  className="img-fluid"
                  src={img6}
                  alt="Cloudstry Technologies"
                />
              </div>
              <div className="col-md-6 mb-5">
                <h3
                  className="text-primary display-6 mb-3"
                  style={{ fontWeight: 300 }}
                >
                  Universities
                </h3>
                <p className="h6 mb-2 text-muted ">
                  At Cloudstry Tech, recognize student accomplishments, verified
                  skills, and involvement in certification programs.
                </p>

                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Skills & Competencies</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Non-degree certificates</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Degree completion</span>
                  </li>
                </ul>
              </div>
              <hr className="mb-5" />
            </div>
          </FadeOnScroll>
          <FadeOnScroll animation="up">
            <div className="row align-items-center mb-5 flex-row-reverse">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  className="img-fluid rounded"
                  src={img7}
                  alt="Cloudstry Technologies"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="col-md-6 mb-5">
                <h3
                  className="text-primary display-6 mb-3"
                  style={{ fontWeight: 300 }}
                >
                  Training Providers
                </h3>
                <p className="h6 mb-2 text-muted ">
                  Enhance program visibility, craft tailored learning paths and
                  micro-credentials, and elevate student engagement.
                </p>

                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Course completion</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Certificates</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Event attendance</span>
                  </li>
                </ul>
              </div>
              <hr className="mt-3" />
            </div>
          </FadeOnScroll>

          <FadeOnScroll animation="up">
            <div className="row gx-5 mt-4">
              <div
                className="col-xl-6 col-lg-5 d-flex justify-content-left align-items-center"
                style={{ marginBottom: "2rem" }}
              >
                <img
                  className="img-fluid"
                  src={img8}
                  alt="Cloudstry Technologies"
                />
              </div>
              <div className="col-md-6 mb-5">
                <h3
                  className="text-primary display-6 mb-3"
                  style={{ fontWeight: 300 }}
                >
                  Associations
                </h3>
                <p className="h6 mb-2 text-muted ">
                  With Cloudstry Tech, reduce costs, promote programs, and
                  acknowledge hard-earned achievements through meaningful,
                  secure, and portable digital badges.
                </p>

                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Certifications</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Certificates</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Mirco-credential</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Expertise </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Event attendance</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Membership </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Contributions</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Awards </span>
                  </li>
                </ul>
              </div>
              <hr />
            </div>
          </FadeOnScroll>

          <FadeOnScroll animation="up">
            <div className="row align-items-center mb-5 flex-row-reverse">
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  className="img-fluid rounded"
                  src={img9}
                  alt="Cloudstry Technologies"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="col-md-6 mb-5">
                <h3
                  className="text-primary display-6 mb-3"
                  style={{ fontWeight: 300 }}
                >
                  Corporations
                </h3>
                <p className="h6 mb-2 text-muted">
                  Identify and celebrate skills and achievements, and explore
                  employee network for specific talents and qualifications.
                </p>

                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Skills & Competencies</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Awards</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Milstones</span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">Training</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeOnScroll>
        </div>
      </section>
    </div>
  );
}

export default Digitalcertificate;
