import { useState, useEffect } from "react";

export function Astronomy() {
  const currentDate = new Date().toISOString().substring(0, 10);
  const url = `https://api.weatherapi.com/v1/astronomy.json?key=bcdefa17d9b7477db50225739221805&q=73106&dt=${currentDate}`;
  const [astronomyData, setAstronomy] = useState({});

  async function getAstronomyData() {
    const response = await fetch(url);
    const data = await response.json();
    setAstronomy(data);
  }

  useEffect(() => {
    getAstronomyData();
  }, []);

  if (!astronomyData.astronomy) {
    return <p>loading...</p>;
  }

  return (
    <>
      <h1>{astronomyData.astronomy.astro.moon_phase}</h1>
    </>
  );
}
