import React from "react";
import DesktopBanner from "../../assets/ThreeDprinting/Banner/Desktop Banner.png";
import MobileBanner from "../../assets/ThreeDprinting/Banner/Mobile Banner.png"

function Banner() {
  return (
    <div className="threeD-printing-banner">
      <img src={DesktopBanner} className="threeD-printing-banner-background notMobile" />
      <img src={MobileBanner} className="threeD-printing-banner-background mobile" />
      <div className="threeD-printing-banner-container">
        <section>
          <h1>
            PRINTING <br />
            EXCELLENCE
          </h1>
          <p>
            Welcome to the world of 3D Printing, the driving force behind
            innovation, creativity, and precision in the world of additive
            manufacturing.We offer best-in-class 3D printing and scanning
            services across the country, catering to various industries and
            meeting their expectations using cutting-edge technology and
            experienced hands.
          </p>
        </section>
        <a href="#" className="yellow-button">
          <p>Get Started</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
          >
            <path
              d="M1.50933 12.0892L0.333496 10.9108L4.74099 6.49999L0.333496 2.08916L1.51266 0.910828L5.91682 5.32166C6.22927 5.63421 6.4048 6.05805 6.4048 6.49999C6.4048 6.94193 6.22927 7.36578 5.91682 7.67833L1.50933 12.0892Z"
              fill="#1A1A1A"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Banner;
