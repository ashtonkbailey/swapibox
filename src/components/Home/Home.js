import React, { Component } from 'react';
import '../contentContainer/ContentContainer.css'

const Home = ({film}) => {
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

export default Home;