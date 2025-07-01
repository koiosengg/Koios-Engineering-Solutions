import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./ThreeDprinting/Banner";
import FDM from "./ThreeDprinting/FDM";
import WhyChoose from "./ThreeDprinting/WhyChoose";
import WhyChooseFDM from "./ThreeDprinting/WhyChooseFDM";

function ThreeDprinting() {
  return (
    <div className="threeD-printing" style={{ background: "#111" }}>
      <Helmet>
        <title>3D Scan</title>
        <meta name="description" content="Welcome to 3D Scanning Page" />
      </Helmet>
      <Banner />
      <FDM />
      <WhyChoose />
      <WhyChooseFDM />
    </div>
  );
}

export default ThreeDprinting;
