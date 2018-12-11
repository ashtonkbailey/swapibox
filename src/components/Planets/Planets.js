import React, { Component } from 'react';
import '../PeopleCard/peopleCard.css';

import lightsabers from '../../images/lightsabers.png';
import luke from '../../images/luke.jpg'

const Planets = () => {
  const planetData = JSON.parse(localStorage.getItem('planets'));
  const planetDisplay = planetData.map(planet =>  (
      <article className="middle-card">
        <h3 className="name">
          {planet.name}
        </h3>
        <img
          src={luke}
          className="luke"
          alt="planet"
        />
        <p>
          terrain:
          {planet.terrain}
        </p>
        <p>
          climate:
          {planet.climate}
        </p>
        <p>
          population:
          {planet.population}
        </p>
        <p>
          residents:
          {planet.residents}
        </p>
        <img
          className="saber"
          src={lightsabers}
          // onClick={() => addToFavorites({ planet })}
          alt="click to add to favorites"
        />
      </article>
  )
  );
  return (
    <div>
      {planetDisplay}
    </div>
  )
}


export default Planets;