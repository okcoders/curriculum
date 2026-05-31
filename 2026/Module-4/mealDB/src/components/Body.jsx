import MealCard from "./MealCard"
import { sampleMeals } from "../mealData"



export default function Body({ data }) {




    return (
        <div className="h-1/2 w-1/2 m-auto">
            {sampleMeals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)}
        </div>
    )
}