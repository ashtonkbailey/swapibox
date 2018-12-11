import React from 'react';
import PropTypes from 'prop-types';
import './Favorites.css';
import '../contentContainer/ContentContainer.css'
import lightsabers from '../../images/lightsabers.png';
import { Route, NavLink } from 'react-router-dom';


const Favorites = ({ favorites }) => {

  const allFavorites = favorites.map(fave => {
    return (
      <article className="fave-card" key={fave.name}>
        <h3 className="name">
          {fave.name}
        </h3>
        {/* <img
          src={luke}
          alt="character"
        /> */}
        <p>
          species:
          {fave.species || fave.terrain}
        </p>
        <p>
          homeworld:
          {/* {fave.homeworld} */}
        </p>
        <p>
          population:
          {fave.population}
        </p>
        <img
          className="saber"
          src={lightsabers}
          // onClick={() => addToFavorites( fave )}
          alt="click to add to favorites"
        />
      </article>
    )
  });
  return (
    <div className="faves-display">
       <NavLink to='/people' className="nav-button hide-faves" >
          X
        </NavLink>
      <h1> FAVORITES </h1>
      {allFavorites}
    </div>
  )
};

Favorites.propTypes = {
  faves: PropTypes.array.isRequired,
  viewFavorites: PropTypes.func.isRequired,
};

export default Favorites;
