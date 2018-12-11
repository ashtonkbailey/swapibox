import React, { Component } from 'react';
import '../PeopleCard/peopleCard.css';

import lightsabers from '../../images/lightsabers.png';
import luke from '../../images/luke.jpg'

<<<<<<< HEAD
<<<<<<< HEAD
const Planets = ({carouselIndex, addToFavorites}) => {
  const planetData = JSON.parse(localStorage.getItem('planets'));
  let hiddenClass;
  const leftCardIndex = carouselIndex;
  let middleCardIndex = carouselIndex + 1;
  let rightCardIndex = carouselIndex + 2;

  if (carouselIndex === 9) {
    middleCardIndex = 0;
    rightCardIndex = carouselIndex - 8;
  }

  if (carouselIndex === 8) {
    rightCardIndex = carouselIndex - 8;
  }
  const planetDisplay = planetData.map(planet =>  {
    switch (planet.index) {
      case middleCardIndex:
        hiddenClass = 'middle-card';
        break;
      case leftCardIndex:
        hiddenClass = 'left-card small-card';
        break;
      case rightCardIndex:
        hiddenClass = 'right-card small-card';
        break;
      default:
        hiddenClass = 'hidden';
    }
    return (
      <article className={hiddenClass}>
=======
const Planets = () => {
  const planetData = JSON.parse(localStorage.getItem('planets'));
  let cardClass = "hidden";
  const planetDisplay = planetData.map(planet =>  (
      <article className="middle-card">
>>>>>>> Begin implementing router
=======
const Planets = ({carouselIndex, addToFavorites}) => {
  const planetData = JSON.parse(localStorage.getItem('planets'));
  let hiddenClass;
  const leftCardIndex = carouselIndex;
  let middleCardIndex = carouselIndex + 1;
  let rightCardIndex = carouselIndex + 2;

  if (carouselIndex === 9) {
    middleCardIndex = 0;
    rightCardIndex = carouselIndex - 8;
  }

  if (carouselIndex === 8) {
    rightCardIndex = carouselIndex - 8;
  }
  const planetDisplay = planetData.map(planet =>  {
    switch (planet.index) {
      case middleCardIndex:
        hiddenClass = 'middle-card';
        break;
      case leftCardIndex:
        hiddenClass = 'left-card small-card';
        break;
      case rightCardIndex:
        hiddenClass = 'right-card small-card';
        break;
      default:
        hiddenClass = 'hidden';
    }
    return (
      <article className={hiddenClass}>
>>>>>>> Add cards to favorite array
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
<<<<<<< HEAD
<<<<<<< HEAD
          onClick={() => addToFavorites(planet)}
          alt="click to add to favorites"
        />
      </article>
    )}
=======
          // onClick={() => addToFavorites({ planet })}
          alt="click to add to favorites"
        />
      </article>
  )
>>>>>>> Begin implementing router
=======
          onClick={() => addToFavorites(planet)}
          alt="click to add to favorites"
        />
      </article>
    )}
>>>>>>> Add cards to favorite array
  );
  return (
    <div>
      {planetDisplay}
    </div>
  )
}


export default Planets;