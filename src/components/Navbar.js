import React, { useContext } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import {
  FaBars,
  FaShoppingCart,
  FaUserMinus,
  FaUserPlus,
} from "react-icons/fa";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import ProductsContext from "../contexts/ProductsContext";
import AuthContext from "../contexts/AuthContext";
import CartContext from "../contexts/CartContext";
import { navLinks } from "../utils/constants";

const Navbar = () => {
  const { openSidebar } = useContext(ProductsContext);
  const { totalCartItems } = useContext(CartContext);
  const { isLoggedIn, logoutUser } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    logoutUser();
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    toast.success("Logged out successfully!");
    history.replace("/login");
  };

  return (
    <nav>
      <div className="section-center nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="gadget hub logo" />
          </Link>
          <button
            type="button"
            onClick={openSidebar}
            aria-label="open sidebar"
          >
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => {
            const { id, label, url } = link;
            return (
              <li key={id}>
                <NavLink exact to={url} activeClassName="active-nav-link">
                  {label}
                </NavLink>
              </li>
            );
          })}
          {isLoggedIn && (
            <li>
              <NavLink exact to="/checkout" activeClassName="active-nav-link">
                checkout
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink exact to="/orders" activeClassName="active-nav-link">
                orders
              </NavLink>
            </li>
          )}
        </ul>

        <div className="nav-cart-and-auth-btns">
          {isLoggedIn && (
            <Link to="/cart" className="cart-btn">
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
            <Link to="/login" className="auth-btn">
              login
              <span className="auth-icon">
                <FaUserPlus />
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
