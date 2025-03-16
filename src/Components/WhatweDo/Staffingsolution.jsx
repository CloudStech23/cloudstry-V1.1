import React from "react";
import img1 from "./Images/st.first.jpg";
import img2 from "./Images/st.second.jpg";
import img3 from "./Images/st.third.jpg";
import img4 from "./Images/st.fourth.jpg";
import bg from "../Images/header-bg.png";
import FadeOnScroll from "../Animate/Motion";
function Staffingsolution() {
  return (
    <div>
      <FadeOnScroll>
        <header
          className="text-white text-center py-5 position-relative"
          style={{
            // backgroundColor: "rgb(233, 239, 241)",
            backgroundColor: "white",
            minHeight: "12rem",
            // height:'100%',
            overflow: "hidden",
            boxShadow: "rgb(235 231 231) 1px -16px 20px 0px inset",
          }}
        >
          {/* Left-Aligned Image */}
          <img
            src={bg} // Adjust the path to your image
            alt="Decorative background"
            className="position-absolute"
            style={{
              left: 940,
              top: 0, // Position at the top
              height: "100%", // Fill the height of the header
              width: "auto", // Maintain aspect ratio; set a specific width if needed
              zIndex: 0, // Position it behind the header content
            }}
          />

          {/* Bottom Left Content */}
          <div
            className="position-absolute bottom-0 start-0 p-4 fs-5 fw-normal"
            style={{ zIndex: 1 }} // Ensure this is on top of the image
          >
            <span className="small" style={{ color: "#1236d0" }}>
              <a href="/" style={{ color: "#1236d0" }}>
                What we Do ?
              </a>{" "}
              <a href="#" style={{ color: "#1236d0" }}>
                / Staffing Solutions
              </a>
            </span>
          </div>

          {/* Header Content */}
          <div
            className="text-center py-5 text-dark "
            style={{ position: "relative", zIndex: 1 }}
          >
            <h2 className="display-4 mb-3 fw-bold" style={{ color: "#1236d0" }}>
              Captive Workforce Solutions
            </h2>

            <div
              className="lead mb-4 mx-auto text-center px-3 col-10"
              style={{ color: "#1236d0" }}
            >
              Global Captive Centers (GCCs) are operational units established by
              multinational corporations in offshore locations to perform
              critical business functions. These centers often handle
              back-office processes, IT services, customer support, and other
              specialized functions.
            </div>
          </div>
        </header>
      </FadeOnScroll>

      {/* <section class="py-5 bg-whitet text-center">
        <section className="pb-5">
          <div className="container">
            <div className="half-underline-container">
              <h3
                className="text-primary text-danger text-center display-5   half-underline"
                style={{ marginBottom: "4rem" }}
              >
                Case Studies
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-10 col-xl-8 mx-auto">
                <div
                  className="p-5 bg-white shadow  rounded"
                  style={{ width: "100%", height: "27rem" }}
                >
                  <Carousel interval={2000} controls={true} indicators={false}>
                    <Carousel.Item>
                      <div className="media feature-card">
                        <h3 className="text-primary fw-normal mb-3">
                          Enhancing Animal Health Monitoring
                        </h3>
                        <div className="media-body ml-3">
                          <div className="blockquote border-0 p-0">
                            <p className="font-italic lead">
                              Effective health management is essential for
                              maintaining livestock well-being and preventing
                              disease spread, yet traditional methods often lead
                              to fragmented health records. Pashu Aadhaar
                              addresses this challenge with a comprehensive
                              system that assigns unique identification numbers
                              to animals, enabling precise tracking of
                              vaccinations, treatments, and health history. This
                              system ensures accurate records and timely
                              interventions. Early implementations of Pashu
                              Aadhaar have demonstrated improved health outcomes
                              and fewer disease outbreaks in pilot areas, with
                              centralized data facilitating better health trend
                              tracking and quicker responses to issues.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="media feature-card">
                        <h3 className="text-primary fw-normal mb-3">
                          Government's Initiative for Pashu Aadhaar
                        </h3>
                        <div className="media-body ml-3">
                          <div className="blockquote border-0 p-0">
                            <p className="font-italic lead">
                              The central government is developing a major
                              database related to livestock information across
                              the country. The aim is to enhance farmers' income
                              through improved livestock management. According
                              to the Department of Animal Husbandry, in the next
                              18 months, over 500 million cattle will be
                              assigned unique IDs on a digital platform (Animal
                              UID - Pashu Aadhaar) to track their owners,
                              breeds, and productivity. Each animal will be
                              tagged with a 8-gram yellow tag in its ear, which
                              will display a 12-digit identification number.
                              When launching the e-Gopala app, Prime Minister
                              Narendra Modi highlighted the significance of
                              Pashu Aadhaar. He mentioned that once the app
                              integrates Pashu Aadhaar, it will provide
                              comprehensive information about animals, making
                              buying and selling livestock easier.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="media feature-card">
                        <h3 className="text-primary fw-normal mb-3">
                          Expanding Livestock Insurance Coverage with Pashu Bima
                        </h3>
                        <div className="media-body ml-3">
                          <div className="blockquote border-0 p-0">
                            <p className="font lead">
                              <br />
                              The Bihar government's Directorate of Dairy
                              Development has introduced the 'Pashu Bima Yojana'
                              to offer insurance protection against livestock
                              deaths and boost the rural economy. This scheme
                              covers dairy cattle with a maximum insured value
                              of ₹60,000. The insurance premium is ₹2,100, with
                              the state government subsidizing 75% (₹1,575) and
                              farmers contributing the remaining 25% (₹525). The
                              scheme, managed by District Livestock Development
                              Officers, aims to protect farmers from financial
                              losses due to severe diseases, such as lumpy skin
                              disease, ensuring stability and support for the
                              rural sector.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section> */}

      <div className="container " style={{ marginTop: "5rem" }}>
        {/* <div className="half-underline-container"></div> */}
        <FadeOnScroll animation="up">
          <div className="row gy-5 align-items-center px-md-3">
            {/* Image Section */}
            <div className="col-lg-6 col-md-6 text-center mb-4 mb-md-0">
              <img
                className="img-fluid"
                src={img1}
                alt="Addressing GCC Challenges"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>

            {/* Content Section */}
            <div className="col-lg-6 col-md-6">
              <h3 className="text-primary fw-light display-7 mb-3">
                How We Address GCC-Specific Challenges?
              </h3>
              <p className="h5 text-muted fw-light">
                Cloudstry delivers targeted solutions to address the unique
                challenges faced by Global Captive Centers (GCCs).
              </p>

              <ul className="list-unstyled mt-4">
                {[
                  {
                    title: "Scalability",
                    description:
                      "Our solutions grow with GCC, providing flexibility to meet expanding staffing and operational needs.",
                  },
                  {
                    title: "Skill Specialization",
                    description:
                      "We employ targeted recruitment strategies to find and place candidates with specialized skills essential for GCC operations.",
                  },
                  {
                    title: "Cultural Alignment",
                    description:
                      "Ensuring candidates align with GCC’s corporate culture and operational style to enhance team cohesion and productivity.",
                  },
                  {
                    title: "Compliance and Regulations",
                    description:
                      "Handling all aspects of compliance with local labor laws and international regulations.",
                  },
                  {
                    title: "Remote and Onsite Staffing",
                    description:
                      "Managing both remote and onsite staffing needs effectively.",
                  },
                ].map((item, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <i className="fa fa-check text-primary me-2 mt-1"></i>
                    <span>
                      <strong>{item.title}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeOnScroll>

        <FadeOnScroll animation="up">
          <div className="row gy-5 mt-5 px-3">
            <div
              className="col-xl-6 col-lg-5 d-flex order-first order-md-last justify-content-center align-items-center"
              style={{ marginBottom: "2rem" }}
            >
              <img className="img-fluid" src={img2} alt="GCC Staffing" />
            </div>
            <div className="col-md-6 mb-5 order-last order-md-first">
              <h3 className="text-primary display-7 fw-light mb-3">
                Why Choose Us for GCC Staffing Needs?
              </h3>
              <p className="h-5 mb-2 text-muted " style={{ fontWeight: 300 }}>
                See how our expertise and custom solutions enhance GCC staffing.
              </p>

              <ul className="list-unstyled mt-4">
                <li className="mb-3 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Expertise in GCC Staffing:</strong> Proven success
                    in staffing GCCs with impactful results and a deep
                    understanding of the unique demands and dynamics of Global
                    Captive Centers.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Tailored Solutions:</strong> Custom staffing
                    strategies designed to meet the specific needs and
                    challenges of GCCs, ensuring a perfect fit for every role.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Technology and Tools:</strong> Utilization of
                    advanced technology and tools to streamline recruitment
                    processes and enhance workforce management, ensuring
                    efficiency and accuracy.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Support and Consultation:</strong> Ongoing support
                    and expert consultation to guarantee the success of staffing
                    solutions, from initial setup to long-term management.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </FadeOnScroll>

        <FadeOnScroll animation="up">
          <div className="row gy-5 px-3 mt-5">
            <div
              className="col-xl-6 col-lg-5 d-flex  justify-content-center align-items-center"
              style={{ marginBottom: "2rem" }}
            >
              <img
                className="img-fluid"
                src={img3}
                alt="Key Benefits"
                style={{ width: "39rem" }}
              />
            </div>
            <div className="col-md-6 mb-5 mt-5 ">
              <h3 className="text-primary fw-light display-7 mb-3">
                Key Benefits of Our Staffing Solutions
              </h3>

              <ul className="list-unstyled mt-4">
                <li className="mb-3 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Enhanced Recruitment Efficiency:</strong>{" "}
                    Streamlined recruitment processes that significantly reduce
                    time-to-hire and enhance overall efficiency.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Improved Talent Quality:</strong> Ensuring that
                    candidates are thoroughly vetted and meet the specific needs
                    and expectations of GCCs.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Greater Flexibility:</strong> Adapting quickly to
                    changing business and workforce requirements to maintain
                    operational efficiency.
                  </span>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i
                    className="fa fa-check text-primary me-2"
                    style={{ marginTop: "6px" }}
                  ></i>
                  <span className="d-inline">
                    <strong>Cost-Effective Solutions:</strong> Offering
                    competitive pricing that provides significant cost benefits
                    compared to traditional recruitment methods.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </FadeOnScroll>
      </div>

      <FadeOnScroll animation="up">
        <section className="mb-5  " style={{ marginTop: "6rem" }}>
          <div className="container px-3">
            <div className="row gy-5 align-items-center">
              <div className="col-md-6 mb-4 order-first order-md-last">
                <img
                  className="img-fluid "
                  src={img4}
                  alt="Cloudstry Technologies"
                />
              </div>
              <div className="col-md-6 order-last order-md-first">
                <h3 className="text-primary fw-light mb-3">
                  Optimizing Talent Management with Precision
                </h3>

                <ul className="list-unstyled">
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Tailored Talent Acquisition:{" "}
                      </span>{" "}
                      We offer bespoke recruitment strategies to meet the unique
                      needs of each organization, ensuring the right fit for
                      every role.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold"> Streamlined Onboarding: </span>{" "}
                      Our solutions simplify the onboarding process, enhancing
                      integration and accelerating productivity.
                    </span>
                  </li>
                  <li className="mb-2 d-flex align-items-start">
                    <i
                      className="fa fa-check-circle text-primary me-2"
                      style={{ marginTop: "6px" }}
                    ></i>
                    <span className="d-inline">
                      <span className="fw-bold">
                        Compliance and Risk Management:{" "}
                      </span>{" "}
                      Our services ensure adherence to legal and regulatory
                      requirements, mitigating potential risks.
                    </span>
                  </li>

                  <p className="text-muted fw-bold">
                    By choosing Cloudstry Tech, you benefit from a strategic
                    partner committed to enhancing workforce efficiency and
                    driving organizational success.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeOnScroll>
    </div>
  );
}

export default Staffingsolution;
