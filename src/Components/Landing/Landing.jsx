import React from "react";
import Slick from "./Slick";
import mapimage from "../Images/world-map-with-rag-dolls.png";

function Landing() {
  return (
    // <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
    //   <div className="text-center py-5 px-5">
    //     <div className="text-primary fw-light display-5">
    //       Home page is work in progess..
    //       <span>
    //         <i className="fa fa-spinner spinning" aria-hidden="true"></i>
    //       </span>

    //     </div>
    //   </div>
    //   <style jsx>{`
    //     .spinning {
    //       font-size: 3rem; /* Adjust size if needed */
    //       display: inline-block;
    //       animation: spin 2s linear infinite;
    //     }

    //     @keyframes spin {
    //       0% { transform: rotate(0deg); }
    //       100% { transform: rotate(360deg); }
    //     }
    //   `}</style>
    // </div>
    <div>
      <Slick />

      <section className="" style={{ marginTop: "-2.5rem" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <a
                className="card border-0 text-decoration-none text-primary"
                href="https://davidsuzuki.org/action/bylaws-for-biodiversity/"
                target="_self"
              >
                <div className="position-relative">
                  <img
                    src="https://davidsuzuki.org/wp-content/uploads/2024/07/bylaws-for-biodiversity-native-plant-garden-in-Toronto-570x510.jpg"
                    alt="Native Plant Garden"
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <div className="card-body bg-light p-4">
                    <h4 className="card-title mb-3">
                      Tell your local government to update its bylaws for
                      biodiversity!
                    </h4>
                    <span className="btn btn-danger">Read More</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4">
              <a
                className="card border-0 text-decoration-none text-primary"
                href="https://davidsuzuki.org/action/bylaws-for-biodiversity/"
                target="_self"
              >
                <div className="position-relative">
                  <img
                    src="https://davidsuzuki.org/wp-content/uploads/2024/07/bylaws-for-biodiversity-native-plant-garden-in-Toronto-570x510.jpg"
                    alt="Native Plant Garden"
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <div className="card-body bg-light p-4">
                    <h4 className="card-title mb-3">
                      Tell your local government to update its bylaws for
                      biodiversity!
                    </h4>
                    <span className="btn btn-danger">Read More</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-12 col-md-4">
              <a
                className="card border-0 text-decoration-none text-primary"
                href="https://davidsuzuki.org/action/bylaws-for-biodiversity/"
                target="_self"
              >
                <div className="position-relative">
                  <img
                    src="https://davidsuzuki.org/wp-content/uploads/2024/07/bylaws-for-biodiversity-native-plant-garden-in-Toronto-570x510.jpg"
                    alt="Native Plant Garden"
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />

                  <div className="card-body bg-light p-4">
                    <h4 className="card-title mb-3">
                      Tell your local government to update its bylaws for
                      biodiversity!
                    </h4>
                    <span className="btn btn-danger">Read More</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
      </section>

      <section className="image-video-text-interactivity is-reverse fadeInUp mb-5" style={{marginTop:'7rem'}}>
        <div className="container px-3 px-md-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
              <img
                className="img-fluid rounded-3"
                // sizes="(max-width: 768px) 100vw, 768px"
                src={mapimage}
                alt="Efficient Solutions"
                style={{ marginTop: "-3px" }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-semibold fs-3 text-primary mb-4">
                Efficient solutions for Municipal and Cooperative Utilities
              </h3>
              <p className="mb-4" style={{ lineHeight: 1.375 }}>
                Need advanced communication solutions tailored to your utility’s
                unique needs while maintaining a personal touch in customer
                relationships? AGENT511 REACH offers tools to enhance customer
                engagement and operational efficiency for{" "}
                <a
                  href="https://agent511.com/industries/munis-coops/"
                  className="text-primary text-decoration-none"
                >
                  municipal and cooperative utilities
                </a>
                .
              </p>
              <ul className="list-unstyled mb-4">
                <li className="ps-4 mb-3">
                  Instantly send text messages, emails, and voice calls tailored
                  to customer data, ensuring timely and relevant communication
                </li>
                <li className="ps-4 mb-3">
                  Seamless integration with spreadsheets, CIS, OMS, and GIS
                  data, allowing easy automation and personalization
                </li>
                <li className="ps-4 mb-3">
                  Use chatbots and live chat for enhanced customer interaction
                  and support
                </li>
                <li className="ps-4 mb-3">
                  Capable of handling high-volume messaging during emergencies,
                  with robust security features
                </li>
                <li className="ps-4">
                  Create multilingual, flexible templates for various
                  communication needs, from outage notifications to billing
                  updates
                </li>
              </ul>
              <a
                className="btn btn-danger text-white rounded-pill"
                href="https://agent511.com/contact-us/"
              >
                Talk to our Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="text-center mb-5">
          <h2
            className="font-weight-bold text-uppercase mb-3"
            style={{ fontFamily: "ATCArquette-Semibold", letterSpacing: "2px" }}
          >
            Our Highlight Reel
          </h2>
          <p
            className="display-4 text-primary mb-4"
            style={{ letterSpacing: "0.6px" }}
          >
            Don't Take Our Word for it. Take Our Clients'.
          </p>
        </div>
        <div className="d-flex flex-wrap mb-3">
          <div className="col-lg-8 mb-4">
            <div className="bg-light rounded p-4">
              <h2
                className="font-weight-bold mb-3"
                style={{
                  fontFamily: "ATCArquette-Regular",
                  fontSize: "36px",
                  color: "rgb(14, 50, 206)",
                }}
              >
                Achieve 30-50% increase in customer program enrollments
              </h2>
              <p
                className="font-weight-semibold"
                style={{ fontFamily: "ATCArquette-Semibold" }}
              >
                A leading electric utility proactively engaged its customers to
                increase interaction.
              </p>
              <a
                href="https://agent511.com/case-studies/"
                className="btn btn-danger text-white rounded-pill py-2 px-4"
                style={{ backgroundColor: "rgb(255, 111, 134)" }}
              >
                View All Case Studies
              </a>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <a
              href="https://agent511.com/case-studies/agent511-chitext-citizen-engagement-two-way-text/"
              className="text-decoration-none text-primary"
            >
              <div className="position-relative rounded overflow-hidden mb-3">
                <img
                  src="https://agent511.com/app/uploads/2020/05/marilia-castelli-tdEjTjdLyuE-unsplash-Copy-3-360x287.png"
                  srcSet="https://agent511.com/app/uploads/2020/05/marilia-castelli-tdEjTjdLyuE-unsplash-Copy-3-360x287.png 360w, https://agent511.com/app/uploads/2020/05/marilia-castelli-tdEjTjdLyuE-unsplash-Copy-3-768x613.png 768w, https://agent511.com/app/uploads/2020/05/marilia-castelli-tdEjTjdLyuE-unsplash-Copy-3.png 880w"
                  alt="Case Study"
                  className="img-fluid"
                />
                <ul className="list-unstyled position-absolute bottom-0 start-0 p-2">
                  <li
                    className="bg-white text-dark border rounded-pill py-1 px-2 me-2 mb-2"
                    style={{
                      fontSize: "14px",
                      fontFamily: "ATCArquette-Semibold",
                    }}
                  >
                    Government
                  </li>
                </ul>
              </div>
              <div className="ps-2">
                <h3
                  className="font-weight-bold mb-2"
                  style={{
                    fontFamily: "ATCArquette-Medium",
                    fontSize: "24px",
                    color: "rgb(53, 53, 53)",
                  }}
                >
                  Smart City: Chicago’s ChiTEXT provides universal access to
                  services and court updates.
                </h3>
                <span
                  className="text-danger"
                  style={{ fontFamily: "ATCArquette-Medium", fontSize: "16px" }}
                >
                  Read More{" "}
                  <i
                    className="icon iconfont iconarrow-right-bold"
                    style={{ fontSize: "12px", paddingLeft: "7px" }}
                  />
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 mb-4">
            <a
              href="https://agent511.com/case-studies/agent511-deploys-text-to-911-software-houston-copy/"
              className="text-decoration-none text-primary"
            >
              <div className="position-relative rounded overflow-hidden mb-3">
                <img
                  src="https://agent511.com/app/uploads/2020/06/DJ3COCT4LBGWVOYAXQIGPZ3WRE-1-360x203.jpg"
                  srcSet="https://agent511.com/app/uploads/2020/06/DJ3COCT4LBGWVOYAXQIGPZ3WRE-1-360x203.jpg 360w, https://agent511.com/app/uploads/2020/06/DJ3COCT4LBGWVOYAXQIGPZ3WRE-1-768x432.jpg 768w, https://agent511.com/app/uploads/2020/06/DJ3COCT4LBGWVOYAXQIGPZ3WRE-1-1024x576.jpg 1024w, https://agent511.com/app/uploads/2020/06/DJ3COCT4LBGWVOYAXQIGPZ3WRE-1-1536x864.jpg 1536w, https://agent511.com/app/uploads/2020/06/DJ3COCT4LBGWVOYAXQIGPZ3WRE-1.jpg 1660w"
                  alt="Case Study"
                  className="img-fluid"
                />
                <ul className="list-unstyled position-absolute bottom-0 start-0 p-2">
                  <li
                    className="bg-white text-dark border rounded-pill py-1 px-2 me-2 mb-2"
                    style={{
                      fontSize: "14px",
                      fontFamily: "ATCArquette-Semibold",
                    }}
                  >
                    Emergency
                  </li>
                </ul>
              </div>
              <div className="ps-2">
                <h3
                  className="font-weight-bold mb-2"
                  style={{
                    fontFamily: "ATCArquette-Medium",
                    fontSize: "24px",
                    color: "rgb(53, 53, 53)",
                  }}
                >
                  Greater Harris County 9-1-1 Network creates seamless text
                  experiences with premier features
                </h3>
                <span
                  className="text-danger"
                  style={{ fontFamily: "ATCArquette-Medium", fontSize: "16px" }}
                >
                  Read More{" "}
                  <i
                    className="icon iconfont iconarrow-right-bold"
                    style={{ fontSize: "12px", paddingLeft: "7px" }}
                  />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <section className="image-video-text-interactivity is-reverse fadeInUp mb-5">
        <div className="container px-3 px-md-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
              <img
                className="img-fluid rounded-3"
                height={430}
                width={644}
                sizes="(max-width: 768px) 100vw, 768px"
                src="https://agent511.com/app/uploads/2021/11/shutterstock_1868239996-768x512.jpg"
                alt="Efficient Solutions"
                style={{ marginTop: "-3px" }}
              />
            </div>
            <div className="col-md-6">
              <h3 className="fw-semibold fs-3 text-primary mb-4">
                Efficient solutions for Municipal and Cooperative Utilities
              </h3>
              <p className="mb-4" style={{ lineHeight: 1.375 }}>
                Need advanced communication solutions tailored to your utility’s
                unique needs while maintaining a personal touch in customer
                relationships? AGENT511 REACH offers tools to enhance customer
                engagement and operational efficiency for{" "}
                <a
                  href="https://agent511.com/industries/munis-coops/"
                  className="text-primary text-decoration-none"
                >
                  municipal and cooperative utilities
                </a>
                .
              </p>
              <ul className="list-unstyled mb-4">
                <li className="ps-4 mb-3">
                  Instantly send text messages, emails, and voice calls tailored
                  to customer data, ensuring timely and relevant communication
                </li>
                <li className="ps-4 mb-3">
                  Seamless integration with spreadsheets, CIS, OMS, and GIS
                  data, allowing easy automation and personalization
                </li>
                <li className="ps-4 mb-3">
                  Use chatbots and live chat for enhanced customer interaction
                  and support
                </li>
                <li className="ps-4 mb-3">
                  Capable of handling high-volume messaging during emergencies,
                  with robust security features
                </li>
                <li className="ps-4">
                  Create multilingual, flexible templates for various
                  communication needs, from outage notifications to billing
                  updates
                </li>
              </ul>
              <a
                className="btn btn-danger text-white rounded-pill"
                href="https://agent511.com/contact-us/"
              >
                Talk to our Experts
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
