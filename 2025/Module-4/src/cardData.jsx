const cardData = [
  {
    header: (
      <>
        <h1>Why React</h1>
      </>
    ),
    body: (
      <>
        <p>
          React is a popular JavaScript library for building user interfaces
          because:
        </p>
        <br />
        <ul>
          <li>
            <strong>Component-Based:</strong> It allows you to break down the UI
            into reusable, modular components.
          </li>
          <br />
          <li>
            <strong>Declarative:</strong> You describe what the UI should look
            like, and React handles the updates efficiently.
          </li>
          <br />
          <li>
            <strong>Virtual DOM:</strong> React uses a virtual DOM for fast
            rendering and better performance.
          </li>
          <br />
          <li>
            <strong>Ecosystem:</strong> It has a rich ecosystem with tools,
            libraries, and community support.
          </li>
          <br />
          <li>
            <strong>Scalability:</strong> React is suitable for both small
            projects and large, complex applications.
          </li>
          <br />
        </ul>
      </>
    ),
  },
  {
    header: (
      <>
        <h1>Exercise: Initialize a React App with Vite</h1>
      </>
    ),
    body: (
      <>
        <p>
          <strong>Steps:</strong>
        </p>
        <ol>
          <li>Ensure Node.js is installed</li>
          <li>
            Run <code className="language-jsx">npm create vite@latest</code> & select React framework
          </li>
          <li>
            Install dependencies with <code className="language-jsx">npm install</code>
          </li>
          <li>
            Start the development server with <code className="language-jsx">npm run dev</code>
          </li>
          <li>
            Open the app in your browser at <code className="language-jsx">http://localhost:*</code>
          </li>
          <li>
            Edit the <code className="language-jsx">src/App.jsx</code> file to modify the app
          </li>
          <li>Save changes and see them reflected in the browser</li>
          <li>
            Explore the <code className="language-jsx">src</code> directory to understand the structure
          </li>
        </ol>
      </>
    ),
  },
  {
    header: (
      <>
        <h1>Demo: Component Structure</h1>
      </>
    ),
    body: (
      <>
        <p>
          <strong>Goal</strong>: Introduce functional components, JSX, props, and basic state.
        </p>
        <p>
          <strong>Demo</strong>: Build a simple "Hello, World!" React app and progressively
          add features.
        </p>
        <ul>
          <li>Start with a functional component that renders static text.</li>
          <li>
            Add props to make the component reusable (e.g., pass a name prop to
            display "Hello, [Name]!").
          </li>
          <li>
            Introduce <code className="language-jsx">useState</code> to make the text dynamic (e.g., a
            button that toggles between "Hello" and "Goodbye").
          </li>
        </ul>
        <p>
          <strong>Code Example:</strong>
        </p>
        <pre>
          <code className="language-jsx">
            {`import { useState } from "react";

function Greeting({ name }) {
  const [isHello, setIsHello] = useState(true);

  return (
    <div>
      <h1>{isHello ? \`Hello, \${name}!\` : \`Goodbye, \${name}!\`}</h1>
      <button onClick={() => setIsHello(!isHello)}>
        Toggle Greeting
      </button>
    </div>
  );
}

export default function App() {
  return <Greeting name="Student" />;
}`}
          </code>
        </pre>
      </>
    ),
  },
  {
    header: (
      <>
        <h1>Exercise: Build a Static Site with Components</h1>
      </>
    ),
    body: (
      <>
        <p>
          <strong>Goal:</strong> Break down a UI into reusable components.
        </p>
        <p>
          <strong>Project:</strong> Build a simple static site with the
          following components:
        </p>
        <ul>
          <li>
            <strong>Header:</strong> Displays a title and a navigation bar.
          </li>
          <li>
            <strong>Body:</strong> Contains a welcome message or description.
          </li>
          <li>
            <strong>Card:</strong> A reusable component that displays an image,
            title, and description.
          </li>
        </ul>
        <p>
          <strong>Steps:</strong>
        </p>
        <ol>
          <li>Create a Header component with a title and navigation links.</li>
          <li>Create a Body component with a welcome message.</li>
          <li>
            Create a Card component that accepts props for image, title, and
            description.
          </li>
          <li>
            Use the Card component multiple times in the Body to display
            different content.
          </li>
        </ol>
      </>
    ),
  },
  {
    header: (
      <>
        <h1>Exercise: Add Interactivity with State</h1>
      </>
    ),
    body: (
      <>
        <p>
          <strong>Goal:</strong> Introduce basic state management using <code className="language-jsx">useState</code>.
        </p>
        <p>
          <strong>Project:</strong> Enhance the static site by adding
          interactivity.
        </p>
        <ul>
          <li>
            Add a "Like" button to each card that toggles between "Liked" and
            "Not Liked."
          </li>
          <li>
            Add a counter to the header that tracks the total number of likes.
          </li>
        </ul>
        <p>
          <strong>Code Example:</strong>
        </p>
        <pre>
          <code className="language-jsx">
            {`import { useState } from "react";

function Card({ image, title, description }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "Liked" : "Not Liked"}
      </button>
    </div>
  );
}

export default function App() {
  const cards = [
    { image: "image1.jpg", title: "Card 1", description: "Description 1" },
    { image: "image2.jpg", title: "Card 2", description: "Description 2" },
  ];

  return (
    <div>
      <h1>My Static Site</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}`}
          </code>
        </pre>
      </>
    ),
  },
  {
    header: (
      <>
        <h1>Wrap-Up: Review and Q&A</h1>
      </>
    ),
    body: (
      <>
        <p>
          <strong>Goal:</strong> Reinforce the day's learning and address any
          questions.
        </p>
        <p>
          <strong>Activities:</strong>
        </p>
        <ul>
          <li>
            Review the key concepts covered (functional components, JSX, props,
            state).
          </li>
          <li>
            Discuss how these concepts will be used in future lessons.
          </li>
          <li>
            Encourage students to complete the pre-class homework for Day 2.
          </li>
        </ul>
      </>
    ),
  },
];

export default cardData;
