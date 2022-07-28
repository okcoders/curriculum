import { Router } from "express";
import BooksService from "../books-service";
import Book from "../models/book";

const router = Router();

router.get("/", async (req, res) => {
  const search = req.query.bookTitle;
  const books = await Book.find();

  if (search) {
    const filteredBooks = books.filter((book) => book.title.includes(search));
    return res.json(filteredBooks);
  }

  res.json(books);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const books = BooksService.getAll();
  const requestedBook = books.find((book) => book.id === id);

  res.json(requestedBook);
});

router.post("/", async (req, res) => {
  const book = req.body;

  const createdBook = new Book(book);
  await createdBook.save();

  res.json(createdBook);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const book = req.body;
  const updatedBook = BooksService.updateById(id, book);
  res.json(updatedBook);
});

router.put("/mark-reading/:id", (req, res) => {
  const { id } = req.params;
  const updatedBook = BooksService.updateById(id, { reading: true });
  res.json(updatedBook);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  BooksService.deleteById(id);
  res.sendStatus(200);
});

export default router;
