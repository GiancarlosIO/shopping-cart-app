import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Spinner from '../../../../app/components/cart/spinner';

function setup(p) {
  const props = {
    loading: false,
    text: 'Loading...',
    ...p
  };
  const enzymeWrapper = mount(<Spinner {...props} />);
  return {
    enzymeWrapper,
    props
  };
};

describe('Spinner component', () => {
  it('render self without flex class when loading is false', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('div.spinner-container')).to.have.length(1);
    expect(enzymeWrapper.find('div.flex')).to.have.length(0);
  });
  it('render self with flex class when loading is true', () => {
    const { enzymeWrapper } = setup({loading: true});
    expect(enzymeWrapper.find('div.spinner-container.flex')).to.have.length(1);
  });
  it('should render the prop text', () => {
    const { enzymeWrapper } = setup({text: 'Success'});
    expect(enzymeWrapper).to.contain.text('Success');
  });
})