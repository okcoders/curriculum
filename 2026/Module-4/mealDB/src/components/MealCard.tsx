import { Link } from 'react-router-dom'
import type { Meal } from '../types'
import FavoriteButton from './FavoriteButton'
import { useFavorites } from '../context/FavoritesContext'

/* Read shared favorites from context. Was the bug: each card had its OWN
   state, so cards fell out of sync and localStorage held one id.
   OLD (state lived here):
   const [favorites, setFavorites] = useState<string[]>([]);
   useEffect(() => {
     const saved = localStorage.getItem("favorites");
     if (saved) setFavorites(JSON.parse(saved));
   }, [])
   useEffect(() => {
     localStorage.setItem("favorites", JSON.stringify(favorites))
   }, [favorites])
   function toggleFunction(id: string) {
     setFavorites((prev) =>
       prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
     );
   } */

interface MealCardProps {
  meal: Meal;
}

export default function MealCard({ meal }: MealCardProps) {
  const { favorites, toggleFavorite } = useFavorites()

  return (
    <div className="card h-100 w-100 bg-base-100 shadow-xl">
    <Link to={`/meal/${meal.idMeal}`} className='h-1/2'>
      <figure className="h-full">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </figure>
    </Link>
      <div className="card-body">
        <h2 className="card-title block">{meal.strMeal}</h2>
        <p className=''>{meal.strCategory}</p>
      </div>
      <div className='absolute right-0 shadow-xl'>
        <FavoriteButton id={meal.idMeal} favorites={favorites} onToggle={toggleFavorite} />
      </div>
    </div>
  )
}
