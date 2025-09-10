import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Automotive Manufacturing/Banner";
import Products from "./Automotive Manufacturing/Products";

function AutomotiveManufacturing() {
  return (
    <div className="p-mechanical-design">
      <Helmet>
        <title>Automotive Manufacturing Bangalore</title>
        <meta
          name="description"
          content="Automotive manufacturing in Bangalore: precision parts, machining."
        />
      </Helmet>
      <Banner />
      <Products />
    </div>
  );
}

export default AutomotiveManufacturing;
