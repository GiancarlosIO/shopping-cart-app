import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  UPDATE_QUANTITY_CAR,
  UPDATE_TOTAL_CART
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
      };
      return {
        ...state,
        products: {
          ...state.products,
          [`${action.payload.id}`]: product
        }
      };
    case REMOVE_PRODUCT_CART:
      console.log('removing', action);
      let products = { ...state.products };
      delete products[`${action.payload}`];
      return {
        ...state,
        products
      }
    case UPDATE_QUANTITY_CAR:
      let productToUpdate = { ...state.products[`${action.payload.id}`] };
      productToUpdate.quantity = action.payload.quantity;
      return {
        ...state,
        products: {
          ...state.products,
          [`${productToUpdate.id}`]: productToUpdate
        }
      }
    case UPDATE_TOTAL_CART:
      const productCarts = { ...state.products }
      let subtotal, total;
      if (Object.keys(productCarts).length > 0) {
        subtotal = Object.keys(productCarts).map(index => {
          return productCarts[`${index}`].price *productCarts[`${index}`].quantity;
        }).reduce((total, actual) => parseInt(total) + parseInt(actual));
        total = parseFloat(subtotal * 1.18).toFixed(2);
      } else {
        subtotal = null;
        total = null;
      }
      return {
        ...state,
        subtotal,
        total
      };
    default:
      return state;
  }
}
