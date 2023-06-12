import "./App.css";
import { useState } from "react";

function App() {
  const apiKey = "bcdefa17d9b7477db50225739221805";
  const [days, setDays] = useState(5);
  const [query, setQuery] = useState("73106");
  const [weatherData, setWeatherData] = useState({});
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=${days}&aqi=no&alerts=no`;

  async function onSubmit(e) {
    e.preventDefault();
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>weather</h3>
        <form onSubmit={onSubmit}>
          <div>
            <label>Location Query: </label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div>
            <label>Days to forecast: </label>
            <input
              type="number"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
            />
          </div>
          <button type="submit">Search!</button>
        </form>
        {weatherData.location?.name && (
          <div>
            <h3>City</h3>
            <p>{weatherData.location.name}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
