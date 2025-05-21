import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./ThreeDscan/Banner";
import Marquee from "./ThreeDscan/Marquee";
import Solutions from "./ThreeDscan/Solutions";
import Vision from "./ThreeDscan/Vision";
import Industries from "./ThreeDscan/Industries";
import Scanning from "./ThreeDscan/Scanning";
import Testimony from "./ThreeDscan/Testimony";
import Last from "./ThreeDscan/Last";

function ThreeDscan() {
  return (
    <div style={{ background: "#111" }}>
      <Helmet>
        <title>3D Scan</title>
        <meta name="description" content="Welcome to 3D Scanning Page" />
      </Helmet>
      <Banner />
      <Marquee />
      <Solutions />
      <Vision />
      <Industries />
      <Scanning />
      <Testimony />
      <Last />
    </div>
  );
}

export default ThreeDscan;
