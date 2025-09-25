import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Home/Tools/Desktop Background.png";
import SampleImage from "../../assets/Sample Image.png";

function OurBlogs() {
  return (
    <div className="s-infrastructure our-blogs">
      <div className="s-infrastructure-heading">
        <h2>Our Blogs</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
          volutpat diam turpis aliquam a. Dictum massa ut sit odio. Quis augue
          risus morbi dictum sem varius. Non.
        </p>
      </div>
      <div className="s-tools-container">
        <Link to="/" className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={SampleImage} />
            </div>
            <h3>Blog 1 </h3>
          </section>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
          </p>
        </Link>
        <Link to="/" className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={SampleImage} />
            </div>
            <h3>Blog 1 </h3>
          </section>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
          </p>
        </Link>
        <Link to="/" className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={SampleImage} />
            </div>
            <h3>Blog 1 </h3>
          </section>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
          </p>
        </Link>
        <Link to="/" className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={SampleImage} />
            </div>
            <h3>Blog 1 </h3>
          </section>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
          </p>
        </Link>
        <Link to="/" className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={SampleImage} />
            </div>
            <h3>Blog 1 </h3>
          </section>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
          </p>
        </Link>
        <Link to="/" className="s-tools-set">
          <img src={DesktopBackground} className="s-tools-set-background" />
          <section>
            <div className="s-tools-set-img">
              <img src={SampleImage} />
            </div>
            <h3>Blog 1 </h3>
          </section>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tortor eget at dolor nibh
            volutpat
          </p>
        </Link>
      </div>
    </div>
  );
}

export default OurBlogs;
