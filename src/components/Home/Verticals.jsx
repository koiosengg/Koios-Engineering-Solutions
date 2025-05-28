import React, { useState } from "react";
import DesktopBackground from "../../assets/Home/Verticals/Desktop Background.png";
import KES from "../../assets/Home/Verticals/KES.png";
import TKS from "../../assets/Home/Verticals/TKS.png";

function Verticals() {
  const [activeVertical, setActiveVertical] = useState("KES");
  const verticals = [
    {
      id: "KES",
      name: "Koios Engineering Solutions",
      image: KES,
    },
    {
      id: "TKS",
      name: "Koios Studios",
      image: TKS,
    },
  ];

  return (
    <div className="s-verticals">
      <img src={DesktopBackground} className="s-verticals-background" />
      <div className="s-verticals-container">
        <div className="s-verticals-heading">
          <h2>Our Verticals</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tristique pellentesque lorem
            tincidunt tortor.
          </p>
        </div>
        <div className="s-verticals-info">
          <div className="s-verticals-info-options">
            {verticals.map((vertical) => (
              <div
                key={vertical.id}
                className={`s-verticals-info-option ${
                  activeVertical === vertical.id ? "active-option" : ""
                }`}
                onClick={() => setActiveVertical(vertical.id)}
              >
                <img src={vertical.image} />
                <p>{vertical.name}</p>
              </div>
            ))}
          </div>

          {activeVertical === "KES" && (
            <div className="s-verticals-info-text">
              <section>
                <h3>Koios Engineering Solutions</h3>
                <p>
                  We deliver exceptional mechanical and automotive design,
                  coupled with cutting-edge manufacturing, for your specialized
                  machines and vehicles, meticulously meeting the highest
                  industry standards...
                </p>
              </section>
              <a href="#" className="p-get-started-btn">
                <p>Know More</p>
              </a>
            </div>
          )}

          {activeVertical === "TKS" && (
            <div className="s-verticals-info-text">
              <section>
                <h3>Koios Studios</h3>
                <p>
                  We deliver exceptional mechanical and automotive design,
                  coupled with cutting-edge manufacturing, for your specialized
                  machines and vehicles, meticulously meeting the highest
                  industry standards...
                </p>
              </section>
              <a
                href="https://www.koiostudio.com/"
                target="_blank"
                className="p-get-started-btn"
              >
                <p>Know More</p>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Verticals;
