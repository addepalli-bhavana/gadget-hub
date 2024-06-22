import React from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { formatPrice } from "../utils/helpers";

const GridView = ({ products}) => {
  return (
    <section className="products-grid">
      {products.map((product) => {
        const {image, name, price, id } = product
        return ( 
          <article className="product" key={id}>
            <div className="product-img-container">
              <img src={image} alt={name} className="product-img" />
              <Link to={`/products/${id}`} className="view-details-btn">
                view details <GrFormNextLink />
              </Link>
            </div>
            <div className="product-info-container">
              <h5>{name}</h5>
              <h5>{formatPrice(price)}</h5>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default GridView;
