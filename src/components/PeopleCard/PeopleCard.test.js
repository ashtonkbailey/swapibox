import PeopleCard from './PeopleCard.js';
import React from 'react'; 
import { shallow, mount } from 'enzyme';

describe('people card', () => {
  const mockCard = {
    favorite: false,
    homeworld: "Tatooine",
    index: 0,
    name: "Luke Skywalker",
    population: "200000",
    species: "Human"
  }

  it ('should match the snapshot with all props passed in correctly', () => {
    const wrapper = shallow (<PeopleCard card={mockCard} addToFavorites={jest.fn()}/>)
    expect(wrapper).toMatchSnapshot(); 
  })
})