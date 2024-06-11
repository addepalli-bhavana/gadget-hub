import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import App from "./App";
import NoInternet from "./components/NoInternet";
import "./index.css";
import { ProductsProvider } from "./contexts/ProductsContext";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

const Index = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(window.navigator.onLine);
    };
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);
    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  return isOnline ? (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
          <ToastContainer
            position="top-right"
            pauseOnFocusLoss={false}
            closeOnClick
            theme="colored"
          />
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  ) : (
    <NoInternet />
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

serviceWorkerRegistration.register();
