import { Router } from "express";
import books from "../books.json";

const router = Router();

router.get("/", function (req, res, next) {
  console.log(books);
  res.json({ message: "Hello World from OK Coders!" });
});

// {
//   "id": "9781593279509",
//   "title": "Eloquent JavaScript, Third Edition",
//   "subtitle": "A Modern Introduction to Programming",
//   "author": "Marijn Haverbeke",
//   "published": "2018-12-04T00:00:00.000Z",
//   "publisher": "No Starch Press",
//   "pages": 472,
//   "description": "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
//   "website": "http://eloquentjavascript.net/"
// }
export default router;
