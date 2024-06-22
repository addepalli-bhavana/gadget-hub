import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import Loader from "./Loader";
import ProductsContext from "../contexts/ProductsContext";

const FeaturedProducts = () => {
  const {
    isProductsLoading: loading,
    hasProductsError: error,
    featuredProducts: products,
  } = useContext(ProductsContext);

  if (loading) {
    return <Loader className={"no-margin-big-loader"} />;
  }

  if (error) {
    return <></>;
  }

  return (
    <section className="featured-products">
      {products.map((product) => {
        return (
          <article className="featured-product" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="featured-img"
            />
            <Link to={`/products/${product.id}`} className="view-details-btn">
              view details <GrFormNextLink />
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default FeaturedProducts;
