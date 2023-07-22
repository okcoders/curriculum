import { Router } from "express";
import BooksService from "../books-service";

const router = Router();

router.get("/", (req, res) => {
  const { search } = req.query;
  const books = BooksService.getAll();

  if (search) {
    const searchResults = books.filter(({ title }) => title.includes(search));

    return res.send(searchResults);
  }

  res.send(books);
});

router.get("/:id", (req, res) => {
  const bookId = req.params.id;
  const books = BooksService.getAll();
  const requestedBook = books.find((book) => book.id === bookId);

  res.send(requestedBook);
});

router.post("/", (req, res) => {
  const newBook = req.body;
  BooksService.add(newBook);

  res.send(newBook);
});

router.put("/", (req, res) => {
  const bookUpdates = req.body;
  BooksService.updateById(bookUpdates.id, bookUpdates);

  res.send(bookUpdates);
});

router.put("/mark-reading/:id", (req, res) => {
  const bookId = req.params.id;
  BooksService.updateById(bookId, { reading: true });

  res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
  const bookId = req.params.id;
  BooksService.deleteById(bookId);

  res.sendStatus(200);
});

export default router;
