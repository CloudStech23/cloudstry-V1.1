import React from "react";

function Education() {
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row align-items-center justify-content-between bg-light p-4 rounded-3 position-relative">
          {/* Text Content */}
          <div className="col-md-5 mt-4 mb-2">
            <span className="badge bg-primary rounded-pill px-2 py-2 mb-3">
              Education
            </span>
            <h2
              className=" display-5 text-primary "
              style={{ fontWeight: 300 }}
            >
              Metroxone Tech's Innovative Approach
            </h2>
            <p className="text-muted mb-4">
              Education is the cornerstone of personal and professional growth,
              playing a crucial role in shaping societies and economies. In a
              rapidly evolving world, the demand for innovative educational
              solutions has never been higher. As institutions strive to provide
              quality education, they face challenges that require modern,
              technology-driven solutions to maintain relevance and
              effectiveness. From managing credentials and certificates to
              integrating advanced technologies and optimizing resources, the
              educational sector is in need of a comprehensive transformation.
            </p>
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
      <section className="image-video-text-interactivity fadeInUp mb-5">
        <div className="container mb-5">
          <div className="row align-items-center mb-5">
            {/* Image Section */}
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src="https://via.placeholder.com/600x500.png?text=Dummy+Image"
                alt="AGENT511 REACH Orchestration"
              />
            </div>

            {/* Text Section */}
            <div className="col-md-6 mb-5">
              <h3 className="text-primary fw-bold mb-3">
                Navigating the Complexities of Morden Education
              </h3>

              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Supply Chain Disruptions:</span>
                    Unforeseen events, such as natural disasters or geopolitical
                    tensions, can cause significant delays and disruptions in
                    the supply chain.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Rising Costs:</span>
                    Increasing fuel prices, labor costs, and regulatory
                    compliance expenses can drive up the overall cost of
                    logistics operations.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Technology Integration:</span>
                    Implementing and integrating new technologies, such as IoT
                    and AI, into existing systems can be complex and costly.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Sustainability Pressure:</span>
                    There is growing demand for environmentally friendly
                    practices, which requires investment in green technologies
                    and sustainable supply chain practices.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5" id="features">
        <div class="container px-5 my-5">
          <div class="row gx-5">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h2 class="fw-bolder mb-0">
                Revolutionizing Education with Innovative Solutions
              </h2>
              <p class="lead">
                Explore how our cutting-edge solutions transform the education
                landscape, addressing traditional challenges and paving the way
                for a future of seamless credential management and advanced
                learning technologies.
              </p>
            </div>
            <div class="col-lg-8">
              <div class="row gx-5 row-cols-1 row-cols-md-2">
                <div class="col mb-5 h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-collection"></i>
                  </div>
                  <h2 class="h5">Streamlined Credential Management</h2>
                  <p class="mb-0">
                    Our platform simplifies the issuance and verification of
                    digital certificates, enhancing security and accessibility
                    while reducing the risk of forgery and errors.
                  </p>
                </div>
                <div class="col mb-5 h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-building"></i>
                  </div>
                  <h2 class="h5">Advanced Educational Technologies</h2>
                  <p class="mb-0">
                    Leverage the latest technologies, including AI-driven
                    analytics and blockchain, to enhance learning experiences
                    and optimize educational operations for better outcomes.
                  </p>
                </div>
                <div class="col mb-5 mb-md-0 h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-toggles2"></i>
                  </div>
                  <h2 class="h5">Efficient Resource Management</h2>
                  <p class="mb-0">
                    Improve the management of educational resources, from
                    faculty to digital tools, through streamlined processes and
                    strategic planning that ensure optimal use and cost
                    efficiency.
                  </p>
                </div>
                <div class="col h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-toggles2"></i>
                  </div>
                  <h2 class="h5">Expert Consultancy and Strategic Planning</h2>
                  <p class="mb-0">
                    Benefit from specialized consultancy services that guide
                    institutions in curriculum development, accreditation, and
                    global outreach, empowering them to navigate the
                    complexities of modern education.
                  </p>
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
                Metroxone Tech's Comprehensive Solution for Education
              </h3>
              <p>
                Metroxone Tech is at the forefront of addressing these
                challenges with a suite of innovative solutions designed to
                enhance the educational experience for institutions, students,
                and employers.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Advanced blockchain encryption ensures the security and
                    integrity of digital credentials, safeguarding them from
                    tampering and forgery.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Streamlined online verification process accelerates
                    credential validation, saving time and enhancing operational
                    efficiency.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Tailored certificate designs featuring institutional
                    branding, logos, and signatures, ensuring a professional
                    presentation.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    Global accessibility of credentials facilitates broader
                    recognition and simplifies sharing across various platforms.
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
                src="https://via.placeholder.com/600x400.png?text=Dummy+Image"
                alt="AGENT511 REACH Orchestration"
              />
            </div>
          </div>
        </div>
      </section>

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
                src="https://via.placeholder.com/600x400.png?text=Dummy+Image"
                alt="Macbook"
              />
            </div>
            <div className="col-md-6 mb-5">
              <h3
                className="text-primary display-6 mb-3"
                style={{ fontWeight: 300 }}
              >
                Universities
              </h3>
              <p
                className="h5 mb-2 "
                style={{ fontWeight: 400, color: "#353535" }}
              >
                At MetroxOne Tech, we acknowledge student achievements, verified
                skills, and participation in certification programs.
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
                  <span className="d-inline">Event attendance</span>
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
        </div>
      </section>
    </div>
  );
}

export default Education;
