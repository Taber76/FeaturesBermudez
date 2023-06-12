import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { categoriesReducer, storesReducer } from "./reducers/index";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  stores: storesReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
