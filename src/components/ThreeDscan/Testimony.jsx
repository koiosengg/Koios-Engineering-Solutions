import React, { useState } from "react";
import StarSVG from "../../assets/ThreeDscan/Testimony/StarSVG";
import UrbanSphere from "../../assets/ThreeDscan/Testimony/UrbanSphere.png";
import Testimony1 from "../../assets/ThreeDscan/Testimony/Testimony1.avif";
import SectionScrollAnimation from "../SectionScrollAnimation";

function Testimony() {
  SectionScrollAnimation(".testimony");
  const [activeSet, setActiveSet] = useState(0);

  const handleNext = () => {
    setActiveSet((prev) => (prev + 1) % 2);
  };

  const handlePrev = () => {
    setActiveSet((prev) => (prev === 0 ? 1 : prev - 1));
  };
  return (
    <div className="testimony">
      <div className="threeD-heading">
        <h2>
          Trusted Voices,
          <br /> <span>Happy Clients</span>
        </h2>
      </div>
      <div className="testimony-container notMobile">
        <div
          className="testimony-container-slide"
          style={{ transform: `translateX(-${activeSet * 100}%)` }}
        >
          <div className="testimony-container-div">
            <div className="testimony-set">
              <p>
                "Koios Engineering Solutions exceeded our expectations with
                their 3D scanning services. The level of detail and accuracy in
                the scans helped us streamline our design process and improve
                overall efficiency. Highly recommended!"
              </p>
              <div className="testimony-set-info">
                <div className="testimony-set-star">
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                </div>
                <div className="testimony-set-person">
                  <img src={Testimony1} />
                  <h3>89 Motorcycles</h3>
                </div>
              </div>
            </div>
            <div className="testimony-set">
              <p>
                "We approached Koios for 3D scanning of our aerospace
                components. Their team was professional, timely, and delivered
                precise scans that were critical to our project. We couldn’t
                have asked for better support."
              </p>
              <div className="testimony-set-info">
                <div className="testimony-set-star">
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                </div>
                <div className="testimony-set-person">
                  <img src={Testimony1} />
                  <h3>Sukalpatech</h3>
                </div>
              </div>
            </div>

            <div className="testimony-set">
              <p>
                "Their 3D scanning service saved us countless hours. The
                detailed scans made reverse engineering our old machinery parts
                much easier. Koios is now our go-to for scanning needs."
              </p>
              <div className="testimony-set-info">
                <div className="testimony-set-star">
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                </div>
                <div className="testimony-set-person">
                  <img src={Testimony1} />
                  <h3>Micronix</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="testimony-container-div">
            <div className="testimony-set">
              <p>
                "Thanks to Koios' accurate 3D scans, we were able to identify
                flaws in our prototype early, saving significant costs in the
                production phase. It’s a service every manufacturer should
                consider."
              </p>
              <div className="testimony-set-info">
                <div className="testimony-set-star">
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                </div>
                <div className="testimony-set-person">
                  <img src={Testimony1} />
                  <h3>Eparivahan</h3>
                </div>
              </div>
            </div>
            <div className="testimony-set">
              <p>
                "Koios Engineering Solutions provided us with quick and reliable
                3D scanning services. The team was approachable and made sure we
                got exactly what we needed for our engineering project."
              </p>
              <div className="testimony-set-info">
                <div className="testimony-set-star">
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                </div>
                <div className="testimony-set-person">
                  <img src={UrbanSphere} />
                  <h3>Urban Sphere</h3>
                </div>
              </div>
            </div>
            <div className="testimony-set">
              <p>
                "The 3D scanning services from Koios simplified our entire
                workflow. The scans were detailed and accurate, making our
                design modifications easier and faster. It’s been a game changer
                for our company."
              </p>
              <div className="testimony-set-info">
                <div className="testimony-set-star">
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                  <StarSVG />
                </div>
                <div className="testimony-set-person">
                  <img src={Testimony1} />
                  <h3>Isk Auto Industries</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimony-container mobile">
        <div className="testimony-set">
          <p>
            "Koios Engineering Solutions exceeded our expectations with their 3D
            scanning services. The level of detail and accuracy in the scans
            helped us streamline our design process and improve overall
            efficiency. Highly recommended!"
          </p>
          <div className="testimony-set-info">
            <div className="testimony-set-star">
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
            </div>
            <div className="testimony-set-person">
              <img src={Testimony1} />
              <h3>89 Motorcycles</h3>
            </div>
          </div>
        </div>
        <div className="testimony-set">
          <p>
            "We approached Koios for 3D scanning of our aerospace components.
            Their team was professional, timely, and delivered precise scans
            that were critical to our project. We couldn’t have asked for better
            support."
          </p>
          <div className="testimony-set-info">
            <div className="testimony-set-star">
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
            </div>
            <div className="testimony-set-person">
              <img src={Testimony1} />
              <h3>Sukalpatech</h3>
            </div>
          </div>
        </div>

        <div className="testimony-set">
          <p>
            "Their 3D scanning service saved us countless hours. The detailed
            scans made reverse engineering our old machinery parts much easier.
            Koios is now our go-to for scanning needs."
          </p>
          <div className="testimony-set-info">
            <div className="testimony-set-star">
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
            </div>
            <div className="testimony-set-person">
              <img src={Testimony1} />
              <h3>Micronix</h3>
            </div>
          </div>
        </div>
        <div className="testimony-set">
          <p>
            "Thanks to Koios' accurate 3D scans, we were able to identify flaws
            in our prototype early, saving significant costs in the production
            phase. It’s a service every manufacturer should consider."
          </p>
          <div className="testimony-set-info">
            <div className="testimony-set-star">
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
            </div>
            <div className="testimony-set-person">
              <img src={Testimony1} />
              <h3>Eparivahan</h3>
            </div>
          </div>
        </div>
        <div className="testimony-set">
          <p>
            "Koios Engineering Solutions provided us with quick and reliable 3D
            scanning services. The team was approachable and made sure we got
            exactly what we needed for our engineering project."
          </p>
          <div className="testimony-set-info">
            <div className="testimony-set-star">
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
            </div>
            <div className="testimony-set-person">
              <img src={UrbanSphere} />
              <h3>Urban Sphere</h3>
            </div>
          </div>
        </div>
        <div className="testimony-set">
          <p>
            "The 3D scanning services from Koios simplified our entire workflow.
            The scans were detailed and accurate, making our design
            modifications easier and faster. It’s been a game changer for our
            company."
          </p>
          <div className="testimony-set-info">
            <div className="testimony-set-star">
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
              <StarSVG />
            </div>
            <div className="testimony-set-person">
              <img src={Testimony1} />
              <h3>Isk Auto Industries</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="testimony-dots-container notMobile">
        <div
          className={`testimony-dots ${
            activeSet === 0 ? "testimony-active-dots" : ""
          }`}
          onClick={activeSet !== 1 ? null : handlePrev}
        ></div>
        <div
          className={`testimony-dots ${
            activeSet === 1 ? "testimony-active-dots" : ""
          }`}
          onClick={activeSet !== 0 ? null : handleNext}
        ></div>
      </div>
    </div>
  );
}

export default Testimony;
