import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Home/Tools/Desktop Background.png";
import SampleImage from "../../assets/Sample Image.png";

const blogItems = [
  {
    path: "/blogs/sample-blog",
    title: "Sample Blog",
    desc: "This is the first sample blog with insights about design.",
  },
  {
    path: "/blogs/sample-blog-1",
    title: "Blog 1",
    desc: "Exploring advanced engineering concepts with examples.",
  },
  {
    path: "/blogs/sample-blog-2",
    title: "Blog 2",
    desc: "How innovation drives the future of automotive solutions.",
  },
  {
    path: "/blogs/sample-blog-new",
    title: "New Blog",
    desc: "Latest updates and strategies shaping manufacturing today.",
  },
  {
    path: "/blogs/sample-blog-3",
    title: "Blog 3",
    desc: "Exploring advanced engineering concepts with examples.",
  },
  {
    path: "/blogs/sample-blog-4",
    title: "Blog 4",
    desc: "How innovation drives the future of automotive solutions.",
  },
];

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

  const maxIndex = Math.ceil(blogItems.length / itemsPerView) - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="s-infrastructure our-blogs">
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
            {blogItems.map((item, index) => (
              <Link key={index} to={item.path} className="s-tools-set">
                <img
                  src={DesktopBackground}
                  className="s-tools-set-background"
                  alt="background"
                />
                <section>
                  <div className="s-tools-set-img">
                    <img src={SampleImage} alt="thumbnail" />
                  </div>
                  <h3>{item.title}</h3>
                </section>
                <p>{item.desc}</p>
              </Link>
            ))}
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
                fill-rule="evenodd"
                clip-rule="evenodd"
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
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
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
