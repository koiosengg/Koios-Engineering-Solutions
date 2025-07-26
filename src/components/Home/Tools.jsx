import React from "react";
import SampleImage from "../../assets/Sample Image.png";
import DesktopBackground from "../../assets/Home/Tools/Desktop Background.png";
import ThreeDprinting from "../../assets/Home/Tools/3D Printing.jpg";
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
              <img src={SampleImage} />
            </div>
            <h3>Assembly Areas </h3>
          </section>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
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
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
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
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
          </p>
        </div>
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={MIG} />
            </div>
            <h3>Mig Welding </h3>
          </section>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
          </p>
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
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
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
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
          </p>
        </div>
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={FourWheelerLift} />
            </div>
            <h3>Four wheeler lift </h3>
          </section>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
          </p>
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
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
          </p>
        </div>
        <div className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={AngleGrinderAndHandDrilling} />
            </div>
            <h3>Angle Grinder and Hand Drilling </h3>
          </section>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
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
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tools;
