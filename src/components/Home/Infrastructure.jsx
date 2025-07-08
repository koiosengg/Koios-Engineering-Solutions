import React, { useRef, useState, useEffect } from "react";
import Img1 from "../../assets/Home/Infrastructure/Img (1).jpg";
import Img2 from "../../assets/Home/Infrastructure/Img (2).jpg";
import Img3 from "../../assets/Home/Infrastructure/Img (3).jpg";
import Img4 from "../../assets/Home/Infrastructure/Img (4).jpg";

const images = [
  {
    src: Img1,
    title: "Workspace 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh volutpat",
  },
  {
    src: Img2,
    title: "Workspace 2",
    description:
      "Modern collaborative space with natural light and ergonomic seating.",
  },
  {
    src: Img3,
    title: "Workspace 3",
    description:
      "Spacious infrastructure equipped with the latest tech solutions.",
  },
  {
    src: Img4,
    title: "Workspace 4",
    description:
      "Creative work environment fostering productivity and innovation.",
  },
];

function Infrastructure() {
  const galleryRef = useRef(null);
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryWidth, setGalleryWidth] = useState(0);

  useEffect(() => {
    if (galleryRef.current) {
      setGalleryWidth(galleryRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (galleryRef.current) {
        setGalleryWidth(galleryRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${
        currentIndex * galleryWidth
      }px)`;
      slideRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [currentIndex, galleryWidth]);

  return (
    <div className="s-infrastructure">
      <div className="s-infrastructure-heading">
        <h2>Infrastructure</h2>
        <p>
          We Deliver Exceptional Mechanical and automotive designs coupled with
          cutting edge manufacturing services for your specialized needs in
          terms of Vehicle and Mechanical Domain .
        </p>
      </div>

      <div className="s-infrastructure-container">
        <div className="s-infrastructure-gallery" ref={galleryRef}>
          <div className="s-infrastructure-slide" ref={slideRef}>
            {images.map((img, index) => (
              <img key={index} src={img.src} alt={`Slide ${index + 1}`} />
            ))}
          </div>
        </div>

        <div
          className="s-infrastructure-button prev-button"
          onClick={handlePrev}
          style={{
            opacity: currentIndex === 0 ? 0.3 : 1,
            cursor: currentIndex === 0 ? "default" : "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="25"
            viewBox="0 0 15 25"
            fill="none"
          >
            <path
              d="M13.8071 0.548975C14.1586 0.900589 14.3561 1.37742 14.3561 1.8746C14.3561 2.37178 14.1586 2.84861 13.8071 3.20022L4.52585 12.4815L13.8071 21.7627C14.1486 22.1164 14.3376 22.59 14.3334 23.0816C14.3291 23.5732 14.1319 24.0435 13.7843 24.3911C13.4366 24.7388 12.9663 24.936 12.4747 24.9402C11.9831 24.9445 11.5095 24.7555 11.1559 24.414L0.548974 13.8071C0.197466 13.4555 0 12.9787 0 12.4815C0 11.9843 0.197466 11.5075 0.548974 11.1559L11.1559 0.548975C11.5075 0.197466 11.9843 0 12.4815 0C12.9787 0 13.4555 0.197466 13.8071 0.548975Z"
              fill="#FFBF00"
            />
          </svg>
        </div>

        <div
          className="s-infrastructure-button next-button"
          onClick={handleNext}
          style={{
            opacity: currentIndex === images.length - 1 ? 0.3 : 1,
            cursor: currentIndex === images.length - 1 ? "default" : "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="25"
            viewBox="0 0 15 25"
            fill="none"
          >
            <path
              d="M0.548858 0.548975C0.19735 0.900589 -0.000117302 1.37742 -0.000117302 1.8746C-0.000117302 2.37178 0.19735 2.84861 0.548858 3.20022L9.83011 12.4815L0.548858 21.7627C0.207312 22.1164 0.018322 22.59 0.0225945 23.0816C0.026866 23.5732 0.224057 24.0435 0.571698 24.3911C0.919338 24.7388 1.38961 24.936 1.88123 24.9402C2.37285 24.9445 2.84648 24.7555 3.20011 24.414L13.807 13.8071C14.1585 13.4555 14.356 12.9787 14.356 12.4815C14.356 11.9843 14.1585 11.5075 13.807 11.1559L3.20011 0.548975C2.84849 0.197466 2.37167 0 1.87448 0C1.3773 0 0.900473 0.197466 0.548858 0.548975Z"
              fill="#FFBF00"
            />
          </svg>
        </div>

        <div className="s-infrastructure-text">
          <h3>{images[currentIndex].title}</h3>
          <p>{images[currentIndex].description}</p>
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
