import { combineReducers } from 'redux';

import CartReducer from './cart-reducer';
import ProductReducer from './product-reducer';

const rootReducer = combineReducers({
  cart: CartReducer,
  products: ProductReducer
});

export default rootReducer;