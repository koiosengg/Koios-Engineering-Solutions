import React from "react";
import VehicleManufacturing from "./Projects/VehicleManufacturing";
import VehicleComponentManufacturing from "./Projects/VehicleComponentManufacturing";
import VehicleChassisManufacturing from "./Projects/VehicleChassisManufacturing";
import SpecialPurposeVehicle from "./Projects/SpecialPurposeVehicle";
import CustomVehicleManufacturing from "./Projects/CustomVehicleManufacturing";

function Products() {
  return (
    <div className="s-product-list s-engineering-solutions">
      <VehicleManufacturing />
      <VehicleComponentManufacturing />
      <VehicleChassisManufacturing />
      <SpecialPurposeVehicle />
      <CustomVehicleManufacturing />
    </div>
  );
}

export default Products;
