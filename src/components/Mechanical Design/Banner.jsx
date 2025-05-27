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
          <p>Mechanical Design</p>
        </div>
      </div>
      <div className="p-mechanical-text-container">
        <div className="p-blue-gradient-text">Mechanical</div>
        <div className="p-title-description">
          <div className="p-big-mechanical-title">Mechanical Design</div>
          <p>
            Utilizing CAD software and various analysis tools to engineer
            precise components and systems tailored to specific requirements. By
            integrating principles of mechanics, materials science, and
            manufacturing techniques, these tools ensure optimal functionality
            and reliability in mechanical designs.
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
