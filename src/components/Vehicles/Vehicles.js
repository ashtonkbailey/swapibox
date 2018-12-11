import React, { Component } from 'react';
import '../PeopleCard/peopleCard.css';
<<<<<<< HEAD
<<<<<<< HEAD
import lightsabers from '../../images/lightsabers.png';
import luke from '../../images/luke.jpg';

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
    return (
    <article className={hiddenClass}>
=======

=======
>>>>>>> Add cards to favorite array
import lightsabers from '../../images/lightsabers.png';
import luke from '../../images/luke.jpg';

const Vehicles = ({carouselIndex, addToFavorites}) => {
  const vehicleData = JSON.parse(localStorage.getItem('vehicles'));
<<<<<<< HEAD
  const vehicleDisplay = vehicleData.map(vehicle => (
    <article className="middle-card">
>>>>>>> Begin implementing router
=======
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
    return (
    <article className={hiddenClass}>
>>>>>>> Add cards to favorite array
    <h3 className="name">
      {vehicle.name}
    </h3>
    <img
      src={luke}
      alt="vehicle"
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
      className="saber"
      src={lightsabers}
<<<<<<< HEAD
<<<<<<< HEAD
      onClick={() => addToFavorites(vehicle)}
=======
      // onClick={() => addToFavorites({ card })}
>>>>>>> Begin implementing router
=======
      onClick={() => addToFavorites(vehicle)}
>>>>>>> Add cards to favorite array
      alt="click to add to favorites"
    />
  </article>
    )
<<<<<<< HEAD
<<<<<<< HEAD
  })
  
=======
  )
>>>>>>> Begin implementing router
=======
  })
  
>>>>>>> Add cards to favorite array


  return (
    <div>
      {vehicleDisplay}
    </div>
  )
}


export default Vehicles;