// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Listing from "../../../server/Listing";
import dbConnect from "../../../server/db";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const listings = await Listing.find(
      { name: { $ne: "" } },
      { name: true },
      { limit: 10, sort: { name: "asc" } }
    );

    res.status(200).json({ listings });
  } else if (req.method === "POST") {
    const newListing = new Listing(req.body);
    await newListing.save();
    res.status(201).json(newListing);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
