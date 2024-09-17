import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import navigation styles
import { Navigation, Autoplay } from "swiper/modules";
import { data } from "./swiperdata";
import "./slick.css"; // Custom styles for your slider

const SwiperCarousel = () => {
  const swiperRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("30rem"); // Default maxHeight
  const [imgHeight, setImgHeight] = useState("23rem"); // Default image height

  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setMaxHeight("39rem"); // Set to 39rem for smaller screens
        setImgHeight("12rem"); // Set image height to 12rem for smaller screens
      } else {
        setMaxHeight("30rem"); // Set to 30rem for larger screens
        setImgHeight("23rem"); // Set image height to 23rem for larger screens
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize once to set the initial values
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = ".custom-prev";
      swiperRef.current.swiper.params.navigation.nextEl = ".custom-next";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  const pauseAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper.autoplay) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const resumeAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper.autoplay) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div
      className="container-fluid p-0 position-relative"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
      style={{ background: "#e1e3e4a8" }}
    >
      <div className="half-underline-container mt-4">
        <h3 className="text-primary fw-normal display-6 text-center   half-blue-underline">
          Our Product Platform
        </h3>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        autoplay={{ delay: 2000 }}
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="swiper-container"
        style={{ height: "100vh", maxHeight }} // Dynamically set maxHeight based on screen size
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <div className="container py-5 position-relative mainslider">
              <div className="row align-items-center justify-content-between p-4 rounded-3">
                {/* Image Content */}
                <div className="col-12 col-md-5 text-md-end mt-md-0 mb-2 position-relative order-1 order-md-2">
                  <img
                    src={
                      value.img ||
                      "https://via.placeholder.com/600x400.png?text=Dummy+Image"
                    }
                    alt={value.title || "Dummy"}
                    className="img-fluid rounded"
                    style={{
                      height: imgHeight,
                      objectFit: "cover",
                      width: "100%",
                    }} // Dynamically set img height
                  />
                </div>
                {/* Text Content */}
                <div className="col-12 col-md-5 mt-4 mb-2 order-2 order-md-1 text-center text-md-start">
                  <h2
                    className="display-5 text-primary responsive-heading"
                    style={{ fontWeight: 300, whiteSpace: "nowrap" }}
                  >
                    {value.title}
                  </h2>
                  <p className="text-muted  mb-4 responsive-text">
                    {value.desc}
                  </p>
                  <a href={value.btnlink} className="btn btn-danger">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev d-xl-block d-none custom-prev">
          <i className="bi bi-arrow-left-circle"></i>
        </div>
        <div className="swiper-button-next d-xl-block d-none custom-next">
          <i className="bi bi-arrow-right-circle"></i>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
