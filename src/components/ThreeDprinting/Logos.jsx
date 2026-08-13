import React from "react";
import ISK from "../../assets/ThreeDprinting/Logos/ISK.png";
import Micronix from "../../assets/ThreeDprinting/Logos/Micronix.png";

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
