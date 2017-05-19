import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Filter } from '../../../../app/components/products/filter';

function setup() {
  const props = {
    handleChange: sinon.spy()
  };
  const enzymeWrapper = mount(<Filter {...props} />);
  return {
    enzymeWrapper,
    props
  };
};

describe('Filter component', () => {
  it('render self', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('h5')).to.have.length(1);
    expect(enzymeWrapper.find('input')).to.have.length(1);
  });
  it('should call handleChange when text change', () => {
    const { enzymeWrapper, props } = setup();
    enzymeWrapper.find('input').simulate('change', 'test');
    expect(props.handleChange.callCount).to.eql(1);
  });
})
