import { PRODUCTS } from "../../constants";
import { productsTypes } from "../types";

import Store from "../../models/Store";

const { SELECT_PRODUCT, FILTER_PRODUCTS, ADD_PRODUCT } = productsTypes;

const initialState = {
  data: PRODUCTS,
  selected: null,
  filteredProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.data.find((product) => product.id === action.productId),
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.data.filter((product) => product.categorie === action.categoryId),
      };
    case ADD_PRODUCT:
      const newStore = new Store(
        action.product.name,
        action.product.categorie,
        action.product.description,
        action.product.photoUri
      );
      return {
        ...state,
        data: state.data.concat(newStore),
      };
    default:
      return state;
  }
};

export default productsReducer;
