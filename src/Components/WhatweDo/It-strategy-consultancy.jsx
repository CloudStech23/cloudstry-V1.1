import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "./Images/isc.main.jpg";
import img2 from "./Images/isc.second.jpg";
import img3 from "./Images/isc.third.jpg";
import img4 from "./Images/isc.fourth.jpg";
import img5 from "./Images/isc.fifth.jpg";
import bg2 from "../Images/bg2.jpg";
import FadeOnScroll from "../Animate/Motion";

function Consultancy() {
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
    <div>
      <FadeOnScroll>
        <header
          className="text-white text-center py-5 position-relative"
          style={{ maxHeight: "100%", overflow: "hidden" }}
        >
          {/* Background Image */}
          <img
            src={bg2}
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
              / IT Strategy Consultancy
            </span>
          </div>

          {/* Header Content */}
          <div
            className="container text-white mt-5"
            style={{ zIndex: 3, position: "relative" }}
          >
            <h1 className="display-6">
              Comprehensive IT Strategy Consultancy for Digital Transformation
            </h1>
            <p className="lead">
              The digital transformation landscape is ever-evolving, and
              businesses need robust IT strategies to stay competitive. Our IT
              Strategy Consultancy focuses on aligning technology with business
              objectives to drive growth, efficiency, and innovation.
            </p>
          </div>
        </header>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
        <div className="container my-5 py-5">
          <div className="row align-items-center justify-content-between bg-light p-4 rounded-3 position-relative">
            {/* Video Content (Image First on Mobile) */}
            <div className="col-md-5 order-first order-md-last text-md-end mt-4 mt-md-0 mb-2">
              <img
                src={img1}
                alt="Cloudstry Technologies"
                className="img-fluid rounded"
              />
            </div>

            {/* Text Content */}
            <div className="col-md-5 order-last order-md-first mt-4 mb-2">
              <span className="badge bg-primary rounded-pill px-2 py-2 mb-3">
                IT Consultancy
              </span>
              <h2
                className="display-5 text-primary"
                style={{ fontWeight: 300 }}
              >
                Consultancy for Future Ready Businesses
              </h2>
              <p className="text-muted mb-4">
                A robust IT strategy is essential for staying competitive and
                driving innovation. IT strategy consultancy aligns technology
                investments with business goals, ensuring growth, efficiency,
                and transformation.
              </p>
              <p className="text-muted mb-4">
                <strong>Cloudstry Technologies</strong> provides expert IT
                strategy consultancy services, crafting tailored solutions that
                address unique challenges, leverage emerging technologies, and
                support long-term objectives. Whether optimizing IT
                infrastructure or adopting new technologies, Cloudstry Tech
                guides organization toward sustainable success.
              </p>
              <Link to="/Support" className="btn btn-danger">
                Talk to our Experts
              </Link>
            </div>
          </div>
        </div>
      </FadeOnScroll>

      <FadeOnScroll animation="up">
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
                <h3 className="text-primary fw-normal mb-3">
                  Strategic Dominance of Cloudstry Tech's IT Consultancy
                </h3>
                <p className="">
                  Cloudstry Tech offers expert IT strategy consultancy to help
                  organizations navigate the complex digital landscape. By
                  aligning technology with business goals, we ensure company is
                  equipped for long-term success.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Unmatched Expertise:</span> Our
                      deep industry knowledge drives superior IT strategy
                      development.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Innovative Solutions:</span>{" "}
                      Pioneering approaches that set business apart from the
                      competition.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Proactive Adaptation:</span> We
                      anticipate and adapt to technological shifts before they
                      impact business.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Comprehensive Integration:
                      </span>{" "}
                      Seamless integration of IT strategies across all business
                      functions.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Sustained Competitive Edge:
                      </span>{" "}
                      Continuous innovation to maintain leadership position in
                      the market.
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
          <div className="container mt-5">
            <div className="row align-items-center">
              {/* Text Section */}
              <div className="col-md-6 order-first mb-3 order-md-last text-md-end mt-4 mt-md-0">
                <img
                  className="img-fluid rounded"
                  height={365}
                  width={504}
                  src={img3}
                  alt="Cloudstry Technologies"
                />
              </div>
              <div className="col-md-6 order-last order-md-first">
                <h3 className="text-primary fw-normal mb-3">
                  Addressing IT Challenges Across Industries
                </h3>
                <p>
                  Cloudstry Tech is dedicated to addressing the complexities of
                  third-party logistics (3PL) by providing innovative solutions
                  designed to tackle existing challenges and enhance operational
                  efficiency
                </p>

                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <strong>Legacy System Integration:</strong> Outdated
                      technology infrastructure inhibits digital transformation,
                      reducing operational agility and hindering scalability.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <strong>Data Silos and Inconsistent Management:</strong>{" "}
                      Disparate systems and siloed data lead to fragmented
                      insights, making decision-making inefficient.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <strong>Cybersecurity Threats:</strong> Growing
                      sophistication in cyber-attacks threatens sensitive
                      information, risking both operations and regulatory
                      compliance.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <strong>Compliance and Regulatory Complexity:</strong>{" "}
                      Constantly evolving regulations create challenges for
                      companies to maintain compliance, especially across global
                      markets.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <strong>Cost Management and ROI:</strong> Rising IT costs,
                      without clear ROI, create roadblocks for IT innovation and
                      investment in future-forward technologies.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <strong>Talent Gaps in Emerging Tech:</strong> The
                      fast-evolving technology landscape demands specialized
                      skills, creating gaps that traditional workforce models
                      struggle to fill.
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
        <section className="image-video-text-interactivity fadeInUp mb-5">
          <div className="container mb-5">
            <div className="row align-items-center mb-5">
              {/* Image Section */}
              <div className="col-md-6 mb-5 mb-md-0">
                <img
                  className="img-fluid rounded"
                  height={365}
                  width={504}
                  src={img4}
                  alt="Cloudstry Technologies"
                />
              </div>

              {/* Text Section */}
              <div className="col-md-6 mb-5">
                <h3 className="text-primary fw-normal mb-3">
                  Tailored Solutions for Industry-Specific IT Consultancy Needs
                </h3>
                <p className="">
                  Delivering customized IT strategies that align with unique
                  industry challenges and accelerate digital success.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Sector-Specific Expertise:
                      </span>{" "}
                      Deep understanding of industry regulations, operational
                      needs, and technology requirements to craft specialized IT
                      strategies.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Custom Digital Roadmaps:</span>{" "}
                      Development of bespoke digital transformation plans that
                      align with industry goals, ensuring a competitive edge.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Adaptive IT Infrastructures:
                      </span>{" "}
                      Tailored IT architectures designed to support
                      industry-specific demands, from healthcare to
                      manufacturing to government operations.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Compliance-Driven Solutions:
                      </span>{" "}
                      Customized regulatory compliance frameworks, ensuring
                      adherence to industry standards and minimizing risks.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Targeted Cybersecurity Measures:
                      </span>{" "}
                      Security strategies tailored to protect industry-specific
                      assets, whether it's sensitive health data or government
                      records.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Operational Efficiency Enhancements:
                      </span>{" "}
                      Industry-focused solutions that optimize workflows, reduce
                      downtime, and enhance productivity through modern IT
                      tools.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeOnScroll>

      {isSmallScreen && (
        <section>
          <FadeOnScroll animation="up">
            <div className="col-lg-6 p-3 mx-2 shadow mb-5">
              <h3 className="text-primary font-weight-normal mb-4">
                Why Cloudstry for IT Strategy Consultancy?
              </h3>
              <p>
                Through partnerships with leading technology providers, we offer
                access to cutting-edge tools and platforms that drive
                efficiency. Our commitment to ongoing support and consultation
                ensures that IT systems grow with organization, delivering
                sustained value. Additionally, we focus on cost-effective,
                scalable solutions that meet current needs while preparing you
                for future expansion.
              </p>
              <Link className="btn btn-danger text-white" to="/Support">
                Start With Us
              </Link>
            </div>
          </FadeOnScroll>
        </section>
      )}

      <FadeOnScroll>
        <section
          style={{ position: "relative", marginTop: "1rem" }}
          className="px-5 py-5 d-xl-block d-none"
        >
          <div
            style={{
              position: "absolute",
              top: "25%",
              right: "30%",
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
              Why Cloudstry for IT Strategy Consultancy?
            </h3>
            <p>
              Through partnerships with leading technology providers, we offer
              access to cutting-edge tools and platforms that drive efficiency.
              Our commitment to ongoing support and consultation ensures that IT
              systems grow with organization, delivering sustained value.
              Additionally, we focus on cost-effective, scalable solutions that
              meet current needs while preparing you for future expansion
            </p>
            <Link className="btn btn-danger text-white" to="/Support">
              Start With Us
            </Link>
          </div>

          <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
            <img
              className="img-fluid rounded"
              src={img5}
              alt="Cloudstry Technologies"
              style={{ width: "800px", height: "500px" }}
            />
          </div>
        </section>
      </FadeOnScroll>

      {/* Content Sections */}
    </div>
  );
}

export default Consultancy;
