import { expect } from 'chai';
import * as Constants from '../../../app/constants/';
import ProductReducer from '../../../app/reducers/product-reducer';

describe('Product Reducer', () => {
  const initialState = {
    all: null,
    searchText: null
  }
  it('should return the initial state', () => {
    expect(ProductReducer(undefined, {})).to.eql(initialState);
  })
  it('should handle SET_PRODUCTS', () => {
    expect(ProductReducer(initialState, {
      type: Constants.SET_PRODUCTS,
      payload: { 1: { id: 1 } }
    })).to.eql({
      all: {
        1: { id: 1 }
      },
      searchText: null
    });
  });
  it('should handle SET_SEARCH_TEXT', () => {
    expect(ProductReducer(initialState, {
      type: Constants.SET_SEARCH_TEXT,
      payload: 'search text'
    })).to.eql({
      all: null,
      searchText: 'search text'
    });
  });
});