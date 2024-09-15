import React from "react";
import { Link } from "react-router-dom";
import img1 from "./Images/gov.first.jpg";
import img2 from "./Images/gov.second.png";
import img3 from "./Images/gov.third.jpg";
import img4 from "./Images/gov.fourth.jpg";
import img5 from "./Images/gov.five.jpeg";
import img6 from "./Images/gov.six.jpg";
import img7 from "./Images/gov.seven.jpg";
import digital from './Images/gov.digital.jpg'
import bg3 from "../Images/bg3.jpg"

function Government() {
  return (
    <div>
     <header
        className="text-white text-center py-5 position-relative"
        style={{ maxHeight: "100%", overflow: "hidden" }}
      >
        {/* Background Image */}
        <img
          src={bg3} // Replace 'bg' with the actual path to your background image
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
            Industries We Serve /
            </a>{" "}
            
            Government
          </span>
        </div>

        {/* Header Content */}
        <div
          className="container text-white mt-5"
          style={{ zIndex: 3, position: "relative" }}
        >
          <h1 className="display-6">Transforming Governance: Innovation Meets Efficiency</h1>
          <p className="lead">
          Empowering government agencies with cutting-edge technology to overcome challenges, enhance transparency, and deliver exceptional public services. Discover how our solutions drive progress and efficiency in the public sector
          </p>
        </div>
      </header>
      {/* <div className="container my-5 py-5">
        <div className="row align-items-center justify-content-between   p-4 rounded-3 position-relative">
         
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
              At Cloudstry Tech, we recognize the government's crucial role in
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

         
          <div className="col-md-5 text-md-end mt-4 mt-md-0 mb-2">
            <img
              src={img1}
              alt="Dummy"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div> */}

      {/* <section class="py-5">
        <div class="container px-5 my-2">
          <div className="half-underline-container">
            <h3
              className="text-primary text-danger text-center display-5   half-underline"
              style={{ marginBottom: "4rem" }}
            >
              Our Key Government Projects
            </h3>
          </div>

          <div class="row gx-5">
            <div class="col-lg-4 mb-5">
              <div class="card h-100 shadow border-0">
                <img
                  class="card-img-top"
                  src={img2}
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
                  src={img3}
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
                  src={img4}
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
      </section> */}

      <section
        className="image-video-text-interactivity fadeInUp mb-5"
        style={{ marginTop: "10em" }}
      >
        <div className="container mb-5">
          <div className="row align-items-center mb-5">
            {/* Image Section */}
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src={img5}
                alt="Image"
              />
            </div>

            {/* Text Section */}
            <div className="col-md-6 mb-5">
              <h3 className="text-primary fw-normal mb-3">
                Major Challenges in the Government Sector: Overcoming Complex
                Barriers
              </h3>
              <p className="text-muted">The government sector faces a unique set of challenges that impact its ability to serve citizens effectively. Here are five major issues</p>

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
              <p className="text-muted">The government sector faces a unique set of challenges that impact its ability to serve citizens effectively. Here are five major issues</p>
            </div>
          <hr className="mt-4"/>
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
            <div className="col-md-6 order-md-1 order-2">
              <h3 className="text-primary fw-normal mb-3">
                Digitalization in Government: A Pathway to Efficient Governance
              </h3>
              <p className="text-muted">
              Digitalization is playing a transformative role in overcoming the challenges faced by the government sector. Here’s how technology is making a difference
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Streamlined Bureaucratic Processes:</strong>{" "}
                    Automation and digital workflows reduce bottlenecks,
                    accelerating decision-making and service delivery in
                    government operations.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Enhanced Data Management and Security:</strong>{" "}
                    Advanced digital solutions ensure robust data management,
                    secure storage, and protection against cyber threats,
                    safeguarding sensitive information.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Promoting Transparency and Accountability:</strong>{" "}
                    Digital platforms enable real-time tracking and reporting,
                    fostering greater transparency and accountability in
                    government activities.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Modernizing Legacy Systems:</strong> Integration of
                    modern technologies transitions agencies from outdated
                    systems to agile platforms, supporting current and future
                    needs.
                  </span>
                </li>
              </ul>
              <p className="text-muted">Through digitalization, governments can improve their operations, enhance public trust, and deliver better services to citizens.</p>
            </div>

            {/* Image Section */}
            <div className="col-md-6 text-md-end mt-4 mt-md-0 order-md-2 order-1 mb-5">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src={digital}
                alt="Image"
              />
            </div>
          </div>
          <hr className="mt-4"/>
        </div>
      </section>

      <section
        className="image-video-text-interactivity fadeInUp mb-5"
        style={{ marginTop: "5rem" }}
      >
        <div className="container mt-5">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-6 text-md-start mt-4 mt-md-0 mb-5">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src={img6}
                alt="Image"
              />
            </div>

            {/* Text Section */}
            <div className="col-md-6">
              <h3 className="text-primary fw-normal mt-4 mb-3">
                How Cloudstry Tech Supports the Government Sector: Empowering
                Public Services
              </h3>
              <p className="text-muted">
                At Cloudstry Tech, we are dedicated to helping government
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
              <p className="text-muted">By partnering with Cloudstry Tech, government agencies can overcome challenges, enhance public services, and build a foundation for future success</p>
            </div>
          </div>
          <hr className="mt-4"/>
        </div>
      </section>

      <section class="py-5">
        <div class="container px-5 my-2">
          <div className="half-underline-container">
            <h3
              className="text-primary text-danger text-center display-5   half-underline"
              style={{ marginBottom: "4rem" }}
            >
              Our Key Government Projects
            </h3>
          </div>
            <p className="text-muted fs-6 mb-4 mx-3">Cloudstry Tech is proud to be involved in several key projects that are making a significant impact in the government sector: </p>

          <div class="row gx-5">
            <div class="col-lg-4 mb-5">
              <div class="card h-100 shadow border-0">
                <img class="card-img-top img-fluid" style={{height:'220px'}} src={img2} alt="..." />
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
                <img class="card-img-top img-fluid" style={{height:'220px'}} src={img3} alt="..." />
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
                <img class="card-img-top img-fluid" style={{height:'220px'}} src={img1} alt="..." />
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
      {/* Content Sections */}
    </div>
  );
}

export default Government;
