import { prisma } from "@/server/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const allCartItems = await prisma.cart.findMany({
      include: { menuItem: true },
    });
    const quantity = allCartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    const price = allCartItems.reduce((acc, item) => {
      return acc + item.menuItem.price * item.quantity;
    }, 0);
    const order = await prisma.order.create({
      data: {
        quantity,
        price,
        OrderItems: {
          create: allCartItems.map((item) => {
            return {
              quantity: item.quantity,
              menuItemId: item.menuItemId,
            };
          }),
        },
      },
    });
    res.status(200).json({ id: order.id });
  } else {
    res.status(404).json({ message: "Method not supported" });
  }
}
