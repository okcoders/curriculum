import dbConnect from "../../server/db";
import Listing from "../../server/Listing";

export default async function handler(req, res) {
  await dbConnect();
  const listings = await Listing.find(
    {},
    { name: 1, bedrooms: 1 },
    { limit: 10 }
  );
  res.status(200).json({ listings });
}
