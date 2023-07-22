import { listMenu, addMenuItem } from "../../../../coffeeDb";

export default function handler(req, res) {
  if (req.method === "GET") {
    const menu = listMenu();
    res.status(200).json({ menu });
  } else if (req.method === "POST") {
    const { name, description, price } = req.body;
    const addedMenuItem = addMenuItem(name, price, description);
    res.status(201).json(addedMenuItem);
  } else {
    res.status(404).json({ message: "not found" });
  }
}
