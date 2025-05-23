const day2Data = [
    {
      header: (
        <>
          <h3>Introduction to State Management</h3>
        </>
      ),
      body: (
        <>
          <p>
            <strong>Goal:</strong> Understand how to manage state in React using{" "}
            <code className="language-jsx">useState</code> and{" "}
            <code className="language-jsx">useEffect</code>.
          </p>
          <ul>
            <li>
              <strong>useState:</strong> Manage local state in functional
              components.
            </li>
            <li>
              <strong>useEffect:</strong> Handle side effects like persisting
              state or fetching data.
            </li>
            <li>
              <strong>localStorage:</strong> Save and retrieve state across page
              reloads.
            </li>
          </ul>
          <p>
            <strong>Demo:</strong> Build a simple counter app that uses{" "}
            <code className="language-jsx">useState</code> and{" "}
            <code className="language-jsx">useEffect</code> to persist the count
            in localStorage in our existing Static-Site.
          </p>
          <pre>
            <code className="language-jsx">
              {`import { useState, useEffect } from "react";
  
  function Counter() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const savedCount = localStorage.getItem("count");
      if (savedCount) {
        setCount(parseInt(savedCount, 10));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("count", count);
    }, [count]);
  
    return (
      <div>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    );
  }
  
  export default Counter;`}
            </code>
          </pre>
        </>
      ),
    },
    {
      header: (
        <>
          <h3>Introduction to Tailwind CSS</h3>
        </>
      ),
      body: (
        <>
          <p>
            <strong>Goal:</strong> Learn how to style applications efficiently
            using Tailwind CSS.
          </p>
          <ul>
            <li>
              <strong>Utility-First Workflow:</strong> Use Tailwind classes to
              style elements directly in your JSX.
            </li>
            <li>
              <strong>Responsive Design:</strong> Create layouts that adapt to
              different screen sizes.
            </li>
            <li>
              <strong>Customization:</strong> Extend Tailwind's default styles
              using configuration files.
            </li>
          </ul>
          <p>
            <strong>Demo:</strong> Style a basic layout (header, body, footer)
            using Tailwind classes.
          </p>
          <pre>
            <code className="language-jsx">
              {`function Layout() {
    return (
      <div className="container mx-auto p-4">
        <header className="bg-blue-500 text-white p-4">
          <h3 className="text-xl font-bold">My App</h3>
        </header>
        <main className="p-4">
          <p className="text-gray-700">Welcome to my app!</p>
        </main>
        <footer className="bg-gray-800 text-white p-4">
          <p>&copy; 2025 My App</p>
        </footer>
      </div>
    );
  }
  
  export default Layout;`}
            </code>
          </pre>
        </>
      ),
    },
    {
      header: (
        <>
          <h3>Introduction to daisyUI</h3>
        </>
      ),
      body: (
        <>
          <p>
            <strong>Goal:</strong> Use pre-built, accessible components from
            daisyUI to speed up development.
          </p>
          <p>
            <strong>--Topics Covered--</strong>
          </p>
          <ul>
            <li>
              <strong>Installation:</strong> Add daisyUI to your Tailwind CSS
              project.
            </li>
            <li>
              <strong>Components:</strong> Use buttons, cards, modals, and more.
            </li>
            <li>
              <strong>Customization:</strong> Tailor daisyUI components to match
              your app's design.
            </li>
          </ul>
          <p>
            <strong>Demo:</strong> Replace basic Tailwind-styled components with
            daisyUI components.
          </p>
          <pre>
            <code className="language-jsx">
              {`function DaisyCard() {
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">DaisyUI Card</h2>
          <p>This is a card component from daisyUI.</p>
          <button className="btn btn-primary">Click Me</button>
        </div>
      </div>
    );
  }
  
  export default DaisyCard;`}
            </code>
          </pre>
        </>
      ),
    },
    {
      header: (
        <>
          <h3>Project: Build a Movie Explorer App</h3>
        </>
      ),
      body: (
        <>
          <p>
            <strong>Goal:</strong> Create a fun and engaging app that uses state
            management and Tailwind CSS for styling.
          </p>
          <p>
            <strong>App Description:</strong> A "Movie Explorer" app where users
            can:
          </p>
          <ul>
            <li>Browse a list of movies (static data for now).</li>
            <li>Like/unlike movies (state management with useState).</li>
            <li>Persist liked movies in localStorage.</li>
            <li>Style the app using Tailwind CSS and daisyUI.</li>
          </ul>
          <p>
            <strong>Steps:</strong>
          </p>
          <ol>
            <li>Set up the project using Vite.</li>
            <li>Create a responsive layout with Tailwind CSS.</li>
            <li>
              Use <code className="language-jsx">useState</code> to manage liked
              movies.
            </li>
            <li>
              Use <code className="language-jsx">useEffect</code> to persist liked
              movies in localStorage.
            </li>
            <li>Enhance the design with daisyUI components.</li>
          </ol>
        </>
      ),
    },
    {
      header: (
        <>
          <h3>Wrap-Up: Review and Q&A</h3>
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
              Review the key concepts covered (state management, Tailwind CSS,
              daisyUI).
            </li>
            <li>
              Discuss how these concepts will be used in future lessons.
            </li>
            <li>
              Encourage students to complete the pre-class homework for Day 3.
            </li>
          </ul>
        </>
      ),
    },
  ];
  
  export default day2Data;
  