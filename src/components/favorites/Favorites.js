import React from 'react';
import PropTypes from 'prop-types';
import './Favorites.css';
import lightsabers from '../../images/lightsabers.png';
import { Route, NavLink } from 'react-router-dom';


const Favorites = ({ faves, viewFavorites }) => (
  <div className="favorites-container">
    <div
      className="num-favorites"
      onClick={viewFavorites}
    >
      {faves.length}
    </div>
    <img
      className="lightsaber"
      src={lightsabers}
      alt="favorites"
    />
    {/* <button
      type="button"
      className="favorites-button"
<<<<<<< HEAD
    >
=======
      onClick={viewFavorites}
    > */}
      <NavLink to='/favorites' className="favorites-button" >
      
>>>>>>> Begin implementing route to favorites
      view favorites
      </NavLink>
    {/* </button> */}
  </div>
);

Favorites.propTypes = {
  faves: PropTypes.array.isRequired,
  viewFavorites: PropTypes.func.isRequired,
};

export default Favorites;
