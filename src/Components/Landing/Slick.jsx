import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import navigation styles
import { Navigation, Autoplay } from "swiper/modules";
import { data } from "./swiperdata";
import './slick.css';

const SwiperCarousel = () => {
  const swiperRef = useRef(null);

  // Function to pause autoplay
  const pauseAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper.autoplay) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  // Function to resume autoplay
  const resumeAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper.autoplay) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div
      className="container-fluid p-0 position-relative"
      onMouseEnter={pauseAutoplay} // Pause on hover
      onMouseLeave={resumeAutoplay} // Resume on mouse leave
      style={{background:'#e1e3e4a8'}}
    >
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        autoplay={{ delay: 2000 }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="swiper-container"
        style={{ height: "30rem" }}
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <div className="container py-5 position-relative mainslider">
              <div className="row align-items-center justify-content-between mb-2 p-4 rounded-3">
                {/* Image Content */}
                <div className="col-12 col-md-5 text-md-end mt-4 mt-md-0 mb-2 position-relative order-1 order-md-2">
                  <img
                    src={value.img || "https://via.placeholder.com/600x400.png?text=Dummy+Image"} // Use value.img if available
                    alt={value.title || "Dummy"}
                    className="img-fluid rounded d-none d-xl-block"
                    style={{height:'23rem'}}
                  />
                </div>
                {/* Text Content */}
                <div className="col-12 col-md-5 mt-4 mb-2 order-2 order-md-1">
                  <h2 className="display-5 text-primary" style={{ fontWeight: 300 }}>
                    {value.title}
                  </h2>
                  <p className="text-muted mb-4">
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
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
