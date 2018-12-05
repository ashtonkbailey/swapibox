import React from 'react';
import PropTypes from 'prop-types';
import './ContentContainer.css';
import PeopleCard from '../PeopleCard/PeopleCard.js';

const ContentContainer = ({film, contents}) => {
    let displayedContents;
    let containerClassName;
    if (!contents.length) {
        displayedContents = (
                <div className="crawl"><div>
                    <h1 className="title"> {film.title.toUpperCase()} </h1>
                    {film.crawl}
                    </div></div>
                );
        containerClassName = "content-container";
    }
    else {
        const peopleCards = contents.map(person => {
            return <PeopleCard info={person} /> 
        })
        displayedContents = (
            <ul>
                {peopleCards}
            </ul>
        );
        containerClassName = "person-container"
    }
    return (
        <div className={containerClassName}>
            {displayedContents}
            </div>
    )
}

export default ContentContainer;
