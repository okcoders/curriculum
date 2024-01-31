const url =
  "https://api.weatherapi.com/v1/current.json?key=d57250fe1d9a4a1fafd221431233105&q=73106&aqi=no";
const currentWeatherPromise = fetch(url);

// const test = [1, 2, 3, 4].filter
// const filteredArray = test.filter(n => n % 2 === 0)

// currentWeatherPromise
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(`The current temp near you is ${json.current.temp_f}`);
//   });

async function getCurrentWeather() {
  const currentWeatherResponse = await fetch(url);
  console.log(currentWeatherResponse.headers.get("date"));
  const currentTime = new Date();
  console.log(currentTime);
  const json = await currentWeatherResponse.json();
  console.log(`The current temp near you is ${json.current.temp_f}`);
}

getCurrentWeather();
