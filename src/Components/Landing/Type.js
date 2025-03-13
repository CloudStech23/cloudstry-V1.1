import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    options={{
      strings: [
        "Transform. Automate. Lead.",
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
