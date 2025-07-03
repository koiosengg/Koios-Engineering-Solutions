import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./ThreeDprinting/Banner";
import FDM from "./ThreeDprinting/FDM";
import WhyChoose from "./ThreeDprinting/WhyChoose";
import WhyChooseFDM from "./ThreeDprinting/WhyChooseFDM";
import FDMCapabilities from "./ThreeDprinting/FDMCapabilities";
import Applications from "./ThreeDprinting/Applications";
import Materials from "./ThreeDprinting/Materials";
import Logos from "./ThreeDprinting/Logos";
import Marquee from "./ThreeDprinting/Marquee";
import Brochure from "./ThreeDprinting/Brochure";
import Testimony from "./ThreeDprinting/Testimony";

function ThreeDprinting() {
  return (
    <div className="threeD-printing" style={{ background: "#111" }}>
      <Helmet>
        <title>3D Printing</title>
        <meta name="description" content="Welcome to 3D Printing Page" />
      </Helmet>
      <Banner />
      <FDM />
      <WhyChoose />
      <WhyChooseFDM />
      <FDMCapabilities />
      <Applications />
      <Materials />
      <Logos />
      <Marquee />
      <Brochure />
      <Testimony />
    </div>
  );
}

export default ThreeDprinting;
