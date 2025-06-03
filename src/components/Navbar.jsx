import React, { useState } from "react";
import { Link } from "react-router-dom";
import GeneralEngineeringLogo from "../assets/Navbar/General Engineering Logo.png";
import VehicleDevelopmentLogo from "../assets/Navbar/Vehicle Development Logo.png";
import ThreeDServicesLogo from "../assets/Navbar/3D Services Logo.png";
import Logo from "../assets/Navbar/Navbar Logo.png";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };
  return (
    <>
      <div className="s-navbar">
        <Link to="/" className="s-logo-container">
          <img src={Logo} />
          <p>Koios Engineering Solutions</p>
        </Link>
        <div className="s-nav-link">
          <div className="s-nav-link-heading">
            <Link to="/general_engineering" className="s-nav-link-text">
              <p>General Engineering</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path d="M1.70667 0.792998L6.99966 6.086L12.2927 0.792998L13.7067 2.207L8.41366 7.5C8.03861 7.87494 7.52999 8.08557 6.99966 8.08557C6.46934 8.08557 5.96072 7.87494 5.58566 7.5L0.292663 2.207L1.70667 0.792998Z" />
              </svg>
            </Link>
            <div className="s-dropdown">
              <div className="s-dropdown-container">
                <div className="s-dropdown-heading">
                  <img
                    loading="lazy"
                    src={GeneralEngineeringLogo}
                    alt="General Engineering Logo"
                  />
                  <Link to="/general_engineering">General Engineering</Link>
                </div>
                <div className="s-dropdown-set">
                  <div className="s-dropdown-options">
                    <Link to="/mechanical_design">Mechanical Design</Link>
                    <Link to="/mechanical_manufacturing">
                      Mechanical Manufacturing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="s-nav-link-heading">
            <Link to="/vehicle_development" className="s-nav-link-text">
              <p>Vehicle Development</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path d="M1.70667 0.792998L6.99966 6.086L12.2927 0.792998L13.7067 2.207L8.41366 7.5C8.03861 7.87494 7.52999 8.08557 6.99966 8.08557C6.46934 8.08557 5.96072 7.87494 5.58566 7.5L0.292663 2.207L1.70667 0.792998Z" />
              </svg>
            </Link>
            <div className="s-dropdown">
              <div className="s-dropdown-container">
                <div className="s-dropdown-heading">
                  <img
                    loading="lazy"
                    src={VehicleDevelopmentLogo}
                    alt="Vehicle Development Logo"
                  />
                  <Link to="/vehicle_development">Vehicle Development</Link>
                </div>
                <div className="s-dropdown-set">
                  <div className="s-dropdown-options">
                    <Link to="/automotive_design">Automotive Design</Link>
                    <a href="./automotive manufacturing.html">
                      Automotive Manufacturing
                    </a>
                    <a href="./electric vehicle.html">Electric Vehicle</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="s-nav-link-heading">
            <a href="./3Dscan.html" className="s-nav-link-text">
              <p>3D Services</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <path d="M1.70667 0.792998L6.99966 6.086L12.2927 0.792998L13.7067 2.207L8.41366 7.5C8.03861 7.87494 7.52999 8.08557 6.99966 8.08557C6.46934 8.08557 5.96072 7.87494 5.58566 7.5L0.292663 2.207L1.70667 0.792998Z" />
              </svg>
            </a>
            <div className="s-dropdown">
              <div className="s-dropdown-container">
                <div className="s-dropdown-heading">
                  <img
                    loading="lazy"
                    src={ThreeDServicesLogo}
                    alt="3D Services Logo"
                  />
                  <a href="./3Dscan.html">3D Services</a>
                </div>
                <div className="s-dropdown-set">
                  <div className="s-dropdown-options">
                    <Link to="/3d_scanning">3D Scanning</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="s-nav-link-heading">
            <Link to="/company_branding" className="s-nav-link-text">
              <p>About Us</p>
            </Link>
          </div>
          <div className="s-contact-us">
            <Link to="/contact" className="s-nav-link-text">
              <p>Contact Us</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M2.00921 11.5892L0.833374 10.4108L5.24087 5.99999L0.833374 1.58916L2.01254 0.410828L6.4167 4.82166C6.72915 5.13421 6.90468 5.55805 6.90468 5.99999C6.90468 6.44193 6.72915 6.86578 6.4167 7.17833L2.00921 11.5892Z"
                  fill="#1A1A1A"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="s-mobile-nav-button mobile" onClick={toggleMobileNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <path
              d="M0.838287 0H18.8383V2.25H0.838287V0ZM0.838287 7.875H18.8383V10.125H0.838287V7.875ZM0.838287 15.75H18.8383V18H0.838287V15.75Z"
              fill="#B0B0B0"
            />
          </svg>
        </div>
      </div>
      <div
        className={` s-mobile-navbar mobileNavbar mobile ${
          isMobileNavOpen
            ? "activeMobileNavbar"
            : hasToggled
            ? "nonactiveMobileNavbar"
            : ""
        }`}
      >
        <div
          className="s-mobile-navbar-cancel-button"
          onClick={toggleMobileNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M11.589 1.5891L10.4107 0.410767L5.99987 4.8216L1.58904 0.410767L0.410706 1.5891L4.82154 5.99993L0.410706 10.4108L1.58904 11.5891L5.99987 7.17827L10.4107 11.5891L11.589 10.4108L7.17821 5.99993L11.589 1.5891Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="s-mobile-navlink-sets">
          <div className="s-mobile-navlink-set Engineering">
            <div className="s-mobile-navlink-heading">
              <Link
                to="/web_desgining"
                className="heading"
                onClick={toggleMobileNav}
              >
                Web Designing
              </Link>
            </div>
          </div>
          <div className="s-mobile-navlink-set Engineering">
            <div className="s-mobile-navlink-heading">
              <Link
                to="/web_development"
                className="heading"
                onClick={toggleMobileNav}
              >
                Web Development
              </Link>
            </div>
          </div>
          <div className="s-mobile-navlink-set Engineering">
            <div className="s-mobile-navlink-heading">
              <Link
                to="/app_development"
                className="heading"
                onClick={toggleMobileNav}
              >
                App Development
              </Link>
            </div>
          </div>
          <div className="s-mobile-navlink-set Engineering">
            <div className="s-mobile-navlink-heading">
              <Link
                to="/company_branding"
                className="heading"
                onClick={toggleMobileNav}
              >
                Company Branding
              </Link>
            </div>
          </div>
        </div>
        <div className="s-mobile-navlink-contact-button">
          <Link to="/contact" onClick={toggleMobileNav}>
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
