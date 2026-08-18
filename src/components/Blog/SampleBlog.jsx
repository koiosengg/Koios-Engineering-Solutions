import React from "react";
import { Link } from "react-router-dom";
import SampleImage from "../../assets/Sample Image.webp";

function SampleBlog() {
  return (
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
            <h1>The Ultimate Guide to Our Industry 2025</h1>
          </div>
          <img src={SampleImage} alt="Blog post cover image" />
        </div>
        <div className="blog-inner-bottom">
          <div className="blog-inner-text">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Proin lacinia egestas
              felis dolor. Scelerisque mauris lorem mauris et ut fames lectus
              tempor at. Tortor tincidunt morbi egestas congue vulputate donec.
              Sed nec etiam facilisis morbi purus est viverra nisl eu. Convallis
              pharetra etiam quam cursus. Quis tempor aliquam in lacinia morbi
              dolor odio sed. Suspendisse ut nec quis id amet donec cras. Lorem
              ipsum dolor sit amet consectetur. Proin lacinia egestas felis
              dolor. Scelerisque mauris lorem mauris et ut fames lectus tempor
              at. Tortor tincidunt morbi egestas congue vulputate donec. Sed nec
              etiam facilisis morbi purus est viverra nisl eu. Convallis
              pharetra etiam quam cursus.
            </p>
          </div>
          <div className="blog-inner-text">
            <h2>What You’ll Learn</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Proin lacinia egestas
              felis dolor. Scelerisque mauris lorem mauris et ut fames lectus
              tempor at.
              <br />
              <br /> Tortor tincidunt morbi egestas congue vulputate donec. Sed
              nec etiam facilisis morbi purus est viverra nisl eu. Convallis
              pharetra etiam quam cursus. Quis tempor aliquam in lacinia morbi
              dolor odio sed. Suspendisse ut nec quis id amet donec cras. Lorem
              ipsum dolor sit amet consectetur.
              <br />
              <br /> Proin lacinia egestas felis dolor. Scelerisque mauris lorem
              mauris et ut fames lectus tempor at. Tortor tincidunt morbi
              egestas congue vulputate donec. Sed nec etiam facilisis morbi
              purus est viverra nisl eu. Convallis pharetra etiam quam cursus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleBlog;
