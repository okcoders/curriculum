import MealCard from "./MealCard"
import type { Meal } from "../types"

interface MealListProps {
  meals: Meal[];
}

export default function MealList({ meals }: MealListProps) {
  return (
    <div className="mb-4 grid grid-cols-2 gap-4">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  )
}
