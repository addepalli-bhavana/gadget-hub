import React from "react";

const Loader = ({ className }) => {
  let containerClassName = "";
  if (className === "big-loader") {
    containerClassName = "loader-container";
  } else if (className === "no-margin-big-loader") {
    containerClassName = "no-margin-loader-container";
  }

  return (
    <div className={containerClassName}>
      <div className={`loader ${className}`}></div>
    </div>
  );
};

export default Loader;
