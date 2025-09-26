import React from "react";
import SampleImage from "../../assets/Sample Image.png";
import DesktopBackground from "../../assets/Home/Tools/Desktop Background.png";
import ShopFloor from "../../assets/Home/Tools/Shop Floor.jpeg";
import ThreeDprinting from "../../assets/Home/Tools/3D Printing.jpeg";
import ThreeDscanning from "../../assets/Home/Tools/3D Scanning.avif";
import MIG from "../../assets/Home/Tools/MIG.webp";
import Drill from "../../assets/Home/Tools/Drill.webp";
import TwoWheelerLift from "../../assets/Home/Tools/Two Wheeler Lift.jpg";
import FourWheelerLift from "../../assets/Home/Tools/Four Wheeler Lift.avif";
import ToolsandWrench from "../../assets/Home/Tools/Tools and Wrench.png";
import AngleGrinderAndHandDrilling from "../../assets/Home/Tools/Angle Grinder and Hand Drilling.jpg";
import PaintBooth from "../../assets/Home/Tools/Paint Shop.avif";

function Tools() {
  return (
    <div className="s-infrastructure">
      <div className="s-infrastructure-heading">
        <h2>Manufacturing Equipment </h2>
      </div>
      <div className="s-tools-container">
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={ShopFloor} alt="Shop Floor" />
            </div>
            <h3>Shop Floor </h3>
          </section>
          <p>
            We have a spacious shop floor with dedicated to undertake all the
            manufacturing activities required .
          </p>
        </div>
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={ThreeDprinting} />
            </div>
            <h3>
              <span>3</span>D Printing{" "}
            </h3>
          </section>
          <p>
            We FDm 3D printers upto 470mm cube print volume which can
            accommodate huge parts for prototyping.
          </p>
        </div>
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={ThreeDscanning} />
            </div>
            <h3>
              <span>3</span>D Scanning{" "}
            </h3>
          </section>
          <p>
            We have Blue laser and NIR scan technology scanners Up to 20 microns
            accuracy.
          </p>
        </div>
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={MIG} />
            </div>
            <h3>Welding </h3>
          </section>
          <p>We have Mig and arch welding facility inhouse.</p>
        </div>
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={Drill} />
            </div>
            <h3>Radial Drilling Machine</h3>
          </section>
          <p>
            We have radial drilling machine which provide versatile positioning
            for complex drilling, high precision due to a rigid design.
          </p>
        </div>
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={TwoWheelerLift} />
            </div>
            <h3>Two wheeler lift </h3>
          </section>
          <p>Two wheeler lifts help in ease of operation</p>
        </div>
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={FourWheelerLift} />
            </div>
            <h3>Four wheeler lift </h3>
          </section>
          <p>Four wheeler lifts help in ease of operation</p>
        </div>
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={ToolsandWrench} />
            </div>
            <h3>Tools and Wrench </h3>
          </section>
          <p>
            We have all kids of tools and wrenches which allow ease of
            operation.
          </p>
        </div>
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={AngleGrinderAndHandDrilling} />
            </div>
            <h3>Power Tool </h3>
          </section>
          <p>
            Power tools help work on metals easily for all manufacturing
            operations.
          </p>
        </div>
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={PaintBooth} />
            </div>
            <h3>Paint Booth</h3>
          </section>
          <p>
            We have a Portable paint booth which helps us give parts a good
            finish in house .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tools;
