import {
  ADD_PRODUCT_CART,
  UPDATE_QUANTITY_CAR,
  REMOVE_PRODUCT_CART,
  UPDATE_TOTAL_CART
} from '../constants/';

export const addProductCart = (product) => ({ type: ADD_PRODUCT_CART, payload: product });
export const removeProductCart = (id) => ({ type: REMOVE_PRODUCT_CART, payload: id });
export const updateQuantityCart = (id, quantity) => ({ type: UPDATE_QUANTITY_CAR, payload: {id, quantity} });
export const updateTotalCart = () => ({ type: UPDATE_TOTAL_CART });