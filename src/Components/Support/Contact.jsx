import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBTextArea,
} from "mdb-react-ui-kit";
import '../Support/common.css'
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="bg-light">
      <MDBContainer fluid className="px-5 py-5 container ">
        <h1 className="text-center display-4  text-danger customheading mb-2">Let get Started.</h1>
        <MDBRow className=" ">
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center "
          >
            <h1 className="my-2 display-3 fw-bold ls-tight px-3">
              The best offer <br />
              <span className="text-primary">for your business</span>
            </h1>

            <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </MDBCol>

          <MDBCol md="5">
            <MDBCard className="my-5">
              <MDBCardBody className="p-5">
                <div className="h5 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, labore.
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
                  label="Your message.."
                  id="form1"
                  type="text"
                />

                <MDBBtn className="w-100 mb-4 rounded-3 bg-danger" size="md">
                  Send message
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <section style={{ position: "relative", marginTop: "3rem" }}>
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
            }}
          >
            <iframe
              className="img-fluid rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1749.0953774268444!2d75.85336953860701!3d22.71752119484717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fda0a27f50f5%3A0xdd375ab4fdfb3f50!2sRajwada%2C%20Indore%2C%20Madhya%20Pradesh%20452004!5e1!3m2!1sen!2sin!4v1724217605410!5m2!1sen!2sin"
              alt="map"
              style={{ width: "800px", height: "500px",border:0 }}
                 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "19%",
              right: "30%",
              transform: "translateX(50%)", // Adjust this to control horizontal overlap
              background: "white",
              //   border: "1px solid black",
              borderRadius: "8px",
              padding: "2rem",
              maxWidth: "80%", // Ensures the content doesn't overflow the viewport
              zIndex: 2,
              
            }}
            className="col-lg-6 shadow"
          >
            <h3 className="text-primary  font-weight-bold mb-4">
              Reach-out us
            </h3>
            <div class="row  ">
              <div class="col-lg-10">
                <div class="row   row-cols-1 row-cols-md-2">
                  <div class="col  h-80">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-collection"></i>
                    </div>
                    <h2 class="h5">Contact</h2>
                    <p class="mb-0">123456789</p>
                  </div>
                  <div class="col  mb-md-0 h-100">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-toggles2"></i>
                    </div>
                    <h2 class="h5">Email</h2>
                    <p class="mb-0">dummy420@gmail.com</p>
                  </div>
                  <div class="col  h-100">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-building"></i>
                    </div>
                    <h2 class="h5">Address</h2>
                    <p class="mb-0">
                      Khanderao Bazar,Tarana 456665, Madhya Pradesh , India
                    </p>
                  </div>
                  <div class="col h-100">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                      <i class="bi bi-toggles2"></i>
                    </div>
                    <h2 class="h5">social</h2>
                    <p class="mb-0">
                      <div>
                        {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='facebook-f' />
          </a> */}
                        <Link  to='/' className="me-4 text-reset">
                          <MDBIcon color="dark" fab icon="twitter" />
                        </Link>
                        <Link  to='/' className="me-4 text-reset">
                          <MDBIcon color="dark" fab icon="google" />
                        </Link>
                        {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='instagram' />
          </a> */}
                        <Link to='/' className="me-4 text-reset">
                          <MDBIcon color="dark" fab icon="linkedin" />
                        </Link>
                        {/* <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='github' />
          </a> */}
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MDBContainer>
    </div>
  );
}

export default Contact;
