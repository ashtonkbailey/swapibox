import React from 'react';
import './Navigation.css';
import PropTypes from 'prop-types';

const Navigation = (props) => {
   return (
       <div className="nav-container">
           <button 
            className="nav-button" 
            name="people" 
            onClick={props.displayChosenContent}> 
            people 
           </button>
           <button 
            className="nav-button" 
            name="planets" 
            onClick={props.displayChosenContent}> 
            planets 
           </button>
           <button 
            className="nav-button" 
            name="vehicles" 
            onClick={props.displayChosenContent}> 
            vehicles 
            </button>
       </div>
   )
}

Navigation.propTypes = {
  displayChosenContent: PropTypes.func.isRequired,
  content: PropTypes.array
}

export default Navigation;