import React, { lazy, Suspense, useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AuthContext from "./contexts/AuthContext";
import CartContext from "./contexts/CartContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const SuccessMessagePage = lazy(() => import("./pages/SuccessMessagePage"));
const PageNotFoundPage = lazy(() => import("./pages/PageNotFoundPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const SingleProductPage = lazy(() => import("./pages/SingleProductPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));

const App = () => {
  let { isLoggedIn, email } = useContext(AuthContext);
  const { cart, orders, initializeCart, initializeOrders } =
    useContext(CartContext);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (email) {
      const getData = async () => {
        email = email.split("@").join("").split(".").join("");
        setIsLoading(true);
        try {
          let response = await fetch(
            `https://gadget-hub-9c922-default-rtdb.firebaseio.com/${email}.json`
          );
          if (!response.ok) {
            let data = await response.json();
            throw new Error(data.error.message);
          }
          let data = await response.json();
          if (data) {
            if (data.cart) {
              initializeCart(data.cart);
            }
            if (data.orders) {
              initializeOrders(data.orders);
            }
          } else {
            initializeCart([]);
            initializeOrders([]);
          }
        } catch (error) {
          toast.error(error.message);
          console.log(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      getData();
    }
  }, [email]);

  useEffect(() => {
    if (email) {
      const postData = async () => {
        email = email.split("@").join("").split(".").join("");
        setIsLoading(true);
        try {
          let response = await fetch(
            `https://gadget-hub-9c922-default-rtdb.firebaseio.com/${email}.json`,
            {
              method: "PUT",
              body: JSON.stringify({ cart: [...cart], orders: [...orders] }),
              headers: { "Content-Type": "application/json" },
            }
          );
          if (!response.ok) {
            let errorData = await response.json();
            throw new Error(errorData.error.message);
          }
        } catch (error) {
          toast.error(error.message);
          console.log(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      postData();
    }
  }, [cart, orders]);

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Suspense fallback={<Loader className="big-loader" />}>
        {isLoading ? (
          <Loader className="big-loader" />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/products">
              <ProductsPage />
            </Route>
            <Route exact path="/register">
              {isLoggedIn ? <Redirect to="/" /> : <RegisterPage />}
            </Route>
            <Route exact path="/forgot-password">
              {isLoggedIn ? <Redirect to="/" /> : <ForgotPasswordPage />}
            </Route>
            <Route exact path="/login">
              {isLoggedIn ? <Redirect to="/" /> : <LoginPage />}
            </Route>
            <Route exact path="/products/:id">
              {isLoggedIn ? <SingleProductPage /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/cart">
              {isLoggedIn ? <CartPage /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/checkout">
              {isLoggedIn ? (
                <CheckoutPage setIsOrderPlaced={setIsOrderPlaced} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            {isOrderPlaced && (
              <Route exact path="/success-message">
                <SuccessMessagePage />
              </Route>
            )}
            <Route exact path="/orders">
              {isLoggedIn ? <OrdersPage /> : <Redirect to="/login" />}
            </Route>
            <Route path="*">
              <PageNotFoundPage />
            </Route>
          </Switch>
        )}
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
