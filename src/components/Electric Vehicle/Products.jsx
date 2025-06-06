import React from "react";
import EVProtoDevelopment from "./Products/EVProtoDevelopment";
import EVProtoIntegration from "./Products/EVProtoIntegration";
import EVHVandLVHarnessManufacturing from "./Products/EVHVandLVHarnessManufacturing";

function Products() {
  return (
    <div className="s-product-list s-engineering-solutions">
      <EVProtoDevelopment />
      <EVProtoIntegration />
      <EVHVandLVHarnessManufacturing />
    </div>
  );
}

export default Products;
