import dbBooks from "./books.json";

let books = [...dbBooks];

const getAll = () => {
  return books;
};

const add = (newBook) => {
  const newBooks = [...books, newBook];
  books = newBooks;

  return books;
};

const updateById = (id, updates) => {
  const bookIndex = books.findIndex((book) => book.id === id);
  books[bookIndex] = { ...books[bookIndex], ...updates };

  return books;
};

const deleteById = (id) => {
  const filteredBooks = books.filter((book) => book.id !== id);
  books = filteredBooks;

  return books;
};

const BooksService = { getAll, add, updateById, deleteById };

export default BooksService;
