import React, { useRef, useState, useEffect } from "react";

function Materials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [groupCount, setGroupCount] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const groups =
      slideRef.current?.querySelectorAll(".threeD-printing-materials-group") ||
      [];
    setGroupCount(groups.length);
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
              <img />
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
              <img />
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
              <img />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>Flexible TPU</h3>
                  <span>( Thermoplastic Polyurethane )</span>
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
              <img />
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
              <img />
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
              <img />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>Flexible TPU</h3>
                  <span>( Thermoplastic Polyurethane )</span>
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
              <img />
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
              <img />
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
              <img />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>Flexible TPU</h3>
                  <span>( Thermoplastic Polyurethane )</span>
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
