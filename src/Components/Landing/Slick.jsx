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
import { FaLightbulb } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { LuBrainCircuit } from "react-icons/lu";
import { Link } from "react-router-dom";

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
    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  };

  const CaroData = [
    {
      Logo: <FaHandshake />,
      Title: "Strategic Partnerships",
      Desc: "Driving collaborative innovation through AI-powered solutions and industry alliances. Our partnerships enable tailored digital products that enhance efficiency, scalability, and market leadership.",
    },
    {
      Logo: <LuBrainCircuit />,
      Title: "AI-Driven Software Solutions",
      Desc: "Engineering intelligent that automates workflows, enhances decision-making, and accelerates digital transformation with cutting-edge AI and cloud technologies.",
    },
    {
      Logo: <AiOutlineLineChart />,
      Title: "Technology-Driven Business Acceleration",
      Desc: "Leveraging advanced digital solutions to optimize performance, strengthen cybersecurity, and drive sustainable growth through scalable, AI-powered innovations.",
    },
    {
      Logo: <TbSettingsCode />,
      Title: "Agile IT Talent Solutions",
      Desc: "Empowering businesses with highly skilled IT professionals through AI-driven talent matching. Our strategic staffing solutions ensure agility, scalability, and innovation in a rapidly evolving tech landscape.",
    },
    {
      Logo: <FaLightbulb />,
      Title: "Strategic Business Consultancy",
      Desc: "Empowering enterprises through expert-driven digital strategies and comprehensive transformation roadmaps. Our consultancy services enable organizations to navigate complexity and uncover new growth opportunities",
    },
  ];

  const productCarouselData = [
    {
      title: "Digital Credential Solutions",
      desc: "Secure and verifiable digital certificates for seamless authentication and credential management.",
      link: "/WhatweDo/Product-Platform/Digital-Certificate"
    },
    {
      title: "Cattle Management Platform",
      desc: "AI-powered cattle identification and tracking for optimized livestock management.",
      link:"/WhatweDo/Product-Platform/Pet-Aadhar"
    },
    {
      title: "GCC-Driven Staffing Solutions",
      desc: "Providing specialized talent for Global Captive Centers to drive operational excellence.",
      link:"/WhatweDo/Staffing-Solution"
    },
    {
      title: "IT Strategy & Consultancy",
      desc: "Expert-driven IT roadmaps, digital transformation, and scalable tech solutions.",
      link:"/WhatweDo/IT-Solutions/IT-Strategy-Consultancy"

    },
    {
      title: "AI-Powered Software Solutions",
      desc: "Smart, scalable software designed to automate processes and enhance efficiency.",
      link:"/WhatweDo/IT-Solutions/Software-Services"
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
                Cloudstry Technologies drives your digital transformation with
                cutting-edge product solutions, bridging critical industry gaps.
                Our scalable platforms and AI-powered tools streamline
                operations, ensuring efficiency, agility, and a competitive edge
                in today’s fast-paced landscape.
              </p>
              <p className="mb-4 col-9 text-white">
                With deep expertise and innovation at the core, Cloudstry Technologies
                empowers industry leaders with robust, mission-critical
                solutions designed for seamless growth and operational
                excellence.
              </p>

              {/* Highlighted Card Carousel */}
              <div className="col-6">
                <Slider {...settings}>
                  {productCarouselData.map((data, index) => (
                  <Link to={data.link}> 
                    <div className="highlight-card p-4" key={index}>
                      <h5 className="card-title mb-2">{data.title}</h5>
                      <p>
                        {data.desc}
                        <span className="redirect-arrow text-white">
                          <i className="fa fa-arrow-right" />
                        </span>
                      </p>
                    </div>
                    </Link>
                  ))}
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
            on={{
              mouseEnter: () => SwiperCore.autoplay.stop(),
              mouseLeave: () => SwiperCore.autoplay.start(),
            }}
          >
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              on={{
                mouseEnter: () => SwiperCore.autoplay.stop(),
                mouseLeave: () => SwiperCore.autoplay.start(),
              }}
              // loop={true}
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
                      // maxHeight: "90%",
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
                      className="description fw-light text-primary"
                      style={{
                        fontSize: "1rem",
                        lineHeight: "1.6", // Increased for better readability
                        maxWidth: "90%",
                        margin: "0 auto",
                        textAlign: "justify",
                        textJustify: "inter-word", // Ensures even spacing
                        wordSpacing: " ", // Adds slight spacing between words
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
