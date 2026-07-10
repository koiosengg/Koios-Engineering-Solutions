import React from "react";
import { Helmet } from "react-helmet-async";
import { ThreeDScanningStructuredData } from "../structured-data";
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
      <ThreeDScanningStructuredData />
      <Helmet>
        <title>3D Scanning Services</title>
        <meta
          name="description"
          content="3D scanning services in Bangalore: precision measurement, inspection & reverse engineering."
        />
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
