import React from "react";
import { Data } from "./Teamdata";
import { MDBIcon } from "mdb-react-ui-kit";
import bg4 from '../Images/bg4.jpg'
 

function Team() {
  return (
    <div className="">
      <header
        className="text-white text-center py-5 position-relative"
        style={{ height: "19rem", overflow: "hidden" }}
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
          style={{ backgroundColor: "rgb(16 11 11 / 42%)", zIndex: 2 }}
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
          Uniting strategic insights and forward-thinking solutions to guide our company toward excellence. Meet the leaders shaping our future with transformative vision and expertise.
          </p>
        </div>
      </header>

      <section class="">
        <div class="container px-5 ">
          <section class="py-5 ">
            <div class="container px-5 my-5">
              <div class="text-center">
                <h2 class="fw-light text-danger mb-5 half-underline">
                  Our Visionaries and Trailblazers
                </h2>
                {/* <p class="lead fw-normal   text-primary mb-5">
                Guiding with insight, expertise, and a relentless drive for innovation
                </p> */}
              </div>
              <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                {Data.map((team, index) => (
                  <div class="col mb-5   mt-5 mb-xl-0">
                    <div class="text-center bg-light rounded-3 p-4" key={index}>
                      <img
                        class="img-fluid rounded-circle mb-2 px-4"
                        src={team.img}
                        alt="..."
                      />
                      <h5 class="fw-bolder text-primary">{team.Name} <span ><a href={team.linkedin} className=""> <MDBIcon color='primary' className="fs-4" fab icon='linkedin' /></a></span></h5> 
                      <div class=" text-danger">{team.Desc}</div>
                      
                    </div>
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
