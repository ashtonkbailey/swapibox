import React, { Component } from 'react';
import { NavLink , Route, Switch} from 'react-router-dom';
import Planets from '../Planets/Planets';
import People from '../People/People';
import Vehicles from '../Vehicles/Vehicles';
import Home from '../Home/Home';

const Main = ({incrementCarousel, decrementCarousel, carouselIndex, addToFavorites, film}) => {
  return (
  <main>
    <div className="component-container">
      <button
        type="button"
        className='arrow-button left-arrow'
        onClick={decrementCarousel}
      >
      <i className="fas fa-arrow-left" />
      </button>
      <Switch>
        <Route exact path="/" render = {(props) => <Home film={film} /> } />
        <Route path="/people" render = {(props) => <People {...props}  carouselIndex={carouselIndex} addToFavorites={addToFavorites}/>} />
        <Route path="/planets" render = {(props) => <Planets {...props} carouselIndex = {carouselIndex} addToFavorites={addToFavorites}/> } />
        <Route path="/vehicles" render = {(props) => <Vehicles {...props} carouselIndex = {carouselIndex} addToFavorites={addToFavorites} /> } />
      </Switch>
      <button
      type="button"
      className='arrow-button right-arrow'
      onClick={incrementCarousel}
      >
      <i className="fas fa-arrow-right" />
    </button>
    </div>
  </main>
  )
}

export default Main;