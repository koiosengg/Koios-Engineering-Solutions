import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Electric Vehicle/Banner";
import Products from "./Electric Vehicle/Products";

function ElectricVehicle() {
  return (
    <div className="p-mechanical-design">
      <Helmet>
        <title>Electric Vehicle Engineering</title>
        <meta
          name="description"
          content="EV Protype Design and Development in bangalore."
        />
      </Helmet>
      <Banner />
      <Products />
    </div>
  );
}

export default ElectricVehicle;
