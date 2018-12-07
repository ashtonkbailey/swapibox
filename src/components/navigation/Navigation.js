import React from 'react';
import './Navigation.css';

const Navigation = displayChosenContent => (
  <div className="nav-container">
    <button
      type="button"
      className="nav-button"
      name="people"
      onClick={displayChosenContent}
    >
      people
    </button>
    <button
      type="button"
      className="nav-button"
      name="planets"
      onClick={displayChosenContent}
    >
      planets
    </button>
    <button
      type="button"
      className="nav-button"
      name="vehicles"
      onClick={displayChosenContent}
    >
      vehicles
    </button>
  </div>
);

export default Navigation;
