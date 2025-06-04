import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Automotive Manufacturing/Banner";
import Products from "./Automotive Manufacturing/Products";

function AutomotiveManufacturing() {
  return (
    <div className="p-mechanical-design">
      <Helmet>
        <title>Automotive Manufacturing</title>
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

export default AutomotiveManufacturing;
