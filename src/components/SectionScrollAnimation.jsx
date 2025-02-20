import React, { useEffect } from "react";

const SectionScrollAnimation = (className) => {
  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll(className);

    const watcher = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animate-active");
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsToAnimate.forEach((el) => {
      el.classList.add("scroll-animate");
      watcher.observe(el);
    });

    return () => {
      elementsToAnimate.forEach((el) => watcher.unobserve(el));
    };
  }, [className]);
};

export default SectionScrollAnimation;
