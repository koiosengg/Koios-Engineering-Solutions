import React from "react";
import MachineDesign from "./Products/MachineDesign";
import SheetMetalDesign from "./Products/SheetMetalDesign";
import JigsAndFixturesDesign from "./Products/JigsAndFixturesDesign";
import ComponentDesign from "./Products/ComponentDesign";
import ProductDesign from "./Products/ProductDesign";

function Products() {
  return (
    <div className="s-product-list s-engineering-solutions">
      <MachineDesign />
      <SheetMetalDesign />
      <JigsAndFixturesDesign />
      <ComponentDesign />
      <ProductDesign />
    </div>
  );
}

export default Products;
