import React from "react";
import { Data } from "./Teamdata";
import { MDBIcon } from "mdb-react-ui-kit";
import bg4 from "../Images/bg4.jpg";
import FadeOnScroll from "../Animate/Motion";

function Team() {
  return (
    <div className="">
      {/* Header Section */}
      {/* <FadeOnScroll animation="top"> */}
        <header
          className="text-white text-center py-5 position-relative"
          style={{ maxHeight: "100%", overflow: "hidden" }}
        >
          {/* Background Image */}
          <img
            src={bg4} // Replace 'bg' with the actual path to your background image
            alt="Background"
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            style={{ zIndex: 1, objectFit: "cover" }}
          />

          {/* Black Overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(16, 11, 11, 0.42)", zIndex: 2 }}
          ></div>

          {/* Navigation Path */}
          <div
            className="position-absolute top-0 p-4 start-0 ms-0 mt-0 fs-5 fw-bold"
            style={{ zIndex: 3 }}
          >
            <span className="small text-white">
              <a href="/" className="text-white">
                /
              </a>{" "}
              Meet Leadership
            </span>
          </div>

          {/* Header Content */}
          <div
            className="container text-white mt-5"
            style={{ zIndex: 3, position: "relative" }}
          >
            <h1 className="display-6">
              Visionary Leadership: Driving Innovation and Impact
            </h1>
            <p className="lead">
              Uniting strategic insights and forward-thinking solutions to guide
              our company toward excellence. Meet the leaders shaping our future
              with transformative vision and expertise.
            </p>
          </div>
        </header>
      {/* </FadeOnScroll> */}

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
                    {/* <FadeOnScroll animation="up"> */}
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
                    {/* </FadeOnScroll> */}
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
