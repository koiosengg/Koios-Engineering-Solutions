import React from "react";
import BannerIcon from "../../assets/General Engineering/Banner Icon.png";

function Banner() {
  return (
    <div className="s-product-banner">
      <div className="s-product-banner-container">
        <div className="s-product-banner-logo">
          <img loading="lazy" src={BannerIcon} alt="Engineering logo" />
          <div
            className="s-product-banner-logo-bg-engg"
            id="s-productBanner"
          ></div>
        </div>
        <div className="s-product-banner-text">
          <p>General Engineering</p>
          <span>
            We deliver exceptional mechanical design and mechanical
            manufacturing solutions, combining CAD precision with real-world
            functionality. From part design and 2D drafting to 3D modeling, we
            integrate engineering principles, material science, and analysis
            tools like FEA simulation and stress analysis. Whether it's
            fabrication, machining, or custom test bench builds, we craft
            mechanical systems that meet the toughest industry demands - down to
            the last bolt.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
