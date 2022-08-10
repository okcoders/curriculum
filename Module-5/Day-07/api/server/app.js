import express from "express";
import booksRouter from "./routes/books";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// YWKHVEpnh1rauZZE

//Set up default mongoose connection
const mongoDB = "mongodb://localhost:27017/goodreads";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/books", booksRouter);

export default app;
