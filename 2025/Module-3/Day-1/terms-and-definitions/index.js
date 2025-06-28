// Promise
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    
    if (success) {
      resolve("The operation was successful!");
    } else {
      reject("Something went wrong.");
    }
  });
  
  myPromise
    .then(result => console.log(result)) // .then is for successful resolution
    .catch(error => console.log(error)); // .catch is for handling errors




// Async/Await
async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
}
    
fetchData();


// HTTP Methods

// GET request
fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// POST request
fetch('https://api.example.com/data', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name: 'John', age: 30 })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// PUT request
fetch('https://api.example.com/data/123', {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name: 'Jane', age: 25 })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// DELETE request
fetch('https://api.example.com/data/123', {
method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));



// Fetch API
// Fetch data from an API using the Fetch API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));


// Node.js and Express
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//NPM - run in terminal
// npm init
// npm install
// npm install <package>