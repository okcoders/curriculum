# Day 4 exercise

## Terminal Based Library

You are going to make a command line program that allows a user to keep track of books. Follow the steps bellow to do so. I have provided a starting point for you in the `library.js` file.

### 1. Create a Book:

- Create a function createBook that takes in parameters for title, author, genre, and yearPublished and returns an object with these properties.

### 2. Adding a Book to the Library:

- Create a function addBook that takes a book object and adds it to the library array.

### 3. Removing a Book from the Library:

- Create a function removeBook that takes a book title and removes that book from the library array.

### 4. Finding a Book in the Library:

- Create a function findBook that takes a book title and returns that book from the library array.

### 5. Listing all Books in the Library:

- Create a function listBooks that logs all the books in the library array to the console.

### 6. Creating a User Interface:

- Finally, update the prompt function. Based on what the user inputs, call the appropriate functions based on their choices.

### 7. Prompting more than once:

- Notice that our library program only prompts the user once. How can we make it so that it prompts the user over and over again until they choose to quit?

- To do this, we need to use a concept called recursion. Recursion is when a function calls itself. We can use recursion to call our prompt function over and over again until the user chooses to quit (the user can quit by hitting ctrl + c twice).

### 8. Bonus Round:

- notice that once you stop the program, anything you added to the library is gone. The library array is just something that is stored in memory during the program's execution.

- We need a way to save the contents of the library array. We can do this by saving the library to a file.

- use chatGPT and research to figure out how to do this. If you do it right, you will be using the node filesystem module, and JSON.parse and JSON.stringify. Anytime you add a book or remove a book, you will want to update your file as well.
