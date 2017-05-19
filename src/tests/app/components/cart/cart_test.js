import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Cart from '../../../../app/components/cart/cart';

function setup() {
  const props = {
    updateQuantity: sinon.spy(),
    removeProduct: sinon.spy(),
    id: 1,
    name: 'product-name',
    image: 'test',
    description: 'test-description',
    price: 100,
    quantity: 5
  }
  const enzymeWrapper = mount(<Cart {...props} />);
  return {
    enzymeWrapper,
    props
  };
};

describe('Cart Component', () => {
  it('render self', () => {
    const { enzymeWrapper, props } = setup();
    expect(enzymeWrapper.find('img.img-card')).to.have.length(1);
    expect(enzymeWrapper).to.contain.text('product-name');
    expect(enzymeWrapper).to.contain.text('test');
    expect(enzymeWrapper).to.contain.text('100');
    expect(enzymeWrapper).to.contain.text('test-description');
    expect(enzymeWrapper).to.contain.text('5');
  });
  it('should call updateQuantity when input-quantity change', () => {
    const { props, enzymeWrapper } = setup();
    enzymeWrapper.find('input').simulate('change', 6);
    expect(props.updateQuantity.callCount).to.eql(1);
  });
  it('should call removeProduct when remove-button is clicked', () => {
    const { props, enzymeWrapper } = setup();
    enzymeWrapper.find('Button').simulate('click');
    expect(props.removeProduct.callCount).to.eql(1);
  });
});