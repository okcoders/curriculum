import Card from "./card";
import cardData from "../assets/card-data";
import Counter from "./counter";

export default function Body() {

  return (
    <div className="">
      {/* <Counter /> */}

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
