import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import CartList from '../../../../app/components/cart/cart-list';

function setup(p) {
  const props = {
    products: { 1: {id: 1, name: 'test', description: 'name', price: 14, image: 'test'} },
    updateQuantity: sinon.spy(),
    removeProduct: sinon.spy()
  };
  const enzymeWrapper = mount(<CartList {...props} />);
  return {
    enzymeWrapper,
    props
  };
};

describe('CartList component', () => {
  it('render self and subComponent', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('div.cart-list')).to.have.length(1);
    expect(enzymeWrapper.find('Cart')).to.have.length(1);
  })
});