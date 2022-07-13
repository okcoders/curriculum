import { useState, useEffect } from "react";

export function Home() {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=bcdefa17d9b7477db50225739221805&q=73106";
  const [weatherData, setWeatherData] = useState({});

  async function getWeatherData() {
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  if (!weatherData.current) {
    return <p>loading...</p>;
  }

  return (
    <>
      <h1>{weatherData.current.condition.text}</h1>
    </>
  );
}
