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
          <p>Automotive Manufacturing</p>
        </div>
      </div>
      <div className="p-mechanical-text-container">
        <div className="p-blue-gradient-text">AUTOMOTIVE</div>
        <div className="p-title-description">
          <div className="p-big-mechanical-title">Automotive Manufacturing</div>
          <p>
            Rev up your automotive dreams with our manufacturing expertise! From
            vehicles to components, we engineer top-notch chassis and suspension
            springs, ensuring your ride is smooth and exhilarating. We even
            build custom vehicles to suit all needs.
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
