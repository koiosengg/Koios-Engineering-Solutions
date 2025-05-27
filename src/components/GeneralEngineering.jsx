import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./General Engineering/Banner";
import Benefits from "./General Engineering/Benefits";
import Products from "./General Engineering/Products";
import Gallery from "./General Engineering/Gallery";

function GeneralEngineering() {
  return (
    <>
      <Helmet>
        <title>General Engineering</title>
        <meta
          name="description"
          content="Explore Koios' Website Designing services including responsive design and UI/UX development."
        />
      </Helmet>
      <Banner />
      <Benefits />
      <Products />
      <Gallery />
    </>
  );
}

export default GeneralEngineering;
