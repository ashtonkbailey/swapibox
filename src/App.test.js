import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import People from './components/People/People'

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('cleanFilm', () => {
    it('should clean up film when cleanFilm is called', () => {
      const film = {
        title: 'A New Hope',
        opening_crawl: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.',
        release_date: '1977-05-25',
      };
      const result = wrapper.instance().cleanFilm(film);
      const expected = {
        title: 'A New Hope',
        crawl: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.',
        year: '1977',
      };
      expect(result).toEqual(expected);
    });
  });

  describe('generateRandomNum', () => {
    it('should generate a random number between 1 and 7', () => {
      // Setup
      Math.random = jest.fn().mockImplementation(() => 0.4);
      const expected = 3;
      // Execution
      const result = wrapper.instance().generateRandomNum();
      // Expectation
      expect(expected).toEqual(result);
    });
  });

  describe('componentDidMount', () => {
    it('calls fetchRandomFilm', () => {
      // Setup
      let mockFetchRandomFilm = jest.fn();
      wrapper.instance().fetchRandomFilm = mockFetchRandomFilm;
      // Execution
      wrapper.instance().componentDidMount();
      // Expectation
      expect(mockFetchRandomFilm).toHaveBeenCalled();
    });

    it('calls fetchChosenContent', () => {
      // Setup
      let mockFetchChosenContent = jest.fn();
      wrapper.instance().fetchChosenContent = mockFetchChosenContent;
      // Execution
      wrapper.instance().componentDidMount();
      // Expectation
      expect(mockFetchChosenContent).toHaveBeenCalled();
    });
  });

  describe('fetchRandomFilm', () => {
    beforeEach(() => {
      Math.random = jest.fn().mockImplementation(() => 0.4);
      let mockCurrFilm = {
        title: '',
        crawl: '',
        year: '',
      };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCurrFilm),
      }));
    });

    it('calls generateRandomNum', () => {
      // Setup
      const mockGenerateRandomNum = jest.fn();
      wrapper.instance().generateRandomNum = mockGenerateRandomNum;
      // Execution
      wrapper.instance().fetchRandomFilm();
      // Expectation
      expect(mockGenerateRandomNum).toHaveBeenCalled();
    });

    it('calls fetch with the correct parameters', () => {
      // Setup
      const expected = 'https://swapi.co/api/films/3';
      // Execution
      wrapper.instance().fetchRandomFilm();
      // Expectation
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should call cleanFilm', async () => {
      // Setup
      const mockCleanFilm = jest.fn();
      wrapper.instance().cleanFilm = mockCleanFilm;
      // Execution
      await wrapper.instance().fetchRandomFilm();
      // Expectation
      expect(mockCleanFilm).toHaveBeenCalled();
    });

    it('should setState', async () => {
      // Setup
      const mockCleanFilm = jest.fn(() => ({ title: 'blahtitle', crawl: 'blahcrawl', year: 1770 }));
      const expected = { title: 'blahtitle', crawl: 'blahcrawl', year: 1770 };
      wrapper.instance().cleanFilm = mockCleanFilm;
      // Execution
      await wrapper.instance().fetchRandomFilm();
      // Expectation
      expect(wrapper.state().currFilm).toEqual(expected);
    });

    it('on fetch error, errorStatus is set', async () => {
      // Setup
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
        message: 'mock failure',
      }));
      // Execution
      await wrapper.instance().fetchRandomFilm();
      // Expectation
      expect(wrapper.state().errorStatus).toEqual('Error: mock failure');
    });

    it('should set localStorage', () => {
      // Setup
      const currFilm = {
        title: '',
        crawl: '',
        year: '',
      };
      // Execution
      localStorage.setItem('current film', JSON.stringify(currFilm));
      // Expectation
      expect(wrapper.state().currFilm).toEqual(currFilm);
    });
  });

  describe('fetchChosenContent', () => {
    it.skip('instantiates new People', async () => {
      // Setup
      jest.mock('./components/People/People');
      const mockPeopleData = await new People();
      // Execution
      await wrapper.instance().fetchChosenContent();
      // Expectation
      expect(People).toHaveBeenCalledTimes(1);
    });

    it('instantiates new Planets', async () => {
      // Setup
      // Execution
      // Expectation
    });

    it('instantiates new Vehicles', async () => {
      // Setup
      // Execution
      // Expectation
    });
  });

  describe('displayChosenContent', () => {
    it.skip('gets localStorage', () => {
      // Setup
      const mockEvent = { preventDefault: () => {} };
      const mockStorage = {
        displayedContent: [{}, {}],
        chosenContent: 'blah',
      };
      const expected = {
        displayedContent: [{}, {}],
        chosenContent: 'blah',
      }
      // Execution
      wrapper.instance().displayChosenContent(mockEvent);
      JSON.parse(localStorage.getItem(mockStorage));
      // Expectation
      expect(wrapper.state().displayedContent).toEqual(expected);
    });
  });
  
  describe('incrementCarousel', () => {
    it('updates state', () => {
      // Setup
      const expected = 1;
      // Execution
      wrapper.instance().incrementCarousel();
      // Expectation
      expect(wrapper.state().carouselIndex).toEqual(expected);
    });
  });

  describe('decrementCarousel', () => {
    it('updates state', () => {
      // Setup
      const expected = 9;
      // Execution
      wrapper.instance().decrementCarousel();
      // Expectation
      expect(wrapper.state().carouselIndex).toEqual(expected);
    });
  });

  describe('addFavePeople', () => {
    it.skip('should update localStorage', () => {
      // Setup
      const peopleData = [
        {name: "Luke Skywalker", homeworld: "Tatooine", population: "200000", species: "Human", index: 0,},
        {name: "C-3PO", homeworld: "Tatooine", population: "200000", species: "Droid", index: 1,},
      ];
      // Execution
      wrapper.instance().addFavePeople();
      const itemsInStorage = JSON.parse(localStorage.getItem('people')).length;
      // Expectation
      expect(itemsInStorage).toEqual(2)
    });
  });

  describe('addToFavorites', () => {
    it('maps over favorites', () => {
      // Setup

    });
  });
});
