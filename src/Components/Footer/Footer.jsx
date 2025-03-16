import React, { useState, useEffect } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import pagelogo from "../Images/cloudslogo.png";
import FadeOnScroll from "../Animate/Motion";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <MDBFooter
      className="text-center text-lg-start text-white"
      style={{ background: "#1236d0" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-2  ">
        <div>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='facebook-f' />
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
              <p
                className="mx-4 text-center fw-  mt-2"
                style={{
                  fontStyle: "italic",
                  fontSize: "1.15rem",
                  borderBottom: "1px solid whitesmoke",
                }}
              >
                "Empowering Digitalization"
              </p>
            </MDBCol>
            {isMobile ? (
              <MDBDropdown className="d-inline-block">
                <MDBDropdownToggle
                  tag="h6"
                  className="text-uppercase  fw-bold mb-4 btn-link text-white"
                >
                  Solutions
                </MDBDropdownToggle>
                <MDBDropdownMenu
                  className="w-auto  p-3 text-white"
                  style={{
                    marginLeft: "6rem",
                    lineHeight: "2.2rem",
                    backgroundColor: "#1236d0",
                    boxShadow: "0px 0px 5px 0px rgb(208, 208, 213)",
                    fontSize: "1.1rem",
                  }}
                >
                  <MDBDropdownItem>
                    <Link
                      to="/WhatweDo/Product-Platform/Digital-Certificate"
                      className="text-reset nav-link "
                    >
                      Digital Certificate
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link
                      to="/WhatweDo/Product-Platform/3PL-Solution"
                      className="text-reset nav-link"
                    >
                      3PL (3-Party Logistic)
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link
                      to="/WhatweDo/Product-Platform/Pet-Aadhar"
                      className="text-reset nav-link"
                    >
                      Pet Adhar
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link
                      to="/Industries/Government"
                      className="text-reset nav-link"
                    >
                      Government
                    </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            ) : (
              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Solutions</h6>

                <p>
                  <Link
                    to="/WhatweDo/Product-Platform/Digital-Certificate"
                    className="text-reset nav-link"
                  >
                    Digital Certificate
                  </Link>
                </p>
                <p>
                  <Link
                    to="/WhatweDo/Product-Platform/3PL-Solution"
                    className="text-reset nav-link"
                  >
                    3PL (3-Party Logistic)
                  </Link>
                </p>
                <p>
                  <Link
                    to="/WhatweDo/Product-Platform/Pet-Aadhar"
                    className="text-reset nav-link"
                  >
                    Pet Adhar
                  </Link>
                </p>
                <p>
                  <Link
                    to="/Industries/Government"
                    className="text-reset nav-link"
                  >
                    Government
                  </Link>
                </p>
              </MDBCol>
            )}

            {isMobile ? (
              <MDBDropdown className="d-inline-block">
                <MDBDropdownToggle
                  tag="h6"
                  className="text-uppercase  fw-bold mb-4 btn-link text-white"
                >
                  Industries
                </MDBDropdownToggle>
                <MDBDropdownMenu
                  className="w-auto  p-3 text-white"
                  style={{
                    marginLeft: "6rem",
                    lineHeight: "2.2rem",
                    backgroundColor: "#1236d0",
                    boxShadow: "0px 0px 5px 0px rgb(208, 208, 213)",
                    fontSize: "1.1rem",
                  }}
                >
                  <MDBDropdownItem>
                    <Link
                      to="/WhatweDo/IT-Solutions/IT-Strategy-Consultancy"
                      className="text-reset nav-link"
                    >
                      It Strategy Consultancy
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link
                      to="/Industries/Education"
                      className="text-reset nav-link"
                    >
                      Education
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link
                      to="/Industries/Logistic"
                      className="text-reset nav-link"
                    >
                      Logistic
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link
                      to="/WhatweDo/Staffing-Solution"
                      className="text-reset nav-link"
                    >
                      Staffing Solution
                    </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            ) : (
              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Industries</h6>
                <p>
                  <Link
                    to="/WhatweDo/IT-Solutions/IT-Strategy-Consultancy"
                    className="text-reset nav-link"
                  >
                    It Strategy Consultancy
                  </Link>
                </p>
                <p>
                  <Link
                    to="/Industries/Education"
                    className="text-reset nav-link"
                  >
                    Education
                  </Link>
                </p>
                <p>
                  <Link
                    to="/Industries/Logistic"
                    className="text-reset nav-link"
                  >
                    Logistic
                  </Link>
                </p>
                <p>
                  <Link
                    to="/WhatweDo/Staffing-Solution"
                    className="text-reset nav-link"
                  >
                    Staffing Solution
                  </Link>
                </p>
                <p>
                  <Link to="/Support" className="text-reset nav-link">
                    Contact Us
                  </Link>
                </p>
              </MDBCol>
            )}

            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="light" icon="envelope" className="me-3" />
                hr@cloudstrytech.com
              </p>
              <p className="align-items-start d-flex mb-2 text-justify">
                <MDBIcon color="light" icon="home" className="me-3 mt-1" />
                Incuspaze, 4th floor, Apollo Premier, Vijay Nagar Square, Vijay
                Nagar, Indore, Madhya Pradesh 452001
              </p>

              {/* <p>
                <MDBIcon color="light" icon="phone" className="me-3" /> +91
                7313683823
              </p> */}
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
