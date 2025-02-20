import React, { useEffect, useState, useRef } from "react";
import Img1 from "../../assets/ThreeDscan/Solutions/threeD-solutions-set-content-img.png";
import FrameSVG from "../../assets/ThreeDscan/Solutions/FrameSVG";
import ArrowSVG from "../../assets/ThreeDscan/Solutions/ArrowSVG";
import SectionScrollAnimation from "../SectionScrollAnimation"

function Solutions() {
  SectionScrollAnimation(".threeD-solutions");
  SectionScrollAnimation(".threeD-solutions-set");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1200);
  const containerRef = useRef(null);
  const setsRef = useRef([]);

  const itemWidth = 257.953 + 40;

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateActiveSet = (index) => {
    if (!setsRef.current || !containerRef.current) return;

    setsRef.current.forEach((set, idx) => {
      set.classList.toggle("active-threeD-solutions-set", idx === index);
    });

    const currentTranslation = -(itemWidth * index);
    containerRef.current.style.transform = `translateX(calc(50% + ${currentTranslation}px - 191px))`;
  };

  const handleLeftClick = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        updateActiveSet(newIndex);
        return newIndex;
      });
    }
  };

  const handleRightClick = () => {
    if (activeIndex < setsRef.current.length - 1) {
      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        updateActiveSet(newIndex);
        return newIndex;
      });
    }
  };

  useEffect(() => {
    if (isLargeScreen) {
      updateActiveSet(activeIndex);
    } else if (containerRef.current) {
      containerRef.current.style.transform = "";
      setsRef.current.forEach((set) =>
        set.classList.remove("active-threeD-solutions-set")
      );
      setActiveIndex(0);
    }
  }, [isLargeScreen, activeIndex]);

  return (
    <div className="threeD-solutions">
      <div className="threeD-heading">
        <h2>
          Revolutionize Precision with <br /> <span>Advanced 3D Solutions</span>
        </h2>
      </div>
      <div className="threeD-solutions-container">
        <div className="threeD-solutions-Div">
          <div className="threeD-solutions-set-container" ref={containerRef}>
            <div
              className="threeD-solutions-set"
              ref={(el) => (setsRef.current[0] = el)}
            >
              <FrameSVG />
              <div className="threeD-solutions-set-content">
                <img src={Img1} alt="3D Scanning" />
                <h3>3D Scanning</h3>
                <p>
                  Capture intricate details of any part or prototype with
                  precision. Our 3D scanning transforms physical objects into
                  high-accuracy digital models.
                </p>
              </div>
            </div>
            <div
              className="threeD-solutions-set"
              ref={(el) => (setsRef.current[1] = el)}
            >
              <FrameSVG />
              <div className="threeD-solutions-set-content">
                <img src={Img1} alt="Reverse Engineering" />
                <h3>Reverse Engineering</h3>
                <p>
                  We help you dissect and recreate complex components,
                  delivering exact replicas and optimized designs for your
                  projects. Rebuild and design the future.
                </p>
              </div>
            </div>
            <div
              className="threeD-solutions-set"
              ref={(el) => (setsRef.current[2] = el)}
            >
              <FrameSVG />
              <div className="threeD-solutions-set-content">
                <img src={Img1} alt="Digital Inspection" />
                <h3>Digital Inspection</h3>
                <p>
                  Our digital inspection service verifies dimensions and
                  tolerances, empowering you to maintain high standards without
                  the guesswork.
                </p>
              </div>
            </div>
            <div
              className="threeD-solutions-set"
              ref={(el) => (setsRef.current[3] = el)}
            >
              <FrameSVG />
              <div className="threeD-solutions-set-content">
                <img src={Img1} alt="Tear Down/Benchmarking" />
                <h3>Tear Down/Bench Marking</h3>
                <p>
                  Our tear down and benchmarking digs deep into component
                  structure and quality, setting the stage for informed
                  innovation.
                </p>
              </div>
            </div>
            <div
              className="threeD-solutions-set"
              ref={(el) => (setsRef.current[4] = el)}
            >
              <FrameSVG />
              <div className="threeD-solutions-set-content">
                <img src={Img1} alt="3D Printing" />
                <h3>3D Printing</h3>
                <p>
                  With our 3D printing services, create custom prototypes or
                  end-use parts fast, accurately, and in line with your specific
                  requirements.
                </p>
              </div>
            </div>
            <div
              className="threeD-solutions-set"
              ref={(el) => (setsRef.current[5] = el)}
            >
              <FrameSVG />
              <div className="threeD-solutions-set-content">
                <img src={Img1} alt="Design & Engineering" />
                <h3>Design & Engineering Services</h3>
                <p>
                  We bridge the gap between ideas and execution. Our expertise
                  ensures innovative designs and flawless engineering tailored
                  to your industry.
                </p>
              </div>
            </div>
          </div>
          <div className="threeD-solutions-set-container-left"></div>
          <div className="threeD-solutions-set-container-right"></div>
          <div className="threeD-solutions-set-controller">
            <div
              className="threeD-solutions-set-controller-svg threeD-solutions-set-controller-svg-left"
              onClick={handleLeftClick}
              style={{
                opacity: activeIndex === 0 ? 0.4 : 1,
                pointerEvents: activeIndex === 0 ? "none" : "auto",
              }}
            >
              <ArrowSVG angleOfRotation={180} />
            </div>
            <div
              className="threeD-solutions-set-controller-svg threeD-solutions-set-controller-svg-right"
              onClick={handleRightClick}
              style={{
                opacity: activeIndex === setsRef.current.length - 1 ? 0.4 : 1,
                pointerEvents:
                  activeIndex === setsRef.current.length - 1 ? "none" : "auto",
              }}
            >
              <ArrowSVG angleOfRotation={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
