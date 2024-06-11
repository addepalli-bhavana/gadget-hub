import React from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { formatPrice } from "../utils/helpers";

const GridView = ({ products}) => {
  return (
    <section className="products-grid">
      {products.map((product) => {
        const {thumbnail, title, price, id } = product
        return ( 
          <article className="product" key={id}>
            <div className="product-img-container">
              <img src={thumbnail} alt={title} className="product-img" />
              <Link to={`/products/${id}`} className="view-details-btn">
                view details <GrFormNextLink />
              </Link>
            </div>
            <div className="product-info-container">
              <h5>{title}</h5>
              <h5>{formatPrice(price)}</h5>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default GridView;
