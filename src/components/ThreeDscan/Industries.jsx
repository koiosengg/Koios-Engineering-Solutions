import React, { useEffect } from "react";
import Aerospace from "../../assets/ThreeDscan/Industries/Aerospace.png";
import ElectricVehicle from "../../assets/ThreeDscan/Industries/Electric Vehicle.png";
import Automotive from "../../assets/ThreeDscan/Industries/Automotive.png";
import GeneralEngineering from "../../assets/ThreeDscan/Industries/General Engineering.png";
import Machinery from "../../assets/ThreeDscan/Industries/Machinery.png";
import SectionScrollAnimation from "../SectionScrollAnimation";

function Industries() {

    SectionScrollAnimation(".threeD-industries-set");
  useEffect(() => {
    const border1 = document.querySelector(".threeD-industries-border1");
    const border2 = document.querySelector(".threeD-industries-border2");

    let angle1 = 0;
    let angle2 = 0;

    function animateGradient() {
      if (border1 && border2) {
        angle1 = (angle1 + 1) % 360;
        angle2 = (angle2 + 1) % 360;

        border1.style.borderImage = `linear-gradient(${angle1}deg, #ffbf00, transparent 30%) 1`;
        border2.style.borderImage = `linear-gradient(${angle2}deg, transparent 70%, #ffbf00) 1`;
      }
      requestAnimationFrame(animateGradient);
    }

    animateGradient();
  }, []);

  return (
    <div className="threeD-vision">
      <div className="threeD-heading">
        <h2>
          Empowering a Wide Range of <br /> <span>Industries</span>
        </h2>
      </div>
      <div className="threeD-industries-container">
        <div className="threeD-industries-div">
          <div className="threeD-industries-set">
            <img src={Aerospace} alt="Aerospace" />
            <p>Aerospace</p>
          </div>
          <div className="threeD-industries-set">
            <img src={ElectricVehicle} alt="Electric Vehicle" />
            <p>ELECTRIC VEHICLE</p>
          </div>
          <div className="threeD-industries-set">
            <img src={Automotive} alt="Automotive" />
            <p>Automotive</p>
          </div>
          <div className="threeD-industries-set mobile">
            <img src={GeneralEngineering} alt="General Engineering" />
            <p>General Engineering</p>
          </div>
          <div className="threeD-industries-set mobile">
            <img src={Machinery} alt="Machinery" />
            <p>MACHINERY</p>
          </div>
        </div>
        <div className="threeD-industries-div below-div">
          <div className="threeD-industries-set notMobile">
            <img src={GeneralEngineering} alt="General Engineering" />
            <p>General Engineering</p>
          </div>
          <div className="threeD-industries-set notMobile">
            <img src={Machinery} alt="Machinery" />
            <p>MACHINERY</p>
          </div>
        </div>
        <div className="threeD-industries-border1"></div>
        <div className="threeD-industries-border2"></div>
      </div>
    </div>
  );
}

export default Industries;
