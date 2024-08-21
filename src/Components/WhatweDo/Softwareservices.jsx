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
          <div className="col-md-5 mb-2">
            <h2 className="display-5 text-primary" style={{ fontWeight: 300 }}>
              Securing Credentials Across Industries
            </h2>
            <p className="text-muted mb-4">
              In an increasingly digital world, the need for secure and
              verifiable credentials is paramount across various sectors, from
              education and professional certifications to corporate training
              and skill-based achievements. Traditional paper certificates are
              not only vulnerable to forgery but also difficult to verify and
              manage, posing significant challenges for organizations and
              individuals alike. The demand for a solution that ensures the
              authenticity and accessibility of credentials is more pressing
              than ever.
            </p>
            <a
              href=" "
              className="btn btn-danger"
            >
              Talk to our Experts
            </a>
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
          <div class="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="card h-80 shadow border-0">
                <div className="blackblur">
                  <img
                    className="card-img-top img-fluid"
                    src={ai}
                    alt="AI"
                    style={{ height: "14rem" }}
                  />
                  <div className="hover-text">Your Text Here</div>{" "}
                </div>
                {/* Hover text */}
                <div className="card-body p-4">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                    News
                  </div>
                  <p className="card-text mb-0">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <p class=" transparent ">
                    <Link to="/" className="text-danger fw-bold">
                      Learn more 
                    </Link>
                    <span className="trans">0</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-80 shadow border-0">
                <div className="blackblur">
                  <img
                    className="card-img-top img-fluid"
                    src={web3}
                    alt="AI"
                    style={{ height: "14rem" }}
                  />
                  <div className="hover-text">Your Text Here</div>{" "}
                </div>
                {/* Hover text */}
                <div className="card-body p-4">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                    News
                  </div>
                  <p className="card-text mb-0">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-80 shadow border-0">
                <div className="blackblur">
                  <img
                    className="card-img-top img-fluid"
                    src={cloud}
                    alt="AI"
                    style={{ height: "14rem" }}
                  />
                  <div className="hover-text">Your Text Here</div>{" "}
                </div>
                {/* Hover text */}
                <div className="card-body p-4">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                    News
                  </div>
                  <p className="card-text mb-0">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
            For Issuers
          </h3>
          <p className="h5 mb-2" style={{ fontWeight: 400, color: "#353535" }}>
            Transition from paper certificates to digital solutions with ease.
            MetroXone Tech’s digital certificates streamline the creation,
            issuance, storage, and sharing of verified credentials. These
            certificates validate achievements, skills, and experiences
            efficiently and securely.
          </p>
          <p className="mt-2 h5">
            Organizations across various industries use our platform daily.
          </p>
          <ul className="list-unstyled mt-4">
            {[
              "Ensure complete authenticity and security with fully verifiable credentials.",
              "Control badge expiration and micro-credential pathways for skill development.",
              "Record digital badges on a blockchain for added verification and security.",
              "Access real-time data through a 24/7 analytics tool.",
              "Integrate seamlessly with LMS and CRM via our API",
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
          <a
            className="btn btn-danger mt-2"
            href=" "
          >
            Learn More
          </a>
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
            Closing Thoughts on Pashu Aadhaar: MetroXone Technologies
          </h3>
          <p>
            Pashu Aadhaar offers a promising solution for managing livestock in
            India. By providing unique identification numbers, it aims to
            improve tracking accuracy, enhance disease control, and streamline
            record management. The system is designed to boost operational
            efficiency and support better decision-making. MetroXone Tech is
            actively working on solutions to facilitate the implementation of
            this initiative.
          </p>
          <a
            className="btn btn-danger text-white"
            href=" "
          >
            Talk to Our Experts
          </a>
        </div>

        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <img
            className="img-fluid rounded"
            src="https://images.thequint.com/thequint%2F2018-08%2Fcd1c7bac-00a3-40b5-a270-72f803a98e3a%2F9b378119_4474_4e7b_820f_68bda8a3a0f4.jpg?rect=0%2C0%2C848%2C477"
            alt="Industry"
            style={{ width: "800px", height: "500px" }}
          />
        </div>
      </section>
    </div>
  );
}

export default Softwareservices;
