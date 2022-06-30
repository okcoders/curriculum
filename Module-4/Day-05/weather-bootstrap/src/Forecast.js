function Forecast(props) {
  console.log(props);
  return (
    <div>
      {props.weatherData.location?.name && (
        <div>
          <h3>City</h3>
          <p>{props.weatherData.location.name}</p>
        </div>
      )}
    </div>
  );
}

export default Forecast;
