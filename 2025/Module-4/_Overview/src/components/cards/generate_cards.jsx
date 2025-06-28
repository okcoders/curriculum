import RenderCard from "./card"
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect } from "react";


export default function GenerateCards({ cardData }) {
    console.log("card data", cardData);
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            {cardData.map(({ header, body }) => {
                return (
                    <div key={header}>
                        <RenderCard header={header} body={body} />
                    </div>
                )
            })}
        </>
    )
}