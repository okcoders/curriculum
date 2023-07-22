import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
  age: Number,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

const Author = model("Author", AuthorSchema);

export default Author;
