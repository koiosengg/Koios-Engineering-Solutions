import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Mechanical Design/Banner";
import Products from "./Mechanical Design/Products";

function MechanicalDesign() {
  return (
    <div className="p-mechanical-design">
      <Helmet>
        <title>Mechanical Design</title>
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

export default MechanicalDesign;
