import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { ProductList } from '../../../../app/components/products/product-list';

function setup(p) {
  const props = {
    products: {
      1: { id: 1, name: 'test', description: 'test', image: 'test', price: 10 }
    },
    handleClick: sinon.spy(),
    ...p
  }
  const enzymeWrapper = mount(<ProductList {...props} />);
  return {
    enzymeWrapper,
    props
  };
};

describe('ProductList component', () => {
  it('should render sefl', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('Product')).to.have.length(1);
  });
  it('should render a <loading> when products not exists', () => {
    const { enzymeWrapper } = setup({products: null});
    expect(enzymeWrapper.find('h3')).to.have.text('Loading...');
  });
})
