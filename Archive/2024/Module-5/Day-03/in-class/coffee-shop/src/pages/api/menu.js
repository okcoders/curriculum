import { db } from "@/server/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    const menuItems = db.menu.get();
    res.status(200).json({ menu: menuItems });
  } else {
    res.status(404).json({ message: "We only support GET requests" });
  }
}
