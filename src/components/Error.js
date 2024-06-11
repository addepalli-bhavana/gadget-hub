import React from "react";
import { IoMdRefresh } from "react-icons/io";
import error from "../assets/error.png";

const Error = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <section className="error section section-center">
      <img src={error} alt="exclamation mark" />
      <h2>oops! something went wrong</h2>
      <p>
        We're sorry, but it seems like something went wrong. Please try again
        later or contact support for assistance.
      </p>
      <button type="button" className="btn retry-btn" onClick={handleRetry}>
        retry
        <IoMdRefresh />
      </button>
    </section>
  );
};

export default Error;
