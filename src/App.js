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
      currFilm: {
        title: '',
        crawl: '',
        year: '',
      },
      carouselIndex: 0,
    };
  }

  cleanFilm = (film) => {
    const messyCrawl = film.opening_crawl;
    const cleanCrawl = messyCrawl.replace(/(\r\n|\n|\r)/gm, ' ');
    const messyYear = film.release_date;
    const cleanYear = messyYear.substring(0, 4);

    return {
      title: film.title,
      crawl: cleanCrawl,
      year: cleanYear,
    };
  }

  fetchCurrFilm = async () => {
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

  componentDidMount = () => {
    this.fetchCurrFilm();
  }

  displayChosenContent = (e) => {
    e.preventDefault();
    const contentToFetch = e.target.name;
    this.fetchChosenContent(contentToFetch);
  }

  fetchPropertyObj = async (url) => {
    const response = await fetch(url);
    const propertyObj = await response.json();
    return propertyObj;
  }

  cleanPeopleData = people => Promise.all(people.results.map(async (person) => {
    const currHomeworld = await this.fetchPropertyObj(person.homeworld);
    const currSpecies = await this.fetchPropertyObj(person.species[0]);
    const personObject = {
      name: person.name,
      homeworld: currHomeworld.name,
      population: currHomeworld.population,
      species: currSpecies.name,
    };
    return personObject;
  }))

  fetchChosenContent = async (name) => {
    const url = `https://swapi.co/api/${name}/`;
    const response = await fetch(url);
    const people = await response.json();
    const cleanedPeople = await this.cleanPeopleData(people);

    await this.setState({
      displayedContent: cleanedPeople,
    });
  }

  incrementCarousel = () => {
    let newIndex = 0;
    const { carouselIndex } = this.state;

    if (carouselIndex < 9) {
      newIndex = carouselIndex + 1;
    }

    this.setState({ carouselIndex: newIndex });
  }

  decrementCarousel = () => {
    let newIndex;
    const { carouselIndex } = this.state;

    if (carouselIndex < 1) {
      newIndex = 9;
    } else {
      newIndex = carouselIndex - 1;
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
        <Navigation displayChosenContent={this.displayChosenContent}/>
        <Favorites faves={this.state.favorites}
        viewFavorites={this.viewFavorites} />
        <ContentContainer 
          film={this.state.currFilm}
          contents={this.state.displayedContent}
          incrementCarousel = {this.incrementCarousel}
          decrementCarousel = {this.decrementCarousel}
          carouselIndex = {this.state.carouselIndex}
          addToFavorites = {this.addToFavorites}
        />
        <Navigation displayChosenContent={this.displayChosenContent} />
        <Favorites favesLength={favorites.length} />
        <ContentContainer
          film={currFilm}
          contents={displayedContent}
          incrementCarousel={this.incrementCarousel}
          decrementCarousel={this.decrementCarousel}
          carouselIndex={carouselIndex}
        // <FilmText />
        // <ContentCards
        //    <Card />
        // />
        />
      </div>
    );
  }
}


export default App;
