/**
 * @fileoverview App
 * @overview Our container for the entire application.
 * Responsible for instantiating each component as well as
 * performing the importing for our local json.
 */

import axios from 'axios';
import shortid from 'shortid'; // Generates unique keys for array
import React, { Component } from 'react';
import MenuItem from '../components/MenuItem';
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';

import '../css/main.css';

// Our local path names for JSON. Use these as arguments for
// the the function getItems()
const MENU_ITEMS_PATH = '/json/menuItems.json';
// const MENU_ITEMS_LARGE_PATH = '/json/menuItems_large.json';
// const MENU_ITEMS_SMALL_PATH ='/json/menuItems_small.json';

class App extends Component {
  constructor() {
    super();
    this.state = { menuItems: [], isLoading: true };
  }

  componentDidMount() {
    this.loadItems(MENU_ITEMS_PATH);
  }

  /**
   * Sets the container state of isLoading to true. Then,
   * uses fetch to import the local JSON data and receives
   * menu data. State is then set and sets loading back to false.
   * @param {string} query The path string to receive data.
   */
  loadItems(path) {
    axios.get(path)
    // Response is good 👉😎👉
      .then(response => this.setState({ menuItems: response.data, isLoading: false }))
    // Error is caught 🙅‍
      .catch(error => console.error(error));
  }

  render() {
    const { menuItems, isLoading } = this.state;
    const items = menuItems.map((item, index) => <MenuItem key={shortid.generate()} id={index} fakeLink={index} item={item} />);

    return (
      <div className="app">
        <div className="app__body container-fluid">
          <div className="menu-row grid">
            <h1 className="col-sm-12 col-md-3 text-center menu__header">Menu</h1>
            <div className="col-sm-12 col-md-7 menu-list__container">
              <ul className="menu__list">
                {isLoading ? <Spinner /> : items}
              </ul>
            </div>
            <SearchBar />
          </div>
        </div>
      </div>
    );
  }
}

// Proptypes
App.propTypes = {

};

// Default Props
App.defaultProps = {

};

export default App;
