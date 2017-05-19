import React from 'react';
import { expect } from 'chai';
import * as Actions from '../../../app/actions/products-action';
import * as Constants from '../../../app/constants/';
import configureMockStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import nock from 'nock';
import ProductAPI from '../../../app/utils/api/product-api';

describe('Product actions', () => {
  describe('Sync actions', () => {
    it('should create an action of tpye SET_PRODUCTS', () => {
      const expectedAction = {
        type: Constants.SET_PRODUCTS,
        payload: {
          1: { id:1 },
          2: { id: 2 }
        }
      };
      expect(Actions.setProducts({
        1: { id:1 },
        2: { id: 2 }
      })).to.eql(expectedAction);
    });
    it('should create an action of type SET_SEARCH_TEXT', () => {
      const expectedAction = {
        type: Constants.SET_SEARCH_TEXT,
        payload: 'textTest'
      };
      expect(Actions.setSearchText('textTest')).to.eql(expectedAction);
    });
  });
  describe('Async actions', () => {
    afterEach(() => {
      nock.cleanAll()
    });
    it('dispatch an action of type SET_PRODUCTS after fetch products', () => {
      nock('http://localhost:3000')
        .get('/products')
        .reply(200, [ {id: 1}, {id: 2} ], {'Access-Control-Allow-Origin': '*'});
      const expectedActions = [
        { type: Constants.SET_PRODUCTS, payload: { 1: {id:1}, 2:{id:2} } }
      ];
      const middlewares = [ ReduxThunk.withExtraArgument({ ProductAPI }) ];
      const mockStore = configureMockStore(middlewares);
      const store = mockStore({ all: null, searchText: null });
      return store.dispatch(Actions.getAllProducts())
        .then(response => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
    it('dispatch an action of type SET_PRODUCTS after fetch products by page', () => {
      nock('http://localhost:3000')
        .get('/products?_page=1')
        .reply(200, [ {id: 1}, {id: 2} ], {'Access-Control-Allow-Origin': '*'});
      const expectedActions = [
        { type: Constants.SET_PRODUCTS, payload: { 1: {id:1}, 2: {id:2} } }
      ];
      const middlewares = [ ReduxThunk.withExtraArgument({ProductAPI}) ];
      const mockStore = configureMockStore(middlewares);
      const store = mockStore({ all: null, searchText: null });
      return store.dispatch(Actions.getProductsByPage(1))
        .then(response => {
          expect(store.getActions()).to.eql(expectedActions);
        })
    })
  });
});