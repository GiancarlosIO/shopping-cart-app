import React from 'react';
import { expect } from 'chai';
import * as Constants from '../../../app/constants/';
import * as Actions from '../../../app/actions/cart-actions';

describe('Cart actions', () => {
  describe('sync actions', () => {
    it('should create an action of type ADD_PRODUCT_CART', () => {
      const expectedAction = {
        type: Constants.ADD_PRODUCT_CART,
        payload: {
          id: 1,
          name: 'test product name'
        }
      };
      expect(Actions.addProductCart({
        id: 1,
        name: 'test product name'
      })).to.eql(expectedAction);
    });
    it('should create an action of type UPDATE_QUANTITY_PRODUCT', () => {
      const expectedAction = {
        type: Constants.UPDATE_QUANTITY_CAR,
        payload: {
          id: 1,
          quantity: 10
        }
      };
      expect(Actions.updateQuantityCart(1, 10)).to.eql(expectedAction);
    });
    it('should create an action of typpe REMOVE_PRODUCT_CART', () => {
      const expectedAction = {
        type: Constants.REMOVE_PRODUCT_CART,
        payload: 1
      };
      expect(Actions.removeProductCart(1)).to.eql(expectedAction);
    });
    it('should create an action of type UPDATE_TOTAL_CART', () => {
      const expectedAction = {
        type: Constants.UPDATE_TOTAL_CART
      };
      expect(Actions.updateTotalCart()).to.eql(expectedAction);
    })
  })
})