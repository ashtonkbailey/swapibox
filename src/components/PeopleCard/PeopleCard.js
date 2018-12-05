import React from 'react';
import PropTypes from 'prop-types';
import './peopleCard.css'

const peopleCard = ({card, cardClass}) => {
    
    return (
        <article className={cardClass}>
            <h3 className="name"> {card.name} </h3>
            <p> species: {card.species} </p>
            <p> homeworld: {card.homeworld} </p>
            <p> population: {card.population} </p>
        </article>
    )
}

export default peopleCard;