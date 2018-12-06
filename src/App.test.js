import React from 'react'; 
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match the snapshot', () => {
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

  describe('componentDidMount', () =>{
    let generateRandomNum;
    let mockCurrFilm;

    beforeEach(() => {
      generateRandomNum = jest.fn();
      mockCurrFilm = {
        title: '',
        crawl: '',
        year: ''
      }
    });

    it('calls generateRandom ', () => {
      //Setup

      //Execution

      //Expectation
      
    });

    it('calls fetch with the correct parameters', () => {
      //Setup

      //Execution

      //Expectation
      
    });

    it('sets the state after fetch is called', () => {
      //Setup

      //Execution

      //Expectation
      
    });

    it('on fetch error, errorStatus is set', () => {
      //Setup

      //Execution

      //Expectation
      
    });

  })

})
  
