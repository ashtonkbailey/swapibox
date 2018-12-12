import React from 'react';
import PropTypes from 'prop-types';

import '../People/people.css';
import lightsabers from '../../images/lightsabers.png';
import contentImages from '../../contentImages';

const Planets = ({ carouselIndex, addToFavorites }) => {
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

  const planetDisplay = planetData.map((planet) => {
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

    const images = Object.entries(contentImages);
    const matchingImage = images.find(image => planet.name === image[0]);
    const imagePath = matchingImage[1];

    return (
      <article className={hiddenClass} key={planet.name}>
        <h3 className="name">
          {planet.name}
        </h3>
        <img
          src={imagePath}
          className="picture"
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
          className={`saber ${planet.favorite}`}
          src={lightsabers}
          onClick={() => addToFavorites(planet)}
          onKeyDown={() => addToFavorites(planet)}
          alt="click to add to favorites"
          title="add to favorites"
        />
      </article>
    );
  });

  return (
    <div>
      {planetDisplay}
    </div>
  );
};

Planets.propTypes = {
  carouselIndex: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired,
};


export default Planets;
