import React from 'react';
import PropTypes from 'prop-types';
import './ContentContainer.css'

const ContentContainer = ({film}) => {
    return (
        <div className="content-container">
        <div className="crawl"><div>
            <h1 className="title"> {film.title.toUpperCase()} </h1>
            {film.crawl}
            </div></div>
        </div>
    )
}

export default ContentContainer;
