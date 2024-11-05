import React, { useEffect } from "react";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "../Landing/slick.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Type from "./Type";
import { FaHandshake } from "react-icons/fa";
import { TbSettingsCode } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";

SwiperCore.use([Autoplay, EffectCards]);

export default function SwiperCarousel() {
  useEffect(() => {
    // Allow scroll from the start
    document.body.style.overflow = "auto";

    return () => {
      // Cleanup if needed
    };
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: true,
  };

  const CaroData = [
    {
      Logo: <FaHandshake />,
      Title: "Strategic Partnerships",
      Desc: "Building robust partnerships to drive mutual innovation, enabling tailored IT solutions that address specific client goals and elevate market positioning. Our alliances power sustainable success.",
    },
    {
      Logo: <TbSettingsCode />,
      Title: "Innovative Software Development",
      Desc: "Designing and implementing advanced software solutions to empower businesses with the latest technologies, fostering efficient workflows, scalability, and competitive edge in their industry.",
    },
    {
      Logo: <RiTeamFill />,
      Title: "Comprehensive IT Staffing",
      Desc: "Providing experienced IT professionals to meet diverse technical needs, ensuring your team has the talent required to adapt and thrive in a fast-evolving tech landscape.",
    },
    {
      Logo: <AiOutlineLineChart />,
      Title: "Technology-Driven Business Growth",
      Desc: "Empowering business expansion through strategic tech solutions that enhance productivity, strengthen security, and support scalable operations for sustainable, long-term growth.",
    },
    {
      Logo: <TbSettingsCode />,
      Title: "Innovative Software Development",
      Desc: "Developing cutting-edge software with a focus on maximizing operational efficiency, integrating the latest tech advancements, and enhancing user experiences to drive business value.",
    },
  ];

  return (
    <section
      className="home-wrapper-top d-flex align-items-center"
      style={{
        padding: "50px 0px 100px",
        background: "linear-gradient(rgb(14, 50, 206), rgb(110, 137, 255))",
        position: "relative",
        minHeight: "655px",
        overflow: "hidden",
      }}
    >
      <MDBContainer fluid className="position-relative px-4 px-md-5">
        <div className="row">
          {/* Left side: Text Content */}
          <div className="col-md-7 d-flex flex-column justify-content-center">
            <div className="text-animated">
              <h1 className="display-4   text-white fw-light mb-4">
                <Type />
              </h1>
              <p className="text-white mb-4 col-9">
                Cloudstry Technologies powers your digital journey, bridging
                critical gaps in industry operations. Our IT solutions, product
                platforms, and staffing services ensure seamless operations,
                keeping your business a step ahead in today’s fast-paced
                environment.
              </p>
              <p className="mb-4 col-9 text-white">
                With trusted expertise, Cloudstry Technologies partners with
                industry leaders to deliver robust, innovative solutions for
                mission-critical services.
              </p>

              {/* Highlighted Card Carousel */}
              <div className="col-6">
                <Slider {...settings}>
                  <div
                    className="highlight-card p-4"
                    onClick={() => (window.location.href = "/partnerships")}
                  >
                    <h5 className="card-title mb-2">Strategic Partnerships</h5>
                    <p>
                      Building resilient partnerships to fuel growth and deliver
                      tailored IT solutions for your unique needs.{" "}
                      <span className="redirect-arrow text-white">
                        <i className="fa fa-arrow-right" />
                      </span>
                    </p>
                  </div>
                  <div
                    className="highlight-card p-4"
                    onClick={() => (window.location.href = "/development")}
                  >
                    <h5 className="card-title mb-2">Innovative Development</h5>
                    <p>
                      Offering cutting-edge solutions designed to empower
                      businesses with streamlined workflows.{" "}
                      <span className="redirect-arrow text-white">
                        <i className="fa fa-arrow-right" />
                      </span>
                    </p>
                  </div>
                  <div
                    className="highlight-card p-4"
                    onClick={() => (window.location.href = "/staffing")}
                  >
                    <h5 className="card-title mb-2">
                      Comprehensive Staffing Solutions
                    </h5>
                    <p>
                      Supplying skilled professionals to support your IT needs
                      and foster company growth.{" "}
                      <span className="redirect-arrow text-white">
                        <i className="fa fa-arrow-right" />
                      </span>
                    </p>
                  </div>
                </Slider>
              </div>

              <MDBBtn
                href=""
                target="_blank"
                color="danger"
                className="px-4  py-2 mt-4"
              >
                Let's Talk
              </MDBBtn>
            </div>
          </div>

          {/* Right side: Main Swiper Carousel */}
          <div
            className="col-md-4 d-flex justify-content-center  align-items-center d-xl-block d-none"
            style={{
              background: "#1d1dd045",
              // padding: "10px 23px",
              borderRadius: "10%",
              height: "30rem",

              paddingTop: " 23px",
            }}
          >
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              on={{
                mouseEnter: () => SwiperCore.autoplay.stop(), // Stops autoplay on hover
                mouseLeave: () => SwiperCore.autoplay.start(), // Resumes autoplay when hover ends
              }}
              className="mySwiper"
            >
              {CaroData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="card p-4 text-center text-light mt-3  mb-3"
                    style={{
                      maxWidth: "90%",
                      margin: "0 auto",
                      borderRadius: "10px",
                      background: "rgb(49 91 196) !important",
                    }}
                  >
                    {/* Logo Section */}
                    <div
                      className=" d-flex justify-content-center align-items-center"
                      style={{
                        width: "100%",
                        height: "100%",
                        background: "#2150c8 !important",
                      }}
                    >
                      <div
                        className="circle-icon-wrapper mb-3 d-flex justify-content-center align-items-center"
                        style={{
                          width: "80px", // Adjust size for the circle
                          height: "80px",
                          borderRadius: "50%",
                          backgroundColor: "#e0f7ff",
                        }}
                      >
                        <div
                          className="logo fw-bold"
                          style={{ fontSize: "48px", color: "#2150c8" }}
                        >
                          {item.Logo}
                        </div>
                      </div>
                    </div>

                    {/* Title Section */}
                    <h5
                      className="title mb-3 fw-normal text-primary"
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "",
                      }}
                    >
                      {item.Title}
                    </h5>

                    {/* Description Section */}
                    <p
                      className="description fw-light text-left text-primary"
                      style={{
                        fontSize: "1rem",
                        lineHeight: "1.5",
                        maxWidth: "80%",
                        margin: "0 auto",
                        textAlign: "justify",
                      }}
                    >
                      {item.Desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </MDBContainer>
    </section>
  );
}
