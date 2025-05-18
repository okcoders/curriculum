


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
    }

    return (
        <div style={cardStyle}>
        <img src={img} alt={`image of ${title}`} style={imageStyle} />
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
    )
}