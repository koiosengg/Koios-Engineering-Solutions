import React from "react";
import DesktopBanner from "../../assets/Blog/Desktop Banner.png";

function Banner() {
  return (
    <div className="blog-banner">
      <img
        src={DesktopBanner}
        alt="Desktop Banner Image"
        className="blog-banner-background"
      />
      <div className="blog-banner-container">
        <h1>Blogs</h1>
        <p>
          Discover Expert Insights, Stories, and Ideas to Inspire Your Journey
          Every Day
        </p>
      </div>
    </div>
  );
}

export default Banner;
