import React from 'react';
import PropTypes from 'prop-types';

import './ContentContainer.css';
import PeopleCard from '../PeopleCard/PeopleCard';

const ContentContainer = ({carouselIndex, incrementCarousel, decrementCarousel, film, contents, addToFavorites}) => {
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
        carouselIndex={carouselIndex} addToFavorites={addToFavorites}/> )
    });

    displayedContents = (
      <div className="people-container">
      {peopleCards}
      </div>
      );
    containerClassName = "component-container";
  }

ContentContainer.propTypes = {
  carouselIndex: PropTypes.number.isRequired,
  incrementCarousel: PropTypes.func.isRequired,
  decrementCarousel: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
  contents: PropTypes.array.isRequired,
};

export default ContentContainer;
