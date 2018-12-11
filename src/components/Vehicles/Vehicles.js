import React, { Component } from 'react';
import '../PeopleCard/peopleCard.css';

import lightsabers from '../../images/lightsabers.png';
import luke from '../../images/luke.jpg';


const Vehicles = () => {
  const vehicleData = JSON.parse(localStorage.getItem('vehicles'));
  const vehicleDisplay = vehicleData.map(vehicle => (
    <article className="middle-card">
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
      // onClick={() => addToFavorites({ card })}
      alt="click to add to favorites"
    />
  </article>
    )
  )


  return (
    <div>
      {vehicleDisplay}
    </div>
  )
}


export default Vehicles;