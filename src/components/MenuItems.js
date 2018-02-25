/**
 * @fileOverview MenuItem
 * @file A single list component holding links
 * to the menu items aligned to our container grid.
 */

import React from 'react';

const MenuItems = props => {
	const name = props.items.name;
	// Now if this were a real menu, it'd link to the food items
	// within the page 🍔.
	const { fakeLink } = props;

	return (
		<li className="menu__item"><a className="menu__link" href={`#${fakeLink}`}>{name}</a></li>
	);
}

export default MenuItems;