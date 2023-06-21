const DayCard = ({ date, conditionImageUrl, condition, highTemp }) => (
	<div>
		<div>Date: </div>
		<div>{date}</div>
		<img alt="the daily condition" src={conditionImageUrl} />
		<div>Condition: </div>
		<div>{condition}</div>
		<div>High for Today: </div>
		<div>{highTemp}</div>
	</div>
);

export default DayCard;
