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
      //////why does the test suite use escaped chars and react dev tools doesn't? do we even need to clean the text up?
    const result = wrapper.instance().cleanFilm(film);
    const expected = {
      title: 'A New Hope',
      crawl: 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.',
      year: '1977'
    };

    expect(result).toEqual(expected);
  });

  // it('calls fetch with the correct data when adding a new grocery', () => {
  // });

  it('resets the state after cleaning the film', () => {
    
  });

  // it('sets an error when the fetch fails', () => {
  // });

})
  
