import MealList from "../components/MealList"
import type { Meal } from "../types";
import { useState, useEffect } from 'react'
import { useFavorites } from "../context/FavoritesContext"

/* Read shared favorites from context (was its own state, separate from the
   cards). List holds ids, so fetch each meal to display.
   OLD (own state):
   const [favorites, setFavorites] = useState<string[]>([]);
   useEffect(() => {
     const saved = localStorage.getItem("favorites");
     if (saved) setFavorites(JSON.parse(saved));
   }, []) */

export default function Favorites() {
  const { favorites } = useFavorites()
  const [favoriteMeals, setFavoriteMeals] = useState<Meal[]>([]);

  useEffect(() => {
    async function loadMeals() {
      const results = await Promise.all(
        favorites.map(async (id) => {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          const data = await res.json();
          return data.meals[0] as Meal;
        })
      );
      setFavoriteMeals(results);
    }

    loadMeals();
  }, [favorites]);

  if (favorites.length === 0) return <p>No favorites yet</p>

  return (
    <MealList meals={favoriteMeals} />
  )
}
