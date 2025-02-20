import React from "react";
import { Link } from "react-router-dom";
import SkyBanner from "../../assets/ThreeDscan/Banner/Sky Banner.png";
import MobileSkyBanner from "../../assets/ThreeDscan/Banner/Mobile Sky Banner.png";
import OuterRing from "../../assets/ThreeDscan/Banner/Outer Ring.png";
import MobileOuterRing from "../../assets/ThreeDscan/Banner/Mobile Outer Ring.png";
import MiddleRing from "../../assets/ThreeDscan/Banner/Middle Ring.png";
import InnerRing from "../../assets/ThreeDscan/Banner/Inner Ring.png";
import MountainBanner from "../../assets/ThreeDscan/Banner/Mountain Banner.png";
import FrontBanner from "../../assets/ThreeDscan/Banner/Front Banner.png";
import MobileFrontBanner from "../../assets/ThreeDscan/Banner/Mobile Front Banner.png";

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
        <h1>3D SCANNING SERVICES</h1>
        <Link to="/contact" className="threeD-contact-button">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ThreeDBanner;
