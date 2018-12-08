import React from 'react';

import './Navigation.css';
import PropTypes from 'prop-types';

const Navigation = props => (
  <div className="nav-container">
    <button
      type="button"
      className="nav-button people"
      name="people"
      onClick={props.displayChosenContent}
    >
      people
    </button>
    <button
      type="button"
      className="nav-button planets"
      name="planets"
      onClick={props.displayChosenContent}
    >
      planets
    </button>
    <button
      type="button"
      className="nav-button vehicles"
      name="vehicles"
      onClick={props.displayChosenContent}
    >
      vehicles
    </button>
  </div>
);


Navigation.propTypes = {
  displayChosenContent: PropTypes.func.isRequired,
};

export default Navigation;
