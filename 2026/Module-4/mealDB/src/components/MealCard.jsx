
/* 
    idMeal,
    strMeal,
    strMealThumb,
    strCategory,
*/


export default function MealCard({ meal }) {




    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{meal.strMeal}</h2>
                <p>Category: {meal.strCategory}</p>
            </div>
        </div>
    )
}