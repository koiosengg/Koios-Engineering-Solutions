import React from "react";
import Particle from "../Particle";
function Banner() {
  return (
    <div className="p-home">
        <Particle />
      <div className="p-home-heading">
        <div className="p-implementing-container">
          <div className="p-implementing-text">
            implementing your ideas to reality
          </div>
        </div>
        <a href="#Services" className="p-get-started-btn">
          <p>Get Started</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path
              d="M1.81114 13.707L0.400146 12.293L5.68914 6.99997L0.400146 1.70697L1.81514 0.292969L7.10013 5.58597C7.47508 5.96102 7.68571 6.46964 7.68571 6.99997C7.68571 7.5303 7.47508 8.03891 7.10013 8.41397L1.81114 13.707Z"
              fill="#FFBF00"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Banner;
