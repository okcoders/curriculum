import { useEffect, useState } from 'react';
import DayCard from './DayCard';

const weatherApiKey = '31bdbe407fbd4891ac4183953221705';

const Weather = () => {
	const [zipCode, setZipCode] = useState(73160);
	const [forecastData, setForecastData] = useState([]);
	const url = `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${zipCode}&days=7&aqi=no&alerts=no`;

	const getForecast = async () => {
		const res = await fetch(url);
		const { forecast } = await res.json();
		console.log(forecast.forecastday);
		setForecastData(forecast.forecastday);
	};

	useEffect(() => {
		getForecast();
	}, []);

	return (
		<>
			<label htmlFor="zipCode">Zip Code</label>
			<input
				name="zipCode"
				type="number"
				placeholder="Enter your Zip Code"
				value={zipCode}
				onChange={e => setZipCode(e.target.value)}
				style={{
					width: '100%',
				}}
			/>
			{forecastData.map(({ date, day: { condition, maxtemp_f } }) => (
				<DayCard
					date={date}
					conditionImageUrl={condition.icon}
					condition={condition.text}
					highTemp={maxtemp_f}
				/>
			))}
		</>
	);
};

export default Weather;
