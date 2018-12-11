import React from 'react';
import PropTypes from 'prop-types';
import './Favorites.css';
import '../contentContainer/ContentContainer.css'
import lightsabers from '../../images/lightsabers.png';
import { Route, NavLink } from 'react-router-dom';


const Favorites = ({ favorites }) => {
  let favoritesMessage;
  let stat1;
  let stat2;
  let stat3;
  if(favorites.length === 0) {
    favoritesMessage = "You do not have any favorites!";
  }

  const allFavorites = favorites.map(fave => {
      if (fave.species) {
        stat1 = `species: ${fave.species}`;
        stat2 = `homeworld: ${fave.homeworld}`;
        stat2 = `population: ${fave.population}`;
      } else if (fave.terrain) {
        stat1 = `terrain: ${fave.terrain}`;
        stat2 = `climate: ${fave.climate}`;
        stat3 = `population: ${fave.population}`
      } else {
        stat1 = `model: ${fave.model}`;
        stat2 = `class: ${fave.class}`;
        stat3 = `passengers: ${fave.passengers}`
      }

    return (
      <article className="fave-card" key={fave.name}>
        <h3 className="name">
          {fave.name}
        </h3>
        <p>
          {stat1}
        </p>
        <p>
          {stat2}
        </p>
        <p>
          {stat3}
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
      <span className="favorites-message">  {favoritesMessage} </span>
      {allFavorites}
    </div>
  )
};

Favorites.propTypes = {
  faves: PropTypes.array.isRequired,
  viewFavorites: PropTypes.func.isRequired,
};

export default Favorites;
