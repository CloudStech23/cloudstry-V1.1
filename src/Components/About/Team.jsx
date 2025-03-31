import React from "react";
import { Data } from "./Teamdata";
import { MDBIcon } from "mdb-react-ui-kit";
import bg from "../Images/header-bg.png";
import FadeOnScroll from "../Animate/Motion";
import { Helmet } from "react-helmet-async";

function Team() {
  return (
    <div className="">
      <Helmet>
        <title>Team | CloudstryTech</title>
        <meta
          name="description"
          content="Meet the leaders shaping our future with transformative vision and expertise"
        />
        <meta name="keywords" content="Team cloudstry,  CloudstryTech team" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.cloudstrytech.com/team" />

        <meta property="og:title" content="Team | CloudstryTech" />
        <meta
          property="og:description"
          content="Meet the leaders shaping our future with transformative vision and expertise"
        />
        <meta property="og:url" content="https://www.cloudstrytech.com/team" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Header Section */}
      <FadeOnScroll animation="top">
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
                /Meet Leadership
              </a>{" "}
              <a href="#" style={{ color: "#1236d0" }}></a>{" "}
            </span>
          </div>

          {/* Header Content */}
          <div
            className="text-center py-5 text-dark "
            style={{ position: "relative", zIndex: 1 }}
          >
            <h2 className="display-4 mb-3 fw-bold" style={{ color: "#1236d0" }}>
              Visionary Leadership
            </h2>

            <div
              className="lead mb-4 mx-auto text-center px-5 col-10"
              style={{ color: "#1236d0" }}
            >
              Uniting strategic insights and forward-thinking solutions to guide
              our company toward excellence. Meet the leaders shaping our future
              with transformative vision and expertise.
            </div>
          </div>
        </header>
      </FadeOnScroll>

      {/* Team Section */}
      <section className="">
        <div className="container px-5">
          <section className="py-5">
            <div className="container px-5 my-5">
              <div className="text-center">
                <h2 className="fw-light text-danger mb-5 half-underline">
                  Our Advisory Board And Active Team
                </h2>
              </div>

              {/* Team Members */}
              <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                {Data.map((team, index) => (
                  <div className="col mb-5 mt-5 mb-xl-0" key={index}>
                    <FadeOnScroll animation="up">
                      <div className="text-center bg-light rounded-3 p-4">
                        <img
                          className="img-fluid rounded-circle mb-2 px-4"
                          src={team.img}
                          alt={team.Name}
                        />
                        <h5 className="fw-bolder text-primary">
                          {team.Name}{" "}
                          <span>
                            <a target="_blank" href={team.linkedin}>
                              <MDBIcon
                                color="primary"
                                className="fs-4"
                                fab
                                icon="linkedin"
                              />
                            </a>
                          </span>
                        </h5>
                        <div className="text-primary">{team.Desc}</div>
                      </div>
                    </FadeOnScroll>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Team;
