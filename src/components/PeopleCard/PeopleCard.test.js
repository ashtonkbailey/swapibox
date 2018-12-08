import React from 'react';
import { shallow } from 'enzyme';

import PeopleCard from './PeopleCard';

describe('people card', () => {
  let mockCard;
  let wrapper;
  let mockAddToFavorites;

  beforeEach(() => {
    mockCard = {
      card: {
        favorite: false,
        homeworld: 'Tatooine',
        index: 0,
        name: 'Luke Skywalker',
        population: '200000',
        species: 'Human',
      },
    };
    mockAddToFavorites = jest.fn();
    wrapper = shallow(<PeopleCard card={mockCard.card} addToFavorites={mockAddToFavorites} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls add to favorites method with the correct parameters', () => {
    const button = wrapper.find('.saber');
    button.simulate('click');
    expect(mockAddToFavorites).toHaveBeenCalledWith(mockCard);
  });
});
