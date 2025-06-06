import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img1 from "../../../assets/Vehicle Development/Products/Automotive Design/Koios Engineering Solutions L3 Cargo v5.164.png";
import Img2 from "../../../assets/Vehicle Development/Products/Automotive Design/Koios Engineering Solutions L3 Passenger v5.159.png";
import Img3 from "../../../assets/Vehicle Development/Products/Automotive Design/Koios Engineering Solutions Chassis v4 Cargo Web v10.144.png";
import Img4 from "../../../assets/Vehicle Development/Products/Automotive Design/Koios Engineering Solutions Vehicle_Component_Design_wheel_full.png";
import Img5 from "../../../assets/Vehicle Development/Products/Automotive Design/Koios Engineering Solutions Hub.png";
import Img6 from "../../../assets/Vehicle Development/Products/Automotive Design/Koios Engineering Solutions Int_Front_v3.png";
import Img7 from "../../../assets/Vehicle Development/Products/Automotive Design/Koios Engineering Solutions Yezdi_rear_v1.png";
import Img8 from "../../../assets/Vehicle Development/Products/Automotive Design/Koios Engineering Solutions 390 adv Chassis v4.82.png";
import Img9 from "../../../assets/Vehicle Development/Products/Automotive Design/Koios Engineering Solutions Expulse Copy v12.91.png";
import Img10 from "../../../assets/Vehicle Development/Products/Automotive Design/Koios Engineering Solutions XLR8_blue_go-kart-pic.png";
import Img11 from "../../../assets/Vehicle Development/Products/Automotive Design/Koios Engineering Solutions Copy of w.png";

function AutomotiveDesign() {
  const sliderRef = useRef(null);
  const sliderContentRef = useRef(null);
  const indicatorRef = useRef(null);
  const [counter, setCounter] = useState(0);

  const slides = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
  ];
  const totalSlides = slides.length;

  useEffect(() => {
    updateSlider();
  }, [counter]);

  const updateSlider = () => {
    const sliderWidth = sliderContentRef.current.getBoundingClientRect().width;
    sliderContentRef.current.style.transform = `translateX(-${
      counter * sliderWidth
    }px)`;

    updateIndicator();
  };

  const updateIndicator = () => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    indicator.innerHTML = "";

    for (let i = 0; i < totalSlides; i++) {
      const div = document.createElement("div");
      div.className = "s-carousel-indicator-container";
      div.style.background = i === counter ? "#01cfdc" : "#c8c8c8";
      indicator.appendChild(div);
    }
  };

  const handleNext = () => {
    if (counter < totalSlides - 1) {
      setCounter((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <div className="s-product-list-set">
      <div className="s-product-list-set-heading">
        <p className="heading">AUTOMOTIVE</p>
        <p>Automotive Design</p>
      </div>
      <div className="s-product-list-set-container">
        <div className="s-product-img-carousel" ref={sliderRef}>
          <div className="s-slider" ref={sliderContentRef}>
            {slides.map((img, index) => (
              <img
                loading="lazy"
                src={img}
                alt={`slide-${index}`}
                key={index}
              />
            ))}
          </div>

          <div
            className={`s-carousel-buttons s-previous-img ${
              counter === 0 ? "disabled" : ""
            }`}
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
            >
              <path
                d="M10.1706 1.97203L2.78871 9.35394L10.1706 16.7358L8.19858 18.7079L0.816672 11.326C0.293757 10.8029 0 10.0936 0 9.35394C0 8.61431 0.293757 7.90497 0.816672 7.3819L8.19858 -1.14441e-05L10.1706 1.97203Z"
                fill="#D7D6D6"
              />
            </svg>
          </div>

          <div
            className={`s-carousel-buttons s-next-img ${
              counter === totalSlides - 1 ? "disabled" : ""
            }`}
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="19"
              viewBox="0 0 11 19"
              fill="none"
            >
              <path
                d="M-0.00069809 16.7359L7.38121 9.35395L-0.00069809 1.97204L1.97134 0L9.35325 7.38191C9.87616 7.90498 10.1699 8.61432 10.1699 9.35395C10.1699 10.0936 9.87616 10.8029 9.35325 11.326L1.97134 18.7079L-0.00069809 16.7359Z"
                fill="#D7D6D6"
              />
            </svg>
          </div>

          <div className="s-carousel-indicator" ref={indicatorRef}></div>
        </div>
        <p className="subpage-desc">
          Explore our automotive design service, where we specialize in crafting
          vehicles, components, chassis, and powertrains. We integrate advanced
          engineering principles to engineer innovative solutions that drive
          performance and efficiency.
        </p>
        <Link to="/automotive_design">
          <span>Explore More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path
              d="M1.81139 13.707L0.400391 12.293L5.68938 6.99997L0.400391 1.70697L1.81539 0.292969L7.10038 5.58597C7.47532 5.96102 7.68595 6.46964 7.68595 6.99997C7.68595 7.5303 7.47532 8.03891 7.10038 8.41397L1.81139 13.707Z"
              fill="#FFBF00"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default AutomotiveDesign;
