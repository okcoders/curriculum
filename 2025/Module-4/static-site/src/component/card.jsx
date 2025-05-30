export default function Card({ img, title, description }) {
  const cardStyle = {
    borderRadius: "10px",
    border: "1px solid black",
    boxShadow: "0px 0px 2px .5px black",
    marginTop: "4px",
    width: "300px",
    margin: "5px auto",
    textAlign: "center",
    overflow: "hidden",
  };

  return (
    <div className="card bg-white text-black w-96 shadow-sm my-2 mx-auto">
      <img src={img} alt={`image of ${title}`} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="">{description}</p>
        <div className="card-actions">
            
        </div>
      </div>
    </div>
  );
}
