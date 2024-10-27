import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    options={{
      strings: [
        "Innovate. Integrate. Elevate.",
        "Premier Tech Ally.",
        "Digital Evolution.",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 20,
      delay: 60,
      html: true,
    }}
  />
  );
}

export default Type;
