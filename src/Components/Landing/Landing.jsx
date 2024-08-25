import React from "react";
import Slick from "./Slick";
import mapimage from "../Images/world-map-with-rag-dolls.png";
// import '../Landing/Landing.css'
import staffingimage from "../Images/staffing sol.jpg";
import softwareimage from "../Images/software services (2).jpg";
import strategyimage from "../Images/it strategy.jpg";
import { Link } from "react-router-dom";
import government from '../Images/government.jpeg'
import education from '../Images/Education.jpg'
import '../Landing/Landing.css'

function Landing() {
  return (
    // <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
    //   <div className="text-center py-5 px-5">
    //     <div className="text-primary fw-light display-5">
    //       Home page is work in progess..
    //       <span>
    //         <i className="fa fa-spinner spinning" aria-hidden="true"></i>
    //       </span>

    //     </div>
    //   </div>
    //   <style jsx>{`
    //     .spinning {
    //       font-size: 3rem; /* Adjust size if needed */
    //       display: inline-block;
    //       animation: spin 2s linear infinite;
    //     }

    //     @keyframes spin {
    //       0% { transform: rotate(0deg); }
    //       100% { transform: rotate(360deg); }
    //     }
    //   `}</style>
    // </div>
    <div>
      <Slick />

      <section className="" style={{ marginTop: "-2.5rem" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-4 service-card  ">
              <div className="position-relative shadow">
                <img
                  src={staffingimage}
                  alt="Native Plant Garden"
                  className="card-img-top rounded-3"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <div className="card-body bg-light p-4">
                  <h4 className="card-title text-primary mb-3">
                    Expertly connect top talent with the right opportunities for
                    your business needs.
                  </h4>
                  <Link to='/Staffing-Solution' className="btn btn-danger">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 service-card">
              <div className="position-relative shadow">
                <img
                  src={softwareimage}
                  alt="Native Plant Garden"
                  className="card-img-top rounded-3"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <div className="card-body bg-light p-4">
                  <h4 className="card-title text-primary mb-3">
                    Deliver tailored digital solutions to streamline and enhance
                    your operational processes.
                  </h4>
                  <Link to='/Software-Services' className="btn btn-danger">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 service-card">
              <div className="position-relative shadow">
                <img
                  src={strategyimage}
                  alt="Native Plant Garden"
                  className="card-img-top rounded-3"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />

                <div className="card-body bg-light p-4">
                  <h4 className="card-title text-primary mb-3">
                    some short Guide your technology investments with strategic
                    insights for business.
                  </h4>
                  <Link to='/IT-Strategy-Consultancy' className="btn btn-danger">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="image-video-text-interactivity is-reverse fadeInUp mb-5"
        style={{ marginTop: "7rem" }}
      >
        <div className="container px-3 px-md-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
              <img
                className="img-fluid rounded-3"
                // sizes="(max-width: 768px) 100vw, 768px"
                src={mapimage}
                alt="Efficient Solutions"
                style={{ marginTop: "-3px" }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-light fs-3 text-primary mb-2">
                Empowering Communities with Metroxone Technologies
              </h3>
              <p className="mb-4 text-muted" style={{ lineHeight: 1.375 }}>
                Our focus is on delivering exceptional services and long-term
                business support, ensuring that our solutions not only meet your
                needs today but also drive success for the future.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Community Engagement:</span>
                    Building a collaborative network that connects our clients,
                    partners, and team members.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline ">
                    <span className="fw-bold">Unparalleled Services:</span>
                    Offering tailored solutions that address your unique
                    challenges and opportunities.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Long-Term Support:</span>
                    Providing ongoing assistance to help your business grow and
                    thrive over time.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Innovative Solutions:</span>
                    Leveraging the latest technologies to deliver better, more
                    efficient outcomes.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Strategic Partnerships:</span>
                    Creating strong alliances to enhance the value and impact of
                    our services.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="text-center mb-5">
          <p
            className="display-5 text-primary mb-4 text-danger"
            style={{ letterSpacing: "0.6px" }}
          >
            Discover Our Impact on Public Services and Education.
          </p>
        </div>
        <div className="d-flex flex-wrap mb-3">
          <div className="row">
            <div className="col-lg-7 mb-4">
              <div className="bg-light rounded p-4">
                <h2
                  className="font-weight-bold mb-3"
                  style={{
                    fontFamily: "ATCArquette-Regular",
                    fontSize: "36px",
                    color: "rgb(14, 50, 206)",
                  }}
                >
                  We drive innovation in essential services and cutting-edge
                  education.
                </h2>
                <p
                  className="font-weight-semibold"
                  style={{ fontFamily: "ATCArquette-Semibold" }}
                >
                  Our expertise spans critical public services and advanced
                  learning environments, driving innovation and excellence
                  across these vital areas.
                </p>

                <div className="col-lg-8 mb-4 mt-4">
                  <Link
                    to="/Education"
                    className="text-decoration-none text-primary"
                  >
                    <div className="position-relative rounded overflow-hidden mb-3">
                      <img
                        src={education}
                        alt="Case Study"
                        className="img-fluid img-hover"
                      />
                      <ul className="list-unstyled position-absolute bottom-0 start-0 p-2">
                        <li
                          className="bg-transparent text-white fw-bold border rounded-pill py-1 px-2 me-2 mb-2"
                          style={{
                            fontSize: "14px",
                            // fontFamily: "ATCArquette-Semibold",
                          }}
                        >
                          Education
                        </li>
                      </ul>
                    </div>
                    <div className="ps-2">
                      <h3
                        className="font-weight-bold mb-2"
                        style={{
                          fontFamily: "ATCArquette-Medium",
                          fontSize: "24px",
                          color: "rgb(53, 53, 53)",
                        }}
                      >
                        Empowering tomorrow’s leaders with transformative
                        technology for enhanced learning experiences.
                      </h3>
                      <p
                        class=" transparent mt-2 "
                        style={{
                          fontFamily: "ATCArquette-Medium",
                          fontSize: "16px",
                        }}
                      >
                        <Link to="/Education" className="text-danger ">
                          Visit more
                        </Link>
                        <i
                          class="fa fa-arrow-right text-danger mt-1 mx-1  trans"
                          aria-hidden="true"
                        ></i>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 mb-4">
              <Link
                to="/Government"
                className="text-decoration-none text-primary"
              >
                <div className="position-relative rounded overflow-hidden mb-3">
                  <img
                    src={government}
                    alt="Case Study"
                    className="img-fluid img-hover"
                    style={{ width: "100%" }}
                  />
                  <ul className="list-unstyled position-absolute bottom-0 start-0 p-2">
                    <li
                      className=" text-white fw-bold border rounded-pill py-1 px-2 me-2 mb-2"
                      style={{
                        fontSize: "14px",
                        // fontFamily: "ATCArquette-Semibold",
                        background: "transparent",
                      }}
                    >
                      Government
                    </li>
                  </ul>
                </div>
                <div className="ps-2">
                  <h3
                    className="font-weight-bold mb-2"
                    style={{
                      fontFamily: "ATCArquette-Medium",
                      fontSize: "24px",
                      color: "rgb(53, 53, 53)",
                    }}
                  >
                    Enhancing public services with cutting-edge solutions that
                    drive efficiency and transparency.
                  </h3>
                  <p
                    class=" transparent mt-2 "
                    style={{
                      fontFamily: "ATCArquette-Medium",
                      fontSize: "16px",
                    }}
                  >
                    <Link to="/Government" className="text-danger ">
                      Visit more
                    </Link>
                    <i
                      class="fa fa-arrow-right text-danger mt-1 mx-1  trans"
                      aria-hidden="true"
                    ></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="image-video-text-interactivity is-reverse fadeInUp mb-5">
  <div className="container px-3 px-md-5">
    <div className="row align-items-center">
    <div className="col-md-6 mb-5 mb-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={532}
                src={staffingimage}
                alt="AGENT511 REACH Orchestration"
              />
            </div>
      <div className="col-md-6">
        <h3 className="fw-semibold fs-3 text-primary mb-4">
          Strategic Solutions for Business Growth
        </h3>
        <p className="mb-4" style={{ lineHeight: 1.375 }}>
            At Metroxone Technologies, we understand the unique challenges your business faces and offer solutions designed to drive sustainable growth and operational excellence. Our advanced technologies are tailored to meet your specific needs, enabling you to enhance efficiency, improve customer engagement, and secure your place at the forefront of your industry.
        </p>
        <ul className="list-unstyled mb-4">
          <li className="ps-4 mb-3">
            <i
              className="fa fa-check-circle text-primary me-2"
              style={{ marginTop: "6px" }}
            ></i>
            Targeted Communication: Deliver precise, timely messages across multiple channels, ensuring your customers stay informed and engaged.
          </li>
          <li className="ps-4 mb-3">
            <i
              className="fa fa-check-circle text-primary me-2"
              style={{ marginTop: "6px" }}
            ></i>
            Seamless Integration: Our solutions integrate effortlessly with your existing systems, maximizing efficiency and minimizing disruption.
          </li>
          <li className="ps-4 mb-3">
            <i
              className="fa fa-check-circle text-primary me-2"
              style={{ marginTop: "6px" }}
            ></i>
            Advanced Automation: Streamline operations with intelligent automation, reducing manual effort and increasing accuracy.
          </li>
          <li className="ps-4 mb-3">
            <i
              className="fa fa-check-circle text-primary me-2"
              style={{ marginTop: "6px" }}
            ></i>
            Robust Security: Protect sensitive data with our state-of-the-art security features, ensuring compliance and peace of mind.
          </li>
          <li className="ps-4">
            <i
              className="fa fa-check-circle text-primary me-2"
              style={{ marginTop: "6px" }}
            ></i>
            Scalable Solutions: As your business grows, our solutions grow with you, adapting to your evolving needs without compromising performance.
          </li>
        </ul>
        <Link
          className="btn btn-danger text-white rounded-pill"
          to='/Support'
        >
          Connect with us
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default Landing;
