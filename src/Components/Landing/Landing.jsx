import React, { useState, useEffect } from "react";
import Slick from "./Slick";
import mapimage from "../Images/cloudstry map.png";
// import '../Landing/Landing.css'
import staffingimage from "../Images/staffing sol.jpg";
import softwareimage from "../Images/software services.jpg";
import strategyimage from "../Images/it strategy.jpg";
import { Link } from "react-router-dom";
import government from "../Images/government.jpeg";
import education from "../Images/Education.jpg";
import whycs from "../Images/why cs.jpg";
import "../Landing/Landing.css";
import FadeOnScroll from "../Animate/Motion";
import ZoomOnScroll from "../Animate/Zoom";
import SlideFromLeft from "../Animate/SlideLeft";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import {
  FaBullseye,
  FaLayerGroup,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";

function Landing() {
  const features = [
    {
      icon: <FaBullseye />,
      title: "Targeted Communication",
      description:
        "Deliver precise, timely messages across multiple channels, ensuring customers stay informed and engaged.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Seamless Integration",
      description:
        "Deliver precise, timely messages across multiple channels, ensuring customers stay informed and engaged.",
    },
    {
      icon: <FaRobot />,
      title: "Advanced Automation",
      description:
        "Deliver precise, timely messages across multiple channels, ensuring customers stay informed and engaged.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Robust Security",
      description:
        "Deliver precise, timely messages across multiple channels, ensuring customers stay informed and engaged.",
    },
    {
      icon: <FaChartLine />,
      title: "Scalable Solutions",
      description:
        "Deliver precise, timely messages across multiple channels, ensuring customers stay informed and engaged.",
    },
    {
      icon: <FaCogs />,
      title: "Flexible Customization",
      description:
        "Deliver precise, timely messages across multiple channels, ensuring customers stay informed and engaged.",
    },
  ];

  const ServicesData = [
    {
      id: 1,
      title: "Comprehensive Staffing Solutions for Global Captive Centers",
      image: staffingimage,
      link: "/WhatweDo/Staffing-Solution",
    },
    {
      id: 2,
      title: "End-to-End Software Solutions and Support Services",
      image: softwareimage,
      link: "/WhatweDo/IT-Solutions/Software-Services",
    },
    {
      id: 3,
      title:
        "Holistic IT Strategy Consulting for Seamless Digital Transformation",
      image: strategyimage,
      link: "/WhatweDo/IT-Solutions/IT-Strategy-Consultancy",
    },
  ];

  const [isSticky, setIsSticky] = useState(true); // Track sticky state

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
      <FadeOnScroll>
        <Slick />
      </FadeOnScroll>
      {/* <FadeOnScroll>
        <Container className="my-5 px-5">
          <Row className="g-5">
            {features.map((feature, index) => (
              <Col md={4} key={index}>
                <SlideFromLeft delay={index * 200}>
                  <Card className="h-100 text-center shadow-sm">
                    {" "}
                  
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <div
                          className="me-2"
                          style={{ fontSize: "2rem", color: "#0056b3" }}
                        >
                          {feature.icon}
                        </div>
                        <Card.Title className="text-primary m-0">
                          {feature.title}
                        </Card.Title>
                      </div>
                      <Card.Text className="text-muted">
                        {feature.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </SlideFromLeft>
              </Col>
            ))}
          </Row>
        </Container>
      </FadeOnScroll> */}

      <FadeOnScroll animation=" ">
        <section className="service-section" style={{ marginTop: "5rem" }}>
          <div className="container px-5">
            <div className="row g-4">
              <div className="half-underline-container mb-3">
                <h3 className="text-primary fw-normal display-6 text-center half-blue-underline">
                  Services We Offer
                </h3>
              </div>

              {ServicesData.map((data, index) => (
                <div key={index} className="col-12 col-md-4 service-card">
                  <SlideFromLeft delay={index * 200}>
                    {" "}
                    {/* Add staggered effect */}
                    <div className="position-relative shadow">
                      <FadeOnScroll animation="">
                        <img
                          src={data.image}
                          alt={data.title}
                          className="card-img-top rounded-3"
                          style={{
                            height: "200px",
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      </FadeOnScroll>

                      <div className="card-body bg-light p-4">
                        <h4
                          className="card-title text-primary mb-3"
                          style={{ fontSize: "1.35rem" }}
                        >
                          {data.title}
                        </h4>
                        <Link to={data.link} className="btn btn-danger">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </SlideFromLeft>
                </div>
              ))}

              {/* <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              speed={600}
              // style={{ border: "1px solid red", width: "100%" }}
              className="p-4 align-items-center"
            >
              {ServicesData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="row">
       
                    <div className="col-12 col-md-6">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="card-img-top rounded-3"
                        style={{
                
                          objectFit: "cover",
                          width: "100%",
                        }}
                      />
                    </div>

              
                    <div className="col-12 col-md-6 d-flex mt-4  ">
                      <div className="  p-3">
                        <h4 className="card-title text-primary mb-3">
                          {item.title}
                        </h4>
                        <Link to={item.link} className="btn btn-danger">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
            </div>
          </div>
        </section>
      </FadeOnScroll>

      <section
        className="image-video-text-interactivity is-reverse fadeInUp "
        style={{ marginTop: "9rem", marginBottom: "6rem" }}
      >
        <div className="container px-3 px-md-5 mt-5">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <ZoomOnScroll animation="in-up">
                <img
                  className="img-fluid rounded"
                  height={365}
                  width={532}
                  src={whycs}
                  alt="Cloudstry technologies"
                />
              </ZoomOnScroll>
            </div>
            <div className="col-md-6">
              <FadeOnScroll animation="left">
                <h3 className="fw-normal fs-3 text-primary mb-4">
                  Why Cloudstry Technologies ?
                </h3>
                <p
                  className="mb-4"
                  style={{ lineHeight: 1.375, textAlign: "justify" }}
                >
                  At Cloudstry Technologies, we recognize business’s unique
                  challenges and provide tailored solutions for sustainable
                  growth and operational excellence. Our advanced technologies
                  enhance efficiency, improve customer engagement, and position
                  you at the industry’s forefront
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="ps-4 mb-3">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    Targeted Communication: Deliver precise, timely messages
                    across multiple channels, ensuring customers stay informed
                    and engaged.
                  </li>
                  <li className="ps-4 mb-3">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    Seamless Integration: Our solutions integrate effortlessly
                    with existing systems, maximizing efficiency and minimizing
                    disruption.
                  </li>
                  <li className="ps-4 mb-3">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    Advanced Automation: Streamline operations with intelligent
                    automation, reducing manual effort and increasing accuracy.
                  </li>
                  <li className="ps-4 mb-3">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    Robust Security: Protect sensitive data with our
                    state-of-the-art security features, ensuring compliance and
                    peace of mind.
                  </li>
                  <li className="ps-4">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    Scalable Solutions: business grows, our solutions grow with
                    you, adapting to evolving needs without compromising
                    performance.
                  </li>
                </ul>
                <Link
                  className="btn btn-danger text-white rounded-pill"
                  to="/Support"
                >
                  Connect with us
                </Link>
              </FadeOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container py-5">
        <div className="text-center mb-5">
          <p
            className="display-5 text-primary mb-4 text-danger"
            style={{ letterSpacing: "0.6px" }}
          >
            Discover Our Impact on Public Services and Education.
          </p>
        </div>
        <div className="d-flex flex-wrap mb-3">
          <div className="row">
            <div className="col-lg-7 mb-4">
              <div className="bg-light rounded p-4">
                <h2
                  className="font-weight-bold mb-3"
                  style={{
                    fontFamily: "ATCArquette-Regular",
                    fontSize: "36px",
                    color: "rgb(14, 50, 206)",
                  }}
                >
                  We drive innovation in essential services and cutting-edge
                  education.
                </h2>
                <p
                  className="font-weight-semibold"
                  style={{ fontFamily: "ATCArquette-Semibold" }}
                >
                  Our expertise spans critical public services and advanced
                  learning environments, driving innovation and excellence
                  across these vital areas.
                </p>

                <div className="col-lg-8 mb-4 mt-4">
                  <Link
                    to="/Education"
                    className="text-decoration-none text-primary"
                  >
                    <div className="position-relative rounded overflow-hidden mb-3">
                      <img
                        src={education}
                        alt="Case Study"
                        className="img-fluid img-hover"
                      />
                      <ul className="list-unstyled position-absolute bottom-0 start-0 p-2">
                        <li
                          className="bg-transparent text-white fw-bold border rounded-pill py-1 px-2 me-2 mb-2"
                          style={{
                            fontSize: "14px",
                            // fontFamily: "ATCArquette-Semibold",
                          }}
                        >
                          Education
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
                        Empowering tomorrow’s leaders with transformative
                        technology for enhanced learning experiences.
                      </h3>
                      <p
                        class=" transparent mt-2 "
                        style={{
                          fontFamily: "ATCArquette-Medium",
                          fontSize: "16px",
                        }}
                      >
                        <Link to="/Education" className="text-danger ">
                          Visit more
                        </Link>
                        <i
                          class="fa fa-arrow-right text-danger mt-1 mx-1  trans"
                          aria-hidden="true"
                        ></i>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 mb-4">
              <Link
                to="/Government"
                className="text-decoration-none text-primary"
              >
                <div className="position-relative rounded overflow-hidden mb-3">
                  <img
                    src={government}
                    alt="Case Study"
                    className="img-fluid img-hover"
                    style={{ width: "100%" }}
                  />
                  <ul className="list-unstyled position-absolute bottom-0 start-0 p-2">
                    <li
                      className=" text-white fw-bold border rounded-pill py-1 px-2 me-2 mb-2"
                      style={{
                        fontSize: "14px",
                        // fontFamily: "ATCArquette-Semibold",
                        background: "transparent",
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
                    Enhancing public services with cutting-edge solutions that
                    drive efficiency and transparency.
                  </h3>
                  <p
                    class=" transparent mt-2 "
                    style={{
                      fontFamily: "ATCArquette-Medium",
                      fontSize: "16px",
                    }}
                  >
                    <Link to="/Government" className="text-danger ">
                      Visit more
                    </Link>
                    <i
                      class="fa fa-arrow-right text-danger mt-1 mx-1  trans"
                      aria-hidden="true"
                    ></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <section
        className="image-video-text-interactivity fadeInUp mb-5"
        style={{ marginTop: "5rem" }}
      >
        <div className="container mt-5 px-5">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-md-6 order-md-1 order-2">
              <FadeOnScroll animation="right">
                <h3 className="text-primary fw-normal mb-3">
                  Strategic Solutions for Business Growth
                </h3>
                <p className="text-muted">
                  At Cloudstry Technologies, we understand the unique challenges
                  business faces and offer solutions designed to drive
                  sustainable growth and operational excellence. Our advanced
                  technologies are tailored to meet specific needs, enabling you
                  to enhance efficiency, improve customer engagement, and secure
                  place at the forefront of industry.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <strong>Targeted Communication:</strong> Deliver precise,
                      timely messages across multiple channels, ensuring
                      customers stay informed and engaged.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <strong>Seamless Integration:</strong> Our solutions
                      integrate effortlessly with existing systems, maximizing
                      efficiency and minimizing disruption.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <strong>Advanced Automation:</strong> Streamline
                      operations with intelligent automation, reducing manual
                      effort and increasing accuracy.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <strong>Robust Security:</strong> Protect sensitive data
                      with our state-of-the-art security features, ensuring
                      compliance and peace of mind.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <strong>Scalable Solutions:</strong> As business grows,
                      our solutions grow with you, adapting to evolving needs
                      without compromising performance.
                    </span>
                  </li>
                </ul>
                <p className="text-muted">
                  Our solutions are designed to help you scale effectively,
                  ensuring you remain competitive and innovative.
                </p>
              </FadeOnScroll>
            </div>

            {/* Image Section */}
            <div className="col-md-6 text-md-end mb-3 mt-4 mt-md-0 order-md-2 order-1">
              <FadeOnScroll animation="left">
                <img
                  className="img-fluid rounded"
                  height={365}
                  width={532}
                  src={strategyimage}
                  alt="Image"
                />
              </FadeOnScroll>
            </div>
          </div>
        </div>
      </section>

      <FadeOnScroll animation="up">
        <section
          className="image-video-text-interactivity is-reverse fadeInUp"
          style={{ marginBottom: "5rem" }}
        >
          <div className="container px-3 px-md-5">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
                <img
                  className="img-fluid rounded-3"
                  src={mapimage}
                  alt="Global Presence"
                  style={{ marginTop: "-3px" }}
                />
              </div>
              <div className="col-md-6">
                <h3 className="fw-light fs-2 text-primary mb-3">
                  Our Global Presence
                </h3>
                <p className="mb-4 text-muted" style={{ lineHeight: 1.375 }}>
                  Cloudstry Technologies operates on a global scale, providing
                  exceptional services and solutions that cater to diverse
                  markets. Our international footprint ensures that we deliver
                  impactful results and long-term support across various
                  regions.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Global Network: </span>
                      Connecting clients and partners worldwide through a
                      collaborative network.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Localized Expertise: </span>
                      Providing tailored solutions that address specific
                      regional challenges and opportunities.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">Ongoing Global Support: </span>
                      Ensuring continuous assistance to support international
                      business growth and success.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Innovative Global Solutions:
                      </span>{" "}
                      Utilizing cutting-edge technologies to deliver effective
                      and efficient outcomes worldwide.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Strategic International Partnerships:
                      </span>{" "}
                      Forming alliances to enhance the value and impact of our
                      global services.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeOnScroll>
    </div>
  );
}

export default Landing;
