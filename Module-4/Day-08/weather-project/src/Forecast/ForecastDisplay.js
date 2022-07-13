import SingleDayForecastCard from "./SingleDayForecastCard";
import Row from "react-bootstrap/Row";
import "./ForecastDisplay.css";

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
        const icon = forecast.day.condition.icon;
        const conditionText = forecast.day.condition.text;

        return (
          <SingleDayForecastCard
            locationName={locationName}
            date={date}
            averageTemp={averageTemp}
            maxTemp={maxTemp}
            minTemp={minTemp}
            icon={icon}
            conditionText={conditionText}
          ></SingleDayForecastCard>
        );
      }
    );

    return (
      <>
        <Row className="forecast-cards">{allForecastCards}</Row>
      </>
    );
  }
}

export default ForecastDisplay;
