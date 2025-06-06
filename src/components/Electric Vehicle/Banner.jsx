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
          <p>Electric Vehicle</p>
        </div>
      </div>
      <div className="p-mechanical-text-container">
        <div className="p-blue-gradient-text">AUTOMOTIVE</div>
        <div className="p-title-description">
          <div className="p-big-mechanical-title">Electric Vehicle</div>
          <p>
            After working with the leaders EV Design and Developemnt on projects
            from prototyping and integration to part manufacturing and power
            cable design, we're your go-to for cutting-edge solutions in
            electric vehicle innovation.
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
