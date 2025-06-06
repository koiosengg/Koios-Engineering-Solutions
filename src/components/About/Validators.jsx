import React, { useEffect, useState } from "react";

function Validators() {
  const [number1, setNumber1] = useState(1450);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  const targetNumber1 = 2022;
  const targetNumber2 = 70;
  const targetNumber3 = 13;

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber1((prev) => {
        const next = prev + 8;
        return next >= targetNumber1 ? targetNumber1 : next;
      });

      setNumber2((prev) => {
        const next = prev + 1;
        return next >= targetNumber2 ? targetNumber2 : next;
      });

      setNumber3((prev) => {
        const next = prev + 5;
        return next >= targetNumber3 ? targetNumber3 : next;
      });
    }, 50);

    // Stop interval when all targets are reached
    if (
      number1 >= targetNumber1 &&
      number2 >= targetNumber2 &&
      number3 >= targetNumber3
    ) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [number1, number2, number3]);

  return (
    <div className="s-aboutus-validators">
      <div className="s-validators-set">
        <p>{number1}</p>
        <span>Founded</span>
      </div>
      <div className="s-validators-set">
        <p>{number2}+</p>
        <span>Projects</span>
      </div>
      <div className="s-validators-set">
        <p>{number3}+</p>
        <span>Clients</span>
      </div>
    </div>
  );
}

export default Validators;
