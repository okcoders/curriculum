const menuItems = [
  {
    name: "Espresso",
    description:
      "A strong coffee made by forcing steam through finely ground coffee beans.",
    price: 2.5,
    discount: 0.1,
  },
  {
    name: "Cappuccino",
    description: "A coffee made with espresso and steamed milk.",
    price: 3.5,
  },
  {
    name: "Latte",
    description: "A coffee made with espresso and frothy steamed milk.",
    price: 4.0,
    discount: 0.15,
  },
];

function displayMenuItems() {
  const menuDiv = document.getElementById("menu");

  menuItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const name = document.createElement("h2");
    name.textContent = item.name;
    card.appendChild(name);

    const description = document.createElement("p");
    description.textContent = item.description;
    card.appendChild(description);

    const price = document.createElement("p");
    if (item.discount) {
      const originalPrice = document.createElement("del");
      originalPrice.textContent = `$${item.price.toFixed(2)}`;
      price.appendChild(originalPrice);

      const discountedPrice = document.createElement("span");
      discountedPrice.textContent = ` $${(
        item.price *
        (1 - item.discount)
      ).toFixed(2)}`;
      price.appendChild(discountedPrice);
    } else {
      price.textContent = `$${item.price.toFixed(2)}`;
    }
    card.appendChild(price);

    const addToCartBtn = document.createElement("button");
    addToCartBtn.className = "add-to-cart";
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.addEventListener("click", () => addToCart(index));
    card.appendChild(addToCartBtn);

    menuDiv.appendChild(card);
  });
}

let shoppingCart = [];

function addToCart(index) {
  const item = menuItems[index];
  const price = item.discount ? item.price * (1 - item.discount) : item.price;
  shoppingCart.push({ ...item, price });
  displayShoppingCart();
}

function displayShoppingCart() {
  const cartDiv = document.getElementById("shopping-cart");
  cartDiv.innerHTML = "";

  let totalPrice = 0;

  shoppingCart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "shopping-cart-item";

    const name = document.createElement("p");
    name.textContent = item.name;
    cartItem.appendChild(name);

    const price = document.createElement("p");
    if (item.discount) {
      const originalPrice = document.createElement("del");
      originalPrice.textContent = `$${(
        item.price /
        (1 - item.discount)
      ).toFixed(2)}`;
      price.appendChild(originalPrice);

      const discountedPrice = document.createElement("span");
      discountedPrice.textContent = ` $${item.price.toFixed(2)}`;
      price.appendChild(discountedPrice);
    } else {
      price.textContent = `$${item.price.toFixed(2)}`;
    }
    cartItem.appendChild(price);

    totalPrice += item.price;

    cartDiv.appendChild(cartItem);
  });

  const total = document.createElement("p");
  total.textContent = `Total: $${totalPrice.toFixed(2)}`;
  cartDiv.appendChild(total);
}

displayMenuItems();
