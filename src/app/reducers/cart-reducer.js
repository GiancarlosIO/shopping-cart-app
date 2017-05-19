import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  UPDATE_QUANTITY_CAR
} from '../constants/';

const initialState = {
  products: {
    0 : {
      id: 0,
      name: "Product Nº 1",
      price: "99999",
      image: "http://lorempixel.com/150/150/animals/",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      quantity: 3
    }
  },
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
    default:
      return state;
  }
}
