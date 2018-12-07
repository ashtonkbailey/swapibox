import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation.js';
import Favorites from './components/favorites/Favorites.js';
import ContentContainer from './components/contentContainer/ContentContainer.js';

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
        year: ''
      },
      carouselIndex: 0
    }
  }

  cleanFilm = (film) => {
    const cleanCrawl = film.opening_crawl.replace(/(\r\n|\n|\r)/gm, " ");
    const cleanYear = film.release_date.substring(0, 4);
    return { 
      title: film.title,
      crawl: cleanCrawl,
      year: cleanYear
    }
  }

  generateRandomNum() {
    return Math.floor(Math.random() * 6) + 1;
  }

  componentDidMount = async () => {
    let randomNum = this.generateRandomNum();
    try  {
      const response = await fetch(`https://swapi.co/api/films/${randomNum}`)
      const film = await response.json()
      const cleanFilm = await this.cleanFilm(film)
        this.setState({
          currFilm: {
            title: cleanFilm.title,
            crawl: cleanFilm.crawl,
            year: cleanFilm.year
          }
        })
    } catch (error) {
      this.setState({
        errorStatus: `Error: ${error.message}`
      })
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

  cleanPeopleData = (people) => {
    return Promise.all(people.results.map( async (person, index) =>  {
      const currHomeworld = await this.fetchPropertyObj(person.homeworld);
      const currSpecies = await this.fetchPropertyObj(person.species[0]);
      return {
        name: person.name,
        homeworld: currHomeworld.name,
        population: currHomeworld.population,
        species: currSpecies.name,
        index: index,
        favorite: false
      }
    }))
  }

  cleanPlanetData = (planets) => {
    return Promise.all(planets.results.map( async (planet, index) => {
      let residentsObj;
      // if(planet.residents) {
      //  residentsObj = await this.fetchPropertyObj(planet.residents[0]);
      // }  
      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        // residents: residentsObj.name,
        index: index,
        favorite: false
      }
    }))
  }
  
  fetchChosenContent = async (name) => {
    const url = `https://swapi.co/api/${name}/`;
    const response = await fetch(url);
    const data = await response.json();
    let cleanedData;
    if(name === "people") {
       cleanedData = await this.cleanPeopleData(data)
    }
    else if (name === "planets") {
      debugger
       cleanedData = await this.cleanPlanetData(data)
    }
    await this.setState({
      displayedContent: cleanedData,
      chosenContent: name
      
    }) 
  }

  incrementCarousel = () => {
    let newIndex = 0;
    if (this.state.carouselIndex < 9) {
       newIndex = this.state.carouselIndex +1;
    }
    this.setState({carouselIndex: newIndex})
  }

  decrementCarousel = () => {
    let newIndex;
    if (this.state.carouselIndex < 1) {
      newIndex = 9;
    } else {
      newIndex = this.state.carouselIndex - 1;
    }
    this.setState({carouselIndex: newIndex})
  }

  viewFavorites = () => {
    console.log(this.state.favorites)
  }

  addToFavorites = (favoritedCard) => {
    favoritedCard.card.favorite = true;
    if(!this.state.favorites.includes(favoritedCard.card))
    this.setState({
      favorites: [...this.state.favorites, favoritedCard.card]
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="header"> SWAPIBOX </h1>
        <Navigation displayChosenContent={this.displayChosenContent}/>
        <Favorites faves={this.state.favorites}
        viewFavorites={this.viewFavorites} />
        <ContentContainer 
          chosenContent={this.state.chosenContent}
          film={this.state.currFilm}
          contents={this.state.displayedContent}
          incrementCarousel = {this.incrementCarousel}
          decrementCarousel = {this.decrementCarousel}
          carouselIndex = {this.state.carouselIndex}
          addToFavorites = {this.addToFavorites}
        />
      </div>
    );
  }
}

export default App;
