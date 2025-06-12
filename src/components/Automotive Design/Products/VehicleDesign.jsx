import React, { useRef, useEffect, useState } from "react";
import Img1 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions L3 Passenger v5.158.png";
import Img2 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions L3 Cargo v5.164.png";
import Img3 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions L3 Cargo v5.165.png";
import Img4 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions L3 Passenger v5.159.png";
import Img5 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions L3_Passenger_Final_Assembly.png";
import Img6 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions Chassis v4 Cargo Web v10.144.png";
import Img7 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions Chassis v4 Cargo Web v10.147.png";
import Img8 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions Chassis v4 cargo web.138.png";
import Img9 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions Chassis v4 cargo web.141.png";
import Img10 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions Moped Chassis V5 v12.116.png";
import Img11 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions Moped Chassis V5 v12.120.png";
import Img12 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions Moped Chassis V5 v12.121.png";
import Img13 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions 33421_Chasiss_14Dec2021 v1.83.png";
import Img14 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions Tricycle V5 v2.150.png";
import Img15 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions Dune_buggy.png";
import Img16 from "../../../assets/Automotive Design/Vehicle Design/Koios Engineering Solutions gokart.png";

function VehicleDesign() {
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
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
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
        <p>Vehicle Design</p>
        <h2>
          We specialize in the design of 2 wheeler and 3 Wheelers and Intra
          facility vehicles.
        </h2>
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
          We specialize in delivering the best vehicles by keeping the purpose
          of the vehicle at most priority and considering key points such as
          safety, performance and durability as the bench marking points of the
          Vehicle Development process. Our engineers and designers work together
          to ensure a harmonious blend of form and function.
        </p>
        <div className="p-various-types">
          <div className="p-various-types-text">
            Different types of vehicles we specialize in:
          </div>
          <div className="p-service-offering mech">
            <div className="p-left-service-text">
              <div className="p-line-p">
                <p>Two wheeler</p>
                <div className="p-btm-line blue"></div>
              </div>
              <div className="p-line-p">
                <p>Three wheeler L3</p>
                <div className="p-btm-line blue"></div>
              </div>
              <div className="p-line-p">
                <p>Three wheeler L5 Passenger</p>
                <div className="p-btm-line blue"></div>
              </div>
            </div>

            <div className="p-right-service-text">
              <div className="p-line-p">
                <p>Custom Vehicle</p>
                <div className="p-btm-line blue"></div>
              </div>
              <div className="p-line-p">
                <p>Three wheeler L5 Cargo</p>
                <div className="p-btm-line blue"></div>
              </div>
              <div className="p-line-p">
                <p>Three wheeler L3 Passenger</p>
                <div className="p-btm-line blue"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleDesign;
