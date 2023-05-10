const fetch = require("cross-fetch");
const webhookUrl = "https://hooks.slack.com/services/<key here>";

const WEATHER_API_KEY = "bcdefa17d9b7477db50225739221805";
const FORECAST_ENDPOINT = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=73008`;

async function getWeatherData() {
  try {
    const res = await fetch(FORECAST_ENDPOINT);
    const data = await res.json();
    const message = makeMessageFromWeatherData(data);
    return message;
  } catch (error) {
    console.log(error);
  }
}

async function sendMessageToSlack(message) {
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: message }),
    });
    console.log(res);
  } catch (e) {
    console.error(e);
  }
}

function makeMessageFromWeatherData(data) {
  const city = data.location.name;
  const temp = data.current.temp_f;
  return `In ${city} it is currently ${temp} degrees.`;
}

async function getWeatherAndSendToSlack() {
  const message = await getWeatherData();
  sendMessageToSlack(message);
}

getWeatherAndSendToSlack();
