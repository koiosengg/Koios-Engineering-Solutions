import React, { useState } from "react";
import Img1 from "../../assets/ThreeDprinting/Applications/Img1.png";
import Img2 from "../../assets/ThreeDprinting/Applications/Img2.png";
import Img3 from "../../assets/ThreeDprinting/Applications/Img3.png";
import Img4 from "../../assets/ThreeDprinting/Applications/Img4.png";

const applicationData = [
  {
    img: Img1,
    title: "Rapid Prototyping",
    description:
      "Quickly transform ideas into physical prototypes for design iteration and validation.",
  },
  {
    img: Img2,
    title: "Custom Components",
    description:
      "Produce custom and low-volume parts tailored to your specifications.",
  },
  {
    img: Img3,
    title: "Functional End-use parts",
    description:
      "Manufacturing of robust, functional components suitable for real-world applications",
  },
  {
    img: Img4,
    title: "Concept Modelling",
    description:
      <>Bring concepts to life with detailed and precise <span>3</span>D printed models.</>,
  },
];

function Applications() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="threeD-printing-applications">
      <h2>
        of FDM 3D Printing <span>Applications</span>
      </h2>

      <div className="threeD-printing-applications-container">
        <div className="threeD-printing-applications-img">
          <img
            src={applicationData[activeIndex].img}
            alt={applicationData[activeIndex].title}
          />
        </div>

        <div className="threeD-printing-applications-info">
          {applicationData.map((item, index) => (
            <div
              key={index}
              className={`threeD-printing-applications-set ${
                index === activeIndex
                  ? "threeD-printing-applications-active-set"
                  : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <span>{`0${index + 1}`}</span>
              <section>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Applications;
