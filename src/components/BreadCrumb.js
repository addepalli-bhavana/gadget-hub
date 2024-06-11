import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductsContext from "../contexts/ProductsContext";

const BreadCrumb = () => {
  const { singleProduct: product } = useContext(ProductsContext);
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((segment) => segment);
  let path = "";
  return (
    <section className="bread-crumb">
      <div className="section-center">
        <span>
          <Link to="/">home</Link>
          <span className="path-separator">&gt;</span>
        </span>
        {pathnames.map((name, index) => {
          path += `/${name}`;
          const isLast = index === pathnames.length - 1;
          const displayName = name === product?.id ? product.name : name;
          return (
            <span key={index}>
              {isLast ? (
                <span>{displayName}</span>
              ) : (
                <Link to={path}>{displayName}</Link>
              )}
              {!isLast && <span className="path-separator">&gt;</span>}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default BreadCrumb;
