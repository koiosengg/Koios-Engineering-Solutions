import React from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Koios Engineering Solutions</title>
        <meta
          name="description"
          content="Welcome to Koios Engineering Solutions"
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
