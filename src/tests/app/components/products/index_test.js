import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { ProductsIndex } from '../../../../app/components/products/index';

function setup() {
  const props = {
    products: { 1: { id:1, name: 'test', price: 20, description: 'test', image: 'test' } },
    dispatch: sinon.spy()
  };
  const enzymeWrapper = mount(<ProductsIndex {...props} />);
  return {
    enzymeWrapper,
    props
  }
};

describe('ProductsIndex Component', () => {
  it('render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('PageHeader')).to.have.length(1);
    expect(enzymeWrapper.find('Filter')).to.have.length(1);
    expect(enzymeWrapper.find('ProductList')).to.have.length(1);
  });
})