import React from "react";
import { Link } from "react-router-dom";
import SkyBanner from "../../assets/ThreeDscan/Banner/Sky Banner.webp";
import MobileSkyBanner from "../../assets/ThreeDscan/Banner/Mobile Sky Banner.webp";
import OuterRing from "../../assets/ThreeDscan/Banner/Outer Ring.webp";
import MobileOuterRing from "../../assets/ThreeDscan/Banner/Mobile Outer Ring.webp";
import MiddleRing from "../../assets/ThreeDscan/Banner/Middle Ring.webp";
import InnerRing from "../../assets/ThreeDscan/Banner/Inner Ring.webp";
import MountainBanner from "../../assets/ThreeDscan/Banner/Mountain Banner.webp";
import FrontBanner from "../../assets/ThreeDscan/Banner/Front Banner.webp";
import MobileFrontBanner from "../../assets/ThreeDscan/Banner/Mobile Front Banner.webp";

const ThreeDBanner = () => {
  return (
    <div className="threeD-banner">
      <img src={SkyBanner} className="notMobile skyBanner" alt="Sky Banner" />
      <img
        src={MobileSkyBanner}
        className="mobile skyBanner"
        alt="Mobile Sky Banner"
      />
      <img src={OuterRing} className="notMobile outerRing" alt="Outer Ring" />
      <img
        src={MobileOuterRing}
        className="mobile outerRing"
        alt="Mobile Outer Ring"
      />
      <img src={MiddleRing} className="middleRing" alt="Middle Ring" />
      <img src={InnerRing} className="innerRing" alt="Inner Ring" />
      <img
        src={MountainBanner}
        className="mountainBanner"
        alt="Mountain Banner"
      />
      <img
        src={FrontBanner}
        className="notMobile frontBanner"
        alt="Front Banner"
      />
      <img
        src={MobileFrontBanner}
        className="mobile frontBanner"
        alt="Mobile Front Banner"
      />

      <div className="threeD-banner-heading">
        <h1>3D Scanning & Reverse<br className="notMobile"/> Engineering Services</h1>
        <Link to="/contact-us" className="threeD-contact-button">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ThreeDBanner;
