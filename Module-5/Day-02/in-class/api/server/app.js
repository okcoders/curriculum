import express from "express";
import booksRouter from "./routes/books";
import cors from "cors";

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/books", booksRouter);

export default app;
