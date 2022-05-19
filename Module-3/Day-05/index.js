const WEATHER_API_KEY = 'bcdefa17d9b7477db50225739221805';
const FORECAST_ENDPOINT =
  'http://api.weatherapi.com/v1/forecast.json?key=bcdefa17d9b7477db50225739221805&q=73008';

window.onload = () => {
  attachGetWeatherDataButtonListener();
};

function attachGetWeatherDataButtonListener() {
  const getWeatherDataButton = document.getElementById('get-weather-data');
  if (getWeatherDataButton) {
    getWeatherDataButton.addEventListener('click', () =>
      fetch(FORECAST_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
          // now maybe we do this here?
          const days = getForecastByDay(data);
          // {'2022-05-18': { maxTemp: 89}, '2022-05-19': {maxTemp}}
          addToUnorderderedList(data);
        })
        .catch((error) =>
          console.log('Error in fetch for forecast.json: ', error.message)
        )
    );
  }
}

function addDataToPreTag(data) {
  const resultsPreTag = document.getElementById('data-results');
  resultsPreTag.innerText = JSON.stringify(data, null, 2);
}

// on click -> API call (GET weather api data) -> put it in a pre tag
// ususally need 2 things for an API call - URL + Authenticate

// anatomy of a URL:
// base url (http + subdomain + domain + [api_version]) - ex.  http://api.weatherapi.com/v1
// resources - ex. /orders, /customer/5, /current.json

// Error handling with async/await
// try {
// await res = fetch();
// await data = res.json()
// } catch (error) {
//     console.log(error);
// }
