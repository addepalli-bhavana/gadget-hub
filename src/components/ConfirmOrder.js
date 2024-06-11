import React from "react";
import { MdCheckCircle } from "react-icons/md";

export const ConfirmOrder = () => {
  const today = new Date();
  let deliveryDate = new Date(
    today.getTime() + 2 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="confirm-order">
      <MdCheckCircle />
      <h3>confirm your order</h3>
      <p>Payment will be collected upon delivery.</p>
      <p>
        Estimated delivery date : <span>{deliveryDate}</span>
      </p>
    </section>
  );
};
export default ConfirmOrder;
