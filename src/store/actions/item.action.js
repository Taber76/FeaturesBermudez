import { itemTypes } from "../types";

const { ADD_ITEM, MODIFY_ITEM, DELETE_ITEM } = itemTypes;

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const modifyItem = (item) => ({
  type: MODIFY_ITEM,
  item: item,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id,
});
