import {
  SET_PRODUCTS
} from '../constants/';

export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products });

// Async actions;

export const getProductsByPage = (page) => {
  return (dispatch, getState, { ProductAPI }) => {
    return ProductAPI.getByPage(page).request
      .then(response => {
        console.log('products', response);
        const productsObj = {};
        response.data.forEach(p => productsObj[`${p.id}`] = p );
        dispatch(setProducts(productsObj));
      })
      .catch(error => {
        console.log('error to get products', error);
      })
  }
}