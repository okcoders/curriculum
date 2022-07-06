import SingleDayForecastCard from "./SingleDayForecastCard";

function ForecastDisplay(props) {
  if (!props.weatherData.location?.name) {
    return <></>;
  } else {
    const locationName = props.weatherData.location.name;

    const allForecastCards = props.weatherData.forecast.forecastday.map(
      (forecast) => {
        const date = forecast.date;
        const averageTemp = forecast.day.avgtemp_f;
        const maxTemp = forecast.day.maxtemp_f;
        const minTemp = forecast.day.mintemp_f;

        return (
          <SingleDayForecastCard
            locationName={locationName}
            date={date}
            averageTemp={averageTemp}
            maxTemp={maxTemp}
            minTemp={minTemp}
          ></SingleDayForecastCard>
        );
      }
    );

    return <div>{allForecastCards}</div>;
  }
}

export default ForecastDisplay;
