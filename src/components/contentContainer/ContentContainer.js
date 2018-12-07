import React from 'react';
import PropTypes from 'prop-types';

import './ContentContainer.css';
import PeopleCard from '../PeopleCard/PeopleCard.js';
import PlanetCard from '../PlanetCard/PlanetCard.js';


const ContentContainer = ({carouselIndex, incrementCarousel, decrementCarousel, film, contents, addToFavorites, chosenContent}) => {
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
      let contentCards;
      // if(chosenContent === 'people') {
         contentCards = contents.map((currCard) => {
              return (<PeopleCard card={currCard}
            carouselIndex={carouselIndex} addToFavorites={addToFavorites} key={currCard.name} chosenContent={chosenContent} /> )
        });
      // } 

      // else if (chosenContent === 'planets') {
      //   contentCards = contents.map((currCard) => {
      //     return (<PlanetCard card={currCard}
      //       carouselIndex={carouselIndex} addToFavorites={addToFavorites} key={currCard.name}/>)
      //   });
      // }

        displayedContents = (
            <div className="people-container">
                {contentCards}
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
    carouselIndex: PropTypes.number.isRequired,
    incrementCarousel: PropTypes.func,
    decrementCarousel: PropTypes.func,
    film: PropTypes.object.isRequired,
    contents: PropTypes.arrayOf(PropTypes.object),
    addToFavorites: PropTypes.func
}

export default ContentContainer;
