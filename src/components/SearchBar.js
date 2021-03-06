/**
 * @fileoverview SearchBar
 * @file A search component containing the input and
 * SVG icon. This is styled to make it look like the
 * icon is a part of the input. The label tag is for
 * accessbility purposes, despite it being hidden.
 */

import React from 'react';

const SearchBar = () => (
  <div className="search__container col-sm-12 col-md-2">
    <div className="search-form-wrapper">
      <label htmlFor="searchForm" hidden>Search the menu</label>
      <input id="searchForm" className="search-form__input" type="text" name="search" placeholder="Search the menu" />
      <svg className="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
        <title id="title">Search Icon</title>
        <g className="search-path" fill="none" stroke="#000">
          <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
          <circle cx="8" cy="8" r="7" />
        </g>
      </svg>
    </div>
  </div>
);

// PropTypes
SearchBar.propTypes = {

};

// Default Props
SearchBar.defaultProps = {

};

export default SearchBar;
