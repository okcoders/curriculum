import { Router } from "express";
import Author from "../models/author";

const router = Router();

router.get("/", async (req, res) => {
  const authors = await Author.find();

  res.json(authors);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id).populate("books");

  res.json(author);
});

router.post("/", async (req, res) => {
  const author = req.body;

  const createdAuthor = new Author(author);
  await createdAuthor.save();

  res.json(createdAuthor);
});

export default router;
