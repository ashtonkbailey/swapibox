import React from 'react';
import './Navigation.css'

const Navigation = () => {
   return (
       <div className="nav-container">
           <button className="nav-button"> people </button>
           <button className="nav-button"> planets </button>
           <button className="nav-button"> vehicles </button>
       </div>
   )
}

export default Navigation;