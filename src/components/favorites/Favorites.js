import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Favorites.css';
import lightsabers from '../../images/lightsabers.png';


class Favorites extends Component {
    render() {
        return(
            <div className="favorites-container"> 
                <div className="num-favorites"> 0 </div>
                <div className="favorites-button"> show favorites
                </div>
                <img className="lightsaber" src={lightsabers}/>
            </div>
        )
    }
}

export default Favorites;