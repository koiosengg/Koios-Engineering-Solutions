import React, { useEffect, useRef } from "react";
import Img1 from "../../assets/General Engineering/Gallery/Img (1).jpeg";
import Img2 from "../../assets/General Engineering/Gallery/Img (2).jpeg";
import Img3 from "../../assets/General Engineering/Gallery/Img (3).jpeg";
import Img4 from "../../assets/General Engineering/Gallery/Img (4).jpeg";
import Img5 from "../../assets/General Engineering/Gallery/Img (5).jpeg";
import Img6 from "../../assets/General Engineering/Gallery/Img (6).jpeg";
import Img7 from "../../assets/General Engineering/Gallery/Img (7).jpeg";
import Img8 from "../../assets/General Engineering/Gallery/Img (8).jpeg";
import Img9 from "../../assets/General Engineering/Gallery/Img (9).jpeg";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];

const labels = [
  "Go Kart",
  "EV 3-Wheeler Test Bench",
  "Chasis Jig Manufacturing",
  "Vehicle Building Manufacturing",
  "Vehicle Building Fabrication",
  "Thread Rolling SPM Machinery",
  "Vehicle Build Manufacturing",
  "Chasis Manufacturing",
  "Project 06",
];

function Gallery() {
  const carouselRefs = useRef([]);
  const textRefs = useRef([]);
  const currentIndexRef = useRef(0);
  const timeoutRef = useRef(null);

  const basePositions = [
    "s-position2",
    "s-position1",
    "s-position0",
    "s-position-1",
    "s-position-2",
  ];

  useEffect(() => {
    const dynamicPositions = [...basePositions];

    if (images.length > 5) {
      const extra = images.length - 5;
      for (let i = 0; i < extra; i++) {
        dynamicPositions.push("s-not-active");
      }
    }

    const shiftPositions = () => {
      const index = currentIndexRef.current % dynamicPositions.length;

      carouselRefs.current.forEach((el, i) => {
        const pos = (index + i) % dynamicPositions.length;
        if (el) el.className = `s-carousel-set ${dynamicPositions[pos]}`;
      });

      textRefs.current.forEach((el) => {
        if (el) el.style.display = "none";
      });

      if (textRefs.current[index]) {
        textRefs.current[index].style.display = "block";
      }

      currentIndexRef.current++;
      timeoutRef.current = setTimeout(shiftPositions, 4000);
    };

    shiftPositions();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div className="s-gallery mechanicalGallery">
      <p className="heading">Our Gallery</p>
      <div className="s-carousel">
        {images.map((img, i) => (
          <div
            key={i}
            ref={(el) => (carouselRefs.current[i] = el)}
            className="s-carousel-set"
          >
            <img src={img} alt={labels[i]} />
            <div className="s-carousel-set-bg"></div>
          </div>
        ))}
      </div>
      <div className="s-carousel-text">
        <div className="s-carousel-text-container">
          {labels.map((text, i) => (
            <p
              key={i}
              ref={(el) => (textRefs.current[i] = el)}
              style={{ display: "none" }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
