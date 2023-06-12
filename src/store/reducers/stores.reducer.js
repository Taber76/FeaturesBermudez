import { STORES } from "../../constants";
import Store from "../../models/Store";

import { storesTypes } from "../types";
const { SELECT_STORE, FILTER_STORES, ADD_STORE } = storesTypes;

const initialState = {
  data: STORES,
  selected: null,
  filteredProducts: [],
};

const storesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_STORE:
      return {
        ...state,
        selected: state.data.find((store) => store.id === action.storeId),
      };
    case FILTER_STORES:
      return {
        ...state,
        filteredStores: state.data.filter((store) => store.categorie === action.categoryId),
      };
    case ADD_STORE:
      const newStore = new Store(
        action.store.name,
        action.store.categorie,
        action.store.description,
        action.store.photoUri,
        Date.now()
      );
      return {
        ...state,
        data: state.data.concat(newStore),
      };
    default:
      return state;
  }
};

export default storesReducer;
