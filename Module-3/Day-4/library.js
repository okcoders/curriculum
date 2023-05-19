const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const library = [];

function createBook(title, author, genre, yearPublished) {
  // Your code here
}

function addBook(book) {
  // Your code here
}

function removeBook(title) {
  // Your code here
}

function findBook(title) {
  // Your code here
}

function listBooks() {
  // Your code here
}

function prompt() {
  rl.question("What would you like to do?\n", (answer) => {
    console.log(answer);
    // your code here

    rl.close();
  });
}

prompt();
