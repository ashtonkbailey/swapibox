import React, { Component } from 'react';
import { NavLink , Route, Switch} from 'react-router-dom';
import Planets from '../Planets/Planets';
import People from '../People/People';
import Vehicles from '../Vehicles/Vehicles';
import Home from '../Home/Home';


const Main = (props) => {
  return (
  <main>
          <div className="component-container">
      <button
        type="button"
        className='arrow-button left-arrow'
        // onClick={decrementCarousel}
      >
        <i className="fas fa-arrow-left" />
      </button>
      <Switch>
      <Route exact path="/" component = {Home} />
      <Route path="/people" render = {(props) => <People {...props} />} />
      <Route path="/planets" component = {Planets} />
      <Route path="/vehicles" component={Vehicles} />
      </Switch>
      <button
        type="button"
        className='arrow-button right-arrow'
        // onClick={incrementCarousel}
      >
        <i className="fas fa-arrow-right" />
      </button>
    </div>
    
  </main>
  )
}

export default Main;