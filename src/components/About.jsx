import React from "react";
import { Helmet } from "react-helmet-async";
import { AboutStructuredData } from "../structured-data";
import Banner from "./About/Banner";
import Validators from "./About/Validators";
import Koios from "./About/Koios";
import Vision from "./About/Vision";
import BelowVision from "./About/BelowVision";

function About() {
  return (
    <>
      <AboutStructuredData />
      <Helmet>
        <title>About Koios Engineering</title>
        <meta
          name="description"
          content="Learn about Koios Engineering, Bangalore’s trusted partner for vehicle R&D, 3D printing & manufacturing."
        />
      </Helmet>
      <Banner />
      <Validators />
      <Koios />
      <Vision />
      <BelowVision />
    </>
  );
}

export default About;
