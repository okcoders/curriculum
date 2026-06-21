import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

interface RawMeal {
    [key: string]: string | null,
}

interface Ingredient {
    ingredient: string,
    measure: string,
}

/* 
    ingredients = [
    { ingredient, measure },
    { ingredient, measure },
    { ingredient, measure },
    { ingredient, measure },
    { ingredient, measure },
    { ingredient, measure },
    { ingredient, measure },
*/

export default function MealDetail() {
    const { id } = useParams();
    const [meal, setMeal] = useState<RawMeal | null>(null);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        async function loadMeals() {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            const data = await res.json();
            setMeal(data.meals[0]);
        }
        loadMeals()
    }, [id]);

    function mergeIngredient(meal: RawMeal): Ingredient[] {
        const pairs: Ingredient[] = [];

        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure =  meal[`strMeasure${i}`];

            if (ingredient && ingredient.trim()) {
                pairs.push({ ingredient, measure: measure ?? "" });
            }
        }
        return pairs
    }

    useEffect(() => {
        if (!meal) return
        setIngredients(mergeIngredient(meal))
    }, [meal])

    if (!meal) return <p>Fetching Meal...</p>


    return (
        <div className="card h-3/5 w-4/5 bg-base-100 shadow-sm m-auto mt-20">
            <h1 className="card-title">
                {meal.strMeal}
            </h1>
            <div className="card-body">
                {
                meal.strMealThumb && meal.strMeal &&
                <img className="h-1/2 w-1/2 m-auto" src={meal.strMealThumb} alt={meal.strMeal} /> 
                }
                <h2>Instructions</h2>
                <p className="text-white">{meal.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>
                    {ingredients.map((item, i) => (
                        <li key={i}>
                            {item.measure} {item.ingredient}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}