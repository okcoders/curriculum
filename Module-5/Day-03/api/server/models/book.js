import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  subtitle: String,
  published: { type: Date, default: Date.now() },
  pages: Number,
  description: String,
  website: String,
  reading: Boolean,
});

const Book = mongoose.model("Book", BookSchema);

export default Book;
