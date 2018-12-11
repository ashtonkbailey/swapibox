import React from 'react';
import PropTypes from 'prop-types';

import './ContentContainer.css';
import PeopleCard from '../PeopleCard/PeopleCard';

const ContentContainer = ({
  carouselIndex,
  incrementCarousel,
  decrementCarousel,
  film,
  contents,
  addToFavorites,
  chosenContent,
}) => {
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
        <h3 className="title">
          {film.title}
          {film.year}
        </h3>
      </div>
    );
    containerClassName = 'content-container';
  } else {
    const contentCards = contents.map(currCard => (
      <PeopleCard
        card={currCard}
        carouselIndex={carouselIndex}
        addToFavorites={addToFavorites}
        key={currCard.name}
        chosenContent={chosenContent}
      />
    ));
    // if(chosenContent === 'people') {
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
    containerClassName = 'component-container';
  }

  return (
    <div className={containerClassName}>
      <button
        type="button"
        className={contents.length ? 'arrow-button left-arrow' : 'none'}
        onClick={decrementCarousel}
      >
        <i className="fas fa-arrow-left" />
      </button>
      {displayedContents}
      <button
        type="button"
        className={contents.length ? 'arrow-button right-arrow' : 'none'}
        onClick={incrementCarousel}
      >
        <i className="fas fa-arrow-right" />
      </button>
    </div>
  );
};

ContentContainer.propTypes = {
  carouselIndex: PropTypes.number.isRequired,
  incrementCarousel: PropTypes.func.isRequired,
  decrementCarousel: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
  contents: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToFavorites: PropTypes.func.isRequired,
  chosenContent: PropTypes.string.isRequired,
};

export default ContentContainer;
