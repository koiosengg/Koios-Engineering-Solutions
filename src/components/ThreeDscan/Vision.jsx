import React from "react";
import CircleScanner from "../../assets/ThreeDscan/Vision/Circle scanner.png";
import VisionSVG from "../../assets/ThreeDscan/Vision/vision.svg";
import VisionMobile from "../../assets/ThreeDscan/Vision/visionMobile.png";
import SectionScrollAnimation from "../SectionScrollAnimation";

function Vision() {
  SectionScrollAnimation(".threeD-vision");
  SectionScrollAnimation(".visionImg");
  SectionScrollAnimation(".circle-scanner");
  return (
    <div className="threeD-vision">
      <div className="threeD-heading">
        <h2>
          Transforming the <br /> <span>Vision</span>
        </h2>
      </div>
      <div className="threeD-vision-container">
        <img src={CircleScanner} className="circle-scanner" />
        <img src={VisionSVG} className="notMobile visionImg" />
        <img src={VisionMobile} className="mobile visionImg" />
      </div>
    </div>
  );
}

export default Vision;
