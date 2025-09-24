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
          <Link to="/vehicle-development">
            Vehicle Development<span> / </span>
          </Link>
          <p>Automotive Design</p>
        </div>
      </div>
      <div className="p-mechanical-text-container">
        <div className="p-blue-gradient-text">AUTOMOTIVE</div>
        <div className="p-title-description">
          <h1 className="p-big-mechanical-title">Automotive Design Services</h1>
          <p>
            Explore our automotive design services , where we specialize in
            design of vehicles, chassis, components, body panels and vehicle
            styling and rendering . We integrate advanced engineering principles
            to build vehicles which deliver at most reliability, safety and
            performance.
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
