import React, { useEffect, useState } from "react";
import { ImHappy2 } from "react-icons/im";
import { IoBagCheck } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";

const Stats = () => {
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [productsSold, setProductsSold] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  useEffect(() => {
    const interval = 4000;
    const handleUpdateStats = (target, endValue) => {
      let startValue = 0;
      const duration = Math.floor(interval / endValue);
      const timer = setInterval(() => {
        startValue += 1;
        target(startValue);
        if (startValue === endValue) {
          clearInterval(timer);
        }
      }, duration);
    };
    handleUpdateStats(setHappyCustomers, 400);
    handleUpdateStats(setProductsSold, 600);
    handleUpdateStats(setYearsOfExperience, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="stats">
      <article className="stat">
        <span>
          <ImHappy2 />
        </span>
        <h4>{happyCustomers}</h4>
        <p>happy customers</p>
      </article>
      <article className="stat">
        <span>
          <IoBagCheck />
        </span>
        <h4>{productsSold}</h4>
        <p>products sold</p>
      </article>
      <article className="stat">
        <span>
          <FaClock />
        </span>
        <h4>{yearsOfExperience}</h4>
        <p>years of experience</p>
      </article>
    </div>
  );
};

export default Stats;
