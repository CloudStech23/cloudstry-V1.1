import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import '../Landing/slick.css'

const SwiperCarousel = () => {
  const swiperRef = useRef(null);

  // Function to pause autoplay
  const pauseAutoplay = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  // Function to resume autoplay
  const resumeAutoplay = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div className="container-fluid p-0 position-relative" style={{background:'#1a232e'}}>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        // navigation
        loop={true} // Infinite loop
        className="swiper-container"
        onMouseEnter={pauseAutoplay} // Pause on hover
        onMouseLeave={resumeAutoplay} // Resume on mouse leave
        style={{height:'30rem'}}
        
      >
        <SwiperSlide>
          <div className="row no-gutters h-100 align-items-center car1">
            <div className="col-md-6 d-flex align-items-center p-4">
              <div className="carousel-content mx-5">
                <h2 className="display-4">Heading 1</h2>
                <p className="lead">
                  This is a short description for the first slide.
                </p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center p-4">
              <img
                src="https://via.placeholder.com/500x300" // Replace with your image URL
                alt="Slide 1"
                className="img-fluid"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row no-gutters h-100 align-items-center car2">
            <div className="col-md-6 d-flex align-items-center p-4">
              <div className="carousel-content mx-5">
                <h2 className="display-4">Heading 2</h2>
                <p className="lead ">
                  This is a short description for the second slide.
                </p>
                <button className="btn btn-primary ">Learn More</button>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center p-4">
              <img
                src="https://via.placeholder.com/500x300" // Replace with your image URL
                alt="Slide 2"
                className="img-fluid"
              />
            </div>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
       
    </div>
  );
};

export default SwiperCarousel;
