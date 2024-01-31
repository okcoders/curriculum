import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  bedrooms: {
    type: Number,
  },
});

export default mongoose.models.Listing ||
  mongoose.model("Listing", ListingSchema, "listingAndReviews");
