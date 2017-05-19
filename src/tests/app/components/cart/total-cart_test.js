import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import TotalCart from '../../../../app/components/cart/total-cart';

function setup(p) {
  const props = {
    total: 118,
    subtotal: 100,
    ...p
  };
  const enzymeWrapper = mount(<TotalCart {...props} />);
  return {
    enzymeWrapper,
    props
  };
};

describe('TotalCart component', () => {
  it('render self', () => {
    const { enzymeWrapper, props } = setup();
    expect(enzymeWrapper.find('div.total-cart')).to.have.length(1);
    expect(enzymeWrapper).to.contain.text(props.total);
    expect(enzymeWrapper).to.contain.text(props.subtotal);
    expect(enzymeWrapper).to.contain.text(props.subtotal*0.18);
  });
});