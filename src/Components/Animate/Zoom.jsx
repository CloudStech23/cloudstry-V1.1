import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ZoomOnScroll = ({ children, animation }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should only happen once
    });
  }, []);

  return (
    <div data-aos={`zoom-${animation}`}>
      {children}
    </div>
  );
};

export default ZoomOnScroll;
