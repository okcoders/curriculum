# Day 03
## HW Review

-   Questions?

## stuff to cover

here's some reading about what we will discuss tonight and some things i mentioned before that might have not been super clear.

1. **Destructuring**:
   Destructuring allows you to extract multiple properties from an object or elements from an array and assign them to variables easily.

 import React from 'react';

   const Person = ({ name, age }) => {
     return (
       <div>
         <p>Name: {name}</p>
         <p>Age: {age}</p>
       </div>
     );
   };

   const App = () => {
     const person = { name: 'John', age: 30 };
     return <Person {...person} />;
   };

   export default App;

2. **Export vs Export Default**:
   `export` is used to export named exports, while `export default` is used to export a single default export from a module.


   // Add.js
   export const add = (a, b) => a + b;

   // Subtract.js
   const subtract = (a, b) => a - b;
   export default subtract;

   // App.js
   import React from 'react';
   import { add } from './Add';
   import subtract from './Subtract';

   const App = () => {
     console.log(add(5, 3)); // Output: 8
     console.log(subtract(5, 3)); // Output: 2
     return null;
   };

   export default App;



3. **Reusable Components**:
   Reusable components are components that can be reused across different parts of your application.

   // Button.js
   import React from 'react';

   const Button = ({ onClick, text }) => {
     return <button onClick={onClick}>{text}</button>;
   };

   export default Button;

   // App.js
   import React from 'react';
   import Button from './Button';

   const App = () => {
     const handleClick = () => {
       console.log('Button clicked');
     };

     return <Button onClick={handleClick} text="Click me" />;
   };

   export default App;


4. **Higher Order Functions**:
   Higher order functions are functions that take other functions as arguments or return functions.

  import React from 'react';

   const withLogger = (WrappedComponent) => {
     return (props) => {
       console.log('Props:', props);
       return <WrappedComponent {...props} />;
     };
   };

   const Button = ({ onClick, text }) => {
     return <button onClick={onClick}>{text}</button>;
   };

   const LoggedButton = withLogger(Button);

   const App = () => {
     const handleClick = () => {
       console.log('Button clicked');
     };

     return <LoggedButton onClick={handleClick} text="Click me" />;
   };

   export default App;



5. **Bootstrap**:
   Bootstrap is a popular CSS framework for building responsive and mobile-first websites.

npm install bootstrap

   Then include it in your project:

   // index.js or App.js
   import React from 'react';
   import 'bootstrap/dist/css/bootstrap.min.css';

   const App = () => {
     return <div className="container">Hello, Bootstrap!</div>;
   };

   export default App;
