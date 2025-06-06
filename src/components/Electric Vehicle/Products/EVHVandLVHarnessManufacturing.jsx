import React, { useRef, useEffect, useState } from "react";
import Img1 from "../../../assets/Electric Vehicle/EV - HV and LV Harness Manufacturing/WhatsApp_Image_2024-08-01_at_15.03.20_d8f6c29c-removebg-preview.png";
import Img2 from "../../../assets/Electric Vehicle/EV - HV and LV Harness Manufacturing/WhatsApp_Image_2024-08-01_at_15.03.35_e2410a1e-removebg-preview.png";
import Img3 from "../../../assets/Electric Vehicle/EV - HV and LV Harness Manufacturing/Ev Harness .png";

function EVHVandLVHarnessManufacturing() {
  const sliderRef = useRef(null);
  const sliderContentRef = useRef(null);
  const indicatorRef = useRef(null);
  const [counter, setCounter] = useState(0);

  const slides = [Img1, Img2, Img3];

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
    <div class="s-product-list-set">
      <div class="s-product-list-set-heading">
        <p>EV - HV and LV Harness Manufacturing</p>
        <h2>
          Manufacturing customized wiring harness to run your EV reliably.
        </h2>
      </div>
      <div class="s-product-list-set-container">
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
        <p class="subpage-desc">
          Creating the intricate network of cables and connectors that carry
          power and data throughout the vehicle. These harnesses connect the
          battery, motor, charging system, and various components, ensuring
          seamless communication and energy distribution. Our expertise
          contributes to the reliable and efficient operation of electric
          vehicles, driving innovation in sustainable transportation.
        </p>
      </div>
    </div>
  );
}

export default EVHVandLVHarnessManufacturing;
