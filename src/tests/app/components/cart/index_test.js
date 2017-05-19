import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { CartIndex } from '../../../../app/components/cart/index';

function setup(p) {
  const props = {
    products: { 1: {id: 1}, 2: { id:2 } },
    subtotal: 100,
    total: 118,
    ...p
  };
  const enzymeWrapper = mount(
    <MemoryRouter>
      <CartIndex {...props} />
    </MemoryRouter>
  );
  return {
    enzymeWrapper,
    props
  };
};

describe('Cart container component', () => {
  it('render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('CartList')).to.have.length(1);
    expect(enzymeWrapper.find('TotalCart')).to.have.length(1);
    expect(enzymeWrapper.find('Spinner')).to.have.length(1);
  });
  it('Render a message when products length is zero', () => {
    const { enzymeWrapper } = setup({products: {}});
    expect(enzymeWrapper.find('Well')).to.have.length(1);
    expect(enzymeWrapper.find('Well').find('h4'))
      .to.have.text('You have not products for checkout, go back to products page and add some products Buddy (屮◉◞益◟◉)屮')
  });
});