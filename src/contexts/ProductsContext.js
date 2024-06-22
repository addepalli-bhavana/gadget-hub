import React, { useEffect, useReducer } from "react";
import reducer from "../reducers/ProductsReducer";
import { productsURL as url } from "../utils/constants";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const initialState = {
    isProductsLoading: false,
    hasProductsError: false,
    products: [],
    filteredProducts: [],
    featuredProducts: [],
    isSingleProductLoading: false,
    hasSingleProductError: false,
    singleProduct: {},
    sortValue: "price-lowest",
    searchText: "",
    isSidebarOpen: false,
    isGridView: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url) => {
    dispatch({ type: "PRODUCTS_LOADING" });
    try {
      const response = await fetch(`${url}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg);
      }
      const products = await response.json();
      dispatch({
        type: "PRODUCTS_SUCCESS",
        payload: products,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "PRODUCTS_ERROR" });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const fetchSingleProduct = async (url) => {
    dispatch({ type: "SINGLE_PRODUCT_LOADING" });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg);
      }
      const singleProduct = await response.json();
      dispatch({ type: "SINGLE_PRODUCT_SUCCESS", payload: singleProduct });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SINGLE_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    dispatch({ type: "SEARCH_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.sortValue, state.searchText]);

  const updateSortValue = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SORT_VALUE", payload: value });
  };

  const updateSearchText = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SEARCH_TEXT", payload: value });
  };

  const openSidebar = () => {
    dispatch({ type: "OPEN_SIDEBAR" });
  };

  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  };

  const switchToGridView = () => {
    dispatch({ type: "SWITCH_TO_GRID_VIEW" });
  };

  const switchToListView = () => {
    dispatch({ type: "SWITCH_TO_LIST_VIEW" });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        switchToGridView,
        switchToListView,
        updateSortValue,
        updateSearchText,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
