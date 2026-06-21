import { Heart } from 'lucide-react'

interface FavoriteButtonProps {
    id: string,
    favorites: string[],
    onToggle: (id: string) => void
}

export default function FavoriteButton({id, favorites, onToggle}: FavoriteButtonProps ) {
    const isFav = favorites.includes(id);

    return (
        <button onClick={() => onToggle(id)}>
            <Heart fill={isFav ? "red" : ""} />
        </button>
    )
}