import { Card } from "@chakra-ui/react";



export default function RenderCard({ header, body }) {

    if (body) {
        console.log("Card body received")
    } else {
        console.log("No data detected for the card's body section")
    }

    return (
        <>
        <Card.Root>
            <Card.Header>
                {header}
            </Card.Header>
            <Card.Body>
                {body}
            </Card.Body>
        </Card.Root>
        </>
    )
 }