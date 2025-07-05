import React from "react";
import DesktopBackground from "../../assets/ThreeDprinting/FDM/Desktop Background.jpg";

function FDM() {
  return (
    <div className="fdm">
      <div className="fdm-container">
        <div className="fdm-container-img">
          <img src={DesktopBackground} alt="Background" />
        </div>
        <div className="grid-cell">
          <div className="grid-cell-container">
            <h2>What is Fused Deposition Modeling (FDM)?</h2>
            <p>
              Fused Deposition Modeling, often referred to as FDM, is a <span>3</span>D
              printing process that transforms digital designs into physical
              objects layer by layer. It works by heating and extruding a
              thermoplastic filament material, which is deposited layer upon
              layer to form the final object. FDM is renowned for its
              reliability, cost-effectiveness, and ability to produce complex
              geometries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FDM;
