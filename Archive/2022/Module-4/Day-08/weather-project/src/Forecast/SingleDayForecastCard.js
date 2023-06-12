import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function SingleDayForecastCard(props) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Weather for {props.locationName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Date: {props.date}
          </Card.Subtitle>
          <Card.Text>
            <ul>
              <li> Average Temp: {props.averageTemp} </li>
              <li> Max Temp: {props.maxTemp} </li>
              <li> Min Temp: {props.minTemp} </li>
              <li> Condition {props.conditionText} </li>
              <li>
                <img alt="condition" src={props.icon}></img>
              </li>
            </ul>
          </Card.Text>
          {/* <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleDayForecastCard;
