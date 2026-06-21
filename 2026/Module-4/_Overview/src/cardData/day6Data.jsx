import CodeBlock from "../components/CodeBlock";

// Day 6 cards. Each entry is one card: { header, body }.
// Style: brief, bullets carry the outline, lecture carries the meat.
// Full sentences only for demonstrative/code text.
const day6Data = [
  {
    header: <>Module 4 - Day 6</>,
    body: (
      <>
        <p className="text-xl mb-4">Today: build the detail page, then make it type-safe.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Build the meal detail page yourself as practice</li>
          <li>Crash course on the TypeScript basics from your homework</li>
          <li>Rework the detail page with TypeScript together</li>
        </ul>
      </>
    ),
  },
  {
    header: <>The Lookup Endpoint</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>lookup.php?i=52772 returns one full meal by id</li>
          <li>The detail shape has way more fields than the list shape</li>
          <li>This is where ingredients and instructions live</li>
        </ul>
        <p className="mt-4 text-left">
          Reference:{" "}
          <a
            href="https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
          </a>
        </p>
      </>
    ),
  },
  {
    header: <>Practice: Set Up MealDetail</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>You have done fetch, useEffect, and useParams before; rework the MealDetail.jsx to fetch a meal</li>
          <li>Read the id from the URL, fetch the meal, re-run when the id changes</li>
          <li>Render the name, image, and instructions</li>
          <li>Reference the code below while you work</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    async function loadMeal() {
      const res = await fetch(
        \`https://www.themealdb.com/api/json/v1/1/lookup.php?i=\${id}\`
      );
      const data = await res.json();
      setMeal(data.meals[0]);
    }
    loadMeal();
  }, [id]);

  if (!meal) return <p>Loading...</p>;

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>The Ingredient Problem</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Ingredients are not an array; they are 20 numbered fields</li>
          <li>Each ingredient has a matching measure field</li>
          <li>Unused slots are empty strings or null</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="json">{`{
  "strIngredient1": "Chicken",
  "strIngredient2": "Salt",
  "strIngredient3": "",
  "strMeasure1": "1 whole",
  "strMeasure2": "1 tsp",
  "strMeasure3": ""
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>The Merge Exercise</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Loop from 1 to 20 building each field name</li>
          <li>Pair strIngredientN with strMeasureN</li>
          <li>Skip the empty or null slots</li>
          <li>Return a clean array of pairs</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="javascript">{`function mergeIngredients(meal) {
  const pairs = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[\`strIngredient\${i}\`];
    const measure = meal[\`strMeasure\${i}\`];

    if (ingredient && ingredient.trim()) {
      pairs.push({ ingredient, measure });
    }
  }

  return pairs;
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Render the Ingredients</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Call mergeIngredients on the fetched meal</li>
          <li>Map the pairs into a plain list (Don't worry about style yet)</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`const ingredients = mergeIngredients(meal);

return (
  <ul>
    {ingredients.map((item, i) => (
      <li key={i}>
        {item.measure} {item.ingredient}
      </li>
    ))}
  </ul>
);`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Why TypeScript</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Types catch mistakes before you run the code</li>
        <li>Your editor knows the shape of your data and autocompletes it</li>
        <li>You rename a file from .jsx to .tsx and fix the errors it surfaces</li>
        <li>Most valuable at the boundary: the messy API response</li>
      </ul>
    ),
  },
  {
    header: <>TS Type Basics</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Annotate a value with ": type"</li>
          <li>Primitives: string, number, boolean</li>
          <li>Arrays: type followed by []</li>
          <li>interface describes the shape of an object</li>
          <li>? marks optional, | is a union (this or that)</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="typescript">{`let title: string = "Tacos";
let count: number = 3;
let isReady: boolean = true;

let tags: string[] = ["spicy", "quick"];

interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory?: string;            // optional
  strInstructions: string | null;  // union
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Typing in React</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Describe props with an interface, then annotate the parameter</li>
          <li>Tell useState what type it holds with angle brackets</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`interface MealCardProps {
  meal: Meal;
}

function MealCard({ meal }: MealCardProps) {
  return <h2>{meal.strMeal}</h2>;
}

const [query, setQuery] = useState<string>("");
const [meals, setMeals] = useState<Meal[]>([]);`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Add TypeScript to the Project</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Install TypeScript and the React type packages</li>
          <li>Add a tsconfig.json to configure the compiler</li>
          <li>Vite already understands .tsx, no Vite config change needed</li>
          <li>When you rename main.jsx to main.tsx, update the script in index.html</li>
        </ul>
        <div className="mt-4 space-y-4">
          <CodeBlock language="bash">{`npm install -D typescript @types/react @types/react-dom`}</CodeBlock>
          <CodeBlock language="json">{`// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Rework MealDetail in TypeScript</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Rename MealDetail.jsx to MealDetail.tsx</li>
          <li>Type the meal state with RawMeal | null</li>
          <li>The index signature lets us read any strIngredientN key</li>
          <li>Type mergeIngredients: RawMeal in, Ingredient[] out</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="tsx">{`// MealDetail.tsx
const [meal, setMeal] = useState<RawMeal | null>(null);

interface RawMeal {
  [key: string]: string | null;  // any string key -> string | null
}

interface Ingredient {
  ingredient: string;
  measure: string;
}

function mergeIngredients(meal: RawMeal): Ingredient[] {
  const pairs: Ingredient[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[\`strIngredient\${i}\`];
    const measure = meal[\`strMeasure\${i}\`];

    if (ingredient && ingredient.trim()) {
      pairs.push({ ingredient, measure: measure ?? "" });
    }
  }

  return pairs;
}`}</CodeBlock>
        </div>
      </>
    ),
  },
];

export default day6Data;
