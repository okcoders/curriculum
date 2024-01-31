import dbConnect from "../../../server/db";
import MenuItem from "../../../server/MenuItem";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;
  const menuItem = await MenuItem.findById(id);
  res.status(200).json(menuItem);
}
