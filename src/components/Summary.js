import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../contexts/CartContext";
import { formatPrice } from "../utils/helpers";

const Summary = ({ formData }) => {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <section className="summary">
      <div className="cart-items-list">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>

      <div className="address-and-price">
        <h4>order summary</h4>
        <p>
          customer name : <span>{formData.name}</span>
        </p>
        <p>
          contact number : <span>{formData.contactNumber}</span>
        </p>
        <p>
          delivery address : <span>{formData.address}</span>
        </p>
        <p>
          total price :<span>{formatPrice(totalPrice)}</span>
        </p>
      </div>
    </section>
  );
};

export default Summary;
