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
        <title>General Engineering Solutions</title>
        <meta
          name="description"
          content="Comprehensive general engineering in Bangalore: mechanical, automotive & industrial design."
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
