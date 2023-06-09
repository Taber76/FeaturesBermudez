import * as FileSystem from "expo-file-system";

import { productsTypes } from "../types";
const { SELECT_PRODUCT, FILTER_PRODUCTS, ADD_PRODUCT } = productsTypes;

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});

export const filterProducts = (id) => ({
  type: FILTER_PRODUCTS,
  categoryId: id,
});

export const addProduct = (product) => {
  return async (dispatch) => {
    const fileName = `${product.name}.jpg`;
    const filePath = `${FileSystem.documentDirectory}${fileName}`;
    try {
      await FileSystem.copyAsync({
        from: product.photoUri,
        to: filePath,
      });
      dispatch({
        type: ADD_PRODUCT,
        product,
      });
    } catch (error) {
      console.error(error);
    }
    dispatch({
      type: ADD_PRODUCT,
      product: { ...product, photoUri: filePath },
    });
  };
};
