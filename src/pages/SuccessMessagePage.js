import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import tick from "../assets/tick.gif";

const SuccessMessagePage = () => {
  const [isConfettiShown, setIsConfettiShown] = useState(true);
  const [isContentShown, setIsContentShown] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfettiShown(false);
      setIsContentShown(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main> 
      {isConfettiShown && (
        <section className="confetti">
          <ReactConfetti
            width={window.innerWidth - 20}
            height={window.innerHeight}
          />
        </section>
      )}
      {isContentShown && (
        <section className="success-message">
          <div className="section-center">
            <img src={tick} alt="tick" />
            <h2>order placed successfully.</h2>
            <h5>thank you for shopping!</h5>
          </div>
        </section>
      )}
    </main>
  );
};

export default SuccessMessagePage;
