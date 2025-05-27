import React, { useRef, useEffect, useState } from "react";
import Img1 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions 01.52.png";
import Img2 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions Body for sheet v14.55.png";
import Img3 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions Body_for_sheet_.webp";
import Img4 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions LH_Clap_.webp";
import Img5 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions 18x_4_v5_.png";
import Img6 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions Disc_320_one.webp";
import Img7 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions Disc_320_two.webp";
import Img8 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions KTM_240_.webp";
import Img9 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions Int 650 Rear Disc v1 v2.webp";
import Img10 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions Rim_ktm_front__nipple_mount___v2_.webp";
import Img11 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions Lower v3.67.png";
import Img12 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions t_STEM_.webp";
import Img13 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions Untitled.webp";
import Img14 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions Gasket v2.52.png";
import Img15 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions Sprocket adopter v4.66.png";
import Img16 from "../../../assets/Mechanical Design/Component Design/Koios Engineering Solutions Swing Arm v12.62.png";

function ComponentDesign() {
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
        <p>Component Design</p>
        <h2>Designing Machine Components for your specific applications.</h2>
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
          Involves selecting materials, dimensions, and geometries tailored to
          requirements, such as stress analysis, ensuring optimal performance,
          durability, and safety. This process integrates principles of
          mechanics, material science, and manufacturing techniques to create
          efficient and reliable mechanical parts or systems.
        </p>
      </div>
    </div>
  );
}

export default ComponentDesign;
