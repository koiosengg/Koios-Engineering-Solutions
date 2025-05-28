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
          <Link to="/general_engineering">
            General Engineering<span> / </span>
          </Link>
          <p>Mechanical Manufacturing</p>
        </div>
      </div>
      <div className="p-mechanical-text-container">
        <div className="p-blue-gradient-text">Mechanical</div>
        <div className="p-title-description">
          <div className="p-big-mechanical-title">Mechanical Manufacturing</div>
          <p>
            Dive into our mechanical manufacturing world, where every job is a
            masterpiece. From metal fabrication to custom test bench
            manufacturing, we're crafting excellence with each turn of the gear.
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
