import React from 'react';
import PropTypes from 'prop-types';
import '../People/people.css';
import lightsabers from '../../images/lightsabers.png';
import contentImages from '../../contentImages.js';

const Vehicles = ({carouselIndex, addToFavorites}) => {
  const vehicleData = JSON.parse(localStorage.getItem('vehicles'));
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

  const vehicleDisplay = vehicleData.map(vehicle => {
    switch (vehicle.index) {
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

    let images = Object.entries(contentImages);
    let matchingImage = images.find(image => vehicle.name === image[0]);
    let imagePath = matchingImage[1];

    return (
    <article className={hiddenClass} key={vehicle.name}>
    <h3 className="name">
      {vehicle.name}
    </h3>
    <img
      src={imagePath}
      alt="vehicle"
      className="picture"
    />
    <p>
      model:
      {vehicle.model}
    </p>
    <p>
      class:
      {vehicle.class}
    </p>
    <p>
      passengers:
      {vehicle.passengers}
    </p>
    <img
      className={`saber ${vehicle.favorite}`}
      src={lightsabers}
      onClick={() => addToFavorites(vehicle)}
      alt="click to add to favorites"
    />
    </article>
      )
    });

  return (
    <div>
      {vehicleDisplay}
    </div>
  )
}

Vehicles.propTypes = {
  carouselIndex: PropTypes.number,
  addToFavorites: PropTypes.func
}


export default Vehicles;