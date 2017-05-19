import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART
} from '../constants/';

export const addProductCart = (product) => ({ type: ADD_PRODUCT_CART, payload: product });
export const removeProductCart = (id) => ({ type: REMOVE_PRODUCT_CART, payload: id });