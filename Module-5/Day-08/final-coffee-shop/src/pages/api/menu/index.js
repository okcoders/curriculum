import dbConnect from "../../../server/db";
import MenuItem from "../../../server/MenuItem";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const menuItem = await MenuItem.create(req.body);
    res.status(201).json(menuItem);
  } else {
    const menuItems = await MenuItem.find({});
    res.status(200).json(menuItems);
  }
}
