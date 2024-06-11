import React, { useContext, useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import OrdersContent from "../components/OrdersContent";
import NoOrders from "../components/NoOrders";
import CartContext from "../contexts/CartContext";

const OrdersPage = () => {
  const { orders } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <BreadCrumb />
      {orders.length === 0 ? <NoOrders /> : <OrdersContent />}
    </main>
  );
};

export default OrdersPage;
