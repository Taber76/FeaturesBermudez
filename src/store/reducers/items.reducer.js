import { PRODUCTS } from "../../constants";
import { itemTypes } from "../types";

const { ADD_ITEM, MODIFY_ITEM, DELETE_ITEM } = itemTypes;

const initialState = {
  data: PRODUCTS,
  selected: null,
  filteredItems: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        selected: state.data.find((product) => product.id === action.productId),
      };
    case MODIFY_ITEM:
      return {
        ...state,
        selected: state.data.find((product) => product.id === action.productId),
      };
    case DELETE_ITEM:
      return {
        ...state,
        selected: null,
      };
    default:
      return state;
  }
};
