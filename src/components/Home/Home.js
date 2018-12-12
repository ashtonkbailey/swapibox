import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.css';

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
          <span> {film.title}</span>
          <span> {film.year} </span>
        </h3>
      </div>
    </div>
  )
}

Home.propTypes = {
  film: PropTypes.object.isRequired
}

export default Home;