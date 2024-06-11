import React, { useContext, useEffect } from "react";
import EmptyCart from "../components/EmptyCart"
import BreadCrumb from "../components/BreadCrumb";
import CheckoutContent from "../components/CheckoutContent";
import CartContext from "../contexts/CartContext";

const CheckoutPage = ({ setIsOrderPlaced }) => {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <BreadCrumb />
      {cart.length === 0 ? (
        <EmptyCart/>
      ) : (
        <CheckoutContent setIsOrderPlaced={setIsOrderPlaced} />
      )}
    </main>
  );
};

export default CheckoutPage;
