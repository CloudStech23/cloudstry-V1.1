import React, { useEffect, useState } from "react";
import "../Menubar/DemoAnimation.css"; // Import CSS file
import SwiperCarousel from "../Landing/Slick";

const DemoAnimation = () => {
  const [isSticky, setIsSticky] = useState(true); // Track sticky state

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 1.5; // Change limit as needed
      if (window.scrollY > scrollThreshold) {
        setIsSticky(false); // Disable sticky effect
      } else {
        setIsSticky(true); // Enable sticky effect
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* First section with dynamic sticky effect */}
      <div className={`scroll-section ${isSticky ? "sticky" : ""}`}>
        <h1></h1>
      </div>

      {/* Second section (optional, can also be sticky) */}
      <div
        className={`scroll-section ${isSticky ? "sticky" : ""}`}
        style={{ background: "gray" }}
      >
        <h1>solanki</h1>
      </div>

      {/* Normal sections after that */}
      <div className="normal-section" style={{ background: "green" }}>
        <h1>dkjafk</h1>
      </div>
    </>
  );
};

export default DemoAnimation;
