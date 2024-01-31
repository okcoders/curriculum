import Listing from "../../../server/Listing";
import dbConnect from "../../../server/db";

export default async function listingById(req, res) {
  const { id } = req.query;
  await dbConnect();
  const listing = await Listing.findById(id);

  if (!listing) {
    res.status(404).json({ message: "Listing not found" });
  }

  if (req.method === "GET") {
    res.status(200).json(listing);
  } else if (req.method === "PUT") {
  } else if (req.method === "DELETE") {
    const deleteResult = await Listing.findByIdAndDelete(id);
    if (deleteResult) {
      res
        .status(203)
        .json({ message: "Listing deleted", itemDeleted: deleteResult });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
