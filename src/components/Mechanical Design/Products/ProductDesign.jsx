import React, { useRef, useEffect, useState } from "react";
import Img1 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions Product_Design_side_view.png";
import Img2 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions Charger box 2 v11.41.png";
import Img3 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions Charger_box.png";
import Img4 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions EV_Charger.png";
import Img5 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions EV_charger_type_2_plug_.png";
import Img6 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions EV charger type 2 plug v5.87.png";
import Img7 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions EV charger type 2 plug v5.88.png";
import Img8 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions EV charger type 2 plug v5.89.png";
import Img9 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions EV charger type 2 plug v5.90.png";
import Img10 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions Chair v2.169.png";
import Img11 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions Chair v2.172.png";
import Img12 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions Billet Trolly v5.70.png";
import Img13 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions Billet Trolly v5.71.png";
import Img14 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions Table v2.74.png";
import Img15 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions Table v9.58.png";
import Img16 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions untitled.174.png";
import Img17 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions Frame v7.47.png";
import Img18 from "../../../assets/Mechanical Design/Product Design/Koios Engineering Solutions Frame v7.49.png";

function ProductDesign() {
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
    Img17,
    Img18,
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
        <p>Product Design</p>
        <h2>Designing and developing premium customized products.</h2>
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
          Process of conceptualizing, modeling, and refining physical products
          using engineering principles and computer-aided design (CAD) tools.
          Designers focus on functionality, manufacturability, and aesthetics
          while selecting suitable materials, mechanisms, and components. They
          perform analyses, simulations, and prototyping to validate performance
          and structural integrity.
        </p>
      </div>
    </div>
  );
}

export default ProductDesign;
