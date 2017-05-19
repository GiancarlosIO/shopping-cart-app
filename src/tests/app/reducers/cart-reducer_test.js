import React from 'react';
import { expect } from 'chai';
import * as Constants from '../../../app/constants/';
import CartReducer from '../../../app/reducers/cart-reducer';

describe('Cart reducer', () => {
  const initialState = {
    products: {},
    subtotal: null,
    total: null
  };
  it('should return the default state', () => {
    expect(CartReducer(undefined, {})).to.eql(initialState);
  });
  it('should handle ADD_PRODUCT_CART', () => {
    const product = { id: 1, name: 'test' };
    expect(CartReducer(initialState, {
      type: Constants.ADD_PRODUCT_CART,
      payload: product
    })).to.eql({
      ...initialState,
      products: { 1: { id: 1, name: 'test', quantity: 1 } }
    });
  });
  it('should handle REMOVE_PRODUCT_CART', () => {
    const state = {
      ...initialState,
      products: {
        1: {
          id: 1,
          quantity: 1
        }
      }
    }
    expect(CartReducer(state, {
      type: Constants.REMOVE_PRODUCT_CART,
      payload: 1
    })).to.eql({
      products: {},
      subtotal: null,
      total: null
    });
  });
  it('should handle UPDATE_QUANTITY_CART', () => {
    const state = {
      ...initialState,
      products: {
        1: { id:1, quantity: 1 }
      }
    }
    expect(CartReducer(state, {
      type: Constants.UPDATE_QUANTITY_CAR,
      payload: {id:1, quantity: 2}
    })).to.eql({
      products: {
        1: { id:1, quantity: 2 }
      },
      subtotal: null,
      total: null
    });
  });
  it('should handle UPDATE_TOTAL_CART', () => {
    const state = {
      ...initialState,
      products: {
        1: { id: 1, quantity: 1, price: 100 }
      }
    };
    expect(CartReducer(state, {
      type: Constants.UPDATE_TOTAL_CART
    })).to.eql({
      ...state,
      subtotal: 100,
      total: 118
    });
  })
});