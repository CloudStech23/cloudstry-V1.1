import React from "react";
import img1 from "./Images/st.first.jpg";
import img2 from "./Images/st.second.jpg";
import img3 from "./Images/st.third.jpg";
import img4 from "./Images/st.fourth.jpg";
 


function Staffingsolution() {
  return (
    <div>
      <header className="bg-white text-white text-center py-5 position-relative">
        {/* Navigation Path */}
        <div
          className="position-absolute top-0 start-0 ms-0 mt-0 p-4 fs-5 fw-bold"
          style={{ zIndex: 100 }}
        >
          <span className="small text-primary">
            <a href="/" className="">
              What we Do ? /
            </a>{" "}
            Staffing Solution
          </span>
        </div>

        {/* Header Content */}
        <div className="container text-primary mt-5 ">
          <h1 className="display-6">
            {" "}
            Comprehensive Staffing Solutions for Global Captive Centers
          </h1>
          <p className="lead">
            Global Captive Centers (GCCs) are operational units established by
            multinational corporations in offshore locations to perform critical
            business functions. These centers often handle back-office
            processes, IT services, customer support, and other specialized
            functions.
          </p>
        </div>
      </header>

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
        <div className="half-underline-container"></div>
        <div className="row gx-4 mt-5">
          <div
            className="col-xl-6 col-lg-5 d-flex justify-content-left align-items-center"
            style={{ marginBottom: "5rem" }}
          >
            <img
              className="img-fluid"
              src={img1}
              alt="Addressing GCC Challenges"
              style={{width:'39rem'}}
            />
          </div>
          <div className="col-md-6 mb-5">
            <h3
              className="text-primary display-6 mb-3"
              style={{ fontWeight: 300 }}
            >
              How We Addresses GCC-Specific Challenges ?
            </h3>
            <p className="h5 mb-2 text-muted" style={{ fontWeight: 300 }}>
              Cloudstry delivers targeted solutions to address the unique
              challenges faced by Global Captive Centers (GCCs).
            </p>

            <ul className="list-unstyled mt-4">
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <strong>Scalability:</strong> Our solutions are designed to
                  grow with your GCC, providing the flexibility to accommodate
                  increasing staffing needs and operational demands as your
                  center expands.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <strong>Skill Specialization:</strong> We employ targeted
                  recruitment strategies to find and place candidates with
                  specialized skills essential for GCC operations.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <strong>Cultural Alignment:</strong> Our approach ensures
                  candidates are a good cultural fit, aligning with your GCC’s
                  corporate culture and operational style to enhance team
                  cohesion and productivity.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <strong>Compliance and Regulations:</strong> We handle all
                  aspects of compliance with local labor laws and international
                  regulations.
                </span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <strong>Remote and Onsite Staffing:</strong> Our strategies
                  effectively manage both remote and onsite staffing needs.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row gx-5 mt-5">
          <div className="col-md-6 mb-5">
            <h3
              className="text-primary display-6 mb-3"
              style={{ fontWeight: 300 }}
            >
              Why Choose Us for Your GCC Staffing Needs?
            </h3>
            <p className="h5 mb-2 text-muted" style={{ fontWeight: 300 }}>
              See how our expertise and custom solutions enhance GCC staffing.
            </p>

            <ul className="list-unstyled mt-4">
              <li className="mb-3 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <strong>Expertise in GCC Staffing:</strong> Proven success in
                  staffing GCCs with impactful results and a deep understanding
                  of the unique demands and dynamics of Global Captive Centers.
                </span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <strong>Tailored Solutions:</strong> Custom staffing
                  strategies designed to meet the specific needs and challenges
                  of GCCs, ensuring a perfect fit for every role.
                </span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <strong>Technology and Tools:</strong> Utilization of advanced
                  technology and tools to streamline recruitment processes and
                  enhance workforce management, ensuring efficiency and
                  accuracy.
                </span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <strong>Support and Consultation:</strong> Ongoing support and
                  expert consultation to guarantee the success of your staffing
                  solutions, from initial setup to long-term management.
                </span>
              </li>
            </ul>
          </div>

          <div
            className="col-xl-6 col-lg-5 d-flex justify-content-right align-items-center"
            style={{ marginBottom: "5rem" ,  }}
          >
            <img
              className="img-fluid"
              src={img2}
              alt="GCC Staffing"
            />
          </div>
        </div>

        <div className="row gx-4">
          <div
            className="col-xl-6 col-lg-5 d-flex justify-content-left align-items-center"
            style={{ marginBottom: "5rem" }}
          >
            <img
              className="img-fluid"
              src={img3}
              alt="Key Benefits"
              style={{width:'39rem'}}
            />
          </div>
          <div className="col-md-6 mb-5 mt-5">
            <h3
              className="text-primary display-6 mb-3"
              style={{ fontWeight: 300 }}
            >
              Key Benefits of Our Staffing Solutions
            </h3>

            <ul className="list-unstyled mt-4">
              <li className="mb-3 d-flex align-items-start">
                <i
                  className="fa fa-check text-primary me-2"
                  style={{ marginTop: "6px" }}
                ></i>
                <span className="d-inline">
                  <strong>Enhanced Recruitment Efficiency:</strong> Streamlined
                  recruitment processes that significantly reduce time-to-hire
                  and enhance overall efficiency.
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
      </div>

      <section className="mb-5  " style={{ marginTop: "6rem" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="text-primary fw-bold mb-3">
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
                    needs of each organization, ensuring the right fit for every
                    role.
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
                  partner committed to enhancing your workforce efficiency and
                  driving organizational success.
                </p>
              </ul>
            </div>
            <div className="col-md-6 mb-4">
              <img
                className="img-fluid rounded"
                src={img4}
                alt="Cloudstry Technologies"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Staffingsolution;
