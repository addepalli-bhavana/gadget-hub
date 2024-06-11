import React from "react";
import { Link } from "react-router-dom";

import { FaShoppingBag } from "react-icons/fa";
import noOrders from "../assets/no-orders.png";
const NoOrders = () => {
  return (
    <section className="no-orders section section-center">
      <img src={noOrders} alt="no orders" />
      <h2>no orders placed yet!</h2>
      <p>
        Looks like you haven't placed any orders yet. Explore our collection and
        shop for amazing products!
      </p>
      <Link to="/products" className="btn no-orders-btn">
        shop now <FaShoppingBag />
      </Link>
    </section>
  );
};

export default NoOrders;
