import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Mechanical Manufacturing/Banner";
import Products from "./Mechanical Manufacturing/Products";

function MechanicalManufacturing() {
  return (
    <div className="p-mechanical-design">
      <Helmet>
        <title>Mechanical Manufacturing</title>
        <meta
          name="description"
          content="Explore Koios' Website Designing services including responsive design and UI/UX development."
        />
      </Helmet>
      <Banner />
      <Products />
    </div>
  );
}

export default MechanicalManufacturing;
