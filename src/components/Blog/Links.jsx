import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Home/Tools/Desktop Background.webp";
import SampleImage from "../../assets/Sample Image.webp";
import Prototyping from "../../assets/Blog/Prototyping.webp";
import AutomotiveDesign from "../../assets/Blog/Automotive Design.webp";
import ElectricVehicle from "../../assets/Blog/Electric Vehicle.webp";
function Links() {
  return (
    <>
      <Link
        to="/blogs/prototyping-services-automotive-vehicle-development"
        className="s-tools-set"
      >
        <img src={DesktopBackground} className="s-tools-set-background" alt="Blog card background" />
        <section>
          <div className="s-tools-set-img">
            <img src={Prototyping} alt="Prototyping" />
          </div>
          <h3>Prototyping Services at KoiosEngg</h3>
        </section>
        <p>
          Prototypig services at Koiosengg sub heading: Read about our
          End-to-end automotive prototyping solutions for manufacturers.
        </p>
      </Link>
      <Link
        to="/blogs/automotive-design-services-vehicle-development"
        className="s-tools-set"
      >
        <img src={DesktopBackground} className="s-tools-set-background" alt="Blog card background" />
        <section>
          <div className="s-tools-set-img">
            <img src={AutomotiveDesign} alt="Automotive Design" />
          </div>
          <h3>Automotive Design Services</h3>
        </section>
        <p>
          Discover how advanced design workflows turn automotive concepts into
          precise, production-ready engineering outcomes.
        </p>
      </Link>
      <Link
        to="/blogs/electric-vehicle-design-services"
        className="s-tools-set"
      >
        <img src={DesktopBackground} className="s-tools-set-background" alt="Blog card background" />
        <section>
          <div className="s-tools-set-img">
            <img src={ElectricVehicle} alt="Electric Vehicle" />
          </div>
          <h3>Electric Vehicle Design Services</h3>
        </section>
        <p>
          Explore the key engineering steps that shape efficient, lightweight,
          and scalable electric vehicle development.
        </p>
      </Link>
    </>
  );
}

export default Links;
