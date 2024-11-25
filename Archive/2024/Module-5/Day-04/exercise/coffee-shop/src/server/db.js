import * as fs from "fs";

function readDb() {
  return JSON.parse(fs.readFileSync("./src/server/db.json"));
}

function writeDb(updatedDb) {
  fs.writeFileSync("./src/server/db.json", JSON.stringify(updatedDb, null, 2));
}

export const db = {
  menu: {
    get() {
      return readDb().menu;
    },
    getById(id) {
      return readDb().menu.find((item) => item.id === id);
    },
  },
  cart: {
    get() {
      return readDb().cart;
    },
    getById(id) {
      return readDb().cart.find((item) => item.id === id);
    },
    add(menuItemId) {
      const db = readDb();
      db.cart.push(menuItemId);
      writeDb(db);
    },
    updateById(cartItemId, newQuantity) {
      const db = readDb();
      const foundItem = db.cart.find((cartItem) => cartItem.id === cartItemId);
      if (!foundItem) {
        throw new Error(`Item with id ${cartItemId} not found in cart`);
      }
      foundItem.quantity = newQuantity;
      writeDb(db);
    },
    delete(cartItemId) {
      const db = readDb();
      db.cart = db.cart.filter((cartItem) => cartItem.id !== cartItemId);
      console.log({ cart: JSON.stringify(db.cart), cartItemId });
      writeDb(db);
    },
  },
  orders: {
    get() {
      return readDb().orders;
    },
    add(order) {
      const db = readDb();
      db.orders.push(order);
      writeDb(db);
    },
  },
};
