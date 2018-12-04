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
    //take title from state/if it has '\r\n', replace with a space/if if has '\r\n \r\n', replace with line break
    const messyCrawl = film.opening_crawl;
    const cleanCrawl = messyCrawl.replace(/(\r\n|\n|\r)/gm,"");
    const messyYear = film.release_date;
    const cleanYear = messyYear.substring(2, 4);
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

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}
// <header className="App-header">
//           <h1>SwapiBox</h1>
//         </header>
//         <Navigation />
//         <Favorites />
//         <ContentContainer 
//           film={this.state.currFilm}
//         //<FilmText />
//         //<ContentCards 
//         //    <Card />
//         // />
//         />

export default App;
