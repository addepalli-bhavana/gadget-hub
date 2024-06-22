import React, { useContext } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-toastify";
import CartContext from "../contexts/CartContext";
import { formatPrice } from "../utils/helpers";

const CartItem = ({ item }) => {
  const { removeCartItem, toggleCartItemAmount } = useContext(CartContext);
  const { id, image, name, price, amount, maxStock } = item;

  const handleIncreaseAmount = () => {
    const newAmount = amount + 1;
    if (newAmount > maxStock) {
      toast.info("Maximum stock reached. You cannot increase further.");
    } else {
      toggleCartItemAmount(id, "inc");
    }
  };

  const handleDecreaseAmount = () => {
    const newAmount = amount - 1;
    if (newAmount === 0) {
      toast.info("Minimum amount reached. You cannot decrease further.");
    } else {
      toggleCartItemAmount(id, "dec");
    }
  };

  const handleRemoveCartItem = (id) => {
    removeCartItem(id);
    toast.success("Item removed from your cart!");
  };

  return (
    <article className="cart-item">
      <img src={image} alt={name} />
      <div className="cart-item-info">
        <h4>{name}</h4>
        <h5>{formatPrice(price)}</h5>
        <div className="btns">
          <button
            type="button"
            className="btn amount-btn"
            onClick={handleDecreaseAmount}
          >
            <FaMinus />
          </button>
          <h2 className="amount">{amount}</h2>
          <button
            type="button"
            className="btn amount-btn"
            onClick={handleIncreaseAmount}
          >
            <FaPlus />
          </button>
          <button
            type="button"
            className="remove-btn"
            onClick={() => {
              handleRemoveCartItem(id);
            }}
          >
            <FaTrash />
          </button>
        </div>
        <p className="subtotal">subtotal : {formatPrice(price * amount)}</p>
      </div>
    </article>
  );
};

export default CartItem;
