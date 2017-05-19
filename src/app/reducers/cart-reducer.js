import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART
} from '../constants/';

const initialState = {
  products: {},
  subtotal: null,
  total: null
};

export default function(state=initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      let product = {
        ...action.payload,
        quantity: state.products[`${action.payload.id}`] ? state.products[`${action.payload.id}`].quantity + 1 : 1
      }
      return {
        ...state,
        products: {
          ...state.products,
          [`${action.payload.id}`]: product
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
