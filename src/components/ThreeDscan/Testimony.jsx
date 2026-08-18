import { useState } from "react";
import StarSVG from "../../assets/ThreeDscan/Testimony/StarSVG";
import ISK from "../../assets/ThreeDscan/Testimony/ISK.webp";
import Motorcycles89 from "../../assets/ThreeDscan/Testimony/89 Motorcycles.webp";
import Eparivahan from "../../assets/ThreeDscan/Testimony/Eparivahan.webp";
import Micronix from "../../assets/ThreeDscan/Testimony/Micronix.webp";
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
                &quot;Koios Engineering Solutions exceeded our expectations with
                their <span>3</span>D scanning services. The level of detail and accuracy in
                the scans helped us streamline our design process and improve
                overall efficiency. Highly recommended!&quot;
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
                  <img src={Motorcycles89} alt="89 Motorcycles" />
                  <h3><span>89</span> Motorcycles</h3>
                </div>
              </div>
            </div>


            <div className="testimony-set">
              <p>
                &quot;Their <span>3</span>D scanning service saved us countless hours. The
                detailed scans made reverse engineering our old machinery parts
                much easier. Koios is now our go-to for scanning needs.&quot;
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
                  <img src={Micronix} alt="Micronix" />
                  <h3>Micronix</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="testimony-container-div">
            <div className="testimony-set">
              <p>
                &quot;Thanks to Koios&apos; accurate <span>3</span>D scans, we were able to identify
                flaws in our prototype early, saving significant costs in the
                production phase. It&apos;s a service every manufacturer should
                consider.&quot;
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
                  <img src={Eparivahan} alt="Eparivahan" />
                  <h3>Eparivahan</h3>
                </div>
              </div>
            </div>

            <div className="testimony-set">
              <p>
                &quot;The <span>3</span>D scanning services from Koios simplified our entire
                workflow. The scans were detailed and accurate, making our
                design modifications easier and faster. It&apos;s been a game changer
                for our company.&quot;
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
                  <img src={ISK} alt="ISK Auto Industries" />
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
            &quot;Koios Engineering Solutions exceeded our expectations with their <span>3</span>D
            scanning services. The level of detail and accuracy in the scans
            helped us streamline our design process and improve overall
            efficiency. Highly recommended!&quot;
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
              <img src={Motorcycles89} alt="89 Motorcycles" />
              <h3><span>89</span> Motorcycles</h3>
            </div>
          </div>
        </div>


        <div className="testimony-set">
          <p>
            &quot;Their <span>3</span>D scanning service saved us countless hours. The detailed
            scans made reverse engineering our old machinery parts much easier.
            Koios is now our go-to for scanning needs.&quot;
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
              <img src={Micronix} alt="Micronix" />
              <h3>Micronix</h3>
            </div>
          </div>
        </div>
        <div className="testimony-set">
          <p>
            &quot;Thanks to Koios&apos; accurate <span>3</span>D scans, we were able to identify flaws
            in our prototype early, saving significant costs in the production
            phase. It&apos;s a service every manufacturer should consider.&quot;
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
              <img src={Eparivahan} alt="Eparivahan" />
              <h3>Eparivahan</h3>
            </div>
          </div>
        </div>

        <div className="testimony-set">
          <p>
            &quot;The <span>3</span>D scanning services from Koios simplified our entire workflow.
            The scans were detailed and accurate, making our design
            modifications easier and faster. It&apos;s been a game changer for our
            company.&quot;
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
              <img src={ISK} alt="ISK Auto Industries" />
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
