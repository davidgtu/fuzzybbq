# Fuzzy's BBQ Menu Component

A simple React app that fetches some local JSON data which contains menu items. This was made to look as close to the design as possible and testable with the provided JSON data. This is built to be responsive and supports, Chrome, Firefox, Safari, and even IE11 in mind. That said, a lot of thought went into this, however simple it might be. Please read through the README (sorry for the length!).

## Getting Started
Simply `git clone`, `cd` to the directory, `npm install`, `npm start`.

## Built With
- [Create React App](https://github.com/facebook/create-react-app)

- [Prepros](https://github.com/Subash/Prepros)

- [Axios](https://github.com/axios/axios)

- [Short Id](https://www.npmjs.com/package/shortid)

- [VS Code](https://github.com/Microsoft/vscode) 

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

### Live Demo
As always, I personally like to host my react projects live.

https://fuzzy-bbq.firebaseapp.com

### Redux
I was really thinking about including Redux into this mini-application, but considering this was on such a small scale, I decided to leave this out. Had this become a much more complex application where state management becomes a problem, then I'd certainly add that in.

### Data
Considering because this challenge didn't provide an API, I decided to make some local JSON files to use as a test. I was well aware I could've simply imported that, but I decided to use `axios` (or `fetch`) since that API might link externally elsewhere. If the data structure in the zipped README is the same as the JSON, then rendering shouldn't be an issue.

If it's an external API link, simply change the argument for: 
```javascript
componentDidMount() {
  this.loadItems('your URL here!')
}
```

### JSDoc
I like JSDoc a lot. What isn't documented here, is documented in the JavaScript.

### ESLint
This was ran through ESLint with [Airbnb's style guide](https://github.com/airbnb/javascript)

### PropTypes and Default Props
Though there is only really one component that receives props, I believe it's good practice to at least document these at the bottom. I see PropTypes as sort of a "guide" or "blueprint" to the component to see what type it expects, and serve warnings when something isn't expected.

### Unique keys
As you might already know, React requires keys. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity. Because I don't have unique keys in my JSON, I decided to use [shortid](https://www.npmjs.com/package/shortid) to take care of that problem rather than pass it the index or name. Passing an index is an antipattern and can cause some [problems](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318), while passing a name seemed cumbersome.

### CSS, UI, UX
The CSS for this application is done with SCSS and compiled with `Prepros`. I could've totally used `Gulp` or `Grunt` to help me compile this, but I chose to keep it simple through using `Prepros`. That said, the tradeoff would most likely be that if someone where to pick this app up, they'd need to find and set up their own compilier 🙀.

#### Grid
A grid system is already in use through some CSS classes, which gives it it's structure from mobile to desktop. Designs were not provided for mobile, but I worked around it as I saw fit by switching the search bar to be under the logo as it personally looked and felt better from a UX standpoint.

#### Color
The design was very simple, but I decided to add *some* flair to it by giving it a color.

#### Search Bar
The SVG search icon also animates when the input is clicked on. From an UX standpoint, I usually like placeholder/icon indications still being present when interacting with an input field. Had I implemented a full search functionality, I would debouce the search and return the relevant menu items that match what is entered in the search bar.

#### Spinner
I also added a spinner to indicate that data is being loaded. I don't like it when data is being loaded into a component and it's just sitting there being blank-- even if it's for a few seconds. What if the user has a bad connection and it takes *several* seconds to load data and there's no indication that data is still being loaded into the state? They'd sit there staring at a blank app is what 😖.

#### Mixins
Though I use a responsive grid, I've included a media query mixin for even more further styling across all device sizes. I believe these mixins make media queries much more manageable and easier to read within the SASS. Overall, these were styled with mobile-first in mind.

#### Fonts
Going off from the design, I've identified the primary font to be `Arvo`, and the accent font to `Open-Sans` (maybe?). I believe they look similarly close enough. I've used Google Fonts to embed into this app. However, the tradeoff is that I'd be dealing with FOUT, or Flash of Unstyled Text.

#### FOUT
I think FOUT is ugly and it should be dealt with. I've included [WebFontLoader](https://github.com/typekit/webfontloader) to deal with it. Though I'm not sure it's the best practice, it is included in the `index.html` file like so:

```javascript
<script>
  WebFont.load({
    google: {
      families: ['Arvo:700', 'Open Sans']
    }
  });
</script>
```

There seems to be no more flashes after that.

#### SASS Variables
Lastly, my SCSS variables are all stored in `variables.scss`.

### License
Whatever you want! 🎉