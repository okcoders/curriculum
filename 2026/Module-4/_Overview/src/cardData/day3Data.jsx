import CodeBlock from "../components/CodeBlock";

// Day 3 cards. Each entry is one card: { header, body }.
// Style: brief, bullets carry the outline, lecture carries the meat.
// Full sentences only for demonstrative/code text.
const day3Data = [
  {
    header: <>Module 4 - Day 3</>,
    body: (
      <>
        <p className="text-xl mb-4">Today our app reacts to user input.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Track values with useState</li>
          <li>Build a controlled search input</li>
          <li>Filter the meal list as you type</li>
        </ul>
      </>
    ),
  },
  {
    header: <>useState</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>A hook that adds state to a component</li>
          <li>Returns the current value and a setter function</li>
          <li>Calling the setter triggers a re-render</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>useState Timing Quirk</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Setting state does not update it immediately</li>
          <li>Multiple setX() calls in the same handler all see the same old value</li>
          <li>Use the updater function form (prev) =&gt; ... to safely chain updates</li>
          <li>React calls each updater with the latest queued value, not the stale value from render</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="javascript">{`const [count, setCount] = useState(0);

// Wrong: count goes 0 to 1, not 3
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);

// Right: each updater receives the latest queued value
setCount((prev) => prev + 1); // prev = 0, returns 1
setCount((prev) => prev + 1); // prev = 1, returns 2
setCount((prev) => prev + 1); // prev = 2, returns 3`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Controlled Inputs</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>An input whose value is driven by state</li>
          <li>onChange writes to state, value reads from state</li>
          <li>State becomes the single source of truth for the input</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search meals..."
    />
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Filtering with State</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>.filter() returns a new array of items that pass a test</li>
          <li>Match the meal name against the current search query</li>
          <li>Lowercase both sides so the match is case-insensitive</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`const [query, setQuery] = useState("");

const visibleMeals = sampleMeals.filter((meal) =>
  meal.strMeal.toLowerCase().includes(query.toLowerCase())
);`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Build the Search</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Hold the query in useState at the parent</li>
          <li>Search input updates the query via onChange</li>
          <li>Filter sampleMeals by the query before passing to MealList</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`function App() {
  const [query, setQuery] = useState("");

  const visibleMeals = sampleMeals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search meals..."
      />
      <MealList meals={visibleMeals} />
    </>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>What Rendering Means</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Rendering means React calls your component function and uses what it returns</li>
          <li>It happens once on mount, then again every time state or props change</li>
          <li>Each render is a snapshot of the UI for that moment</li>
          <li>React only updates the parts of the DOM that actually changed</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`function Counter() {
  const [count, setCount] = useState(0);
  console.log("Counter rendered, count is", count);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
// Each click logs again. Every state change calls the function again.`}</CodeBlock>
        </div>
      </>
    ),
  },
];

export default day3Data;
