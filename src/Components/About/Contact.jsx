import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "../Support/common.css";
import "./contact.css";

function Contact() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  // Function to handle window resize
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    // Add event listener to monitor window resize
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-light mt-5">
      <MDBContainer fluid className="container">
        <h1 className="text-center display-4 text-danger customheading mb-2">
          Get in Touch with Us
        </h1>
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-2 display-3 fw-bold ls-tight px-3">
               Connection to <br />
              <span className="text-primary">Exceptional Support</span>
            </h1>

            <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Our dedicated team is here to provide the support you need.
              Whether you have questions, require assistance, or want to discuss
               next project, we're just a message away. Reach out to us
              today and experience our commitment to excellence.
            </p>
          </MDBCol>

          <MDBCol md="5">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <div className="h5 mb-4">
                  We'd love to hear from you. Please fill out the form below and
                  we'll get back to you promptly.
                </div>

                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Full Name"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      id="form1"
                      type="email"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Subject"
                  id="form1"
                  type="text"
                />
                <MDBTextArea
                  wrapperClass="mb-4"
                  rows={4}
                  label=" Message"
                  id="form1"
                  type="text"
                />

                <MDBBtn className="w-100 mb-4 rounded-3 bg-danger" size="md">
                  Send Message
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        {/* *********** Show Content-1 if screen is small *********** */}
        {isSmallScreen && (
          <section className="content-1">
            
            <div className="col-lg-6 shadow contact-card p-3">
              <h3 className="text-primary font-weight-bold mb-4">
                Reach Out to Us
              </h3>
              <div className="row">
                <div className="col-lg-10">
                  <div className="row row-cols-1 row-cols-md-2">
                    <div className="col h-80">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <h2 className="h5">Phone</h2>
                      <p className="mb-0">+91 7313683823</p>
                    </div>
                    <div className="col mb-md-0 h-100">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <h2 className="h5">Email</h2>
                      <p className="mb-0">hr@cloudstrytech.com</p>
                    </div>
                    <div className="col h-100">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <h2 className="h5">Address</h2>
                      <p className="mb-0">
                        4th floor, Apollo Premier, Vijay Nagar Square, Vijay
                        Nagar, Indore, Madhya Pradesh 452001
                      </p>
                    </div>
                    <div className="col h-100">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-share"></i>
                      </div>
                      <h2 className="h5">Social</h2>
                      <p className="mb-0">
                        <div>
                          <Link to="/" className="me-4 text-reset">
                            <MDBIcon color="dark" fab icon="twitter" />
                          </Link>
                          <Link to="/" className="me-4 text-reset">
                            <MDBIcon color="dark" fab icon="google" />
                          </Link>
                          <Link to="/" className="me-4 text-reset">
                            <MDBIcon color="dark" fab icon="linkedin" />
                          </Link>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                
              }}
              className="mt-2"
            >
              <iframe
                className="img-fluid rounded map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10766.089125020088!2d75.89070371602931!3d22.743313081862663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd56808efd65%3A0xa677b30c9d4e0f76!2sIncuspaze%20Coworking%20Space%20in%20Indore%20Princes&#39;%20Business%20Skyline!5e0!3m2!1sen!2sin!4v1726254608660!5m2!1sen!2sin"
                alt="map"
                style={{ width: "800px", height: "500px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        )}

        {/* *********** Content-2 is shown by default *********** */}
        {!isSmallScreen && (
          <section className="mb-5" style={{ position: "relative", marginTop: "3rem" }}>
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
              }}
            >
              <iframe
                className="img-fluid rounded map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10766.089125020088!2d75.89070371602931!3d22.743313081862663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd56808efd65%3A0xa677b30c9d4e0f76!2sIncuspaze%20Coworking%20Space%20in%20Indore%20Princes&#39;%20Business%20Skyline!5e0!3m2!1sen!2sin!4v1726254608660!5m2!1sen!2sin"
                alt="map"
                style={{ width: "800px", height: "500px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "19%",
                right: "30%",
                transform: "translateX(50%)",
                background: "white",
                borderRadius: "8px",
                padding: "2rem",
                maxWidth: "80%",
                zIndex: 2,
              }}
              className="col-lg-6 shadow contact-card d-xl-block d-none"
            >
              <h3 className="text-primary font-weight-bold mb-4">
                Reach Out to Us
              </h3>
              <div className="row">
                <div className="col-lg-10">
                  <div className="row row-cols-1 row-cols-md-2">
                    <div className="col h-80">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <h2 className="h5">Phone</h2>
                      <p className="mb-0">+91 7313683823</p>
                    </div>
                    <div className="col mb-md-0 h-100">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <h2 className="h5">Email</h2>
                      <p className="mb-0">hr@cloudstrytech.com</p>
                    </div>
                    <div className="col h-100">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <h2 className="h5">Address</h2>
                      <p className="mb-0">
                        4th floor, Apollo Premier, Vijay Nagar Square, Vijay
                        Nagar, Indore, Madhya Pradesh 452001
                      </p>
                    </div>
                    <div className="col h-100">
                      <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                        <i className="bi bi-share"></i>
                      </div>
                      <h2 className="h5">Social</h2>
                      <p className="mb-0">
                        <div>
                          <Link to="/" className="me-4 text-reset">
                            <MDBIcon color="dark" fab icon="twitter" />
                          </Link>
                          <Link to="/" className="me-4 text-reset">
                            <MDBIcon color="dark" fab icon="google" />
                          </Link>
                          <Link to="/" className="me-4 text-reset">
                            <MDBIcon color="dark" fab icon="linkedin" />
                          </Link>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </MDBContainer>
    </div>
  );
}

export default Contact;
