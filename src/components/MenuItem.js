/**
 * @fileoverview MenuItem
 * @file A single list component holding links
 * to the menu items aligned to our container grid.
 */

import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ fakeLink, id, item }) => {
  // Now if this were a real menu, it'd link to the food items
  // within the page 🍔.
  const { name } = item;

  return <li id={id} className="menu__item"><a className="menu__link" href={`#${fakeLink}`}>{name}</a></li>;
};

// PropTypes
MenuItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  fakeLink: PropTypes.number,
  id: PropTypes.number,
};

// Default Props
MenuItem.defaultProps = {
  fakeLink: 0,
  id: 0,
};

export default MenuItem;
