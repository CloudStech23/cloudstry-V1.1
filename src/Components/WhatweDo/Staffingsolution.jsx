import React from "react";
import img1 from "../Images/ai.jpg";
import { Carousel } from "react-bootstrap";

function Staffingsolution() {
  return (
    <div>
      <div className=" mt-5 mb-5">
        <div className="container lg:max-w-xl px-3 mx-auto">
          <div className="row align-items-center g-4 xl-g-5">
            <div className="col-lg-6 order-lg-2">
              <div className="panel text-center">
                <h1
                  className="text-primary display-4"
                  style={{ fontWeight: 300 }}
                >
                  Your Partner in Business{" "}
                  <span
                    className=" "
                    style={{
                      backgroundImage:
                        'url("https://unistudio.co/html/innovar/assets/images/common/line.svg")',
                      objectFit: "contain",
                      backgroundRepeat: "no-repeat",
                      // backgroundRepeat: "no-repeat",
                      backgroundPosition: "0 100%", // Aligns the image at the bottom of the text
                      paddingBottom: ".6rem", // Adds space for the image below the text
                      backgroundSize: "contain",
                    }}
                  >
                    Transformation
                  </span>
                </h1>
                <p className="desc fs-5 lg:fs-3 mt-3">
                  Our business consulting services are rooted in a deep
                  understanding of industry trends, best practices, and the
                  latest technologies.
                </p>
                <a
                  className="btn btn-danger btn-md xl:btn-lg   sm:fs-4 xl:fs-3 mt-2"
                  href=""
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute rounded w-100 h-100 pt-5 pe-5"
                  src={img1}
                  alt=""
                  style={{ objectFit: "cover", borderRadius: "10px" }}
                />
                <img
                  className="position-absolute rounded top-0 end-0 bg-white ps-2 pb-2"
                  src={img1}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}

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
                          Enhancing Animal Health Monitoring
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


      <div className="container mt-5" >
      <div className="half-underline-container">
          <h3
            className="text-danger fw-normal display-6 text-center   half-underline"
            style={{ marginBottom: "4rem" }}
          >
            How it Functions
          </h3>
        </div>
        <div className="row gx-0">
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
              For Issuers
            </h3>
            <p
              className="h5 mb-2 "
              style={{ fontWeight: 400, color: "#353535" }}
            >
              Transition from paper certificates to digital solutions with ease.
              MetroXone Tech’s digital certificates streamline the creation,
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
            <a
              className="btn btn-danger mt-2"
              href=" "
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="row gx-0 mt-5">
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
              For Earners
            </h3>
            <p
              className="h5 mb-2 "
              style={{ fontWeight: 400, color: "#353535" }}
            >
              Become part of a worldwide network of professionals enhancing
              their learning and development with MetroXone Tech’s innovative
              solutions.
            </p>
            <p className="mt-4 h3 fw-normal text-primary">
              MetroxOne Tech: Elevate Your Digital Presence
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
            <a
              className="btn btn-danger mt-2"
              href=" "
            >
              Learn More
            </a>
          </div>
        </div>
       </div>

       <section class="py-5 bg-whitet text-center">
        <section className="pb-5">
          <div className="container">
            <div className="half-underline-container">
              <h3
                className="text-primary text-danger text-center display-5   half-underline"
                style={{ marginBottom: "4rem" }}
              >
                write something last
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-10 col-xl-8 mx-auto">
                <div
                  className="p-5 bg-white shadow  rounded"
                  style={{ width: "100%", height: "27rem" }}
                >
                   
                  
                      <div className="media feature-card">
                        <h3 className="text-primary fw-normal mb-3">
                          Enhancing Animal Health Monitoring
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
           

                    

                    
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>


    </div>
  );
}

export default Staffingsolution;
