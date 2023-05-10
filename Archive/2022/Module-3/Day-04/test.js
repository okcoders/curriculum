/*
      JSON - JavaScript Object Notation
    is just a way for us to represent and structure data
    and is the structure many APIs return their data in as well
    to make it easy to write code with that data.
*/

// pulling in a file with JSON data into my script;
const testJson = require('./test.json');
console.log('Type of incoming JSON from file:', typeof testJson); // 'object' - Node is turning the JSON into a JavaScript object for us

// JSON.stringify();
console.log('Type of JSON.stringify():', typeof JSON.stringify(testJson)); // 'string'

// JSON.parse();
const rawJson = '{"a":1,"b":2,"c":3}';
console.log('Type of JSON.parse():', typeof JSON.parse(rawJson)); // 'object'

// pulling in a 3rd party node module into my script
// this assumes I've run `npm install cross-fetch`
// to make sure it's in package.json and node_modules
// for me to use
const fetch = require('cross-fetch');

/*
  Promises are special objects in JavaScript that allow us to "wait" on
  an action that will take time, but we don't know how long.
*/

//  JavaScript is ASYNCHRONOUS
// Logs First
console.log('HELLO!');

// Logs Third
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) =>
    console.log(
      "Here's my data from fetch().then(). We have " + data.length + ' entries.'
    )
  );

// Logs Third
console.log('GOODBYE!');

// Async/Await - another way to do the exact same thing above
// "async" is the type of function
// "await" is a key word that lets us "unwrap" a pending Promise so we can see what's inside
async function getPosts() {
  // in this case, fetch returns a Promise that wraps a Fetch Response object.
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  // to get the JSON response within a Fetch Response object, we
  // can use the .json() method.
  // It also returns a Promise, so we need to "unwrap" it also.
  // NOTE: the 'json()' method is parsing the JSON string for us
  // into a JavaScript object, so we don't need to JSON.parse() it.
  const data = await response.json();

  console.log('Type of async/await data response:', typeof data); // 'object'
}

// call the async function above
getPosts();
