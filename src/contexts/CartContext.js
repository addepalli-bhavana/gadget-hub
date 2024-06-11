import React, { useEffect, useReducer } from "react";
import reducer from "../reducers/CartReducer";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const initialState = {
    orders: [],
    cart: [],
    totalCartItems: 0,
    totalPrice: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const initializeCart = (cart) => {
    dispatch({ type: "INITIALIZE_CART", payload: cart });
  };

  const initializeOrders = (orders) => {
    dispatch({ type: "INITIALIZE_ORDERS", payload: orders });
  };

  const addCartItem = (product) => {
    dispatch({
      type: "ADD_CART_ITEM",
      payload: product,
    });
  };

  useEffect(() => {
    dispatch({ type: "COUNT_CART_TOTALS" });
  }, [state.cart]);

  const toggleCartItemAmount = (id, operation) => {
    dispatch({ type: "TOGGLE_CART_ITEM_AMOUNT", payload: { id, operation } });
  };

  const removeCartItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const storeOrders = (presentOrders) => {
    dispatch({ type: "STORE_ORDERS", payload: presentOrders });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        initializeCart,
        initializeOrders,
        addCartItem,
        removeCartItem,
        toggleCartItemAmount,
        clearCart,
        storeOrders,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
