import React from "react";
import { Link } from "react-router-dom";
import { BiSolidShoppingBagAlt } from "react-icons/bi";

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-center section-center">
        <h1>welcome to gadget hub</h1>
        <Link to="/products" className="hero-btn">
          shop now <BiSolidShoppingBagAlt />
        </Link>
      </div>
      <div className="hero-overlay"></div>
    </header>
  );
};

export default Hero;
