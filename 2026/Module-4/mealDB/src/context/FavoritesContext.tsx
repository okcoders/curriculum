import { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"

/* Favorites state lives here once. Any component reads it via useFavorites()
   instead of passing props down through every layer (prop drilling). */

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  /* Read localStorage once on first render, so the save effect never fires
     first with an empty [] and wipes the saved value. */
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem("favorites")
    return saved ? JSON.parse(saved) : []
  })

  /* Save to localStorage every time favorites changes. */
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  function toggleFavorite(id: string) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    )
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

/* Hook so components just call useFavorites() to read the shared state. */
export function useFavorites() {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error("useFavorites must be used within a FavoritesProvider")
  return ctx
}
