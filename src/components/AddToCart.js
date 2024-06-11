import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import CartContext from "../contexts/CartContext";

const AddToCart = ({ product }) => {
  const { addCartItem, cart } = useContext(CartContext);

  const isExistingCartItem = cart.find((cartItem) => {
    return cartItem.id === product.id;
  });

  const handleAddCartItem = () => {
    addCartItem(product);
    toast.success("Item added successfully");
  };

  return (
    <>
      {isExistingCartItem ? (
        <Link to="/cart" className="btn go-to-cart-btn">
          go to cart <GrFormNextLink />
        </Link>
      ) : (
        <Link
          to="/cart"
          className="btn add-to-cart-btn"
          onClick={handleAddCartItem}
        >
          add to cart <FaCartPlus />
        </Link>
      )}
    </>
  );
};

export default AddToCart;
