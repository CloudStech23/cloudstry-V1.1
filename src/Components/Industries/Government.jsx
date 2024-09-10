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
          <h1 className="display-6">Transforming Governance: Innovation Meets Efficiency</h1>
          <p className="lead">Empowering government agencies with cutting-edge technology to overcome challenges, enhance transparency, and deliver exceptional public services. Discover how our solutions drive progress and efficiency in the public sector</p>
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
                Major Challenges in the Government Sector: Overcoming Complex
                Barriers
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
                Digitalization in Government: A Pathway to Efficient Governance
              </h2>
              <p class="lead">
                Unlock the future of efficient governance with digital solutions
                that streamline processes, enhance transparency, and drive
                transformative change in public administration
              </p>
            </div>
            <div class="col-lg-8">
              <div class="row gx-5 row-cols-1 row-cols-md-2">
                <div class="col mb-5 h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-gear"></i>
                  </div>
                  <h2 class="h5">Streamlined Bureaucratic Processes</h2>
                  <p class="mb-0">
                    Automation and digital workflows reduce bottlenecks,
                    accelerating decision-making and service delivery in
                    government operations.
                  </p>
                </div>
                <div class="col mb-5 h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-shield"></i>
                  </div>
                  <h2 class="h5">Enhanced Data Management and Security</h2>
                  <p class="mb-0">
                    Advanced digital solutions ensure robust data management,
                    secure storage, and protection against cyber threats,
                    safeguarding sensitive information.
                  </p>
                </div>
                <div class="col mb-5 mb-md-0 h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-bar-chart"></i>
                  </div>
                  <h2 class="h5">Promoting Transparency and Accountability</h2>
                  <p class="mb-0">
                    Digital platforms enable real-time tracking and reporting,
                    fostering greater transparency and accountability in
                    government activities.
                  </p>
                </div>
                <div class="col h-100">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i class="bi bi-arrow-up-right"></i>
                  </div>
                  <h2 class="h5">Modernizing Legacy Systems</h2>
                  <p class="mb-0">
                    Integration of modern technologies transitions agencies from
                    outdated systems to agile platforms, supporting current and
                    future needs.
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
                How MetroXone Tech Supports the Government Sector: Empowering
                Public Services
              </h3>
              <p>
                At MetroXone Tech, we are dedicated to helping government
                agencies harness the power of technology to improve their
                operations and serve the public more effectively. Here’s how we
                can help:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Customized IT Solutions:</strong> Tailored IT
                    solutions addressing specific government challenges, from
                    modernizing legacy systems to enhancing data security and
                    management.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Digital Transformation Services:</strong> Expertise
                    in seamless technology adoption, improving efficiency,
                    transparency, and service delivery.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Consultation and Continuous Support:</strong>{" "}
                    Ongoing support to stay ahead of technological trends,
                    optimize processes, and maintain secure operations.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Integration of Advanced Technologies:</strong>{" "}
                    Incorporation of AI, big data analytics, and cloud computing
                    to achieve goals effectively.
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
                alt="MetroXone Tech Solutions"
              />
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
            {/* Image Section */}
            <div className="col-md-6 text-md-start mt-4 mt-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src="https://via.placeholder.com/600x400.png?text=Dummy+Image"
                alt="MetroXone Tech Projects"
              />
            </div>

            {/* Text Section */}
            <div className="col-md-6">
              <h3 className="text-primary fw-bold mb-3">
                Our Key Government Projects: Driving Innovation and Impact
              </h3>
              <p>
                MetroXone Tech is proud to be involved in several key projects
                that are making a significant impact in the government sector:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Digital Certificate @BadgeCert:</strong> Leading the
                    development and implementation of digital certificate
                    solutions with BadgeCert. Enhancing transparency and trust
                    in government-issued certificates through secure, verifiable
                    digital credentials.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Pashu Aadhaar:</strong> Revolutionizing animal
                    identification in India with a unique identification system
                    for livestock. Improving tracking, health monitoring, and
                    resource allocation in the agriculture sector.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Integrated Logistics Platform:</strong> Developing a
                    platform to streamline government supply chain management.
                    Enhancing logistics operations with real-time tracking and
                    optimized resource allocation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
    </div>
  );
}

export default Government;
