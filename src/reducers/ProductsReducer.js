const ProductsReducer = (state, action) => {
  if (action.type === "PRODUCTS_LOADING") {
    return { ...state, isProductsLoading: true, hasProductsError: false };
  }

  if (action.type === "PRODUCTS_SUCCESS") {
    return {
      ...state,
      isProductsLoading: false,
      products: action.payload.sort((a, b) => a.price - b.price),
      featuredProducts: action.payload.slice(0, 6),
      filteredProducts: action.payload.sort((a, b) => a.price - b.price),
    };
  }

  if (action.type === "PRODUCTS_ERROR") {
    return { ...state, isProductsLoading: false, hasProductsError: true };
  }

  if (action.type === "SINGLE_PRODUCT_LOADING") {
    return {
      ...state,
      isSingleProductLoading: true,
      hasSingleProductError: false,
    };
  }

  if (action.type === "SINGLE_PRODUCT_SUCCESS") {
    return {
      ...state,
      singleProduct: action.payload,
      isSingleProductLoading: false,
    };
  }

  if (action.type === "SINGLE_PRODUCT_ERROR") {
    return {
      ...state,
      isSingleProductLoading: false,
      hasSingleProductError: true,
    };
  }

  if (action.type === "UPDATE_SORT_VALUE") {
    return { ...state, sortValue: action.payload };
  }

  if (action.type === "SORT_PRODUCTS") {
    let tempProducts = [...state.filteredProducts];
    if (state.sortValue === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (state.sortValue === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (state.sortValue === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
    if (state.sortValue === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
    }
    return { ...state, filteredProducts: tempProducts };
  }

  if (action.type === "UPDATE_SEARCH_TEXT") {
    return { ...state, searchText: action.payload };
  }

  if (action.type === "SEARCH_PRODUCTS") {
    const { products, searchText } = state;
    let tempProducts = [...products];
    tempProducts = tempProducts.filter((prod) => {
      return prod.title.toLowerCase().startsWith(searchText.toLowerCase());
    });
    return { ...state, filteredProducts: tempProducts };
  }

  if (action.type === "SWITCH_TO_GRID_VIEW") {
    return { ...state, isGridView: true };
  }

  if (action.type === "SWITCH_TO_LIST_VIEW") {
    return { ...state, isGridView: false };
  }

  if (action.type === "OPEN_SIDEBAR") {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === "CLOSE_SIDEBAR") {
    return { ...state, isSidebarOpen: false };
  }
};

export default ProductsReducer;
