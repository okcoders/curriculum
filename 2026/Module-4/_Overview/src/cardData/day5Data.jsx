import CodeBlock from "../components/CodeBlock";

const day5Data = [
  {
    header: <>Module 4 - Day 5</>,
    body: (
      <>
        <p className="text-xl mb-4">Today we add multiple pages.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Install react-router-dom and wrap the app</li>
          <li>Map URLs to components with Routes</li>
          <li>Navigate with Link and read params with useParams</li>
        </ul>
      </>
    ),
  },
  {
    header: <>Routing in an Single Page Application (SPA)</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>SPAs load one HTML file; clicking links shouldn't reload it</li>
        <li>A router maps URLs to components and swaps them in place</li>
        <li>The address bar still updates and back/forward still work</li>
      </ul>
    ),
  },
  {
    header: <>Install react-router-dom</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Install react-router-dom with npm</li>
          <li>Wrap your app in BrowserRouter, usually in main.jsx</li>
          <li>BrowserRouter watches the URL and tells your routes what to render</li>
        </ul>
        <div className="mt-4 space-y-4">
          <CodeBlock language="bash">{`npm install react-router-dom`}</CodeBlock>
          <CodeBlock language="jsx">{`// src/main.jsx
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Project Structure</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>pages/ holds one component per route</li>
          <li>components/ holds reusable pieces used by any page</li>
          <li>App.jsx declares the routes; main.jsx wraps it in BrowserRouter</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`src/
├── main.jsx          # BrowserRouter wraps App
├── App.jsx           # Routes live here
├── mealData.js
├── components/       # reusable pieces
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── MealCard.jsx
│   └── MealList.jsx
└── pages/            # one component per route
    ├── Home.jsx
    └── MealDetail.jsx`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Routes &amp; Route</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Routes picks one Route to render based on the URL</li>
          <li>Each Route has a path and an element</li>
          <li>element is the component to render at that path</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MealList />} />
      <Route path="/meal/:id" element={<MealDetail />} />
    </Routes>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Link</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Link navigates without a full page reload</li>
          <li>Use Link instead of &lt;a&gt; inside the app</li>
          <li>Pass the destination as the to prop</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`import { Link } from "react-router-dom";

function MealCard({ meal }) {
  return (
    <Link to={\`/meal/\${meal.idMeal}\`}>
      <div className="card">...</div>
    </Link>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>useParams</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>useParams reads the dynamic pieces of the URL</li>
          <li>The keys come from the route path (the :id part)</li>
          <li>Returns them as strings</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`import { useParams } from "react-router-dom";

// Route: <Route path="/meal/:id" element={<MealDetail />} />

function MealDetail() {
  const { id } = useParams();
  return <p>Meal id: {id}</p>;
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Stub MealDetail</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Add the /meal/:id route pointing to MealDetail</li>
          <li>Wrap each MealCard in a Link to /meal/:id</li>
          <li>Display the id for now; we fetch the meal Saturday</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`import { useParams } from "react-router-dom";

function MealDetail() {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h1 className="text-2xl">Meal id: {id}</h1>
      <p>We will fetch this meal on Saturday.</p>
    </div>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
];

export default day5Data;
