import React from 'react';
import PropTypes from 'prop-types';
import lightsabers from '../../images/lightsabers.png';
import './peopleCard.css'

const peopleCard = ({card, carouselIndex, addToFavorites}) => {
    let hiddenClass = 'hidden';
    let leftCardIndex = carouselIndex;
    let middleCardIndex = carouselIndex + 1;
    let rightCardIndex = carouselIndex + 2;
    if (carouselIndex === 9) {
      middleCardIndex = 0;
      rightCardIndex = carouselIndex - 8;
    }
    if (carouselIndex === 8) {
      rightCardIndex = carouselIndex - 8;
    }
    switch(card.index) {
      case middleCardIndex:
        hiddenClass = 'middle-card';
        break;
      case leftCardIndex:
        hiddenClass = 'left-card small-card' ;
        break;
      case rightCardIndex:
        hiddenClass = 'right-card small-card';
        break;
    }

    return (
      <article className={hiddenClass}>
        <h3 className="name"> {card.name} </h3>
        <p> species: {card.species} </p>
        <p> homeworld: {card.homeworld} </p>
        <p> population: {card.population} </p>
        <img className="saber" src={lightsabers} onClick={() => addToFavorites({card})}/> 
      </article>
    )
}

export default peopleCard;