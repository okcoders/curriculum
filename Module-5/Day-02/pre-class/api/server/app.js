import express from "express";
import booksRouter from "./routes/books";

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/books", booksRouter);

export default app;
