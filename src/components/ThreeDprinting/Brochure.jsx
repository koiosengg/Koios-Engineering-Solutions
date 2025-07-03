import React from "react";
import DesktopImg from "../../assets/ThreeDprinting/Brochure/Desktop Img.png";

function Brochure() {
  return (
    <div className="threeD-printing-brochure">
      <div className="threeD-printing-brochure-container">
        <div className="threeD-printing-brochure-info">
          <section>
            <h2>
              Ready <span>to bring your idea</span> to life?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Elit quis in elit
              interdum.
            </p>
          </section>
          <a className="yellow-button">
            <p>Download Brochure</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M19 10H15V4H9V10H5L12 17L19 10ZM5 19V21H19V19H5Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
        <div className="threeD-printing-brochure-img">
          <img src={DesktopImg} />
        </div>
      </div>
    </div>
  );
}

export default Brochure;
