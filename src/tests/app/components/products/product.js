import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Product } from '../../../../app/components/products/product';

function setup() {
  const props = {
    id: 1,
    name: 'test',
    price: 20,
    image: 'test',
    description: 'test',
    handleClick: sinon.spy()
  };
  const enzymeWrapper = mount(<Product {...props} />);
  return {
    enzymeWrapper,
    props
  };
};

describe('Product component', () => {
  it('render self', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('div.product')).to.have.length(1);
    expect(enzymeWrapper.find('img')).to.have.length(1);
  });
  it('should call handleClick when add-button is clicked', () => {
    const { enzymeWrapper, props } = setup();
    enzymeWrapper.find('Button').simulate('click');
    expect(props.handleClick.callCount).to.eql(1);
  });
});