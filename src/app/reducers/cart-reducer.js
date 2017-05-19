import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART
} from '../constants/';

const initialState = {
  products: null,
  subtotal: null,
  total: null
};

export default function(state=initialState, action) {
  switch (action.payload) {
    case ADD_PRODUCT_CART:
      return {
        ...state,
        products: {
          ...state.products,
          [`${action.payload.id}`]: action.payload
        }
      };
    case REMOVE_PRODUCT_CART:
      let products = { ...state.products };
      delete products[`${action.payload.id}`];
      return {
        ...state,
        products
      }
    default:
      return state;
  }
}
