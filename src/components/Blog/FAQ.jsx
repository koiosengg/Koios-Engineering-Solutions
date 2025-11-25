import React, { useState } from "react";

function FAQ() {
  const FAQ_DATA = [
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Malesuada vel mauris in egestas mollis fermentum.",
      answer:
        "Dolor sit amet consectetur. Malesuada vel mauris in egestas mollis fermentum tristique massa. Id imperdiet eu enim sit. Dolor sit amet consectetur. Malesuada vel mauris in egestas",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Malesuada vel mauris in egestas mollis fermentum.",
      answer:
        "Dolor sit amet consectetur. Malesuada vel mauris in egestas mollis fermentum tristique massa. Id imperdiet eu enim sit. Dolor sit amet consectetur. Malesuada vel mauris in egestas",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Malesuada vel mauris in egestas mollis fermentum.",
      answer:
        "Dolor sit amet consectetur. Malesuada vel mauris in egestas mollis fermentum tristique massa. Id imperdiet eu enim sit. Dolor sit amet consectetur. Malesuada vel mauris in egestas",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Malesuada vel mauris in egestas mollis fermentum.",
      answer:
        "Dolor sit amet consectetur. Malesuada vel mauris in egestas mollis fermentum tristique massa. Id imperdiet eu enim sit. Dolor sit amet consectetur. Malesuada vel mauris in egestas",
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur. Malesuada vel mauris in egestas mollis fermentum.",
      answer:
        "Dolor sit amet consectetur. Malesuada vel mauris in egestas mollis fermentum tristique massa. Id imperdiet eu enim sit. Dolor sit amet consectetur. Malesuada vel mauris in egestas",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="s-infrastructure">
      <div className="s-infrastructure-heading">
        <h2>Frequently Asked Questions</h2>
        <p>
          Get quick clarity on our services, development timelines, and
          manufacturing solutions.
        </p>
      </div>
      <div className="blog-faq">
        {FAQ_DATA.map((faqData, index) => (
          <React.Fragment key={index}>
            <div
              className={`blog-faq-set ${
                activeIndex === index ? "active-faq" : ""
              }`}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <span>{index + 1}.</span>

              <div className="blog-faq-set-container">
                <div className="blog-faq-set-text">
                  <h3>{faqData.question}</h3>
                  <p>{faqData.answer}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                >
                  <path
                    d="M13.6097 1.19466L6.94303 7.86133L0.276367 1.19466L1.4597 0.0113277L6.94303 5.49466L12.4264 0.0113277L13.6097 1.19466Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
