import React from 'react';
import PropTypes from 'prop-types';

import './people.css';
import lightsabers from '../../images/lightsabers.png';
import contentImages from '../../contentImages';

const People = ({ carouselIndex, addToFavorites }) => {
  let hiddenClass;
  const leftCardIndex = carouselIndex;
  let middleCardIndex = carouselIndex + 1;
  let rightCardIndex = carouselIndex + 2;

  if (carouselIndex === 9) {
    middleCardIndex = 0;
    rightCardIndex = carouselIndex - 8;
  }

  if (carouselIndex === 8) {
    rightCardIndex = carouselIndex - 8;
  }

  const peopleData = JSON.parse(localStorage.getItem('people'));

  const peopleDisplay = peopleData.map((person) => {
    switch (person.index) {
      case middleCardIndex:
        hiddenClass = 'middle-card';
        break;
      case leftCardIndex:
        hiddenClass = 'left-card small-card';
        break;
      case rightCardIndex:
        hiddenClass = 'right-card small-card';
        break;
      default:
        hiddenClass = 'hidden';
    }

    const images = Object.entries(contentImages);
    const matchingImage = images.find(image => person.name === image[0]);
    const imagePath = matchingImage[1];

    return (
      <article className={hiddenClass} key={person.name}>
        <h3 className="name">
          {person.name}
        </h3>
        <img
          src={imagePath}
          alt="character"
          className="picture"
        />
        <p>
          species:
          {person.species}
        </p>
        <p>
          homeworld:
          {person.homeworld}
        </p>
        <p>
          population:
          {person.population}
        </p>
        <img
          className={`saber ${person.favorite}`}
          src={lightsabers}
          onClick={() => addToFavorites(person)}
          onKeyDown={() => addToFavorites(person)}
          alt="click to add to favorites"
          title="add to favorites"
        />
      </article>
    );
  });

  return (
    <div>
      {peopleDisplay}
    </div>
  );
};

People.propTypes = {
  carouselIndex: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func.isRequired,
};

People.propTypes = {
  carouselIndex: PropTypes.number,
  addToFavorites: PropTypes.func
}


export default People;
