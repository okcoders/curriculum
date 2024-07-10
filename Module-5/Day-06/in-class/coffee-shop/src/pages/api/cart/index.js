import { prisma } from "@/server/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const cartItems = await prisma.cart.findMany({
      include: { menuItem: true },
    });
    res.status(200).json({ cart: cartItems });
  } else if (req.method === "POST") {
    const menuId = req.body.id;
    const itemInCartAlready = await prisma.cart.findFirst({
      where: { menuItemId: menuId },
    });
    if (itemInCartAlready) {
      await prisma.cart.update({
        where: { menuItemId: menuId },
        data: { quantity: itemInCartAlready.quantity + 1 },
      });
    } else {
      await prisma.cart.create({
        data: { menuItemId: menuId, quantity: req.body.quantity },
      });
    }
    res.status(200).json({ message: "Item added to cart" });
  } else {
    res.status(404).json({ message: "We only support GET requests" });
  }
}
