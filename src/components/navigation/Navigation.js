import React from 'react';
import './Navigation.css'

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

export default Navigation;