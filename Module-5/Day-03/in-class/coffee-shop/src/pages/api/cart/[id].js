import { db } from "@/server/db";

export default function handler(req, res) {
  if (req.method === "DELETE") {
    console.log("req query here", req.query);
    const id = req.query.id;
    const numberId = Number(id);
    db.cart.delete(numberId);
    res.status(200).json({ message: "cart item removed" });
  } else {
    res.status(404).json({ message: "We only support DELETE requests" });
  }
}
