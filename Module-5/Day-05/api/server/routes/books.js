import { Router } from "express";
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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const foundBook = await Book.findById(id);

  res.json(foundBook);
});

router.post("/", async (req, res) => {
  const book = req.body;

  const createdBook = new Book(book);
  await createdBook.save();

  res.json(createdBook);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const book = req.body;
  const updatedBook = await Book.findByIdAndUpdate(id, book, {
    returnDocument: "after",
  });

  res.json(updatedBook);
});

router.put("/mark-reading/:id", async (req, res) => {
  const { id } = req.params;
  const foundBook = await Book.findById(id);
  foundBook.reading = true;
  await foundBook.save();

  res.json(foundBook);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  res.sendStatus(200);
});

export default router;
