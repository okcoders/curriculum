# Day 8

Going from where we left off with our weather app at the end of Day 7, in groups, collaborate together to solve the following challenges:

### Project setup

- copy weather-continued folder from Day 7 to a new location of your choice
- open it in vs-code
- from the terminal, start the project by running `npm start` from the root of the project

### Daily forecast cards spacing

The padding and spacing of the daily forecast weather cards could be improved. Have the cards from a grid instead of a stacked column, and make sure the cards have some space between where they start and the search button

### Daily forecast card condition

Display the image and text description for the condition provided for the weather description (e.g sunny, cloudy image) in the daily forecast card. This is in an object called condition in the same object where we pull maxtemp_f and mintemp_c

### Content on the home page (index/root route)

- Create a new component
- Hook that component up to the router, and have it be displayed at the root of the page
- Get the current weather (the api docs has a current weather url). For a hardcoded location of your choice, and display this on the homepage (suggested attributes to show: condition, wind, precipitation, temp) whenever the user first lands on the page (e.g they should not have to click a submit button). hint the url should roughly look like this: https://api.weatherapi.com/v1/current.json?key=bcdefa17d9b7477db50225739221805&q=73106

### Astronomy page

- Create a new component called Astronomy
- Hook this up to the router and the app bar (so that clicking the Astronomy nav header routes to this new component)
- Query this api route (astronomy data) on page load for a location of your choice: https://api.weatherapi.com/v1/astronomy.json?key=bcdefa17d9b7477db50225739221805&q=73106&dt=2022-07-09
- Display the data coming back from this api call (e.g sunrise, sunset, moonrise, moonset, moon_phase, and moon_illumination)

### Forecast page url hookup

- whenever the user submits a search on the Forecast page, update the url of the page to reflect their query (e.g add param names of your choice that have the location they chose and the number of days). This doc should help https://reactrouter.com/docs/en/v6/hooks/use-search-params
- Note, doing this means that the url will now show what they queried for, but if you reloaded the page, nothing in the app is reading from the url.
- On page load, see if there are any query params in the url, and set the values of the corresponding inputs to that (e.g if the url has location in it, set the location input on the page to that)
- On page load, if there were any query params set in the url, auto run the search

### Bonus

- make it look really good
- add a logo to the header
- use the user's location to set the weather location query for the home page: https://dev.to/codebucks/how-to-get-user-s-location-in-react-js-1691
