import CodeBlock from "../components/CodeBlock";

// Day 2 cards. Each entry is one card: { header, body }.
// Style: brief, bullets carry the outline, lecture carries the meat.
// Full sentences only for demonstrative/code text.
const day2Data = [
  {
    header: <>Module 4 - Day 2</>,
    body: (
      <>
        <p className="text-xl mb-4">Today we will start with the recipe browser UI.</p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Compose components and pass data with props</li>
          <li>Style with Tailwind + daisyUI</li>
          <li>Build MealCard from one meal</li>
          <li>Render many with MealList using .map()</li>
        </ul>
      </>
    ),
  },
  {
    header: <>Component Composition &amp; Props</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Composition: components render other components</li>
          <li>Props: pass data from a parent into a child</li>
          <li>Different props, different output, same component</li>
          <li>We will build small parts: Header, Body, Footer</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`function Header({ title }) {
  return <h1>{title}</h1>;
}

function App() {
  return (
    <>
      <Header title="Recipe Browser" />
      <Header title="Favorites" />
    </>
  );
}`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Install Tailwind &amp; daisyUI</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Tailwind: utility classes you write right in JSX</li>
          <li>daisyUI: prebuilt component classes (btn, card, navbar, ...) on top of Tailwind</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="bash">{`npm install tailwindcss @tailwindcss/vite
npm install -D daisyui`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Wire It Up</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Add the Tailwind plugin to Vite</li>
          <li>Import Tailwind and daisyUI in your CSS</li>
        </ul>
        <div className="mt-4 space-y-4">
          <CodeBlock language="javascript">{`// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});`}</CodeBlock>
          <CodeBlock language="css">{`/* src/index.css */
@import "tailwindcss";
@plugin "daisyui";`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>classNames</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>In JSX, use className instead of class (class is a reserved word in JS)</li>
          <li>Combine many classes in one string, separated by spaces</li>
          <li>This is how we apply Tailwind utilities and daisyUI components</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="jsx">{`// HTML
<div class="card">...</div>

// JSX (React)
<div className="card bg-base-100 shadow-xl">...</div>`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>TheMealDB</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Free public recipe API, no key needed</li>
          <li>filter.php?c=Seafood returns meals in a category</li>
          <li>Each meal has id, name, and thumbnail</li>
        </ul>
        <div className="mt-6">
          <a
            href="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
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
    header: <>Hardcoded Sample Meals</>,
    body: (
      <CodeBlock language="javascript">{`const sampleMeals = [
  {
    idMeal: "53147",
    strMeal: "Arroz con gambas y calamar",
    strMealThumb: "https://www.themealdb.com/images/media/meals/jc6oub1763196663.jpg",
    strCategory: "Seafood",
  },
  {
    idMeal: "52959",
    strMeal: "Baked salmon with fennel & tomatoes",
    strMealThumb: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    strCategory: "Seafood",
  },
  {
    idMeal: "53440",
    strMeal: "Balchi di Pisca",
    strMealThumb: "https://www.themealdb.com/images/media/meals/qqwhw51780093126.jpg",
    strCategory: "Seafood",
  },
  {
    idMeal: "53239",
    strMeal: "Bang bang prawn salad",
    strMealThumb: "https://www.themealdb.com/images/media/meals/4xcfai1763765676.jpg",
    strCategory: "Seafood",
  },
  {
    idMeal: "53103",
    strMeal: "Barramundi with Moroccan spices",
    strMealThumb: "https://www.themealdb.com/images/media/meals/4o4wh11761848573.jpg",
    strCategory: "Seafood",
  },
  {
    idMeal: "52819",
    strMeal: "Cajun spiced fish tacos",
    strMealThumb: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
    strCategory: "Seafood",
  },
];`}</CodeBlock>
    ),
  },
  {
    header: <>Build MealCard</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Pass the whole meal object as a prop</li>
          <li>Use daisyUI card classes (card, card-body, card-title)</li>
          <li>Show image, name, and category</li>
        </ul>
        <div className="mt-4 space-y-4">
          <CodeBlock language="jsx">{`function MealCard({ meal }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{meal.strMeal}</h2>
        <p>{meal.strCategory}</p>
      </div>
    </div>
  );
}`}</CodeBlock>
          <CodeBlock language="jsx">{`<MealCard meal={sampleMeals[0]} />`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Arrow Functions</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Shorter syntax for a function</li>
          <li>Implicit return when there is no {"{ ... }"} body</li>
          <li>You will see them everywhere, especially in .map() callbacks</li>
        </ul>
        <div className="mt-4">
          <CodeBlock language="javascript">{`// regular function
function double(n) {
  return n * 2;
}

// arrow function
const double = (n) => {
  return n * 2;
};

// arrow with implicit return
const double = (n) => n * 2;`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>map() + Keys</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>.map() transforms each item and returns a new array</li>
          <li>.forEach() runs code on each item but returns nothing</li>
          <li>React needs a unique key on each list item</li>
          <li>Keys let React tell which item changed, was added, or removed</li>
        </ul>
        <div className="mt-4 space-y-4">
          <CodeBlock language="javascript">{`// .map() returns a new array
const doubled = [1, 2, 3].map((n) => n * 2);
// doubled = [2, 4, 6]

// .forEach() returns undefined
const result = [1, 2, 3].forEach((n) => n * 2);
// result = undefined`}</CodeBlock>
          <CodeBlock language="jsx">{`<ul>
  {meals.map((meal) => (
    <li key={meal.idMeal}>{meal.strMeal}</li>
  ))}
</ul>`}</CodeBlock>
        </div>
      </>
    ),
  },
  {
    header: <>Build MealList</>,
    body: (
      <>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>Take an array of meals as a prop</li>
          <li>Loop with .map() and render a MealCard for each</li>
          <li>Set key={"{meal.idMeal}"} on each card</li>
        </ul>
        <div className="mt-4 space-y-4">
          <CodeBlock language="jsx">{`function MealList({ meals }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}`}</CodeBlock>
          <CodeBlock language="jsx">{`<MealList meals={sampleMeals} />`}</CodeBlock>
        </div>
      </>
    ),
  },
];

export default day2Data;
