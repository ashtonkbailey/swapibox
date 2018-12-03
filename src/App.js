import React, { Component } from 'react';
import './App.css';

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
        <header className="App-header">
          <h1>SwapiBox</h1>
        </header>
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
