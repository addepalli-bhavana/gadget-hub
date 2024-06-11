import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Loader from "../components/Loader";
import Error from "../components/Error";
import AddToCart from "../components/AddToCart";
import Rating from "../components/Rating";
import ProductImages from "../components/ProductImages";
import ProductsContext from "../contexts/ProductsContext";
import { formatPrice } from "../utils/helpers";
import { singleProductURL as url } from "../utils/constants";

const SingleProductPage = () => {
  const {
    hasSingleProductError: error,
    isSingleProductLoading: loading,
    singleProduct: product,
    fetchSingleProduct,
  } = useContext(ProductsContext);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return <Loader className={"big-loader"} />;
  }

  const {
    images,
    title,
    rating,
    price,
    description,
    stock,
    id: sku,
    brand,
  } = product;

  return (
    <main>
      <BreadCrumb />
      {error ? (
        <Error />
      ) : (
        <section className="section section-center single-product">
          <ProductImages images={images} />
          <section className="single-product-info">
            <h2>{title}</h2>
            <Rating rating={rating} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>available : </span>
              {stock > 0 ? "in stock" : "out of stock"}
            </p>
            <p className="info">
              <span>id : </span> 
              {sku}
            </p>
            <p className="info">
              <span>brand : </span>
              {brand}
            </p>
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </section>
      )}
    </main>
  );
};

export default SingleProductPage;
