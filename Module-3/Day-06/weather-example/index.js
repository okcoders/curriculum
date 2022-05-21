const WEATHER_API_KEY = "bcdefa17d9b7477db50225739221805";
const FORECAST_ENDPOINT = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=73008`;

window.onload = () => {
  attachGetWeatherDataButtonListener();
};

function attachGetWeatherDataButtonListener() {
  const getWeatherDataButton = document.getElementById("get-weather-data");
  if (getWeatherDataButton) {
    getWeatherDataButton.addEventListener("click", getWeatherData);
  }
}

function addDataToPreTag(data) {
  const resultsPreTag = document.getElementById("data-results");
  resultsPreTag.innerText = data.location.name;
}

async function getWeatherData() {
  try {
    const res = await fetch(FORECAST_ENDPOINT);
    const data = await res.json();
    addDataToPreTag(data);
  } catch (error) {
    console.log(error);
  }
}
