import React, { Component } from 'react';
import '../contentContainer/ContentContainer.css'

<<<<<<< HEAD
<<<<<<< HEAD
const Home = ({film}) => {
=======
const Home = () => {
  const film = JSON.parse(localStorage.getItem('current film'));
>>>>>>> Begin implementing router
=======
const Home = ({film}) => {
>>>>>>> Add cards to favorite array
  return (
    <div className="content-container">
      <div>
        <div className="crawl">
          <div>
            {film.crawl}
          </div>
        </div>
        <h3 className="title">
          {film.title}
          {film.year}
        </h3>
      </div>
    </div>
  )
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> Begin implementing router
=======
>>>>>>> Add cards to favorite array
export default Home;