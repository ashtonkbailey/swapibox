import PeopleCard from './PeopleCard.js';
import React from 'react'; 
import { shallow, mount } from 'enzyme';

describe('people card', () => {
  let mockCard;
  let wrapper;
  let mockAddToFavorites;
  
  beforeEach(() => {
    mockCard = { card: {
      favorite: false,
      homeworld: "Tatooine",
      index: 0,
      name: "Luke Skywalker",
      population: "200000",
      species: "Human"
    }
  };
    mockAddToFavorites = jest.fn(  );
    wrapper = shallow (<PeopleCard card={mockCard.card} addToFavorites={mockAddToFavorites}/>)
  })

  it ('should match the snapshot with all props passed in correctly', () => {
    expect(wrapper).toMatchSnapshot(); 
  })

  it('calls add to favorites method with the correct parameters', () => {
    const button = wrapper.find('.saber');
    button.simulate('click');
    expect(mockAddToFavorites).toHaveBeenCalledWith(mockCard)
  })
})