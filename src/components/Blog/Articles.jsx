import React, { useRef, useState, useEffect } from "react";
import Links from "./Links";

function Articles() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const itemsPerView = 2;

  useEffect(() => {
    const updateSlideWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = containerWidth / itemsPerView;
        setSlideWidth(itemWidth + 12);
      }
    };
    updateSlideWidth();
    window.addEventListener("resize", updateSlideWidth);
    return () => window.removeEventListener("resize", updateSlideWidth);
  }, []);

  // Need to update this everytime i add a new blog
  const totalItems = 3;
  const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="s-infrastructure our-blogs blogs-article">
      <div className="s-infrastructure-heading">
        <h2>Read Our Next Articles</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
          volutpat diam turpis aliquam a.
        </p>
      </div>

      <div className="blog-article">
        <div className="blog-article-container" ref={containerRef}>
          <div
            className="blog-article-slide"
            style={{
              display: "flex",
              gap: "24px",
              transform: `translateX(-${
                currentIndex * (slideWidth * itemsPerView)
              }px)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <Links />
          </div>
        </div>

        <div className="blog-article-controls">
          <button
            onClick={handlePrev}
            style={{
              opacity: currentIndex === 0 ? 0.3 : 1,
              cursor: currentIndex === 0 ? "default" : "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.12155 7.50011H19.0002V10.5001H6.12155L11.0609 15.4395L8.93957 17.5608L0.378906 9.00011L8.93957 0.439453L11.0609 2.56077L6.12155 7.50011Z"
                fill="#999999"
              />
            </svg>
          </button>

          <div className="blog-article-indicators">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <div
                key={idx}
                className={`blog-article-indicator ${
                  idx === currentIndex ? "active-indicator" : ""
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={handleNext}
            style={{
              opacity: currentIndex === maxIndex ? 0.3 : 1,
              cursor: currentIndex === maxIndex ? "default" : "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              style={{ transform: "rotate(180deg)" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.12155 7.50011H19.0002V10.5001H6.12155L11.0609 15.4395L8.93957 17.5608L0.378906 9.00011L8.93957 0.439453L11.0609 2.56077L6.12155 7.50011Z"
                fill="#999999"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Articles;
