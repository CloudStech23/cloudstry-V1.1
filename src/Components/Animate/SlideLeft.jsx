import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const SlideFromLeft = ({ children, delay }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animation happens only once
    });
  }, []);

  return (
    <div data-aos="fade-right" data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default SlideFromLeft;
