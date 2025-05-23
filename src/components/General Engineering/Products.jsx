import React from "react";
import MechanicalDesign from "./Products/MechanicalDesign";
import MechanicalManufacturing from "./Products/MechanicalManufacturing";

function Products() {
  return (
    <div className="s-product-list s-engineering-solutions">
      <MechanicalDesign />
      <MechanicalManufacturing />
    </div>
  );
}

export default Products;
