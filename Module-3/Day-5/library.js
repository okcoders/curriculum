const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let library = [];
const libraryFilePath = "./library.json";

// Load library from file if it exists
if (fs.existsSync(libraryFilePath)) {
  const libraryData = fs.readFileSync(libraryFilePath);
  library = JSON.parse(libraryData);
}

function saveLibrary() {
  fs.writeFileSync(libraryFilePath, JSON.stringify(library));
}

function createBook(title, author, genre, yearPublished) {
  const newBook = { title, author, genre, yearPublished };
  return newBook;
}

function addBook(book) {
  library.push(book);
  console.log(`${book.title} has been added to the library`);
  libraryStats();
  saveLibrary();
}

function libraryStats() {
  const plural = library.length > 1 ? "s" : "";
  console.log(`There are now ${library.length} book${plural} in the library`);
}

function removeBook(title) {
  const pos = library.findIndex((book) => book.title === title);
  if (pos === -1) {
    console.log("Book not found");
  } else {
    library.splice(pos, 1);
    console.log(`${title} has been removed from the library`);
    libraryStats();
    saveLibrary();
  }
}

function findBook(title) {
  const book = library.find((book) => book.title === title);
  if (book) {
    console.log(book);
  } else {
    console.log("Book not found");
  }
}

function listBooks() {
  libraryStats();
  console.log("The books in the library are:");
  library.forEach((book) => console.log(book));
}

function prompt() {
  rl.question(
    "What would you like to do? You can create, remove, find, or list\n",
    (answer) => {
      if (answer === "create") {
        rl.question(
          "what is the title, author, genre, year published of the book you want to add?\n",
          (info) => {
            const [title, author, genre, yearPublished] = info.split(", ");
            const createdBook = createBook(title, author, genre, yearPublished);
            addBook(createdBook);
            prompt();
          }
        );
      } else if (answer === "remove") {
        rl.question(
          "what is the title of the book you want to remove?\n",
          (title) => {
            removeBook(title);
            prompt();
          }
        );
      } else if (answer === "find") {
        rl.question(
          "what is the title of the book you want to find?\n",
          (title) => {
            findBook(title);
            prompt();
          }
        );
      } else if (answer === "list") {
        listBooks();
        prompt();
      } else {
        console.log("Invalid input");
        prompt();
      }
    }
  );
}

prompt();
