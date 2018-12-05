import React from 'react';
import PropTypes from 'prop-types';
import './ContentContainer.css';
import PeopleCard from '../PeopleCard/PeopleCard.js';

const ContentContainer = ({film, contents}) => {
    let displayedContents;
    let containerClassName;
    let count = 1;
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
        // const peopleCards = contents.map(person => {
        //     return <PeopleCard info={person} /> 
        // })
        const peopleCards = [
        <PeopleCard cardClass="card1" card={contents[0]} />, 
        <PeopleCard cardClass="card2" card={contents[1]} />, 
        <PeopleCard cardClass="card3" card={contents[2]} /> ]
        displayedContents = (
            <div className="people-container">
                {peopleCards}
            </div>
        );
        containerClassName = "component-container";
    }
    return (
        <div className={containerClassName}>
            <button className="arrow-button"> - </button>
            {displayedContents}
            <button className="arrow-button"> - </button>
         </div>
    )
}

export default ContentContainer;
