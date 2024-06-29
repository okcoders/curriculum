import { db } from "@/server/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    const menuItems = db.menu.get();
    // TODO #5 if the req.query has a search term (e.g req.query.search), use that search term to filter the menuItems (e.g menuItems.filter(<filter logic here>))
    res.status(200).json({ menu: menuItems });
  } else {
    res.status(404).json({ message: "We only support GET requests" });
  }
}
