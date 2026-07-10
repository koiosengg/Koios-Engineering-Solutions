import React from "react";
import { Helmet } from "react-helmet-async";
import { AutomotiveDesignStructuredData } from "../structured-data";
import Banner from "./Automotive Design/Banner";
import Products from "./Automotive Design/Products";

function AutomotiveDesign() {
  return (
    <div className="p-mechanical-design">
      <AutomotiveDesignStructuredData />
      <Helmet>
        <title>Vehicle Design Bangalore</title>
        <meta
          name="description"
          content="Automotive design in Bangalore: 3D modelling, styling & prototyping for manufacturers."
        />
      </Helmet>
      <Banner />
      <Products />
    </div>
  );
}

export default AutomotiveDesign;
