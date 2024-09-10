import React from "react";
import { Link } from "react-router-dom";

function Consultancy() {
  return (
    <div className="container mt-5">
      <header className="bg-white text-white text-center py-5 position-relative">
        {/* Navigation Path */}
        <div
          className="position-absolute top-0 start-0 p-2 fs-5 fw-bold"
          style={{ zIndex: 100 }}
        >
          <span className="small text-primary">
            <a href="/" className="">
              What we Do ? /
            </a>{" "}
            <a href="#">IT Solutions</a> / IT strategy Consultancy
          </span>
        </div>

        {/* Header Content */}
        <div className="container text-primary" style={{ marginTop: "4rem" }}>
          <h1 className="display-4">Your Title Here</h1>
          <p className="lead">This is the page information or tagline.</p>
        </div>
      </header>

      <section className="container rounded-3 mb-5" style={{ marginTop: "5rem" }}>
        <div className="row align-items-center justify-content-between">
          <div className="col-md-5 mb-4">
            <h2 className="display-5 text-primary fw-light">
              Consultancy for Future Ready Businesses
            </h2>
            <p className="text-muted">
              A robust IT strategy is essential for staying competitive and
              driving innovation. IT strategy consultancy aligns technology
              investments with business goals, ensuring growth, efficiency, and
              transformation. <br /> <br />
              <span className="fw-bold">Metroxone Tech</span> provides expert IT
              strategy consultancy services, crafting tailored solutions that
              address unique challenges, leverage emerging technologies, and
              support long-term objectives. Whether optimizing IT infrastructure
              or adopting new technologies, Metroxone Tech guides your
              organization toward sustainable success.
            </p>
            <Link to="/Support" className="btn btn-danger">
              Learn more
            </Link>
          </div>
          <div className="col-md-5">
            <img
              src="https://via.placeholder.com/600x400.png?text=Dummy+Image"
              alt="Transforming Animal Identification"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </section>

      <section className="container mb-5" style={{ marginTop: "6rem" }}>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              className="img-fluid rounded"
              src="https://via.placeholder.com/600x400.png?text=Dummy+Image"
              alt="Rationale Behind Pashu Aadhaar"
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-primary fw-bold mb-3">
              Strategic Dominance of Metroxone Tech's IT Consultancy
            </h3>
            <p>
              Metroxone Tech offers expert IT strategy consultancy to help
              organizations navigate the complex digital landscape. By
              aligning technology with business goals, we ensure your company
              is equipped for long-term success.
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
                  Pioneering approaches that set your business apart from the
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
                  impact your business.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check-circle text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <span className="fw-bold">Comprehensive Integration:</span>{" "}
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
                  <span className="fw-bold">Sustained Competitive Edge:</span>{" "}
                  Continuous innovation to maintain your leadership position
                  in the market.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Consultancy;
