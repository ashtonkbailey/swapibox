import React, { Component } from 'react';
// import '../contentContainer/ContentContainer.css';
import './Home.css';

const Home = ({film}) => {
  // const film = JSON.parse(localStorage.getItem('current film'));
  return (
    <div className="content-container">
      <div>
        <div className="crawl">
          <div>
            {film.crawl}
          </div>
        </div>
        <h3 className="title">
          <span> {film.title}</span>
          <span> {film.year} </span>
        </h3>
      </div>
    </div>
  )
}

export default Home;