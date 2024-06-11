const CartReducer = (state, action) => {
  if (action.type === "INITIALIZE_CART") {
    return {
      ...state,
      cart: action.payload,
    };
  }
  if (action.type === "INITIALIZE_ORDERS") {
    return {
      ...state,
      orders: action.payload,
    };
  }

  if (action.type === "ADD_CART_ITEM") {
    const { id, title, images, price, stock } = action.payload;
    const newItem = {
      id: id,
      title,
      price: price,
      image: images[0],
      amount: 1,
      maxStock: stock,
    };
    return { ...state, cart: [...state.cart, newItem] };
  }

  if (action.type === "COUNT_CART_TOTALS") {
    let totalCartItems = 0;
    for (const cartItem of state.cart) {
      totalCartItems += cartItem.amount;
    }
    let totalPrice = 0;
    for (const cartItem of state.cart) {
      totalPrice += cartItem.price * cartItem.amount;
    }
    return {
      ...state,
      totalCartItems,
      totalPrice,
    };
  }

  if (action.type === "TOGGLE_CART_ITEM_AMOUNT") {
    const { id, operation } = action.payload;
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === id) {
        if (operation === "inc") {
          return { ...cartItem, amount: cartItem.amount + 1 };
        } else {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
      } else {
        return cartItem;
      }
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const tempCart = state.cart.filter((cartItem) => {
      return cartItem.id !== action.payload;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "STORE_ORDERS") {
    return {
      ...state,
      orders: [...state.orders, ...action.payload],
    };
  }
};

export default CartReducer;
