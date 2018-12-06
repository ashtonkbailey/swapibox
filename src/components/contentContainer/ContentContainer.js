import React from 'react';
import PropTypes from 'prop-types';
import './ContentContainer.css';
import PeopleCard from '../PeopleCard/PeopleCard.js';

const ContentContainer = ({carouselIndex, incrementCarousel, decrementCarousel, film, contents}) => {
    let displayedContents;
    let containerClassName;
   

    if (!contents.length) {
        displayedContents = (
            <div>    
                <div className="crawl">
                    <div>
                    {film.crawl}
                    </div>
                </div>
                <h3 className="title"> {film.title} {film.year} </h3>
            </div>
        );
        containerClassName = "content-container";
    }
    else {
        const peopleCards = contents.map((currCard) => {
            return (<PeopleCard card={currCard}
            carouselIndex={carouselIndex}/> )
        });

        displayedContents = (
            <div className="people-container">
                {peopleCards}
            </div>
        );
        containerClassName = "component-container";
    }

    return (
        <div className={containerClassName}>
            <button className={contents.length ? "arrow-button" : "none"} onClick={decrementCarousel}> <i className="fas fa-arrow-left"></i> </button>
            {displayedContents}
            <button className={contents.length ? "arrow-button" : "none"} onClick={incrementCarousel}> <i className="fas fa-arrow-right"></i> </button>
         </div>
    )
}

ContentContainer.propTypes = {
    carouselIndex: PropTypes.number.isRequired
}

export default ContentContainer;
