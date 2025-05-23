import React from "react";
import BannerIcon from "../../assets/General Engineering/Banner Icon.png";

function Banner() {
  return (
    <div className="s-product-banner">
      <div className="s-product-banner-container">
        <div className="s-product-banner-logo">
          <img loading="lazy" src={BannerIcon} alt="Engineering logo" />
          <div className="s-product-banner-logo-bg-engg" id="s-productBanner"></div>
        </div>
        <div className="s-product-banner-text">
          <p>General Engineering</p>
          <span>
            We deliver exceptional mechanical and automotive design, coupled
            with cutting-edge manufacturing, for your specialized machines and
            vehicles, meticulously meeting the highest industry standards. Our
            expertise extends to creating exciting products like buggies and
            go-karts.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
