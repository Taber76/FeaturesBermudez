import * as FileSystem from "expo-file-system";

import { storesTypes } from "../types";
const { SELECT_STORE, FILTER_STORES, ADD_STORE } = storesTypes;

export const selectStore = (id) => ({
  type: SELECT_STORE,
  storeId: id,
});

export const filterProducts = (id) => ({
  type: FILTER_STORES,
  categoryId: id,
});

export const addStore = (store) => {
  return async (dispatch) => {
    const fileName = `${store.name}.jpg`;
    const filePath = `${FileSystem.documentDirectory}${fileName}`;
    try {
      await FileSystem.copyAsync({
        from: store.photoUri,
        to: filePath,
      });
      dispatch({
        type: ADD_STORE,
        store: { ...store, photoUri: filePath },
      });
    } catch (error) {
      console.error(error);
    }
  };
};
