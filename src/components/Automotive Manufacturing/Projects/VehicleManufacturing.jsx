import React, { useRef, useEffect, useState } from "react";
import Img1 from "../../../assets/Automotive Manufacturing/Vehicle Manufacturing/Koios Engineering Solutions Picture1.png";
import Img2 from "../../../assets/Automotive Manufacturing/Vehicle Manufacturing/Koios Engineering Solutions Picture3.png";
import Img3 from "../../../assets/Automotive Manufacturing/Vehicle Manufacturing/Koios Engineering Solutions Picture4.png";
import Img4 from "../../../assets/Automotive Manufacturing/Vehicle Manufacturing/Koios Engineering Solutions 20240724_124250-removebg-preview.png";
import Img5 from "../../../assets/Automotive Manufacturing/Vehicle Manufacturing/Koios Engineering Solutions 20240724_124425-removebg-preview.png";
import Img6 from "../../../assets/Automotive Manufacturing/Vehicle Manufacturing/Koios Engineering Solutions 20240724_124227-removebg-preview.png";
import Img7 from "../../../assets/Automotive Manufacturing/Vehicle Manufacturing/Koios Engineering Solutions 20240723_174827-removebg-preview (1).png";
import Img8 from "../../../assets/Automotive Manufacturing/Vehicle Manufacturing/Koios Engineering Solutions Picture16.png";

function VehicleManufacturing() {
  const sliderRef = useRef(null);
  const sliderContentRef = useRef(null);
  const indicatorRef = useRef(null);
  const [counter, setCounter] = useState(0);

  const slides = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

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
        <p>Vehicle Manufacturing</p>
        <h2>
          Designing and development of vehicles for your specialized purposes.
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
          Creating the overall look, shape, and features of a car. We combine
          aesthetics, aerodynamics, and functionality to make a vehicle that's
          attractive, efficient, and safe. Our engineers and designers work
          together to balance style with practicality, ensuring a harmonious
          blend of form and function.
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

export default VehicleManufacturing;
