import React from 'react';
import PropTypes from 'prop-types';

import './Navigation.css';

const Navigation = displayChosenContent => (
  <div className="nav-container">
    <button
      type="button"
      className="nav-button people"
      name="people"
      onClick={displayChosenContent}
    >
      people
    </button>
    <button
      type="button"
      className="nav-button planets"
      name="planets"
      onClick={displayChosenContent}
    >
      planets
    </button>
    <button
      type="button"
      className="nav-button vehicles"
      name="vehicles"
      onClick={displayChosenContent}
    >
      vehicles
    </button>
  </div>
);

Navigation.propTypes = {
  displayChosenContent: PropTypes.func.isRequired,
  content: PropTypes.array
}

export default Navigation;
