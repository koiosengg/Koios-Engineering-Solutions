import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Electric Vehicle/Banner";
import Products from "./Electric Vehicle/Products";

function ElectricVehicle() {
  return    <div className="p-mechanical-design">
      <Helmet>
        <title>Electric Vehicle</title>
        <meta
          name="description"
          content="Explore Koios' Website Designing services including responsive design and UI/UX development."
        />
      </Helmet>
      <Banner />
      <Products />
    </div>;
}

export default ElectricVehicle;
