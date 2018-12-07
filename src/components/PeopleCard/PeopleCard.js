import React from 'react';
import PropTypes from 'prop-types';

import lightsabers from '../../images/lightsabers.png';
import './peopleCard.css';
import luke from '../../images/luke.jpg'

const PeopleCard = ({card, carouselIndex, addToFavorites, chosenContent}) => {
    let hiddenClass = 'hidden';
    let leftCardIndex = carouselIndex;
    let middleCardIndex = carouselIndex + 1;
    let rightCardIndex = carouselIndex + 2;
    let allCards;
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
    if (chosenContent === 'people') {
       return (<article className={hiddenClass}>
        <h3 className="name"> {card.name} </h3>
        <img src={luke} />
        <p> species: {card.species} </p>
        <p> homeworld: {card.homeworld} </p>
        <p> population: {card.population} </p>
        <img className="saber" src={lightsabers} onClick={() => addToFavorites({card})}/> 
      </article>)
    } else if (chosenContent === 'planets') {
      return ( <article className={hiddenClass}>
        <h3 className="name"> {card.name} </h3>
        <img src={luke} />
        <p> terrain: {card.terrain} </p>
        <p> climate: {card.climate} </p>
        <p> population: {card.population} </p>
        <img className="saber" src={lightsabers} onClick={() => addToFavorites({card})}/>
      </article>
    )
};

peopleCard.propTypes = {
  card: PropTypes.object.isRequired,
  cardClass: PropTypes.string.isRequired,
};

export default peopleCard;
