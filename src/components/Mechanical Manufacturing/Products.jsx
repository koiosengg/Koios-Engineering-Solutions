import React from "react";
import HighPrecisionMachiningJobs from "./Products/HighPrecisionMachiningJobs";
import MetalFabrication from "./Products/MetalFabrication";
import SpecialPurposeMachinesManufacturing from "./Products/SpecialPurposeMachinesManufacturing";
import SheetMetalComponentsandDiesManufacturing from "./Products/SheetMetalComponentsandDiesManufacturing";

function Products() {
  return (
    <div className="s-product-list s-engineering-solutions">
      <HighPrecisionMachiningJobs />
      <MetalFabrication />
      <SpecialPurposeMachinesManufacturing />
      <SheetMetalComponentsandDiesManufacturing />
    </div>
  );
}

export default Products;
