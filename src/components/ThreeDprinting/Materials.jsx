import React, { useRef, useState, useEffect } from "react";
import PLA from "../../assets/ThreeDprinting/Materials/PLA.jpg";
import ABS from "../../assets/ThreeDprinting/Materials/ABS.jpg";
import PETG from "../../assets/ThreeDprinting/Materials/PETG.jpg";
import PACF from "../../assets/ThreeDprinting/Materials/PACF.jpg";
import PLACF from "../../assets/ThreeDprinting/Materials/PLACF.jpg";
import PET from "../../assets/ThreeDprinting/Materials/PET.webp";
import ASA from "../../assets/ThreeDprinting/Materials/ASA.jpg";
import PPACF from "../../assets/ThreeDprinting/Materials/PPACF.jpg";

function Materials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [groupCount, setGroupCount] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const sets =
      slideRef.current?.querySelectorAll(".threeD-printing-materials-set") ||
      [];

    const screenWidth = window.innerWidth;
    const groups =
      screenWidth >= 1200 ? Math.ceil(sets.length / 3) : sets.length;
    setGroupCount(groups);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="threeD-printing-materials">
      <h2>
        3D Printing <span>Materials</span>
      </h2>

      <div className="threeD-printing-materials-container">
        <div
          className="threeD-printing-materials-slide"
          ref={slideRef}
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          <div className="threeD-printing-materials-group">
            <div className="threeD-printing-materials-set">
              <img src={PLA} />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>PLA +</h3>
                  <span>( Polylactic Acid )</span>
                </section>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Elit quis in elit
                    interdum.
                  </li>
                  <li>Mauris semper nullam nunc eleifend.</li>
                  <li>Cras ut nunc ut lacus. Ornare et consectetur</li>
                  <li>eu enim vestibulum.</li>
                </ul>
              </div>
            </div>

            <div className="threeD-printing-materials-set">
              <img src={ABS} />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>ABS</h3>
                  <span>( Acrylonitrile Butadiene Styrene )</span>
                </section>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Elit quis in elit
                    interdum.
                  </li>
                  <li>Mauris semper nullam nunc eleifend.</li>
                  <li>Cras ut nunc ut lacus. Ornare et consectetur</li>
                  <li>eu enim vestibulum.</li>
                </ul>
              </div>
            </div>

            <div className="threeD-printing-materials-set">
              <img src={PETG} />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>PETG</h3>
                  <span>( Polyethylene Terephthalate Glycol )</span>
                </section>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Elit quis in elit
                    interdum.
                  </li>
                  <li>Mauris semper nullam nunc eleifend.</li>
                  <li>Cras ut nunc ut lacus. Ornare et consectetur</li>
                  <li>eu enim vestibulum.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="threeD-printing-materials-group">
            <div className="threeD-printing-materials-set">
              <img src={PACF} />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>PA-CF</h3>
                  <span>( Polyamide Carbon Fiber )</span>
                </section>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Elit quis in elit
                    interdum.
                  </li>
                  <li>Mauris semper nullam nunc eleifend.</li>
                  <li>Cras ut nunc ut lacus. Ornare et consectetur</li>
                  <li>eu enim vestibulum.</li>
                </ul>
              </div>
            </div>

            <div className="threeD-printing-materials-set">
              <img src={PLACF} />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>PLACF</h3>
                  <span>( Polylactic Acid Carbon Fiber)</span>
                </section>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Elit quis in elit
                    interdum.
                  </li>
                  <li>Mauris semper nullam nunc eleifend.</li>
                  <li>Cras ut nunc ut lacus. Ornare et consectetur</li>
                  <li>eu enim vestibulum.</li>
                </ul>
              </div>
            </div>

            <div className="threeD-printing-materials-set">
              <img src={PET} />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>PET</h3>
                  <span>( Polyethylene Terephthalate )</span>
                </section>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Elit quis in elit
                    interdum.
                  </li>
                  <li>Mauris semper nullam nunc eleifend.</li>
                  <li>Cras ut nunc ut lacus. Ornare et consectetur</li>
                  <li>eu enim vestibulum.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="threeD-printing-materials-group">
            <div className="threeD-printing-materials-set">
              <img src={ASA} />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>ASA</h3>
                  <span>( Acrylonitrile Styrene Acrylate )</span>
                </section>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Elit quis in elit
                    interdum.
                  </li>
                  <li>Mauris semper nullam nunc eleifend.</li>
                  <li>Cras ut nunc ut lacus. Ornare et consectetur</li>
                  <li>eu enim vestibulum.</li>
                </ul>
              </div>
            </div>

            <div className="threeD-printing-materials-set">
              <img src={PPACF} />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>PPA-CF</h3>
                  <span>( Polyphthalamide Carbon Fiber )</span>
                </section>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur. Elit quis in elit
                    interdum.
                  </li>
                  <li>Mauris semper nullam nunc eleifend.</li>
                  <li>Cras ut nunc ut lacus. Ornare et consectetur</li>
                  <li>eu enim vestibulum.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="threeD-printing-dots">
        {Array.from({ length: groupCount }).map((_, index) => (
          <button
            key={index}
            className={
              index === activeIndex ? "threeD-printing-active-dot" : ""
            }
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Materials;
