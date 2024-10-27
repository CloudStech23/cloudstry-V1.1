import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Communicate Engage. Alert.",
          "We Are Team!",
          "We Are Business!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay:60,
        html: true, // This enables HTML parsing in the typewriter
      }}
    />
  );
}

export default Type;
