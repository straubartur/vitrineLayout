# challenge-linx

## Installation guide

Clone this repository at your current location:

```bash

git clone https://github.com/straubartur/vitrineLayout.git

# enter at the directory
cd vitrineLayout

```

## Installing Dependencies

```bash

npm install


```

## Running the application

```bash


npm start

```

Open ```http://localhost:1234``` in your browser.

## Folder Structure

-> index.html (page structure, script calls, api call)\
-> packge.json (parcel deps, and script runs)\
-> .gitignore\
-> README.md\
-> assets
  * css\
  -> grid.css (grid css properties)\
  -> vitrine.css (all showcase css properties)
  * js\
    -> carrousel.js (carrousel related event listeners and renderization logic methods)\
    -> jsonp.js (X callback, html generatores)

## Main Challenge

The hardest concept of this test was the jsonp api call. to solve this problem i called the jsonp api using the script tag on the index.html. To get the json data, i created a callback called X on "assets/js/jsonp.js", this callback enabled me to retrieve jsonp data and start doing the carrousel stuff.
