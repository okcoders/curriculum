import MealCard from "./MealCard"

export default function MealList({ meals }) {



    return (
        <div className="mb-4 grid grid-cols-2 gap-4">
            {meals.map((meal) => (
                    <MealCard className="" key={meal.idMeal} meal={meal} />
            ))}
        </div>
    )
}