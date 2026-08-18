import React from "react";
import ISK from "../../assets/ThreeDprinting/Logos/ISK.webp";
import Micronix from "../../assets/ThreeDprinting/Logos/Micronix.webp";

function Logos() {
  return (
    <div className="threeD-printing-logos">
      <h2>
        <span>Trusted by</span> Companies
      </h2>
      <div className="threeD-printing-logos-container">
        <img src={ISK} alt="ISK Logo" />
        <img src={Micronix} alt="Micronix Logo" />
      </div>
    </div>
  );
}

export default Logos;
