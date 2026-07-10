import React from "react";
import { Helmet } from "react-helmet-async";
import { HomePageStructuredData } from "../structured-data";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import WhyUs from "./Home/WhyUs";
import Infrastructure from "./Home/Infrastructure";
import Services from "./Home/Services";
import Tools from "./Home/Tools";
import Verticals from "./Home/Verticals";

function Home() {
  return (
    <>
      <HomePageStructuredData />
      <Helmet>
        <title>Koios Engineering Solutions</title>
        <meta
          name="description"
          content="Automobile service company in Bangalore offering vehicle R&D, 3D printing & manufacturing expertise."
        />
      </Helmet>
      <Banner />
      <Marquee />
      <WhyUs />
      <Infrastructure />
      <Services />
      <Tools />
      <Verticals />
    </>
  );
}

export default Home;
