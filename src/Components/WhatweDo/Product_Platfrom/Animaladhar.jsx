import React from "react";
import { Carousel } from "react-bootstrap";
import "./Common.css";
import { Link } from "react-router-dom";
import img1 from './Images/petadhar.main.jpg'
import img2 from './Images/petadhar.second.jpeg'
import img3 from './Images/petadhar.third.jpg'

function Petadhar() {
  return (
    <div>
        {/* Navigation Path */}
      <header className="bg-white text-white py-3 position-relative">
        <div className="position-absolute top-0  start-0 ms-3 mt-2 fw-bold">
          <span className="text-primary">
            <a href="#" className="">
              What we Do?
            </a>{" "}
            / Product Platform / Pet Aadhar
          </span>
        </div>

        {/* Header Content */}
        <div className="container mt-5 text-primary">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="">
                Pet Aadhar: Revolutionizing Pet Identification
              </h1>
              <p className="lead">
                Secure, scalable, and future-ready identification for pets.
                Simplifying pet management and tracking with advanced
                technology.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-5">
        <div className="row align-items-center justify-content-between bg-light p-4 rounded-3 position-relative">
          {/* Text Content */}
          <div className="col-md-5 mt-4 mb-2">
            <span className="badge bg-primary rounded-pill px-2 py-2 mb-3">
              Pet Aadhar
            </span>
            <h2
              className=" display-5 text-primary "
              style={{ fontWeight: 300 }}
            >
              Pet Aadhar: A New Era in Pet Management
            </h2>
            <p className="text-muted mb-4">
              India's vast livestock industry faces significant challenges in
              the areas of animal identification, health monitoring, and data
              management. Traditional methods are often inconsistent and prone
              to errors, making effective disease control and breeding
              management difficult. The need for a reliable, unified solution is
              essential for the continued growth and modernization of the
              sector.
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
        <div className="container">
          {/* <h3 className="text-primary fw-bold text-center mb-4">Why pet adhar</h3> */}
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-6 mb-4 mb-md-0">
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
                Rationale Behind Pashu Aadhaar
              </h3>
              <p className="">
                Pashu Aadhaar represents a crucial leap in livestock management
                across India. With unique identification numbers assigned to
                each animal, this system enhances tracking, health monitoring,
                and data management. Overcoming the shortcomings of traditional
                methods, it provides a secure, scalable, and reliable solution
                that boosts efficiency and supports all stakeholders in the
                livestock industry.
              </p>
              <ul className="list-unstyled mb-4">
                {" "}
                <li className="mb-4">
                  {" "}
                  <i className="fa fa-check-circle text-primary"></i>{" "}
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
                  <span className="d-inline">
                    {" "}
                    Precision in animal identification with enhanced accuracy
                    and reliability.{" "}
                  </span>{" "}
                </li>{" "}
                <li className="mb-4">
                  {" "}
                  <i className="fa fa-check-circle text-primary"></i>{" "}
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
                  <span className="d-inline">
                    {" "}
                    Improved disease control and vaccination through precise
                    tracking.{" "}
                  </span>{" "}
                </li>{" "}
                <li className="mb-4">
                  {" "}
                  <i className="fa fa-check-circle text-primary"></i>{" "}
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
                  <span className="d-inline">
                    {" "}
                    Enhanced management of breeding and ownership records.{" "}
                  </span>{" "}
                </li>{" "}
                <li className="mb-4">
                  {" "}
                  <i className="fa fa-check-circle text-primary"></i>{" "}
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
                  <span className="d-inline">
                    {" "}
                    Increased operational efficiency with centralized data
                    management.{" "}
                  </span>{" "}
                </li>{" "}
                <li className="mb-4">
                  {" "}
                  <i className="fa fa-check-circle text-primary"></i>{" "}
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
                  <span className="d-inline">
                    {" "}
                    Enhanced livestock productivity through informed
                    decision-making.{" "}
                  </span>{" "}
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5 bg-whitet text-center">
        <section className="pb-5">
          <div className="container">
            <div className="half-underline-container">
              <h3
                className="text-primary text-danger text-center display-5   half-underline"
                style={{ marginBottom: "4rem" }}
              >
                Case Studies
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-10 col-xl-8 mx-auto">
                <div
                  className="p-5 bg-white shadow  rounded"
                  style={{ width: "100%", height: "27rem" }}
                >
                  <Carousel interval={2000} controls={true} indicators={false}>
                    <Carousel.Item>
                      <div className="media feature-card">
                        <h3 className="text-primary fw-normal mb-3">
                          Precision in Animal Health Oversight
                        </h3>
                        <div className="media-body ml-3">
                          <div className="blockquote border-0 p-0">
                            <p className="font-italic lead">
                              Effective health management is essential for
                              maintaining livestock well-being and preventing
                              disease spread, yet traditional methods often lead
                              to fragmented health records. Pashu Aadhaar
                              addresses this challenge with a comprehensive
                              system that assigns unique identification numbers
                              to animals, enabling precise tracking of
                              vaccinations, treatments, and health history. This
                              system ensures accurate records and timely
                              interventions. Early implementations of Pashu
                              Aadhaar have demonstrated improved health outcomes
                              and fewer disease outbreaks in pilot areas, with
                              centralized data facilitating better health trend
                              tracking and quicker responses to issues.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="media feature-card">
                        <h3 className="text-primary fw-normal mb-3">
                          Government's Initiative for Pashu Aadhaar
                        </h3>
                        <div className="media-body ml-3">
                          <div className="blockquote border-0 p-0">
                            <p className="font-italic lead">
                              The central government is developing a major
                              database related to livestock information across
                              the country. The aim is to enhance farmers' income
                              through improved livestock management. According
                              to the Department of Animal Husbandry, in the next
                              18 months, over 500 million cattle will be
                              assigned unique IDs on a digital platform (Animal
                              UID - Pashu Aadhaar) to track their owners,
                              breeds, and productivity. Each animal will be
                              tagged with a 8-gram yellow tag in its ear, which
                              will display a 12-digit identification number.
                              When launching the e-Gopala app, Prime Minister
                              Narendra Modi highlighted the significance of
                              Pashu Aadhaar. He mentioned that once the app
                              integrates Pashu Aadhaar, it will provide
                              comprehensive information about animals, making
                              buying and selling livestock easier.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="media feature-card">
                        <h3 className="text-primary fw-normal mb-3">
                          Expanding Livestock Insurance Coverage with Pashu Bima
                        </h3>
                        <div className="media-body ml-3">
                          <div className="blockquote border-0 p-0">
                            <p className="font lead">
                              <br />
                              The Bihar government's Directorate of Dairy
                              Development has introduced the 'Pashu Bima Yojana'
                              to offer insurance protection against livestock
                              deaths and boost the rural economy. This scheme
                              covers dairy cattle with a maximum insured value
                              of ₹60,000. The insurance premium is ₹2,100, with
                              the state government subsidizing 75% (₹1,575) and
                              farmers contributing the remaining 25% (₹525). The
                              scheme, managed by District Livestock Development
                              Officers, aims to protect farmers from financial
                              losses due to severe diseases, such as lumpy skin
                              disease, ensuring stability and support for the
                              rural sector.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
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
      <section className="mb-5" style={{ marginTop: "5rem" }}>
        <div className="container">
          {/* First Row */}
          <div className="container mb-5">
            <div className="row align-items-center mb-5">
              {/* Image Section */}
              <div className="col-md-6 mb-5 mb-md-0">
                <img
                  className="img-fluid rounded"
                  height={365}
                  width={504}
                  src={img3}
                  alt="Cloudstry Technologies"
                />
              </div>

              {/* Text Section */}
              <div className="col-md-6 mb-5">
                <h3 className="text-primary fw-normal mb-3">
                  Cloudstry: Leading the Way in Pet Aadhaar Technology
                </h3>
                <p className="">
                  The Pashu Aadhaar system offers a transformative approach to
                  managing dairy livestock through its innovative identification
                  and data management features
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-4">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    {/* <span className="" style={{ fontWeight: 700 }}>
                    Unified Credential Management:
                  </span>{" "} */}
                    <span className="d-inline">
                      Unique identification numbers for each dairy animal to
                      ensure accurate tracking.
                    </span>
                  </li>
                  <li className="mb-4">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    {/* <span className="" style={{ fontWeight: 700 }}>
                    Unified Credential Management:
                  </span>{" "} */}
                    <span className="d-inline">
                      Comprehensive health and milk production records linked to
                      the animal's ID.
                    </span>
                  </li>
                  <li className="mb-4">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    {/* <span className="" style={{ fontWeight: 700 }}>
                    Unified Credential Management:
                  </span>{" "} */}
                    <span className="d-inline">
                      Integration with digital platforms for easy access and
                      management of dairy data.
                    </span>
                  </li>
                  <li className="mb-4">
                    <i className="fa fa-check-circle text-primary "></i>
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    {/* <span className="" style={{ fontWeight: 700 }}>
                    Unified Credential Management:
                  </span>{" "} */}
                    <span className="d-inline">
                      Streamlined processes for breeding, ownership, and disease
                      management in dairy farming.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <section style={{ position: "relative", marginTop: "7rem" }}>
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
              }}
            >
              <img
                className="img-fluid rounded"
                src="https://images.thequint.com/thequint%2F2018-08%2Fcd1c7bac-00a3-40b5-a270-72f803a98e3a%2F9b378119_4474_4e7b_820f_68bda8a3a0f4.jpg?rect=0%2C0%2C848%2C477"
                alt="Industry"
                style={{ width: "800px", height: "500px" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "19%",
                right: "30%",
                transform: "translateX(50%)", // Adjust this to control horizontal overlap
                background: "#efefef",
                //   border: "1px solid black",
                borderRadius: "8px",
                padding: "2rem",
                maxWidth: "80%", // Ensures the content doesn't overflow the viewport
                zIndex: 2,
              }}
              className="col-lg-6"
            >
              <h3 className="text-primary  font-weight-bold mb-4">
                At the Forefront of Pet Management: Cloudstry Technologies
              </h3>
              <p>
                Pashu Aadhaar offers a promising solution for managing livestock
                in India. By providing unique identification numbers, it aims to
                improve tracking accuracy, enhance disease control, and
                streamline record management. The system is designed to boost
                operational efficiency and support better decision-making.
                Cloudstry Tech is actively working on solutions to facilitate
                the implementation of this initiative
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Petadhar;
