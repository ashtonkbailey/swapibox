import React from 'react';
import PropTypes from 'prop-types';
import lightsabers from '../../images/lightsabers.png';
import './peopleCard.css'


const peopleCard = ({card, cardClass}) => {
    
    return (
        <article className={cardClass}>
            <h3 className="name"> {card.name} </h3>
            <p> species: {card.species} </p>
            <p> homeworld: {card.homeworld} </p>
            <p> population: {card.population} </p>
            <img className="saber" src={lightsabers}/>
        </article>
    )
}

export default peopleCard;