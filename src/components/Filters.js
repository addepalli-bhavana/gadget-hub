import React, { useContext } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import ProductsContext from "../contexts/ProductsContext";

const Filters = () => {
  const {
    switchToGridView,
    switchToListView,
    updateSortValue,
    updateSearchText,
    isGridView,
    sortValue,
    searchText,
  } = useContext(ProductsContext);

  return (
    <section className="filters">
      <div className="view-sort">
        <div className="view-btns">
          <button
            type="button"
            onClick={switchToGridView}
            className={`grid-view-btn ${isGridView && "active-view-btn"}`}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={switchToListView}
            className={`list-view-btn ${!isGridView && "active-view-btn"}`}
          >
            <BsList />
          </button>
        </div>
        <form>
          <label>Sort by: </label>
          <select
            name="sort"
            className="sort"
            value={sortValue}
            onChange={updateSortValue}
          >
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a-z)</option>
            <option value="name-z">name (z-a)</option>
          </select>
        </form>
      </div>

      <input
        type="text"
        name="search"
        placeholder="Search Here..."
        className="search"
        value={searchText}
        onChange={updateSearchText}
        autoComplete="off"
      />
    </section>
  );
};

export default Filters;
