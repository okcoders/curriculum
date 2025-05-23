import { useState } from "react"
import day2Data from "./cardData/day2Data"
import SideMenu from "./components/side_menu"


export default function Day2() {

    const [selected, setSelection] = useState("")

    const handleSelection = (selection) => {
        setSelection(selection)
    }


    return (
        <div className="day2">
            <h2>Module 4: Day 2</h2>
            <div>
                <SideMenu data={day2Data} onSelection={handleSelection} />
            </div>
            </div>

    )
}