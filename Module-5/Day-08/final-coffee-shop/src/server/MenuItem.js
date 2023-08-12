import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  photoUrl: {
    type: String,
  },
  price: {
    type: Number,
  },
});

export default mongoose.models.MenuItem ||
  mongoose.model("MenuItem", MenuItemSchema);
