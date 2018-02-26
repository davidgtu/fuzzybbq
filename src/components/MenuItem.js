/**
 * @fileOverview MenuItem
 * @file A single list component holding links
 * to the menu items aligned to our container grid.
 */

import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  // Now if this were a real menu, it'd link to the food items
  // within the page 🍔.
  const { fakeLink, id, items: { name } } = props;

  return <li id={id} className="menu__item"><a className="menu__link" href={`#${fakeLink}`}>{name}</a></li>;
};

// PropTypes
MenuItem.propTypes = {
  items: PropTypes.objectOf(PropTypes.string),
  fakeLink: PropTypes.number,
  id: PropTypes.number,
};

// Default Props
MenuItem.defaultProps = {
  items: [],
  fakeLink: '',
  id: '',
};

export default MenuItem;
