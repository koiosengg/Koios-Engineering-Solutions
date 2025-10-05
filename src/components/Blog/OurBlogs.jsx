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
          Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
          volutpat diam turpis aliquam a. Dictum massa ut sit odio. Quis augue
          risus morbi dictum sem varius. Non.
        </p>
      </div>
      <div className="s-tools-container">
        <Links />
      </div>
    </div>
  );
}

export default OurBlogs;
