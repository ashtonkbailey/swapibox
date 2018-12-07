import React from 'react';
import PropTypes from 'prop-types';

import './Favorites.css';
import lightsabers from '../../images/lightsabers.png';

const Favorites = ({ favesLength, viewFavorites }) => (
  <div className="favorites-container">
    <div className="num-favorites">{favesLength}</div>
    <img className="lightsaber" src={lightsabers} alt="click to save as a favorite" />
    <button
      type="button"
      className="favorites-button"
      onClick={viewFavorites}
    >
      view favorites
    </button>
  </div>
);

Favorites.propTypes = {
  favesLength: PropTypes.number.isRequired,
  viewFavorites: PropTypes.func.isRequired,
};

export default Favorites;
