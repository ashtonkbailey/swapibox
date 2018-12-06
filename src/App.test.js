import React from 'react'; 
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should clean up film when cleanFilm is called', () => {

    const film = {
      title: 'A New Hope',
      opening_crawl: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.',
      release_date: '1977-05-25'
    };
    
    const result = wrapper.instance().cleanFilm(film);
    const expected = {
      title: 'A New Hope',
      crawl: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.',
      year: '1977'
    };

    expect(result).toEqual(expected);
  });

  it('should generate a random number between 1 and 7', () => {
    //Setup
    Math.random = jest.fn().mockImplementation(() => 0.4);
    const expected = 3;
    //Execution
    const result = wrapper.instance().generateRandomNum();
    //Expectation
    expect(expected).toEqual(result);
  });

  describe('fetchCurrFilm', () =>{
    let generateRandomNum;
    let mockCurrFilm;

    beforeEach(() => {
      Math.random = jest.fn().mockImplementation(() => 0.4)
      mockCurrFilm = {
        title: '',
        crawl: '',
        year: ''
      };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockCurrFilm)
        })
      )
    });

    it('calls generateRandomNum', () => {
      //Setup
      const mockGenerateRandomNum = jest.fn()
      wrapper.instance().generateRandomNum = mockGenerateRandomNum;
      //Execution
      wrapper.instance().fetchCurrFilm();
      //Expectation
      expect(mockGenerateRandomNum).toHaveBeenCalled();
    });

     it('should call cleanFilm', async () => {
      //Setup
      const mockCleanFilm = jest.fn();
      wrapper.instance().cleanFilm = mockCleanFilm;
     //Execution
      await wrapper.instance().fetchCurrFilm();
      //Expectation
      expect(mockCleanFilm).toHaveBeenCalled();
     });

    it('calls fetch with the correct parameters', () => {
      //Setup
      const expected = 'https://swapi.co/api/films/3'
      //Execution
      wrapper.instance().fetchCurrFilm();
      //Expectation
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });

     it('should setState', async () => {
      //Setup
      const mockCleanFilm = jest.fn(() => {
        return {title: 'blahtitle', crawl: 'blahcrawl', year: 1770}
      });
      const expected = {title: 'blahtitle', crawl: 'blahcrawl', year: 1770}
      wrapper.instance().cleanFilm = mockCleanFilm;
      //Execution
      await wrapper.instance().fetchCurrFilm();
      //Expectation
      expect(wrapper.state().currFilm).toEqual(expected)
     });

    it('on fetch error, errorStatus is set', async () => {
      //Setup
      window.fetch = jest.fn().mockImplementation(() => Promise.reject({
        message: "mock failure"
      }))
      //Execution
      await wrapper.instance().fetchCurrFilm();
      //Expectation
      expect(wrapper.state().errorStatus).toEqual("Error: mock failure")
    });

  })

})
  
