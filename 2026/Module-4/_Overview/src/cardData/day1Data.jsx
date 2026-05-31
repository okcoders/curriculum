import CodeBlock from "../components/CodeBlock";

// Day 1 slides. Each entry is one card: { header, body }.
// Style: brief, bullets carry the outline, lecture carries the meat.
// Full sentences only for demonstrative/code text.
const day1Data = [
  {
    header: <>Module 4, Day 1</>,
    body: (
      <>
        <p className="text-2xl">React, Tailwind &amp; daisyUI</p>
        <p className="mt-4 text-base opacity-70">
          Built with React, Tailwind, and DaisyUI
        </p>
      </>
    ),
  },
  {
    header: <>Why React</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>Modular design: build your UI from small, reusable components</li>
        <li>React updates the DOM for you, no manual DOM manipulation</li>
        <li>State lets the UI update automatically when your data changes</li>
        <li>JSX lets you write your page markup right inside JavaScript</li>
      </ul>
    ),
  },
  {
    header: <>Components</>,
    body: (
      <ul className="list-disc list-inside space-y-2 text-left">
        <li>A component is a function that returns JSX</li>
        <li>JSX is a React extension that allows you to write HTML-like markup directly inside your JavaScript files</li>
        <li>Its name is Capitalized</li>
        <li>Use it like a tag: &lt;Hello /&gt;</li>
      </ul>
    ),
  },
  {
    header: <>Init Project</>,
    body: (
      <CodeBlock language="bash">{`npm create vite@latest
# choose: React, then JavaScript

cd my-app
npm install
npm run dev`}</CodeBlock>
    ),
  },
  {
    header: <>Tour React Project Anatomy</>,
    body: null,
  },
  {
    header: <>Your first component</>,
    body: (
      <CodeBlock language="jsx">{`// Hello.jsx
function Hello() {
  return <h1>Hello, class!</h1>;
}

export default Hello;

// App.jsx
import Hello from "./Hello";

function App() {
  return <Hello />;
}`}</CodeBlock>
    ),
  },
];

export default day1Data;
