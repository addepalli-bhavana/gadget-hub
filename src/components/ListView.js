import React from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { formatPrice } from "../utils/helpers";


const ListView = ({ products }) => {
  return ( 
    <section className="products-list">
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn details-btn">
                details <GrFormNextLink/>
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
