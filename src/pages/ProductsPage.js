import React, { useContext, useEffect } from "react";
import Filters from "../components/Filters";
import GridView from "../components/GridView";
import ListView from "../components/ListView";
import BreadCrumb from "../components/BreadCrumb";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ProductsContext from "../contexts/ProductsContext";


const ProductsPage = () => {
  const {
    hasProductsError: error,
    isProductsLoading: loading,
    filteredProducts: products,
    isGridView,
  } = useContext(ProductsContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loader className={"big-loader"} />;
  }

  return (
    <main>
      <BreadCrumb />
      {error ? (
        <Error />
      ) : (
        <section className="products section-center section">
          <Filters />
          {products.length < 1 ? (
            <h5 style={{ textTransform: "none" }}>
              Sorry, no products matched your search.
            </h5>
          ) : (
            <>
              {isGridView ? (
                <GridView products={products} />
              ) : (
                <ListView products={products} />
              )}
            </>
          )}
        </section>
      )}
    </main>
  );
};

export default ProductsPage;
