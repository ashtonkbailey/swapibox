import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Favorites from './components/favorites/Favorites';
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

  fetchChosenContent = async () => {
    const peopleData = await new People();
    console.log(peopleData)
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

  addFavePeople = (card) => {
    const peopleData = JSON.parse(localStorage.getItem('people'));
    const updatedFavorites = peopleData.map(personObj => {
      if (card.name === personObj.name) {
        personObj.favorite = true;
      }
      return personObj;
    });
    localStorage.setItem('people', JSON.stringify([...peopleData]));
  }

  addFaveVehicles = (card) => {
    const vehicleData = JSON.parse(localStorage.getItem('vehicles'));
    const updatedFavorites = vehicleData.map(vehicleObj => {
      if (card.name === vehicleObj.name) {
        vehicleObj.favorite = true;
      }
      return vehicleObj;
    });
    localStorage.setItem('vehicles', JSON.stringify([...vehicleData]));
  }

  addFavePlanets = (card) => {
    const planetData = JSON.parse(localStorage.getItem('planets'));
    const updatedFavorites = planetData.map(planetObj => {
      if (card.name === planetObj.name) {
        planetObj.favorite = true;
      }
      return planetObj;
    });
    localStorage.setItem('planets', JSON.stringify([...planetData]));
  }

  deleteFavePeople = (card) => {
    const peopleData = JSON.parse(localStorage.getItem('people'));
    const updatedFavorites = peopleData.map(personObj => {
      if (card.name === personObj.name) {
        personObj.favorite = false;
      }
      return personObj;
    });
    localStorage.setItem('people', JSON.stringify([...peopleData]));
  }

  deleteFaveVehicles = (card) => {
    const vehicleData = JSON.parse(localStorage.getItem('vehicles'));
    const updatedFavorites = vehicleData.map(vehicleObj => {
      if (card.name === vehicleObj.name) {
        vehicleObj.favorite = false;
      }
      return vehicleObj;
    });
    localStorage.setItem('vehicles', JSON.stringify([...vehicleData]));
  }

  deleteFavePlanets = (card) => {
    const planetData = JSON.parse(localStorage.getItem('planets'));
    const updatedFavorites = planetData.map(planetObj => {
      if (card.name === planetObj.name) {
        planetObj.favorite = false;
      }
      return planetObj;
    });
    localStorage.setItem('planets', JSON.stringify([...planetData]));
  }

  updateStateFaves = (card, favorites) => {
    card.favorite = false;
    const newFavorites = favorites.filter(favoriteCard => {
      return (favoriteCard.name !== card.name)
    })
    this.setState({
      favorites: newFavorites
    });
  }

  addToFavorites = (favoritedCard) => {
    const clickedCard = favoritedCard;
    const { favorites } = this.state;
    const allFavorites = favorites.map(favorite => favorite.name);

    if (clickedCard.homeworld) {
      this.addFavePeople(clickedCard);
      this.setState({
        favorites: [...favorites, clickedCard]
      });
    } else if (clickedCard.model) {
      this.addFaveVehicles(clickedCard);
      this.setState({
        favorites: [...favorites, clickedCard]
      });
    } else if (clickedCard.terrain) {
      this.addFavePlanets(clickedCard);
      this.setState({
        favorites: [...favorites, clickedCard]
      });
    }

    if (allFavorites.includes(clickedCard.name) && clickedCard.homeworld) {
      this.deleteFavePeople(clickedCard);
      this.updateStateFaves(clickedCard, favorites);
    } else if (allFavorites.includes(clickedCard.name) && clickedCard.model) {
      this.deleteFaveVehicles(clickedCard);
      this.updateStateFaves(clickedCard, favorites);
    } else if (allFavorites.includes(clickedCard.name) && clickedCard.terrain) {
      this.deleteFavePlanets(clickedCard);
      this.updateStateFaves(clickedCard, favorites);
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
          favorites={favorites}
        />
        <Main 
          displayedContent = {displayedContent}
          incrementCarousel={this.incrementCarousel}
          decrementCarousel={this.decrementCarousel}
          carouselIndex={carouselIndex}
          addToFavorites={this.addToFavorites}
          film={currFilm}
          favorites={favorites}
          viewFavorites={this.viewFavorites}
        />
      </div>
    );
  }
}

export default App;