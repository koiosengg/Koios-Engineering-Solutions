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
        <title>Vehicle Development Bangalore</title>
        <meta
          name="description"
          content="Full-cycle vehicle development in Bangalore: concept to prototype to production-ready solutions."
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
