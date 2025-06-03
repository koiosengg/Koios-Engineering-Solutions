import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Vehicle Development/Banner";
import Benefits from "./Vehicle Development/Benefits";
import Products from "./Vehicle Development/Products";
import Gallery from "./Vehicle Development/Gallery";

function VehicleDevelopment() {
  return (
    <>
      <Helmet>
        <title>Vehicle Development</title>
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

export default VehicleDevelopment;
