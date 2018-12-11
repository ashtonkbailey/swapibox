import React, { Component } from 'react';
import '../PeopleCard/peopleCard.css';
import lightsabers from '../../images/lightsabers.png';
import luke from '../../images/luke.jpg'

const People = (props) => {
  const peopleData = JSON.parse(localStorage.getItem('people'));
  const peopleDisplay = peopleData.map(person => {
    return (<article className="middle-card">
        <h3 className="name">
          {person.name}
        </h3>
        <img
          src={luke}
          alt="character"
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
          className="saber"
          src={lightsabers}
          // onClick={() => addToFavorites({ person })}
          alt="click to add to favorites"
        />
      </article>)
  });
  
  return (
     <div>
       {peopleDisplay}
     </div>
    
  )
}


export default People;