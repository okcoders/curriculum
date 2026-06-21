import Body from "./components/Body"
import { Routes, Route } from "react-router-dom"
import MealDetail from "./pages/MealDetail"
import Favorites from "./pages/Favorites"
import { FavoritesProvider } from "./context/FavoritesContext"

/* Wrap routes in FavoritesProvider so all pages share one favorites list.
   OLD (no provider):
   <Routes>
     <Route path="/" element={<Body />} />
     <Route path="/meal/:id/" element={<MealDetail />} />
     <Route path="/favorites/" element={<Favorites />} />
   </Routes> */

function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/meal/:id/" element={<MealDetail />} />
        <Route path="/favorites/" element={<Favorites />} />
      </Routes>
    </FavoritesProvider>
  )
}

export default App
