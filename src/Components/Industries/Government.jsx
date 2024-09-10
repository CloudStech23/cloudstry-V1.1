import React from "react";
import { Link } from "react-router-dom";

function Government() {
  return (
    <div>
      <header className="bg-white text-white text-center py-5 position-relative">
        {/* Navigation Path */}
        <div
          className="position-absolute top-0 start-0 ms-0 mt-0 p-4 fs-5 fw-bold"
          style={{ zIndex: 100 }}
        >
          <span className="small text-primary">
            <a href="#" className="">
              Industries We Serve /
            </a>{" "}
            <a href="#">Government</a>
          </span>
        </div>

        {/* Header Content */}
        <div className="container text-primary mt-5">
          <h1 className="display-4">Your Title Here</h1>
          <p className="lead">This is the page information or tagline.</p>
        </div>
      </header>
      <div className="container my-5 py-5">
        <div className="row align-items-center justify-content-between   p-4 rounded-3 position-relative">
          {/* Text Content */}
          <div className="col-md-5 mt-4 mb-2">
            <span className="badge bg-primary rounded-pill px-2 py-2 mb-3">
              Government Engagement
            </span>
            <h2
              className=" display-5 text-primary "
              style={{ fontWeight: 300 }}
            >
              Strategic Government Partnerships
            </h2>
            <p className="text-muted mb-4">
              At MetroXone Tech, we recognize the government's crucial role in
              societal progress and economic growth. Our partnerships focus on
              innovation, security, and public welfare. Through our 3PL
              solutions, we streamline government supply chains and operations.
              Our Pet Aadhaar platform aids in managing and identifying animal
              populations, supporting public health. Additionally, our Digital
              Certificate systems enhance credential management, ensuring
              transparency and accountability. Together, these efforts
              strengthen public trust and build sustainable, future-ready
              systems for citizens and stakeholders.
            </p>
            <Link to="/Support" className="btn btn-danger">
              Connect with Us
            </Link>
          </div>

          {/* Video Content */}
          <div className="col-md-5 text-md-end mt-4 mt-md-0 mb-2">
            <img
              src="https://via.placeholder.com/600x400.png?text=Dummy+Image"
              alt="Dummy"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      <section class="py-5">
        <div class="container px-5 my-2">
          <div className="half-underline-container">
            <h3
              className="text-primary text-danger text-center display-5   half-underline"
              style={{ marginBottom: "4rem" }}
            >
              Public Sector Innovations
            </h3>
          </div>

          <div class="row gx-5">
            <div class="col-lg-4 mb-5">
              <div class="card h-100 shadow border-0">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/600x350/ced4da/6c757d"
                  alt="..."
                />
                <div class="card-body p-4">
                  <Link
                    class="text-decoration-none link-dark stretched-link"
                    to="/Digital-Certificate"
                  >
                    <h5 class="card-title mb-3 text-primary fw-bold">
                      Digital Certificate
                    </h5>
                  </Link>
                  <p class="card-text mb-0">
                    In today's digital age, secure and verifiable credentials
                    are essential across various sectors. Traditional paper
                    certificates are prone to forgery and difficult to manage,
                    creating significant challenges. The need for a solution
                    that guarantees the authenticity and accessibility of
                    credentials is more urgent than ever.
                  </p>
                  <div className="py-2  my-1">
                    <Link to="/Digital-Certificate" className="btn btn-danger">
                      Leran More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-5">
              <div class="card h-100 shadow border-0">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/600x350/ced4da/6c757d"
                  alt="..."
                />
                <div class="card-body p-4">
                  <Link
                    class="text-decoration-none link-dark stretched-link"
                    to="/Pet-Aadhar"
                  >
                    <h5 class="card-title text-primary fw-bold mb-3">
                      Animal Aadhar
                    </h5>
                  </Link>
                  <div className="py-2  my-1">
                    <p class="card-text mb-0">
                      India’s extensive livestock industry encounters major
                      challenges in animal identification, health monitoring,
                      and data management. Traditional methods are often
                      inconsistent and error-prone, complicating effective
                      disease control and breeding management.
                    </p>
                  </div>
                  <Link to="/Pet-Aadhar" className="btn btn-danger">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mb-5">
              <div class="card h-100 shadow border-0">
                <img
                  class="card-img-top"
                  src="https://dummyimage.com/600x350/ced4da/6c757d"
                  alt="..."
                />
                <div class="card-body p-4">
                  <Link
                    class="text-decoration-none link-dark stretched-link"
                    to="/3PL-Solution"
                  >
                    <h5 class="card-title mb-3 text-primary fw-bold">3PL</h5>
                  </Link>
                  <p class="card-text mb-0">
                    Third-Party Logistics (3PL) involves outsourcing logistics
                    and supply chain functions to specialized providers. These
                    partners manage key operations such as warehousing,
                    transportation, inventory management, and order fulfillment.
                    This strategic approach streamlines supply chains, reduces
                    operational complexity.
                  </p>

                  <div className="py-2  my-1">
                    <Link to="/3PL-Solution" className="btn btn-danger">
                      learn More
                    </Link>
                  </div>
                </div>
              </div>
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
                Solutions for Government Needs: MetroXone tech
              </h3>
              <p>
                MetroXone Tech is a trusted partner for governments seeking to
                implement technology-driven solutions that address complex
                challenges in today’s dynamic environment. Our dedication to
                excellence, combined with our deep understanding of public
                sector needs, makes us the go-to choice for transformative
                projects.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">High-Level Security:</span>{" "}
                    Incorporates stringent security protocols to protect
                    critical government data and ensure regulatory compliance.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Customizable Solutions:</span>{" "}
                    Offers flexible platforms that can be tailored to the unique
                    requirements and scales of various government initiatives.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Enhanced Efficiency:</span>{" "}
                    Streamlines resource allocation and operational processes,
                    leading to cost reductions and improved service efficiency.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Transparency and Trust:</span>{" "}
                    Promotes transparency in government activities through
                    advanced technologies, strengthening public confidence.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Advanced Technology:</span>{" "}
                    Utilizes AI, blockchain, and IoT to ensure government
                    projects leverage the latest technological advancements for
                    optimal impact.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Ongoing Support:</span> Provides
                    continuous support and expert guidance to maintain the
                    success of government projects long after deployment.
                  </span>
                </li>
                <p className="text-muted fw-bold">
                  By choosing our solutions, you benefit from a strategic
                  partner committed to enhancing government operations and
                  driving public sector success.
                </p>
              </ul>
            </div>

            {/* Image Section */}
            <div className="col-md-6 text-md-end mt-4 mt-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src="https://via.placeholder.com/600x400.png?text=Dummy+Image"
                alt="AGENT511 REACH Orchestration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
    </div>
  );
}

export default Government;
