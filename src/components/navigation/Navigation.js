import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Navigation.css';
import lightsabers from '../../images/lightsabers.png';


const Navigation = ({ favorites }) => (
  <div className="nav-container">
    <NavLink to="/people" className="nav-button people">
    people
    </NavLink>
    <NavLink to="/planets" className="nav-button planets">
    planets
    </NavLink>
    <NavLink to="/vehicles" className="nav-button vehicle">
    vehicle
    </NavLink>
    <NavLink to="/favorites" className="favorites-container">
      <div
        className="num-favorites"
      >
        {favorites.length}
      </div>
      <img
        className="lightsaber"
        src={lightsabers}
        alt="favorites"
      />
      view favorites
    </NavLink>
  </div>
);

Navigation.propTypes = {
  favorites: PropTypes.array.isRequired,
};

export default Navigation;
