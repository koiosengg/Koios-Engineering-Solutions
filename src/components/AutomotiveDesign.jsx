import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Automotive Design/Banner";
import Products from "./Automotive Design/Products";

function AutomotiveDesign() {
  return (
    <div className="p-mechanical-design">
      <Helmet>
        <title>Automotive Design</title>
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

export default AutomotiveDesign;
