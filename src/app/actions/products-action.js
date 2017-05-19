import {
  SET_PRODUCTS,
  SET_SEARCH_TEXT
} from '../constants/';

export const setProducts = (products) => ({ type: SET_PRODUCTS, payload: products });
export const setSearchText = (text) => ({ type: SET_SEARCH_TEXT, payload: text });

// Async actions;

export const getProductsByPage = (page) => {
  return (dispatch, getState, { ProductAPI }) => {
    return ProductAPI.getByPage(page).request
      .then(response => {
        // console.log('products', response);
        const productsObj = {};
        response.data.forEach(p => productsObj[`${p.id}`] = p );
        dispatch(setProducts(productsObj));
      })
      .catch(error => {
        console.log('error to get products', error);
      })
  }
};

export const getAllProducts = () => {
  return (dispatch, getState, { ProductAPI }) => {
    return ProductAPI.getAll().request
      .then(response => {
        // console.log('products', response);
        const productsObj = {};
        response.data.forEach(p => productsObj[`${p.id}`] = p );
        dispatch(setProducts(productsObj));
      })
      .catch(error => {
        console.log('error to get products', error);
      })
  }
};