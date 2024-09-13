import React from "react";
import "../Product_Platfrom/Common.css";
import { Link } from "react-router-dom";
import img1 from "./Images/dc.main.png";
import img2 from "./Images/dc.main.jpg";
import img3 from "./Images/dc.second.jpg";
import img4 from "./Images/dc.issue.png";
import img5 from "./Images/dc.earner.png";
import img6 from "./Images/dc.Universities.png";
import img7 from "./Images/dc.Training-providers.png";
import img8 from "./Images/dc.Associations.png";
import img9 from "./Images/dc.Corporations.png";
import bg from "./../../Images/bg1.jpg";

function Digitalcertificate() {
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
              IT Solutions
            </a>{" "}
            / Software Services
          </span>
        </div>

        {/* Header Content */}
        <div
          className="container text-white mt-5"
          style={{ zIndex: 3, position: "relative" }}
        >
          <h1 className="display-6">
            Digital Certificates: Revolutionizing Credential Management
          </h1>
          <p className="lead">
            Secure, scalable, and future-ready digital certificates for
            streamlined operations and enhanced verification processes.
          </p>
        </div>
      </header>

      <div className="container  py-5">
        <div className="row align-items-center justify-content-between bg-light p-4 rounded-3 position-relative">
          {/* Text Content */}
          <div className="col-md-5 mt-4 mb-2">
            <span className="badge bg-primary rounded-pill px-2 py-2 mb-3">
              Digital Certificates
            </span>
            <h2
              className=" display-6 text-primary "
              style={{ fontWeight: 300 }}
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
            <Link to="/Support" className="btn btn-danger">
              Talk to our Experts
            </Link>
          </div>

          {/* Video Content */}
          <div className="col-md-5 text-md-end mt-4 mt-md-0 mb-2">
            <img src={img1} alt="Dummy" className="img-fluid rounded" />
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
                    Provides tamper-proof, cryptographically secured credentials
                    that are trusted and verifiable.
                  </span>
                </li>
                <li className="mb-3">
                  <i className="fa fa-check-circle text-primary "></i>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  <span className="" style={{ fontWeight: 700 }}>
                    Scalable Solutions:
                  </span>{" "}
                  <span className="">
                    Supports a wide range of credentials, from academic degrees
                    to professional certifications and skill-based badges.
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

      <section
        className="image-video-text-interactivity fadeInUp mb-5"
        style={{ marginTop: "5rem" }}
      >
        <div className="container mt-5">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6">
              <h3 className="text-primary fw-bold mb-3">
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
            <div className="col-md-6 text-md-end mt-4 mt-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src={img3}
                alt="Cloudstry Technologies"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="" style={{ marginTop: "7rem" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="fw-light display-6 text-danger mb-3">
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
                <i class="fa fa-id-card-o" aria-hidden="true"></i>
                <div className="card-body text-primary">
                  <h3 className="fs-1 fw-bold  mb-0">1M+</h3>
                  <p className="fs-5">credentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "6rem" }}>
        <div className="half-underline-container">
          <h3
            className="text-danger fw-normal display-6 text-center   half-underline"
            style={{ marginBottom: "4rem" }}
          >
            How it Functions
          </h3>
        </div>
        <div className="row gx-4">
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
              Transition from paper certificates to digital solutions with ease.
              Cloudstry Tech’s digital certificates streamline the creation,
              issuance, storage, and sharing of verified credentials. These
              certificates validate achievements, skills, and experiences
              efficiently and securely.
            </p>
            <p className="mt-2 h5">
              Organizations across various industries use our platform daily. -
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

        <div className="row gx-0 mt-5">
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
              Cloudstry Tech: Elevate Your Digital Presence
            </p>
            <ul className="list-unstyled mt-0">
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  Maintain a detailed digital record of your achievements and
                  professional activities.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  Enjoy 24/7 access to your cloud-based portfolio.
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
                  Upload custom badge artwork to create unique, on-brand digital
                  credentials.
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
      </div>
      <hr />

      {/* Content Sections */}
      <section className="mb-5 gx-0">
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
        <div className="container">
          {/* First Row */}
          <div className="row gx-0 mt-4">
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
          </div>

          {/* Second Row */}
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
          </div>
          <div className="row gx-0 mt-4">
            <div
              className="col-xl-6 col-lg-5 d-flex justify-content-left align-items-center"
              style={{ marginBottom: "5rem" }}
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
                With Cloudstry Tech, reduce costs, promote your programs, and
                acknowledge hard-earned achievements through meaningful, secure,
                and portable digital badges.
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
          </div>
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
                Identify and celebrate skills and achievements, and explore your
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

          <aside
            class="bg-primary bg-gradient rounded-3 p-4 p-sm-5  "
            style={{ marginTop: "5rem" }}
          >
            <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
              <div class="mb-4 mb-xl-0">
                <div class="fs-3 fw-bold text-white">
                  New Opportunities, delivered to you.
                </div>
                <div class="text-white-50">
                  Sign up for our newsletter for the latest updates and
                  opportunities.
                </div>
              </div>
              <div class="ms-xl-4">
                <div class="input-group mb-2">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Email address..."
                    aria-label="Email address..."
                    aria-describedby="button-newsletter"
                  />
                  <button
                    class="btn btn-primary"
                    id="button-newsletter"
                    type="button"
                  >
                    Sign up
                  </button>
                </div>
                <div class="small text-white-50">
                  We care about privacy, and will never share your data.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Digitalcertificate;
