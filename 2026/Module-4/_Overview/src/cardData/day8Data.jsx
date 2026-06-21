import CodeBlock from "../components/CodeBlock";

// Day 8 cards. Each entry is one card: { header, body }.
// Style: brief, bullets carry the outline, lecture carries the meat.
// Project is TypeScript by now — code samples are typed.
const day8Data = [
  {
    header: <>Module 4 - Day 8</>,
    body: (
      <>
        <p className="text-xl mb-4">Last day. Favorites, polish, demos.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Save favorite meals with localStorage</li>
          <li>Add a /favorites page</li>
          <li>Demo what you built</li>
        </ul>
      </>
    ),
  },
  {
    header: <>Favorites: The Idea</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Track favorited meal ids in state</li>
          <li>An id is in the list means it is favorited</li>
          <li>Toggle: add if missing, remove if present</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`const [favorites, setFavorites] = useState<string[]>([]);

function toggleFavorite(id: string) {
  setFavorites((prev) =>
    prev.includes(id)
      ? prev.filter((favId) => favId !== id)
      : [...prev, id]
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>localStorage Basics</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Browser key-value store, survives refresh</li>
          <li>Stores strings only, so use JSON to convert</li>
          <li>setItem to save, getItem to read</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="typescript">{`// save
localStorage.setItem("favorites", JSON.stringify(favorites));

// read
const saved = localStorage.getItem("favorites");
const favorites: string[] = saved ? JSON.parse(saved) : [];`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Persist with useEffect</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Load saved favorites once on mount</li>
          <li>Save again whenever favorites change</li>
          <li>Two effects: one to load, one to save</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// load once on mount
useEffect(() => {
  const saved = localStorage.getItem("favorites");
  if (saved) setFavorites(JSON.parse(saved));
}, []);

// save on every change
useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Favorites UI</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Install lucide-react for icons</li>
          <li>Heart filled when favorited, outline when not</li>
          <li>Click calls toggleFavorite</li>
        </ul>
        <div className="mt-4 space-y-4">
          <CodeBlock language="bash">{`npm install lucide-react`}</CodeBlock>
          <CodeBlock language="tsx">{`import { Heart } from "lucide-react";

function FavoriteButton({ id, favorites, onToggle }: FavoriteButtonProps) {
  const isFav = favorites.includes(id);

  return (
    <button onClick={() => onToggle(id)}>
      <Heart fill={isFav ? "red" : "none"} />
    </button>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>The /favorites Route</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>New page showing only favorited meals</li>
          <li>Add the route, link to it from the nav</li>
          <li>Filter the meals by the favorites list</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// App.tsx
<Route path="/favorites" element={<Favorites />} />

// Favorites.tsx
const favoriteMeals = meals.filter((meal) =>
  favorites.includes(meal.idMeal)
);`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Build Favorites</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Favorites array lives in App, passed down to the cards</li>
        <li>Heart toggles it; localStorage keeps it across refreshes</li>
        <li>Your turn: add an empty state when there are no favorites yet</li>
      </ul>
    ),
  },
  {
    header: <>Demos</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Show your app: search, detail, favorites</li>
        <li>One thing that was hard, one thing you would add</li>
        <li>Next: Module 5, give it a real backend</li>
      </ul>
    ),
  },
];

export default day8Data;
