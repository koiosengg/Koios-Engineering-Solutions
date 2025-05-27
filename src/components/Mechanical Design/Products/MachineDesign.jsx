import React, { useRef, useEffect, useState } from "react";
import Img1 from "../../../assets/Mechanical Design/Machine Design/Koios Engineering Solutions Dyno v1.112.png";
import Img2 from "../../../assets/Mechanical Design/Machine Design/Koios Engineering Solutions Dyno v1.113.png";
import Img3 from "../../../assets/Mechanical Design/Machine Design/Koios Engineering Solutions Dyno v1.114.png";
import Img4 from "../../../assets/Mechanical Design/Machine Design/Koios Engineering Solutions Hopper 1 v8.108.png";
import Img5 from "../../../assets/Mechanical Design/Machine Design/Koios Engineering Solutions Hopper 1 v8.110.png";
import Img6 from "../../../assets/Mechanical Design/Machine Design/Koios Engineering Solutions Machine Base V2 v41.44.png";
import Img7 from "../../../assets/Mechanical Design/Machine Design/Koios Engineering Solutions Machine Base V2 v41.45.png";
import Img8 from "../../../assets/Mechanical Design/Machine Design/Koios Engineering Solutions Machine Base V2 v41.46.png";
import Img9 from "../../../assets/Mechanical Design/Machine Design/Koios Engineering Solutions Bash plate v3.95.png";
import Img10 from "../../../assets/Mechanical Design/Machine Design/Koios Engineering Solutions Bash plate v3.97.png";

function MachineDesign() {
  const sliderRef = useRef(null);
  const sliderContentRef = useRef(null);
  const indicatorRef = useRef(null);
  const [counter, setCounter] = useState(0);

  const slides = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];
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
        <p>Machine Design</p>
        <h2>
          Designing machine elements and Assemblies for your machine
          requirement!
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
          Creating functional and efficient elements and assemblies by applying
          engineering principles, materials, and components. Our designers
          analyze requirements, constraints, and user needs to develop precise
          plans. It encompasses selecting appropriate materials, designing for
          desired functions, and optimizing structures for performance and
          safety.
        </p>
      </div>
    </div>
  );
}

export default MachineDesign;
