import { Schema, model } from "mongoose";

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  subtitle: String,
  published: { type: Date, default: Date.now() },
  pages: Number,
  description: String,
  website: String,
  reading: Boolean,
});

const Book = model("Book", BookSchema);

export default Book;
