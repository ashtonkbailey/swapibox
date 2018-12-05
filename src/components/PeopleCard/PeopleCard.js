import React from 'react';
import PropTypes from 'prop-types';

const peopleCard = ({info}) => {
    console.log(info)
    return (
        <article className="people-card">
            {info.name}
        </article>
    )
}

export default peopleCard;