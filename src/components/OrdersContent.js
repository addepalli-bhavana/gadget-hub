import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import CartContext from "../contexts/CartContext";
import { formatPrice } from "../utils/helpers";

const OrdersContent = () => {
  const { orders } = useContext(CartContext);
  return (
    <section className="section section-center orders">
      <div className="orders-list">
        {orders.map((item, idx) => {
          const {
            name,
            amount,
            price,
            deliveryDate,
            orderedOn,
            deliveryAddress,
            customerName,
            contactNumber,
            image,
          } = item;

          return (
            <article className="order" key={idx}>
              <img src={image} alt={name} />
              <div>
                <h5>
                  product name : <span>{name}</span>
                </h5>
                <h5>
                  price : <span>{formatPrice(price)}</span>
                </h5>
                <h5>
                  amount : <span>{amount}</span>
                </h5>
                <h5>
                  total price : <span>{formatPrice(price * amount)}</span>
                </h5>
                <h5>
                  ordered on : <span>{orderedOn}</span>
                </h5>
                <h5>
                  delivery date : <span>{deliveryDate}</span>
                </h5>
                <h5>
                  delivery status :
                  <span>
                    {Date.now() > new Date(deliveryDate).getTime()
                      ? " delivered"
                      : " not yet delivered"}
                  </span>
                </h5>
                <h5>
                  delivery address :{" "}
                  <span>
                    {customerName +
                      ", " +
                      contactNumber +
                      ", " +
                      deliveryAddress}
                  </span>
                </h5>
              </div>
            </article>
          );
        })}
      </div>
      <Link to="/products" className="btn orders-cont-btn">
        continue shopping <FaShoppingBag />
      </Link>
    </section>
  );
};

export default OrdersContent;
