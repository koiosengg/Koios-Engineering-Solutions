import React from "react";
import { Link } from "react-router-dom";
import BorderDiv from "../../assets/ThreeDscan/Scanning/BorderDiv.png";
import BorderDivMobile from "../../assets/ThreeDscan/Scanning/BorderDivMobile.png";
import SectionScrollAnimation from "../SectionScrollAnimation";

function Scanning() {
  SectionScrollAnimation(".threeD-scan");
  return (
    <div className="threeD-scan">
      <img src={BorderDiv} className="notMobile BorderDiv" />
      <img src={BorderDivMobile} className="mobile BorderDiv" />

      <div className="threeD-scan-container">
        <div className="threeD-heading">
          <h2>
            Connect with Us for
            <br /> <span>Expert 3D Scanning Solutions</span>
          </h2>
        </div>
        <div className="threeD-scan-line"></div>
        <Link to="/contact" className="threeD-contact-button">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Scanning;
