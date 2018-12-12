import People from './People.js';
import React from 'react';
import { mount, shallow } from 'enzyme';

describe ('people',() => {
  let mockCard;
  let mockIndex;
  let wrapper;
  let mockAddToFavorites;
  let peopleData;
 

  beforeEach(() => {
    mockCard = {
      favorite: false,
      homeworld: 'Tatooine',
      index: 0,
      name: 'Luke Skywalker',
      population: '200000',
      species: 'Human',
    };
    mockAddToFavorites = jest.fn();
    wrapper = shallow (<People carouselIndex={mockIndex} addToFavorites={mockAddToFavorites}/>);
    peopleData = [
      mockCard,
      {
        favorite: false,
        homeworld: 'Tatooine',
        index: 1,
        name: 'C-3PO',
        population: '200000',
        species: 'Droid',
      },
      {
        favorite: false,
        homeworld: 'Naboo',
        index: 2,
        name: 'R2-D2',
        population: '4500000000',
        species: 'Droid',
      },
    ];
  })
  it('matches the snpashot with all parameters passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })
})