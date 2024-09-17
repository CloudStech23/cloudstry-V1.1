import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import pagelogo from "../Images/cloudslogo.png";
import FadeOnScroll from "../Animate/Motion";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-lg-start text-white"
      style={{ background: "#1236d0" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='facebook-f' />
          </a> */}

          <a target="_blank" href="/Support" className="me-4 text-reset">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </a>
          <a
            target="_blank"
            href="/https://www.google.com/search?q=Cloudstry+Technology+Private+Limited&stick=H4sIAAAAAAAA_-NgU1I1qDC2NDM2MzcwMDNKMjMzNTW1MqhISzRNtrQwN0s1TzYyTzIxXMSq4pyTX5pSXFJUqRCSmpyRl5-Tn16pEFCUWZZYkqrgk5mbWZKaAgBJRP6mUAAAAA&hl=en-GB&mat=CWSOWKRKQ2CzElcBEKoLaW3CtVVHR4LzVzCBJmYwqcpCul7vG0nyEVnXoi_4ZkHUmu8L1HuTrSj3m5O6Ywe29qjNiWKEbTB-nr_TnE8_NVJ2P0MLVx0-HyNljb9nKU-ulLw&authuser=0&ved=2ahUKEwi7veHh6cmIAxU4SGwGHeETLXcQ-MgIegQIJxAd"
            className="me-4 text-reset"
          >
            <MDBIcon color="light" fab icon="google" />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='instagram' />
          </a> */}
          <a
            target="_blank"
            href="https://www.linkedin.com/company/cloudstry-technologies-pvt-ltd/"
            className="me-4 text-reset"
          >
            <MDBIcon color="light" fab icon="linkedin" />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='github' />
          </a> */}
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <Link className=" navbar-brand mx-3" to="/">
                <img
                  src={pagelogo}
                  className="img-fluid"
                  // style={{ height: "3.5rem" }}
                  alt="Logo"
                />
              </Link>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Solutions</h6>

              <p>
                <Link to="/Digital-Certificate" className="text-reset nav-link">
                  Digital Certificate
                </Link>
              </p>
              <p>
                <Link to="/3PL-Solution" className="text-reset nav-link">
                  3PL (3-Party Logistic)
                </Link>
              </p>
              <p>
                <Link to="/Pet-Aadhar" className="text-reset nav-link">
                  Pet Adhar
                </Link>
              </p>
              <p>
                <Link to="/Government" className="text-reset nav-link">
                  Government
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Industries</h6>
              <p>
                <Link
                  to="/IT-Strategy-Consultancy"
                  className="text-reset nav-link"
                >
                  It Strategy Consultancy
                </Link>
              </p>
              <p>
                <Link to="/Education" className="text-reset nav-link">
                  Education
                </Link>
              </p>
              <p>
                <Link to="/Logistic" className="text-reset nav-link">
                  Logistic
                </Link>
              </p>
              <p>
                <Link to="/Staffing-Solution" className="text-reset nav-link">
                  Staffing Solution
                </Link>
              </p>
              <p>
                <Link to="/Support" className="text-reset nav-link">
                  Contact Us
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p className="align-items-start d-flex mb-2">
                <MDBIcon color="light" icon="home" className="me-3 mt-1" />
                Incuspaze, 4th floor, Apollo Premier, Vijay Nagar Square, Vijay
                Nagar, Indore, Madhya Pradesh 452001
              </p>
              <p>
                <MDBIcon color="light" icon="envelope" className="me-3" />
                hr@cloudstrytech.com
              </p>
              <p>
                <MDBIcon color="light" icon="phone" className="me-3" /> +91
                7313683823
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Copyright © 2024 All Rights Reserved |
        <Link className="text-reset fw-bold mx-1" to="/">
          Cloudstry technologies Pvt Ltd
        </Link>
      </div>
    </MDBFooter>
  );
}
