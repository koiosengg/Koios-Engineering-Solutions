import { useRef, useState, useEffect } from "react";
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
              <img src={PLA} alt="PLA plus material" />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>PLA +</h3>
                  <span>( Polylactic Acid )</span>
                </section>
                <ul>
                  <li>Higher strength and toughness than standard PLA</li>
                  <li>Excellent surface finish and dimensional accuracy</li>
                  <li>
                    Ideal for prototypes, enclosures, and functional parts
                  </li>
                  <li>Easy to print with minimal warping</li>
                </ul>
              </div>
            </div>

            <div className="threeD-printing-materials-set">
              <img src={ABS} alt="ABS material" />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>ABS</h3>
                  <span>( Acrylonitrile Butadiene Styrene )</span>
                </section>
                <ul>
                  <li>Strong, durable, and heat-resistant</li>
                  <li>Suitable for automotive and engineering applications</li>
                  <li>Good impact resistance and machinability</li>
                  <li>Ideal for functional prototypes</li>
                </ul>
              </div>
            </div>

            <div className="threeD-printing-materials-set">
              <img src={PETG} alt="PETG material" />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>PETG</h3>
                  <span>( Polyethylene Terephthalate Glycol )</span>
                </section>
                <ul>
                  <li>High strength with excellent layer adhesion</li>
                  <li>Resistant to moisture, chemicals, and impact</li>
                  <li>Suitable for functional and end-use parts</li>
                  <li>Good balance of flexibility and durability</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="threeD-printing-materials-group">
            <div className="threeD-printing-materials-set">
              <img src={PACF} alt="PA-CF material" />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>PA-CF</h3>
                  <span>( Polyamide Carbon Fiber )</span>
                </section>
                <ul>
                  <li>Extremely strong and lightweight</li>
                  <li>High stiffness with excellent wear resistance</li>
                  <li>Ideal for structural and engineering components</li>
                  <li>Excellent heat and chemical resistance</li>
                </ul>
              </div>
            </div>

            <div className="threeD-printing-materials-set">
              <img src={PLACF} alt="PLACF material" />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>PLA-CF</h3>
                  <span>( Polylactic Acid Carbon Fiber)</span>
                </section>
                <ul>
                  <li>Increased rigidity over standard PLA</li>
                  <li>Lightweight with a premium matte finish</li>
                  <li>High dimensional accuracy</li>
                  <li>Ideal for aesthetic and functional prototypes</li>
                </ul>
              </div>
            </div>

            <div className="threeD-printing-materials-set">
              <img src={PET} alt="PET material" />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>PET</h3>
                  <span>( Polyethylene Terephthalate )</span>
                </section>
                <ul>
                  <li>Strong, durable, and chemically resistant</li>
                  <li>Excellent dimensional stability</li>
                  <li>Good moisture resistance</li>
                  <li>Suitable for industrial and functional applications</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="threeD-printing-materials-group">
            <div className="threeD-printing-materials-set">
              <img src={ASA} alt="ASA material" />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>ASA</h3>
                  <span>( Acrylonitrile Styrene Acrylate )</span>
                </section>
                <ul>
                  <li>UV and weather resistant</li>
                  <li>Excellent outdoor durability</li>
                  <li>High impact and heat resistance</li>
                  <li>Ideal for exterior automotive and industrial parts</li>
                </ul>
              </div>
            </div>

            <div className="threeD-printing-materials-set">
              <img src={PPACF} alt="PPA-CF material" />
              <div className="threeD-printing-materials-text">
                <section>
                  <h3>PPA-CF</h3>
                  <span>( Polyphthalamide Carbon Fiber )</span>
                </section>
                <ul>
                  <li>Lightweight with exceptional stiffness</li>
                  <li>Excellent chemical and fatigue resistance</li>
                  <li>Low moisture absorption</li>
                  <li>
                    Ideal for automotive, industrial, and load-bearing
                    applications
                  </li>
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
