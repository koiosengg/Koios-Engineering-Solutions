import React, { useEffect, useRef } from "react";
import Img1 from "../../assets/Vehicle Development/Gallery/Koios Engineering Solutions L3 Cargo v5.164.png";
import Img2 from "../../assets/Vehicle Development/Gallery/Koios Engineering Solutions Chassis v4 Cargo Web v10.144.png";
import Img3 from "../../assets/Vehicle Development/Gallery/Koios Engineering Solutions 390 adv Chassis v4.82.png";
import Img4 from "../../assets/Vehicle Development/Gallery/Koios Engineering Solutions L3 Passenger v5.158.png";
import Img5 from "../../assets/Vehicle Development/Gallery/Koios Engineering Solutions GMPL_L3_LOADER_CHASSIS v1.130.png";
import Img6 from "../../assets/Vehicle Development/Gallery/Koios Engineering Solutions Chassis v4 cargo web.138.png";
import Img7 from "../../assets/Vehicle Development/Gallery/Koios Engineering Solutions gokart.png";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

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
            <img src={img}  />
            <div className="s-carousel-set-bg"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
