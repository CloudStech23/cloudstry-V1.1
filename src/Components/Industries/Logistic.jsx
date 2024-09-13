import React from "react";
import "./Common.css";
import { Link } from "react-router-dom";
import bg3 from "../Images/bg3.jpg"
import img1 from "./Images/gov.first.jpg"
import img2 from "./Images/lg.second.jpg"
import img3 from "./Images/gov.seven.jpg"

function Logistic() {
  return (
    <div>
      <header
        className="text-white text-center py-5 position-relative"
        style={{ height: "19rem", overflow: "hidden" }}
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
            / Logistic
          </span>
        </div>

        {/* Header Content */}
        <div
          className="container text-white mt-5"
          style={{ zIndex: 3, position: "relative" }}
        >
          <h1 className="display-6">
          Revolutionizing Logistics: Smart Solutions for a Complex Supply Chain
          </h1>
          <p className="lead">
          Streamline your supply chain with our innovative technology solutions. From real-time tracking to AI-driven optimization, discover how we enhance efficiency, reduce costs, and drive success in the logistics sector
          </p>
        </div>
      </header>

      <section
        className="image-video-text-interactivity fadeInUp mb-5"
        style={{ marginTop: "10rem" }}
      >
        <div className="container mb-5">
          <div className="row align-items-center mb-5">
            {/* Image Section */}
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src={img1}
                alt= "Logistic"
              />
            </div>

            {/* Text Section */}
            <div className="col-md-6 ">
              <h3 className="text-primary fw-normal mb-3">
                Major Challenges in the Logistics Sector !
              </h3>
              <p className="text-muted">
              The logistics industry faces several critical challenges that impact efficiency and effectiveness
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Supply Chain Visibility:</span>
                    Lack of real-time visibility into supply chain operations
                    can lead to inefficiencies and delays.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Inventory Management:</span>
                    Balancing inventory levels to meet demand while minimizing
                    excess stock and storage costs is a complex task.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Route Optimization:</span>
                    Efficiently planning and optimizing delivery routes to
                    reduce transportation costs and improve delivery times is a
                    challenge.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Data Integration:</span>
                    Integrating data from various sources and systems to gain
                    actionable insights and improve decision-making is often
                    difficult.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Regulatory Compliance:</span>
                    Navigating complex regulatory requirements and ensuring
                    compliance across different regions can be challenging.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <hr />
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
              <h3 className="text-primary fw-normal mb-3">
                How Digitalization Solving Logistics Challenges ?
              </h3>
              <p>
                Digitalization is revolutionizing the logistics sector by
                addressing these key challenges:
              </p>

              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Enhanced Visibility:</span> IoT
                    and tracking technologies provide real-time visibility into
                    shipments and inventory, improving transparency and
                    coordination.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">
                      Intelligent Inventory Management:
                    </span>{" "}
                    Advanced analytics and AI help predict demand and optimize
                    inventory levels, reducing costs and enhancing efficiency.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">
                      Route Optimization Solutions:
                    </span>{" "}
                    Digital tools and algorithms optimize delivery routes,
                    reducing fuel consumption, improving delivery times, and
                    minimizing costs.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Seamless Data Integration:</span>{" "}
                    Integrated platforms and data analytics unify information
                    from various sources, providing actionable insights and
                    improving decision-making.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Automated Compliance:</span>{" "}
                    Digital solutions automate compliance processes, ensuring
                    adherence to regulatory requirements and reducing manual
                    effort.
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
                src={img2}
                alt=" "
              />
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section
        className="image-video-text-interactivity fadeInUp mb-5"
        style={{ marginTop: "6rem" }}
      >
        <div className="container mb-5">
          <div className="row align-items-center mb-5">
            {/* Image Section */}
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                className="img-fluid rounded"
                height={365}
                width={504}
                src={img3}
                alt=" "
              />
            </div>

            {/* Text Section */}
            <div className="col-md-6 ">
              <h3 className="text-primary fw-normal mb-3">
                How We Can Support the Logistics Industry ?
              </h3>
              <p className="text-muted">
                Cloudstry Tech offers a range of IT solutions tailored to the
                logistics sector’s needs:
              </p>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Real-Time Tracking Systems:</span>{" "}
                    Implement advanced tracking systems that provide real-time
                    updates on shipments and inventory, enhancing visibility and
                    control.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">
                      AI-Driven Inventory Solutions:
                    </span>{" "}
                    Utilize AI and machine learning to manage inventory more
                    efficiently, predict demand, and optimize stock levels.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Route Optimization Tools:</span>{" "}
                    Deploy route optimization software to enhance delivery
                    efficiency, reduce costs, and improve customer satisfaction.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">Integrated Data Platforms:</span>{" "}
                    Our solutions integrate data from multiple sources to
                    provide a unified view of operations and support data-driven
                    decision-making.
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i
                    className="fa fa-check-circle text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <span className="fw-bold">
                      Compliance Management Systems:
                    </span>{" "}
                    Ensure regulatory compliance with automated systems that
                    simplify and streamline adherence to complex regulations.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section className="pb-5 mt-5 mb-4">
        <div className="container">
          <div className="half-underline-container">
            <h3
              className="text-primary text-danger text-center display-6  mt-5  half-underline"
              style={{ marginBottom: "2rem" }}
            >
              Key Features for the Logistics Industry
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-10 col-xl-8 mx-auto">
              <div
                className="p-5 bg-white shadow  rounded"
                style={{ width: "100%", height: "auto" }}
              >
                <div className="media feature-card">
                  <h3 className="text-primary fw-normal mb-3">
                    Advanced 3PL Logistics Services
                    <p className="text-muted h6 mt-2">Cloudstry Tech is thrilled to be involved in groundbreaking projects that are revolutionizing the logistics sector:</p>
                  </h3>
                  <div className="media-body ml-3">
                    <div className="blockquote border-0 p-0">
                      <p className="font-italic text-muted fs-6">
                        Our 3PL (Third-Party Logistics) services offer
                        comprehensive solutions for warehousing, distribution,
                        and fulfillment, optimizing your supply chain and
                        reducing operational costs. Our expertise in 3PL
                        logistics ensures efficient management of your logistics
                        needs, from inventory handling to delivery, providing
                        you with scalable and flexible solutions tailored to
                        your business requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Logistic;
