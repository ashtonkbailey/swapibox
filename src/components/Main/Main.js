import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Planets from '../Planets/Planets';
import People from '../People/People';
import Vehicles from '../Vehicles/Vehicles';
import Home from '../Home/Home';
import Favorites from '../favorites/Favorites';

const Main = ({
  incrementCarousel,
  decrementCarousel,
  carouselIndex,
  addToFavorites,
  film,
  favorites,
}) => (
  <main>
    <div className="component-container">
      <button
        type="button"
        className="arrow-button left-arrow"
        onClick={decrementCarousel}
      >
        <i className="fas fa-arrow-left" />
      </button>
      <Switch>
        <Route exact path="/" render={props => <Home film={film} />} />
        <Route path="/people" render={props => <People {...props} carouselIndex={carouselIndex} addToFavorites={addToFavorites} />} />
        <Route path="/planets" render={props => <Planets {...props} carouselIndex={carouselIndex} addToFavorites={addToFavorites} />} />
        <Route path="/vehicles" render={props => <Vehicles {...props} carouselIndex={carouselIndex} addToFavorites={addToFavorites} />} />
        <Route path="/favorites" render={props => <Favorites {...props} favorites={favorites} />} />
      </Switch>
      <button
        type="button"
        className="arrow-button right-arrow"
        onClick={incrementCarousel}
      >
        <i className="fas fa-arrow-right" />
      </button>
    </div>
  </main>
);

Main.propTypes = {
  incrementCarousel: PropTypes.func.isRequired,
  decrementCarousel: PropTypes.func.isRequired,
  carouselIndex: PropTypes.number.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
};

Main.propTypes = {
  incrementCarousel: PropTypes.func,
  decrementCarousel: PropTypes.func,
  carouselIndex: PropTypes.number,
  addToFavorites: PropTypes.func,
  film: PropTypes.object.isRequired,
  favorites: PropTypes.array
}

export default Main;

