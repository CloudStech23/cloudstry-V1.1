import React from "react";
import img1 from "../Images/Software services.png";
import cloud from "../Images/cloud.jpg";
import ai from "../Images/ai.jpg";
import web3 from "../Images/blockchain.jpg";
import "./Software.css";
// import '../WhatweDo/Product_Platfrom/Common.css'
import { Link } from "react-router-dom";

function Softwareservices() {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center justify-content-between bg-white mt-3 mb-3 shadow px-5 rounded-3 position-relative">
          {/* Text Content */}
          <div className="col-md-6 mb-2">
            <h2 className="display-5 text-primary" style={{ fontWeight: 300 }}>
            Software Solutions for Industry-Specific Excellence
            </h2>
            <p className="text-muted mb-4">
            In the current landscape, software services have become indispensable, driving innovation and efficiency across industries. The shift towards <span className="fw-bold text-primary">integrated digital ecosystems</span>  is transforming traditional business models, allowing organizations to streamline operations, enhance customer experiences, and unlock new revenue streams. At the industry level, there is a growing demand for <span className="text-primary fw-bold">bespoke software solutions </span>  that cater to specific operational needs, ensuring that businesses not only stay competitive but also lead in their respective markets. As technology evolves, the emphasis on agility, scalability, and security has never been more critical, with companies seeking software services that offer robust, future-proof solutions to complex challenges.
            </p>
            <Link
              to='/Support'
              className="btn btn-danger"
            >
              Connect with us
            </Link>
          </div>

          {/* Video Content */}
          <div
            className="col-md-5 text-md-end mt-md-0 mb-2"
            style={{ marginTop: "-20px" }}
          >
            <img
              src={img1}
              alt="Software services"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <section class="py-5">
        <div class="container px-5 my-3">
          {/* <h3 className="text-danger fw-light display-5 text-center .customheading">Transformative Solutions</h3> */}
          <div class="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="card h-80 shadow border-0 service-card">
                <div className="blackblur">
                  <img
                    className="card-img-top img-fluid"
                    src={ai}
                    alt="AI"
                    style={{ height: "14rem" }}
                  />
                   
                </div>
                {/* Hover text */}
                <div className="card-body p-4 ">
                  <div className="badge bg-primary bg-gradient rounded-pill  mb-2">
                  Machine Intelligence
                  </div>
                  <div className="h4  text-danger mt-2 fw-light">Artifical Intelligence</div>
                  <p className="card-text mb-0">
                  Cognitive computing is revolutionizing industries by enabling systems to process and analyze vast amounts of data, making intelligent decisions that mimic human cognition. Its role in automating complex tasks and enhancing decision-making is crucial in today’s data-driven world.
                  </p>
                  <p class=" transparent mt-2 ">
                    <Link to="/" className="text-danger fw-bold">
                      Learn more 
                    </Link>
                    <i class="fa fa-arrow-right text-danger mt-1 mx-1  trans" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-80 shadow border-0 service-card">
                <div className="blackblur">
                  <img
                    className="card-img-top img-fluid"
                    src={cloud}
                    alt="AI"
                    style={{ height: "14rem" }}
                  />
                   
                </div>
                {/* Hover text */}
                <div className="card-body p-4 ">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                  Virtual Infrastructure
                  </div>
                  <div className="h4  text-danger fw-light mt-2">Cloud Services</div>
                  <p className="card-text mb-0">
                  Virtual infrastructure is the backbone of modern IT, offering scalable and flexible computing resources. It allows businesses to efficiently manage operations, reduce costs, and quickly adapt to changing market demands through seamless access to computing power and storage.
                  </p>
                  <p class=" transparent mt-2 ">
                    <Link to="/" className="text-danger fw-bold">
                      Learn more 
                    </Link>
                    <i class="fa fa-arrow-right text-danger mt-1 mx-1  trans" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-80 shadow border-0 service-card">
                <div className="blackblur">
                  <img
                    className="card-img-top img-fluid"
                    src={web3}
                    alt="AI"
                    style={{ height: "14rem" }}
                  />
                   
                </div>
                {/* Hover text */}
                <div className="card-body p-4 ">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                  Decentralized Networks
                  </div>
                  <div className="h4  text-danger mt-2 fw-light">Blockchain (web3)</div>
                  <p className="card-text mb-0">
                  Distributed Ledger Technology (DLT) is transforming the way transactions are recorded and verified, ensuring transparency, security, and trust in digital operations. Its application spans across industries, from finance to supply chain, enabling decentralized and tamper-proof recordkeeping.
                  </p>
                  <p class=" transparent mt-2 ">
                    <Link to="/" className="text-danger fw-bold">
                      Learn more 
                    </Link>
                    <i class="fa fa-arrow-right text-danger mt-1 mx-1  trans" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
            </div>
             
             
            <hr className="bg-danger" />
          </div>
        </div>
      </section>

      {/* Issuer Section */}
      <div className="row gx-0 py-5 px-5">
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
            Exceptional Value of Metroxone Tech Software Solutions
          </h3>
          <p className="h5 mb-2" style={{ fontWeight: 400, color: "#353535" }}>
          Metroxone Tech's software solutions are designed to empower businesses by providing cutting-edge tools that drive innovation and efficiency. Our approach combines deep industry knowledge with the latest technological advancements to deliver solutions that not only meet but exceed our clients' expectations
          </p>
           
          <ul className="list-unstyled mt-4">
            {[
              "Seamless Integration: We ensure that our software integrates effortlessly with your existing systems, minimizing disruption and maximizing efficiency.",
              "Enhanced Security: With a focus on robust security measures, we protect your data and operations from potential threats, ensuring your peace of mind.",
              "Tailored Innovation: Our solutions are customized to meet the specific needs of your business, ensuring that technology enhances your unique value proposition.",
              "Continuous Support: Our dedicated support team is always on hand to ensure your software operates smoothly, with ongoing maintenance and updates",
              "Cost Efficiency: We deliver high-quality software solutions that optimize costs without compromising on performance or functionality.",
            ].map((text, index) => (
              <li className="mb-2 d-flex align-items-start" key={index}>
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">{text}</span>
              </li>
            ))}
          </ul>
           
        </div>
      </div>

      {/* Closing Thoughts Section */}
      <section
        style={{ position: "relative", marginTop: "1rem" }}
        className="px-5 py-5"
      >
        <div
          style={{
            position: "absolute",
            top: "19%",
            right: "30%",
            transform: "translateX(50%)",
            background: "#efefef",
            borderRadius: "8px",
            padding: "2rem",
            maxWidth: "80%",
            zIndex: 2,
          }}
          className="col-lg-6"
        >
          <h3 className="text-primary font-weight-bold mb-4">
          A Commitment to Excellence You Can Trust
          </h3>
          <p>
          At Metroxone Tech, we stand by the quality and reliability of our solutions. Our commitment to innovation and customer satisfaction is at the core of everything we do. We believe in the power of technology to transform businesses, and we’re here to ensure that our clients succeed with confidence. Join us on this journey and experience the difference that true dedication and expertise can make. Your success is our promise.
          </p>
          <Link
            className="btn btn-danger text-white"
            to='/Support'
          >
            Connect with us
          </Link>
        </div>

        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <img
            className="img-fluid rounded"
            src={ai}
            alt="Industry"
            style={{ width: "800px", height: "500px" }}
          />
        </div>
      </section>
    </div>
  );
}

export default Softwareservices;
