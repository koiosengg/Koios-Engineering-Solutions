import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SampleImage from "../../assets/Blog/Electric Vehicle.webp";

function Electric() {
  return (
    <>
      <Helmet>
        <title>Electric Vehicle Design & Development Services</title>
        <meta
          name="description"
          content="KoiosEngg provides EV design services including battery integration, lightweight body, drive systems, charging solutions, and safety validation."
        />
      </Helmet>
      <div className="blog-inner-container">
        <div className="blog-inner">
          <div className="blog-inner-top">
            <div className="blog-inner-top-heading">
              <Link to="/blogs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                >
                  <path
                    opacity="0.8"
                    d="M7.69408 0.308162C7.88996 0.505537 8 0.773199 8 1.05229C8 1.33138 7.88996 1.59904 7.69408 1.79641L2.52205 7.00635L7.69408 12.2163C7.88441 12.4148 7.98972 12.6807 7.98734 12.9566C7.98496 13.2326 7.87508 13.4966 7.68135 13.6917C7.48763 13.8869 7.22557 13.9976 6.95161 14C6.67765 14.0024 6.41372 13.8963 6.21666 13.7045L0.305919 7.75048C0.110039 7.55311 0 7.28544 0 7.00635C0 6.72727 0.110039 6.4596 0.305919 6.26223L6.21666 0.308162C6.4126 0.110846 6.67831 0 6.95537 0C7.23243 0 7.49814 0.110846 7.69408 0.308162Z"
                    fill="#FFBF00"
                  />
                </svg>
              </Link>
              <p>July 07, 2025</p>
              <h1>Electric Vehicle Design Services</h1>
            </div>
            <img src={SampleImage} alt="Electric Vehicle Design Services" />
          </div>
          <div className="blog-inner-bottom">
            <div className="blog-inner-text">
              {/* <h2>Designing Smarter, Safer, and More Efficient Vehicles</h2> */}
              <p>
                The automotive industry is moving fast towards electric
                mobility, and electric vehicles (EVs) are at the center of this
                change. Designing an EV is not just about replacing fuel with
                batteries – it’s about creating a smarter, safer, and more
                efficient vehicle that matches customer needs and industry
                standards.
              </p>
            </div>
            <div className="blog-inner-text">
              <h2>Key Areas of EV Design</h2>
              <ul>
                <li>
                  <strong>Battery and Power System: </strong>
                  The battery is the heart of an EV. Engineers focus on
                  selecting the right battery size, placement, and cooling
                  system to ensure long life, faster charging, and safe
                  performance on the road.
                </li>
                <li>
                  <strong>Lightweight Body: </strong>
                  Since batteries add extra weight, vehicle bodies are designed
                  using lightweight but strong materials. This helps improve
                  driving range and makes the vehicle more efficient.
                </li>
                {/* <li>
                  <strong>Motor and Drive System: </strong>
                  Unlike traditional engines, EVs use electric motors that
                  provide instant acceleration. Designers ensure smooth power
                  delivery, less noise, and minimal maintenance.
                </li> */}
                <li>
                  <strong>Charging Solutions: </strong>
                  Along with the vehicle itself, charging systems are also part
                  of the design. Fast charging, home charging, and compatibility
                  with public charging stations are all considered at the design
                  stage.
                </li>
                <li>
                  <strong>Safety and Standards: </strong>
                  Safety is a top priority. From battery safety checks to crash
                  tests, every EV design goes through strict validation before
                  it reaches the customer.
                </li>
                <li>
                  <strong>User-Friendly Features: </strong>
                  EV design also focuses on comfort and convenience. Smart
                  dashboards, connected features, and easy-to-use controls are
                  integrated to improve the driving experience.
                </li>
              </ul>
            </div>

            <div className="blog-inner-text">
              <h2>Why EV Design Services Matter</h2>
              <p>
                With the global push towards clean energy, businesses in the
                automotive sector need reliable EV design services to stay
                competitive. These services help manufacturers reduce
                time-to-market, ensure compliance with global standards, and
                deliver vehicles that consumers can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Electric;
