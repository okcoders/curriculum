import { useState, useEffect } from "react";
import MealList from "./MealList";
import type { Meal } from "../types";

export default function Body() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    async function loadMeals() {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        setMeals(data.meals ?? [])
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false)
      }
    }

    loadMeals()
  }, [query])

  const showMeals = () => {
    if (meals.length === 0) return (
      <p>
        No meals returned
      </p>
    )
    return (<MealList meals={meals} />)
  }

  return (
    <div className="h-1/2 m-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Start typing to search"
      />

      {isLoading ? <p className="loading loading-spinner loading-lg"></p> : error ? <p>There was a problem loading meals</p> : showMeals()}
    </div>
  )
}
