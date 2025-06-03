import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="p-breadcrumb">
        <div className="p-breadcrumb-text blue">
          <Link to="/">
            Home<span> / </span>
          </Link>
          <Link to="/vehicle_development">
            Vehicle Development<span> / </span>
          </Link>
          <p>Automotive Design</p>
        </div>
      </div>
      <div className="p-mechanical-text-container">
        <div className="p-blue-gradient-text">AUTOMOTIVE</div>
        <div className="p-title-description">
          <div className="p-big-mechanical-title">Automotive Design</div>
          <p>
            Explore our automotive design service, where we specialize in
            crafting vehicles, components, chassis, and powertrains. We
            integrate advanced engineering principles to engineer innovative
            solutions that drive performance and efficiency.
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
