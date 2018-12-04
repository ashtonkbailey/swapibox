import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Favorites from './components/favorites/Favorites.js';
import ContentContainer from './components/contentContainer/ContentContainer.js';




class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      currFilm: {
        title: '',
        crawl: '',
        year: ''
      }
    }
  }



  cleanFilm = (film) => {
    //clean up opening crawl and year
    //setState()
  }

  componentDidMount = () => {
    //generateRandomNumber
    //fetch film(randomNum)
    //cleanFilm(selectedFilm)
  }

  render() {
    return (
      <div className="App">
          <h1> SWAPIBOX </h1>
        <Navigation />
        <Favorites />
        <ContentContainer 
          film={this.state.currFilm}
        //<FilmText />
        //<ContentCards 
        //    <Card />
        // />
        />
      </div>
    );
  }
}

export default App;
