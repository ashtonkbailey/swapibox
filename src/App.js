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
      displayedContent: [],
      currFilm: {
        title: '',
        crawl: '',
        year: ''
      },
      carouselIndex: 0
    }
  }

  cleanFilm = (film) => {
    //clean up opening crawl and year
    //take title from state/if it has '\r\n', replace with a space/if if has '\r\n \r\n', replace with line break
    const messyCrawl = film.opening_crawl;
    const cleanCrawl = messyCrawl.replace(/(\r\n|\n|\r)/gm," ");
    const messyYear = film.release_date;
    const cleanYear = messyYear.substring(0, 4);
    //return cleaned up film obj: cleancrawl, cleanyear, title
    return { 
      title: film.title,
      crawl: cleanCrawl,
      year: cleanYear
    }
  }

  generateRandomNum() {
    return Math.floor(Math.random() * 6) + 1;
  }

  componentDidMount = () => {
    //generateRandomNum()
    let randomNum = this.generateRandomNum();
    //fetch film(randomNum)
    fetch(`https://swapi.co/api/films/${randomNum}`)
    .then(response => response.json())
    .then(film => this.cleanFilm(film))
    .then(cleanFilm => {
      this.setState({
        currFilm: {
          title: cleanFilm.title,
          crawl: cleanFilm.crawl,
          year: cleanFilm.year
        }
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  displayChosenContent = (e) => {
    e.preventDefault();
    const contentToFetch = e.target.name;
    this.fetchChosenContent(contentToFetch);
  }

  cleanPeopleData = (people) => {
    const peopleArr = people.results;
    return peopleArr.map(person => {
      let obj = {}
      obj.name = person.name;
      obj.homeworld = person.homeworld;
      obj.species = person.species;
      return obj;
    })
  }

  fetchChosenContent = (name) => {
    const url = `https://swapi.co/api/${name}/`;
    fetch(url)
      .then(response => response.json())
      .then(people => this.cleanPeopleData(people))
      .then(cleanedPeople => {this.setState({
        displayedContent: cleanedPeople
      })      
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


  render() {
    return (
      <div className="App">
          <h1 className="header"> SWAPIBOX </h1>

        <Navigation displayChosenContent={this.displayChosenContent}/>
        <Favorites faves={this.state.favorites} />
        <ContentContainer 
          film={this.state.currFilm}
          contents={this.state.displayedContent}
          incrementCarousel = {this.incrementCarousel}
          decrementCarousel = {this.decrementCarousel}
          carouselIndex = {this.state.carouselIndex}
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
