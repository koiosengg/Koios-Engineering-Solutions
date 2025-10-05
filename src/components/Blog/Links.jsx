import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Home/Tools/Desktop Background.png";
import SampleImage from "../../assets/Sample Image.png";

function Links() {
  return (
    <>
      <Link
        to="/blogs/prototyping-services-automotive-vehicle-development"
        className="s-tools-set"
      >
        <img src={DesktopBackground} className="s-tools-set-background" />
        <section>
          <div className="s-tools-set-img">
            <img src={SampleImage} />
          </div>
          <h3>Prototyping Services at KoiosEngg</h3>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
          volutpat
        </p>
      </Link>
      <Link
        to="/blogs/automotive-design-services-vehicle-development"
        className="s-tools-set"
      >
        <img src={DesktopBackground} className="s-tools-set-background" />
        <section>
          <div className="s-tools-set-img">
            <img src={SampleImage} />
          </div>
          <h3>Automotive Design Services</h3>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
          volutpat
        </p>
      </Link>
      <Link
        to="/blogs/electric-vehicle-design-services"
        className="s-tools-set"
      >
        <img src={DesktopBackground} className="s-tools-set-background" />
        <section>
          <div className="s-tools-set-img">
            <img src={SampleImage} />
          </div>
          <h3>Electric Vehicle Design Services</h3>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
          volutpat
        </p>
      </Link>
    </>
  );
}

export default Links;
