import { createSelector } from 'reselect';

const getSearchText = (state) => state.products.searchText;
const getProducts = (state) => state.products.all;

export const getFilteredProducts = createSelector(
  [ getSearchText, getProducts ],
  ( searchText, products ) => {
    if (searchText) {
      const productKeys = Object.keys(products);
      const productsFiltered = {};
      productKeys.forEach(key => {
        const product = products[`${key}`];
        if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ) {
          productsFiltered[`${product.id}`] = product;
        }
      })
      return productsFiltered;
    } else {
      return products;
    }
  }
);

