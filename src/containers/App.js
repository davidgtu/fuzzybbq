/**
 * @fileoverview App
 * @overview Our container for the entire application.
 * Responsible for instantiating each component as well as
 * performing the importing for our local json.
 */

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

  /**
   * Sets the container state of isLoading to true. Then,
   * uses fetch to import the local JSON data and receives
   * menu data. State is then set and sets loading back to false.
   * @param {string} query The path string to receive data.
   */

  /** React */
  componentDidMount() {
    this.loadItems(MENU_ITEMS_PATH);
  }

  loadItems(path) {
    // this.setState({ isLoading: true });

    const handleOk = response => response.json()
      .then(menuItems => this.setState({ menuItems, isLoading: false }));

    // Execute fetch request
    fetch(path)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          // Good response 👍
          return response;
        }
        // Throw error 🙅‍
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }).then(handleOk, err => console.log(err));
  }

  /** React */
  render() {
    const { menuItems, isLoading } = this.state;
    const items = menuItems.map((item, index) => {
      return <MenuItem id={index} fakeLink={index} items={item} />;
    });

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

export default App;
