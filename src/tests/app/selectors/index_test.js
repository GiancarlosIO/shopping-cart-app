import { expect } from 'chai';
import { getFilteredProducts } from '../../../app/selectors/';
import ProductReducer from '../../../app/reducers/product-reducer';

describe('Selectors', () => {
  describe('Products', () => {
    const initialState = {
      products: {
        all: null,
        searchText: null
      }
    };
    const stateWithData = {
      products: {
        all: {
          1: { id: 1, name: 'test product' }
        },
        searchText: 'test'
      }
    };
    afterEach(() => {
      getFilteredProducts.resetRecomputations();
    });
    it('should filter the products by search text', () => {
      expect(getFilteredProducts(stateWithData)).to.eql({
        1: { id:1, name: 'test product' }
      });
    });
    it('should call only one time if the filtered products are the same', () => {
      const state = { ...stateWithData };
      state.products.searchText = 'pro';
      getFilteredProducts(state);
      getFilteredProducts(state);
      getFilteredProducts(state);
      expect(getFilteredProducts.recomputations()).to.eql(1);
    });
    it('should return an empty object when searchText not match', () => {
      const state = { ...stateWithData };
      state.products.searchText = '123';
      expect(getFilteredProducts(state)).to.eql({});
    });
  });
});