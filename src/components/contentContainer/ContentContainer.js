import React from 'react';
import PropTypes from 'prop-types';
import './ContentContainer.css';
import PeopleCard from '../PeopleCard/PeopleCard.js';

const ContentContainer = ({carouselIndex, incrementCarousel, decrementCarousel, film, contents}) => {
    let displayedContents;
    let containerClassName;
    let card2;
    let card3;
    if (carouselIndex < 9) {
        card2 = carouselIndex + 1;
    } else {
        card2 = carouselIndex - 9;
    }
    if (carouselIndex < 8) {
        card3 = carouselIndex + 2;
    } else {
        card3 = carouselIndex - 8;
    }
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
        const peopleCards = [
        <PeopleCard cardClass="card1" card={contents[carouselIndex]} />, 
        <PeopleCard cardClass="card2" card={contents[card2]} />, 
        <PeopleCard cardClass="card3" card={contents[card3]} /> ]
        displayedContents = (
            <div className="people-container">
                {peopleCards}
            </div>
        );
        containerClassName = "component-container";
    }
    return (
        <div className={containerClassName}>
            <button className={contents.length ? "arrow-button" : "none"} onClick={decrementCarousel}> <i class="fas fa-arrow-left"></i> </button>
            {displayedContents}
            <button className={contents.length ? "arrow-button" : "none"} onClick={incrementCarousel}> <i class="fas fa-arrow-right"></i> </button>
         </div>
    )
}

export default ContentContainer;
