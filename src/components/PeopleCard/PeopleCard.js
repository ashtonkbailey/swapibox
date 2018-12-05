import React from 'react';
import PropTypes from 'prop-types';

const peopleCard = ({card, cardClass}) => {
    
    return (
        <article className={cardClass}>
            <h3 className="name"> {card.name}
            </h3>
        </article>
    )
}

export default peopleCard;