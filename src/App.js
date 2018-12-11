import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './App.css';
import Navigation from './components/navigation/Navigation';
import Favorites from './components/favorites/Favorites';
<<<<<<< HEAD
=======
// import ContentContainer from './components/contentContainer/ContentContainer';
>>>>>>> Begin implementing router
import People from './components/Helpers/People';
import Planets from './components/Helpers/Planets';
import Vehicles from './components/Helpers/Vehicles';
import Main from './components/Main/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      errorStatus: '',
      favorites: [],
      displayedContent: [],
      chosenContent: '',
      currFilm: {
        title: '',
        crawl: '',
        year: '',
      },
      carouselIndex: 0,
    };
  }

  cleanFilm = (film) => {
    const cleanCrawl = film.opening_crawl.replace(/(\r\n|\n|\r)/gm, ' ');
    const cleanYear = film.release_date.substring(0, 4);
    return {
      title: film.title,
      crawl: cleanCrawl,
      year: cleanYear,
    };
  }

  componentDidMount = async () => {
    this.fetchRandomFilm();
    this.fetchChosenContent();
  }

  fetchRandomFilm = async () => {
    const randomNum = this.generateRandomNum();
    try {
      const response = await fetch(`https://swapi.co/api/films/${randomNum}`);
      const film = await response.json();
      const cleanFilm = await this.cleanFilm(film);
      this.setState({
        currFilm: {
          title: cleanFilm.title,
          crawl: cleanFilm.crawl,
          year: cleanFilm.year,
        },
      });
    } catch (error) {
      this.setState({
        errorStatus: `Error: ${error.message}`,
      });
    }
    localStorage.setItem('current film', JSON.stringify(this.state.currFilm));
  }


  fetchPropertyObj = async (url) => {
    const response = await fetch(url);
    const propertyObj = await response.json();
    return propertyObj;
  }

  getDataFromStorage = (name) => {
    const data = JSON.parse(localStorage.getItem(name));
  }

  fetchChosenContent = async () => {
    const peopleData = await new People();
    localStorage.setItem('people', JSON.stringify([...peopleData]));
    const planetData = await new Planets();
    localStorage.setItem('planets', JSON.stringify([...planetData]));
    const vehicleData = await new Vehicles();
    localStorage.setItem('vehicles', JSON.stringify([...vehicleData]));
  }

  displayChosenContent =  (e) => {
    const contentName = e.target.name;
    const data = JSON.parse(localStorage.getItem(contentName));
    
    this.setState({
      displayedContent: data,
      chosenContent: contentName,
    });
  }

  incrementCarousel = () => {
    const { carouselIndex } = this.state;
    let newIndex = 0;

    if (carouselIndex < 9) {
      newIndex = carouselIndex + 1;
    }

    this.setState({ carouselIndex: newIndex });
  }

  decrementCarousel = () => {
    const { carouselIndex } = this.state;
    let newIndex;

    if (carouselIndex < 1) {
      newIndex = 9;
    } else {
      newIndex = carouselIndex - 1;
    }

    this.setState({ carouselIndex: newIndex });
  }

  viewFavorites = () => {
    this.setState({
      displayedContent: this.state.favorites
    })
  }

  addToFavorites = (favoritedCard) => {
    const { favorites } = this.state;
    const clickedCard = favoritedCard;
    clickedCard.favorite = true;
    const allFavorites = favorites.map(favorite => favorite.name);
    if (allFavorites.includes(clickedCard.name)) {
      clickedCard.favorite = false;
      const newFavorites = favorites.filter(favoriteCard => {
        return (favoriteCard.name !== clickedCard.name)
      })
      this.setState({
        favorites: newFavorites
      });
    } else {
      this.setState({
        favorites: [...favorites, clickedCard]
      });
    }
  }

  returnHome = async () => {
     this.fetchRandomFilm();
     this.setState({
      chosenContent: ""
    })
  }

  generateRandomNum = () => Math.floor(Math.random() * 6) + 1;

  render() {
    const {
      favorites,
      currFilm,
      displayedContent,
      carouselIndex,
    } = this.state;

    return (
      <div className="App">
        <h1 className="header"> SWAPIBOX </h1>
        <Navigation 
          displayChosenContent={this.displayChosenContent}
          returnHome={this.returnHome}
        />
        {/* <Favorites
          faves={favorites}
          viewFavorites={this.viewFavorites}
<<<<<<< HEAD
        />
        <Main 
          displayedContent = {displayedContent}
=======
        /> */}
        {/* <ContentContainer
          chosenContent={chosenContent}
          film={currFilm}
          contents={displayedContent}
>>>>>>> Begin implementing router
          incrementCarousel={this.incrementCarousel}
          decrementCarousel={this.decrementCarousel}
          carouselIndex={carouselIndex}
          addToFavorites={this.addToFavorites}
<<<<<<< HEAD
          film={currFilm}
        />
=======
        /> */}
        <Main displayedContent = {this.state.displayedContent}/>
>>>>>>> Begin implementing router
      </div>
    );
  }
}

export default App;