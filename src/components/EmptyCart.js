import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import emptyCart from "../assets/empty-cart.png";

const EmptyCart = () => {
  return (
    <section className="empty-cart section-center section">
      <img src={emptyCart} alt="empty cart" />
      <h2>your cart is empty</h2>
      <p>
        Your cart is feeling light! Time to fill it up with your favorite items.
      </p>
      <Link to="/products" className="btn shop-btn">
        start shopping <FaShoppingBag />
      </Link>
    </section>
  );
};

export default EmptyCart;
