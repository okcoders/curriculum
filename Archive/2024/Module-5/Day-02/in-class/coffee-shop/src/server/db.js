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
    add(menuItemId) {
      const db = readDb();
      db.cart.push(menuItemId);
      writeDb(db);
    },
    delete(menuItemId) {
      const db = readDb();
      db.cart = db.cart.filter((id) => id !== menuItemId);
      writeDb(db);
    },
  },
};
