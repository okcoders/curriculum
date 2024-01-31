const menu = [
  { id: 1, name: "pour over", price: 3.5, description: "single origin" },
  { id: 2, name: "cold brew", price: 4.5, description: "single origin" },
];

export function addMenuItem(name, price, description) {
  const item = {
    id: menu.length + 1,
    name,
    price,
    description,
  };
  menu.push(item);
  return item;
}

export function listMenu() {
  return menu;
}

export function findMenuItem(id) {
  return menu.find((item) => item.id === id);
}

export function updateMenuItem(id, name, price, description) {
  const item = findMenuItem(id);
  if (item) {
    if (name) {
      item.name = name;
    }
    if (price) {
      item.price = price;
    }
    if (description) {
      item.description = description;
    }
  }
  return item;
}

export function deleteMenuItem(id) {
  const index = menu.findIndex((item) => item.id === id);
  if (index >= 0) {
    menu.splice(index, 1);
  }
}

export function searchMenuItems(query) {
  return menu.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}
