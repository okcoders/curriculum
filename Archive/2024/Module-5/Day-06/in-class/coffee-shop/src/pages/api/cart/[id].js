import { prisma } from "@/server/prisma";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const id = req.query.id;
    const numberId = Number(id);
    await prisma.cart.delete({
      where: {
        menuItemId: numberId,
      },
    });
    res.status(200).json({ message: "cart item removed" });
  } else if (req.method === "PUT") {
    const id = req.query.id;
    const numberId = Number(id);
    const updatedCartItem = await prisma.cart.update({
      where: { menuItemId: numberId },
      data: { quantity: req.body.quantity },
    });

    res.status(200).json({ message: "cart item updated", updatedCartItem });
  } else {
    res
      .status(404)
      .json({ message: "We only support DELETE and PUT requests" });
  }
}
