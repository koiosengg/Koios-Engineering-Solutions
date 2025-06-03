import React from "react";
import VehicleDesign from "./Products/VehicleDesign";
import VehicleComponentDesign from "./Products/VehicleComponentDesign";
import VehicleChassisAndPowertrainDesign from "./Products/VehicleChassisAndPowertrainDesign";
import RenderingAndAfterEffects from "./Products/RenderingAndAfterEffects";

function Products() {
  return (
    <div className="s-product-list s-engineering-solutions">
      <VehicleDesign />
      <VehicleComponentDesign />
      <VehicleChassisAndPowertrainDesign />
      <RenderingAndAfterEffects />
    </div>
  );
}

export default Products;
