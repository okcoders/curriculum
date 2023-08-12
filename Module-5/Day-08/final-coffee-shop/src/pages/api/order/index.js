import dbConnect from "../../../server/db";
import Order from "../../../server/Order";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "POST") {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } else {
    const orders = await Order.find({});
    res.status(200).json(orders);
  }
}
