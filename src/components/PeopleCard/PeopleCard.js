import React from 'react';
import PropTypes from 'prop-types';
import lightsabers from '../../images/lightsabers.png';
import './peopleCard.css'


const peopleCard = ({card, carouselIndex}) => {
    console.log(carouselIndex)
    let hiddenClass = 'hidden';
    let leftCardIndex = carouselIndex;
    let middleCardIndex = carouselIndex + 1;
    let rightCardIndex = carouselIndex + 2;
    if (carouselIndex === 9) {
        middleCardIndex = 0;
    }
    if (carouselIndex === 8 || carouselIndex === 9) {
        rightCardIndex = carouselIndex - 8;
    }

    // console.log(leftCardIndex)
    // console.log(middleCardIndex)
    // console.log(rightCardIndex)
   if (card.index === middleCardIndex) {
        hiddenClass = 'middle-card'
    } else if (card.index === leftCardIndex) {
        hiddenClass = 'left-card small-card'
    } else if (card.index === rightCardIndex) {
        hiddenClass = 'right-card small-card'
    }

    return (
        <article className={hiddenClass}>
            <h3 className="name"> {card.name} </h3>
            <p> species: {card.species} </p>
            <p> homeworld: {card.homeworld} </p>
            <p> population: {card.population} </p>
            <img className="saber" src={lightsabers}/>
           
        </article>
    )
}

export default peopleCard;