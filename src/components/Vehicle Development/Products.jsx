import React from "react";
import AutomotiveDesign from "./Products/AutomotiveDesign";
import AutomotiveManufacturing from "./Products/AutomotiveManufacturing";
import ElectricVehicle from "./Products/ElectricVehicle";

function Products() {
  return (
    <div className="s-product-list s-engineering-solutions">
      <AutomotiveDesign />
      <AutomotiveManufacturing />
      <ElectricVehicle />
    </div>
  );
}

export default Products;
