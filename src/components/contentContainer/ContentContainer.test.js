import React from 'react';
import { mount } from 'enzyme';

import ContentContainer from './ContentContainer';
import PeopleCard from '../PeopleCard/PeopleCard';

describe('content container', () => {
  let mockCard;
  let mockFilm;
  let mockIndex;
  let mockDisplayedContent;
  let wrapper;
  let mockInitialContent;

  beforeEach(() => {
    mockCard = {
      favorite: false,
      homeworld: 'Tatooine',
      index: 0,
      name: 'Luke Skywalker',
      population: '200000',
      species: 'Human',
    };
    mockFilm = {
      crawl: 'It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.  Evading the dr…',
      title: 'The Empire Strikes Back',
      year: '1980',
    };
    mockIndex = 0;
    mockDisplayedContent = [
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
    mockInitialContent = [];
    wrapper = mount(<ContentContainer
      film={mockFilm}
      contents={mockDisplayedContent}
      addToFavorites={jest.fn()}
      incrementCarousel={jest.fn()}
      carouselIndex={mockIndex}
      key={0}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the film scroll if no contents are passed in', () => {
    wrapper = mount(<ContentContainer
      film={mockFilm}
      contents={mockInitialContent}
      addToFavorites={jest.fn()}
      incrementCarousel={jest.fn()}
      carouselIndex={mockIndex}
    />);
    expect(wrapper.find(PeopleCard).length).toEqual(0);
  });

  it('displays all of the people contents once they are fetched', () => {
    wrapper = mount(<ContentContainer
      film={mockFilm}
      contents={mockDisplayedContent}
      addToFavorites={jest.fn()}
      incrementCarousel={jest.fn()}
      carouselIndex={mockIndex}
    />);
    expect(wrapper.find(PeopleCard).length).toEqual(3);
  });
});
