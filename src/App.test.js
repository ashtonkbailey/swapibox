import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

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

  describe('fetchCurrFilm', () => {
    let generateRandomNum;
    let mockCurrFilm;

    beforeEach(() => {
      Math.random = jest.fn().mockImplementation(() => 0.4);
      mockCurrFilm = {
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
      wrapper.instance().fetchCurrFilm();
      // Expectation
      expect(mockGenerateRandomNum).toHaveBeenCalled();
    });

    it('should call cleanFilm', async () => {
      // Setup
      const mockCleanFilm = jest.fn();
      wrapper.instance().cleanFilm = mockCleanFilm;
      // Execution
      await wrapper.instance().fetchCurrFilm();
      // Expectation
      expect(mockCleanFilm).toHaveBeenCalled();
    });

    it('calls fetch with the correct parameters', () => {
      // Setup
      const expected = 'https://swapi.co/api/films/3';
      // Execution
      wrapper.instance().fetchCurrFilm();
      // Expectation
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should setState', async () => {
      // Setup
      const mockCleanFilm = jest.fn(() => ({ title: 'blahtitle', crawl: 'blahcrawl', year: 1770 }));
      const expected = { title: 'blahtitle', crawl: 'blahcrawl', year: 1770 };
      wrapper.instance().cleanFilm = mockCleanFilm;
      // Execution
      await wrapper.instance().fetchCurrFilm();
      // Expectation
      expect(wrapper.state().currFilm).toEqual(expected);
    });

    it('on fetch error, errorStatus is set', async () => {
      // Setup
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
        message: 'mock failure',
      }));
      // Execution
      await wrapper.instance().fetchCurrFilm();
      // Expectation
      expect(wrapper.state().errorStatus).toEqual('Error: mock failure');
    });
  });

  describe('displayChosenContent', () => {
    it.skip('should call fetchChosenContent', () => {
      // Setup
      const mockEvent = { preventDefault: () => {} };
      const mockFetchChosenContent = jest.fn();
      // Execution
      wrapper.instance().displayChosenContent(mockEvent);
      // Expectation
      expect(mockFetchChosenContent).toHaveBeenCalled();
    });
  });

  describe('fetchPropertyObj', () => {
    it('calls fetch with the correct parameter', async () => {
      // Setup

      // Execution

      // Expectation

    });

    it('returns the property object', async () => {
      // Setup
      
      // Execution

      // Expectation

    });
  });

  describe('cleanPeopleData', () => {
    it('returns a Promise array', () => {
      // Setup

      // Execution

      // Expectation

    });

    it('calls fetchPropertyObj', async () => {
      // Setup

      // Execution

      // Expectation

    });
  });

  describe('fetchChosenContent', () => {
    let mockCleanedPeople;

    beforeEach(() => {
      mockCleanedPeople = [];
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCleanedPeople),
      }));
    });

    it('calls fetch with the correct parameters', async () => {
      // Setup
      const expected = 'https://swapi.co/api/people/';
      // Execution
      await wrapper.instance().fetchPropertyObj(expected);
      // Expectation
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('calls cleanPeopleData', async () => {
      // Setup

      // Execution

      // Expectation

    });

    it('updates state', async () => {
      // Setup

      // Execution

      // Expectation

    });
  });

  describe('incrementCarousel', () => {
    it('updates state', () => {
      // Setup

      // Execution

      // Expectation

    });
  });

  describe('decrementCarousel', () => {
    it('updates state', () => {
      // Setup

      // Execution

      // Expectation

    });
  });
  
});
