# Fuzzy's BBQ Menu Component
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A simple React app that fetches some local JSON data which contains menu items. This was made to look as close to the design as possible and testable with the provided JSON data. This is built to be responsive and supports, Chrome, Firefox, Safari, and even IE11 in mind.

## Getting Started
Simply `git clone`, `cd` to the directory, `npm install`, `npm start`.

## Built With
- [Create React App](https://github.com/facebook/create-react-app)

- [Prepros](https://github.com/Subash/Prepros)

## Usage
The main portion of this app is to deliver a responsive, flexible, and data-driven skeleton. The main magic happens in the function, `loadItems(path)`. You'll find three variables on top of `containers/App.js`:

```javascript
const MENU_ITEMS_PATH = '/json/menuItems.json';
const MENU_ITEMS_LARGE_PATH = '/json/menuItems_large.json';
const MENU_ITEMS_SMALL_PATH ='/json/menuItems_small.json';
```

To test each size, look for the function call under `componentDidMount()` and change the paths like so:

```javascript
componentDidMount() {
  this.loadItems(MENU_ITEMS_PATH) //default
}
``` 
to
```javascript
componentDidMount() {
  this.loadItems(MENU_ITEMS_LARGE_PATH) 
}
``` 

## Thoughts and Approach

### Redux
I was really thinking about including Redux into this mini-application, but considering this was on such a small scale, I decided to leave this out. Had this become a much more complex application where state management becomes a problem, then I'd certainly add that in.

### Data
Considering because this challenge didn't provide an API, I decided to make some local JSON files to use as a test. I was well aware I could've simply imported that, I decided to use `axios` since that API might link externally elsewhere. If the data structure in the zipped README is the same as the JSON, then rendering shouldn't be an issue.

### PropTypes and Default Props
Though there is only really one component that receives props, I believe it's good practice to at least document these at the bottom. I see PropTypes as sort of a "guide" or "blueprint" to the component to see what type it expects, and serve warnings when something isn't expected.

