import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './Navigation';

describe('nagivation', () => {
  let wrapper;
  let mockDisplayContent;

  beforeEach(() => {
    mockDisplayContent = jest.fn();
    wrapper = shallow(<Navigation displayChosenContent={mockDisplayContent} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display chosen content on button click', () => {
    const button = wrapper.find('.people');
    button.simulate('click');
    expect(mockDisplayContent).toBeCalled();
  });
});
