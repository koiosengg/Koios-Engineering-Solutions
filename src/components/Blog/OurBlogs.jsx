import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Home/Tools/Desktop Background.png";
import SampleImage from "../../assets/Sample Image.png";
import Links from "./Links";

function OurBlogs() {
  return (
    <div className="s-infrastructure our-blogs">
      <div className="s-infrastructure-heading">
        <h2>Our Blogs</h2>
        <p>
          Explore practical knowledge, technical trends, and real-world
          engineering solutions crafted for modern industrial challenges today.
        </p>
      </div>
      <div className="s-tools-container">
        <Links />
      </div>
    </div>
  );
}

export default OurBlogs;
