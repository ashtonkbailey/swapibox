import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation';
import Favorites from './components/favorites/Favorites';
import ContentContainer from './components/contentContainer/ContentContainer';

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
  }

  displayChosenContent = (e) => {
    const contentToFetch = e.target.name;
    this.fetchChosenContent(contentToFetch);
  }

  fetchPropertyObj = async (url) => {
    const response = await fetch(url);
    const propertyObj = await response.json();
    return propertyObj;
  }

  cleanPeopleData = people => Promise.all(people.results.map(async (person, index) => {
    const currHomeworld = await this.fetchPropertyObj(person.homeworld);
    const currSpecies = await this.fetchPropertyObj(person.species[0]);
    return {
      name: person.name,
      homeworld: currHomeworld.name,
      population: currHomeworld.population,
      species: currSpecies.name,
      index,
      favorite: false,
    };
  }))

  cleanPlanetData = planets => Promise.all(planets.results.map(async (planet, index) => {
    let residentName;
    let planetData = {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      index,
      favorite: false,
      residents: "none"
    };
    if (planet.residents.length > 0) {
     residentName = await this.fetchPropertyObj(planet.residents[0]);
     planetData.residents = residentName.name;
    } 
    return planetData;
  }))

  cleanVehicleData = vehicles => Promise.all(vehicles.results.map(async (vehicle,index) => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      index
    }
  }))

  fetchChosenContent = async (name) => {
    const url = `https://swapi.co/api/${name}/`;
    const response = await fetch(url);
    const data = await response.json();
    let cleanedData;

    if (name === 'people') {
      cleanedData = await this.cleanPeopleData(data);
    } else if (name === 'planets') {
      cleanedData = await this.cleanPlanetData(data);
    } else if (name === 'vehicles') {
      cleanedData = await this.cleanVehicleData(data);
    }
    await this.setState({
      displayedContent: cleanedData,
      chosenContent: name,
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
    console.log(this.state.favorites);
  }

  addToFavorites = (favoritedCard) => {
    const clickedCard = favoritedCard;
    clickedCard.card.favorite = true;
    const { favorites } = this.state;

    if (!favorites.includes(clickedCard.card)) {
      this.setState({
        favorites: [...favorites, clickedCard.card],
      });
    }
  }

  generateRandomNum = () => Math.floor(Math.random() * 6) + 1;

  render() {
    const {
      favorites,
      chosenContent,
      currFilm,
      displayedContent,
      carouselIndex,
    } = this.state;

    return (
      <div className="App">
        <h1 className="header"> SWAPIBOX </h1>
        <Navigation displayChosenContent={this.displayChosenContent} />
        <Favorites
          faves={favorites}
          viewFavorites={this.viewFavorites}
        />
        <ContentContainer
          chosenContent={chosenContent}
          film={currFilm}
          contents={displayedContent}
          incrementCarousel={this.incrementCarousel}
          decrementCarousel={this.decrementCarousel}
          carouselIndex={carouselIndex}
          addToFavorites={this.addToFavorites}
        />
      </div>
    );
  }
}

export default App;
