import Card from "./card";
import cardData from "../assets/card-data";

export default function Body() {

  return (
    <div>
      {cardData.map((card) => (
        <Card
          key={card.title}
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}
