import { useEffect, useState } from "react"
import SideMenu from "./components/side_menu"
import day2Data from "./cardData/day2Data";
import RenderCard from "./components/cards/card";


export default function Day2() {

    const [selected, setSelection] = useState(day2Data[0].header || "");
    const [lessons, setLessons] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const lessons = day2Data.map((lesson) => lesson.header);
        setLessons(lessons);

    }, []);


    const handleSelection = (selection) => {
        const selectedItem = selection;
        setSelection(selectedItem);
        setShowMenu(false);
    }


    return (
        <div className="day2">
            <h2>Module 4: Day 2</h2>
            <div>
            <div className="absolute fixed left-0 top-60 z-10">
                <p className="cursor-pointer bg-slate-300 rounder-top-lg" onClick={() => setShowMenu(!showMenu)}>{showMenu ? "Hide Menu" : "Show Menu"}</p>
                <div className={`${showMenu ? "block" : "hidden"}`}>
                <SideMenu data={lessons} onSelection={handleSelection} selected={selected} />
                </div>
                </div>
                <div className={`${showMenu ? "" : "w-full m-auto"} transition-all duration-500 text-2xl`}>
                    <RenderCard header={selected} body={day2Data.find((lesson) => lesson.header === selected)?.body} />
                </div>
            </div>
            </div>

    )
}