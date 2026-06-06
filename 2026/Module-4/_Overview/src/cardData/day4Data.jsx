import CodeBlock from "../components/CodeBlock";

// Day 4 cards. Each entry is one card: { header, body }.
// Style: brief, bullets carry the outline, lecture carries the meat.
// Full sentences only for demonstrative/code text.
const day4Data = [
  {
    header: <>Module 4 - Day 4</>,
    body: (
      <>
        <p className="text-xl mb-4">Today our app talks to the internet.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Use useEffect to run code when the component mounts</li>
          <li>Fetch real meals from TheMealDB</li>
          <li>Handle loading and error states</li>
          <li>Search by re-fetching when the query changes</li>
        </ul>
      </>
    ),
  },
  {
    header: <>useEffect</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A hook for running side effects after render</li>
          <li>It belongs to one component and fires on that component's renders only</li>
          <li>Side effects = fetching, timers, subscriptions, anything outside the component</li>
          <li>The dependency array controls when the effect re-runs</li>
          <li>Mount = the first time the component appears on screen</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`import { useEffect } from "react";

useEffect(() => {
  // Runs after every render of this component
});

useEffect(() => {
  // Runs only on mount (once)
}, []);

useEffect(() => {
  // Runs on mount and whenever query changes
}, [query]);`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Async &amp; fetch</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>fetch(url) returns a Promise that resolves to a Response object</li>
          <li>Call .json() on the response to parse the JSON body (also a Promise)</li>
          <li>async/await lets you write asynchronous code that reads top to bottom</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="javascript">{`async function loadMeals() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  const data = await response.json();
  return data.meals;
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Fetch on Mount</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>The useEffect callback itself can't be async, so define an inner async function</li>
          <li>Inside it: fetch, parse JSON, setState with the result</li>
          <li>Empty dependency array means it runs once on mount</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMeals() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      const data = await response.json();
      setMeals(data.meals);
    }
    loadMeals();
  }, []);

  return <MealList meals={meals} />;
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Loading State</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Track an isLoading flag with useState</li>
          <li>Start true, flip to false after the fetch completes</li>
          <li>Render a loading indicator while it's true</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`function App() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMeals() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      const data = await response.json();
      setMeals(data.meals);
      setIsLoading(false);
    }
    loadMeals();
  }, []);

  if (isLoading) return <p>Loading meals...</p>;
  return <MealList meals={meals} />;
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Error State</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Wrap the fetch in try/catch to catch network errors</li>
          <li>Track the error in useState</li>
          <li>Use finally to flip loading off whether it succeeds or fails</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`function App() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMeals() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadMeals();
  }, []);

  if (isLoading) return <p>Loading meals...</p>;
  if (error) return <p>Could not load meals.</p>;
  return <MealList meals={meals} />;
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Practice: Style with Tailwind &amp; daisyUI</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Style your meal cards, loading state, and error state</li>
          <li>Use any Tailwind utilities and daisyUI components</li>
        </ul>
        <p className="mt-4 text-left">
          Reference:{" "}
          <a
            href="https://daisyui.com/components/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            https://daisyui.com/components/
          </a>
        </p>
      </>
    ),
  },
  {
    header: <>TheMealDB Search Endpoint</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>search.php?s=arrabiata returns meals matching the search term</li>
          <li>Same shape per meal as the filter endpoint</li>
          <li>Empty query returns nothing</li>
        </ul>
        <div className="mt-6">
          <a
            href="https://www.themealdb.com/api/json/v1/1/search.php?s=arrabiata"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            See the live response
          </a>
        </div>
      </>
    ),
  },
  {
    header: <>Wire Search to API</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Put query in the dependency array so the effect re-runs on each change</li>
          <li>Skip the fetch if the query is empty</li>
          <li>In real apps you would debounce this to avoid one fetch per keystroke</li>
          <li>Gotcha: TheMealDB returns meals: null when nothing matches, so default to []</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`function App() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function loadMeals() {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          \`https://www.themealdb.com/api/json/v1/1/search.php?s=\${query}\`
        );
        const data = await response.json();
        setMeals(data.meals ?? []);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadMeals();
  }, [query]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search meals..."
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Could not load meals.</p>}
      <MealList meals={meals} />
    </>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Practice: Polish the search</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Style the search input</li>
          <li>Show an empty-state message when meals.length === 0</li>
          <li>Add a Search icon using lucide-react</li>
        </ul>
        <p className="mt-4 text-left">
          Reference:{" "}
          <a
            href="https://lucide.dev/icons/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary"
          >
            https://lucide.dev/icons/
          </a>
        </p>
      </>
    ),
  },
];

export default day4Data;
