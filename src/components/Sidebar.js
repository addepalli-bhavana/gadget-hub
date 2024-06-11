import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  FaTimes,
  FaShoppingCart,
  FaUserMinus,
  FaUserPlus,
} from "react-icons/fa";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import AuthContext from "../contexts/AuthContext";
import ProductsContext from "../contexts/ProductsContext";
import CartContext from "../contexts/CartContext";
import { sidebarLinks } from "../utils/constants";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useContext(ProductsContext);
  const { totalCartItems } = useContext(CartContext);
  const { isLoggedIn, logoutUser } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    closeSidebar();
    logoutUser();
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    toast.success("Logged out successfully!");
    history.replace("/login");
  };

  return (
    <aside className={`sidebar ${isSidebarOpen && "show-sidebar"}`}>
      <div className="sidebar-header">
        <Link to="/">
          <img src={logo} alt="gadget hub logo" />
        </Link>
        <button type="button" onClick={closeSidebar}  aria-label="close sidebar">
          <FaTimes />
        </button>
      </div>

      <ul className="sidebar-links">
        {sidebarLinks.map((link) => {
          const { id, label, url } = link;
          return (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                {label}
              </Link>
            </li>
          );
        })}
        {isLoggedIn && (
          <li>
            <Link to="/checkout" onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to="/orders" onClick={closeSidebar}>
              orders
            </Link>
          </li>
        )}
      </ul>

      <div className="side-cart-and-auth-btns">
        {isLoggedIn && (
          <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
            cart
            <span className="cart-icon">
              <FaShoppingCart />
              <span className="cart-value">{totalCartItems}</span>
            </span>
          </Link>
        )}
        {isLoggedIn ? (
          <button type="button" className="auth-btn" onClick={handleLogout}>
            logout
            <span className="auth-icon">
              <FaUserMinus />
            </span>
          </button>
        ) : (
          <Link to="/login" className="auth-btn" onClick={closeSidebar}>
            login
            <span className="auth-icon">
              <FaUserPlus />
            </span>
          </Link>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
