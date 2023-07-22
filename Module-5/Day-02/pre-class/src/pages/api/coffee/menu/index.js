import { listMenu, addMenuItem } from "../../../../server/coffeeDb";

export default function handler(req, res) {
  if (req.method === "GET") {
    const menu = listMenu();
    res.status(200).json(menu);
  } else if (req.method === "POST") {
    const { name, price, description } = req.body;
    const item = addMenuItem(name, price, description);
    res.status(201).json({ item });
  }
}
