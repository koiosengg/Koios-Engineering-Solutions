import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SampleImage from "../../assets/Blog/Automotive Design.png";

function Design() {
  return (
    <>
      <Helmet>
        <title>
          Automotive Design Services for Smarter Vehicle Development
        </title>
        <meta
          name="description"
          content="KoiosEngg delivers complete automotive design services—concept, architecture, CAD modeling, interiors, and validation for 2W, 3W, EVs & mobility solutions."
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
              <h1>Automotive Design Services</h1>
            </div>
            <img src={SampleImage} alt="Automotive Design Services" />
          </div>
          <div className="blog-inner-bottom">
            <div className="blog-inner-text">
              <h2>Designing Smarter, Safer, and More Efficient Vehicles</h2>
              <p>
                The automotive industry is evolving at an unprecedented pace.
                From electric drivetrains to autonomous systems, modern vehicles
                demand design solutions that balance innovation, performance,
                and cost-efficiency. At KoiosEngg, we provide end-to-end
                automotive design services that help manufacturers and mobility
                startups transform bold ideas into market-ready vehicles.
              </p>
            </div>
            <div className="blog-inner-text">
              <h2>1. Concept & Aesthetic Design</h2>
              <p>
                Design begins with visual identity. Our experts create concept
                sketches and digital renders that bring a vehicle’s personality
                to life—whether it’s a micro mobility two wheeler ,High speed 2w
                , 3wheeler in L3 and L5 application , or a futuristic EV. Each
                design reflects a balance of style, ergonomics, and brand DNA.
              </p>
            </div>
            <div className="blog-inner-text">
              <h2>2. Vehicle Architecture & Packaging</h2>
              <p>
                Behind every beautiful exterior is a smart architecture. We
                design layouts for chassis, powertrain, interiors, and
                electronic systems to maximize space efficiency, safety, and
                comfort while meeting regulatory standards.
              </p>
            </div>
            <div className="blog-inner-text">
              <h2>3. 3D Modeling & CAD Development</h2>
              <p>
                Using advanced CAD tools, we create detailed 3D models of
                vehicle components and assemblies. These digital models enable
                quick design iterations, virtual testing, and seamless
                communication between design and engineering teams.
              </p>
            </div>
            <div className="blog-inner-text">
              <h2>4. Interior & Exterior Design Integration</h2>
              <ul>
                <li>
                  <strong>Exterior: </strong>
                  Streamlined surfaces, aerodynamics, and structural
                  feasibility.
                </li>
                <li>
                  <strong>Interior: </strong>
                  Ergonomic layouts, human-machine interface (HMI), infotainment
                  placement, and comfort-driven designs.
                </li>
              </ul>
              <p>
                We ensure that form meets function—aesthetics blend seamlessly
                with usability.
              </p>
            </div>
            <div className="blog-inner-text">
              <h2>5. Design Validation & CAE Support</h2>
              <p>
                Before moving to prototypes, our team conducts design validation
                using CAE (Computer-Aided Engineering) tools. This includes
                crash simulations, airflow studies, structural integrity tests,
                and durability analysis. Early validation ensures the design is
                both safe and manufacturable.
              </p>
            </div>
            <div className="blog-inner-text">
              <h2>Why KoiosEngg for Automotive Design?</h2>
              <ul>
                <li>
                  <strong>End-to-End Capability: </strong>
                  From sketches to 3D modeling and validation, everything under
                  one roof.
                </li>
                <li>
                  <strong>Domain Expertise: </strong>
                  Deep experience across 2W and 3W, intrafacility vehicles, EVs,
                  and mobility solutions.
                </li>
                <li>
                  <strong>Agile Iterations: </strong>
                  Faster design cycles with advanced digital modeling tools.
                </li>
                <li>
                  <strong>Customer-Centric Approach: </strong>
                  Tailored designs aligned with client brand identity and goals.
                </li>
              </ul>
            </div>
            <div className="blog-inner-text">
              <h2>The Future of Automotive Design</h2>
              <p>
                Tomorrow’s vehicles will be connected, and electric. Design will
                play a critical role in integrating new technologies while
                maintaining comfort, safety, and efficiency. At KoiosEngg, we’re
                not just designing vehicles—we’re designing the future of
                mobility.
              </p>
            </div>
            <div className="blog-inner-text">
              <h2>Conclusion</h2>
              <p>
                KoiosEngg offers comprehensive automotive design services that
                bridge creativity and engineering. Whether it’s creating
                eye-catching exteriors, ergonomic interiors, or validating
                complex vehicle systems, our team ensures every design is ready
                for the challenges of tomorrow’s roads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
