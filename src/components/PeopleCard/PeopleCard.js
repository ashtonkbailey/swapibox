import React from 'react';
import PropTypes from 'prop-types';

import lightsabers from '../../images/lightsabers.png';
import './peopleCard.css';
import luke from '../../images/luke.jpg';

const PeopleCard = ({
  card,
  carouselIndex,
  addToFavorites,
  chosenContent
}) => {
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

  switch (card.index) {
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
  
  if (chosenContent === 'people') {
    return (
      <article className={hiddenClass}>
        <h3 className="name">
          {card.name}
        </h3>
        <img
          src={luke}
          alt="character"
        />
        <p>
          species:
          {card.species}
        </p>
        <p>
          homeworld:
          {card.homeworld}
        </p>
        <p>
          population:
          {card.population}
        </p>
        <img
          className={ card.favorite ? "saber active" : "saber" }
          src={lightsabers}
          onClick={() => addToFavorites({ card })}
          alt="click to add to favorites"
        />
      </article>
    );
  }
  else if (chosenContent === 'planets') {
    return (
      <article className={hiddenClass}>
        <h3 className="name">
          {card.name}
        </h3>
        <img
          src={luke}
          className="luke"
          alt="planet"
        />
        <p>
          terrain:
          {card.terrain}
        </p>
        <p>
          climate:
          {card.climate}
        </p>
        <p>
          population:
          {card.population}
        </p>
        <p>
          residents:
          {card.residents}
        </p>
        <img
          className={ card.favorite ? "saber active" : "saber" }
          src={lightsabers}
          onClick={() => addToFavorites({ card })}
          alt="click to add to favorites"
        />
      </article>
    );
  }
    else if (chosenContent === 'vehicles') {
      return (
        <article className={hiddenClass}>
          <h3 className="name">
            {card.name}
          </h3>
          <img
            src={luke}
            alt="vehicle"
          />
          <p>
            model:
            {card.model}
          </p>
          <p>
            class:
            {card.class}
          </p>
          <p>
            passengers:
            {card.passengers}
          </p>
          <img
            className={ card.favorite ? "saber active" : "saber" }
            src={lightsabers}
            onClick={() => addToFavorites({ card })}
            alt="click to add to favorites"
          />
        </article>
      );
  }
};

PeopleCard.propTypes = {
  card: PropTypes.object.isRequired,
  carouselIndex: PropTypes.func,
  addToFavorites: PropTypes.func,
  chosenContent: PropTypes.array.isRequired,
};

export default PeopleCard;
