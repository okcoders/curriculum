import { db } from "@/server/db";

export default function handler(req, res) {
  if (req.method === "GET") {
    const cartItems = db.cart.get();
    res.status(200).json({ cart: cartItems });
  } else if (req.method === "POST") {
    db.cart.add(req.body);
    res.status(200).json({ message: "Item added to cart" });
  } else {
    res.status(404).json({ message: "We only support GET requests" });
  }
}
