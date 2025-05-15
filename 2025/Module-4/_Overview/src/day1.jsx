import GenerateCards from "./components/cards/generate-cards"
import day1Data from "./cardData/day1Data"
export default function Day1() {

    return (
        <div className="">
            <h1>Module 4: Day 1</h1>
            <GenerateCards cardData={day1Data} />
        </div>
    )
}