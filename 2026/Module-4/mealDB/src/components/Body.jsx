import MealCard from "./MealCard"
import { sampleMeals } from "../mealData"
import { useState } from "react";
import MealList from "./MealList";



export default function Body({ data }) {
    const [query, setQuery] = useState("");

    const visibleMeals = sampleMeals.filter((meal) => 
        meal.strMeal.toLowerCase().includes(query.toLowerCase()))

    return (
        <div className="h-1/2 m-auto">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Start typing to search"
                />

            <MealList meals={visibleMeals} />
        </div>
    )
}