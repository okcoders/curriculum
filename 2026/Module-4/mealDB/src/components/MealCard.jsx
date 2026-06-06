
/* 
    idMeal,
    strMeal,
    strMealThumb,
    strCategory,
*/


export default function MealCard({ meal }) {




    return (
        <div className="card m-auto h-100 w-100 bg-base-100 shadow-xl">
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