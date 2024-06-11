import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { GoCircleSlash } from "react-icons/go";
import { IoBagCheckOutline } from "react-icons/io5";
import BreadCrumb from "../components/BreadCrumb";
import EmptyCart from "../components/EmptyCart";
import CartItem from "../components/CartItem";
import CartContext from "../contexts/CartContext";
import { formatPrice } from "../utils/helpers";
import { toast } from "react-toastify";

const CartPage = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClearCart = () => {
    clearCart();
    toast.success("Your cart has been cleared!");
  };
  return (
    <main>
      <BreadCrumb />
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <section className="cart section-center section">
          <div className="cart-items-list">
            {cart.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
          <div className="continue-and-clear-btns">
            <Link to="/products" className="btn continue-btn">
              continue shopping <FaShoppingBag />
            </Link>
            <button
              type="button"
              className="btn clear-btn"
              onClick={handleClearCart}
            >
              clear cart <GoCircleSlash />
            </button>
          </div>
          <div className="total-price-and-checkout-btn">
            <h4>total price : {formatPrice(totalPrice)}</h4>
            <Link to="/checkout" className="btn checkout-btn">
              proceed to checkout <IoBagCheckOutline />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
};

export default CartPage;
