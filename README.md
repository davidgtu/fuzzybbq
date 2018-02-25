# Fuzzy's BBQ Menu Component
A simple React app that fetches some local JSON data which contains menu items. This was made to look as close to the design as possible, and with a flexible, and responsive skeleton. This is testable with various sizes of data, and built to be as responsive as possible.

## How To Run
Simply `git clone`, `cd` to the directory, `npm install`, `npm start`.

# Thoughts & Approach
Because I'm one to mull over details.

- Should Redux be introduced into this mini-application?
  - I certainly *thought* about it, but since this was on such a small scale, I stuck with regular ol' React. Was it a good time to show off? Sure. Should I be realistic and not overcomplicate things? I'd say that's even better. Had this been a bigger scale project where state management becomes a problem, then my approach would've been to introduce Redux.

- Data}
  - Regarding as to how I get the menu data, I do it via `fetch`. I originally had problems with keeping it inside the `src` folder, but that didn't work. Moving the JSON file out to the `public` folder proved successful, however. That said, if this were to accept a different API URL, then simply changing the argument in `this.getItems()` under `componentDidMount()` will work, provided that the structure in the README is the same.

- Flexible Skeleton
