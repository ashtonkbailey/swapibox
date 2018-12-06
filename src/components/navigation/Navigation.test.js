import React from 'react'; 
import { shallow } from 'enzyme';
import Navigation from './Navigation.js';
import PeopleCard from '../PeopleCard/PeopleCard.js';

describe ('nagivation', () => {
  let wrapper;
  let mockDisplayContent;
  let mockEvent;
  
  beforeEach(() => {
    mockDisplayContent = jest.fn();
    wrapper = shallow (<Navigation displayChosenContent = {mockDisplayContent} />)
    mockEvent = {preventDefault: () => {}}
  })

  it ('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})