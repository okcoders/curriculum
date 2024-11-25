const users = {
    jason_newsom: { first: "Jason", last: "Newsom", is_sick: false },
    erich_keil: { first: "Erich", last: "Keil", is_sick: false },
    "aly alonzo": { first: "Aly", last: "Alonzon", is_sick: true },
}

let username = "aly alonzo";
const currentUser = users[username]
if (currentUser.is_sick) {
    console.log(`Get Better Soon ${currentUser.first} !`);
};

const shoppingCart = {
    'latte': { price: 2.99, qty: 3 },
    'americano': { price: .99, qty: 99 },
}

function addItemToCart(itemName, price) {
    if (Object.keys(shoppingCart).includes(itemName)) {
        shoppingCart[itemName].qty = shoppingCart[itemName].qty + 1;
    } else {
        if (!price) {
            throw new Error("Item not in cart and price not provided");
        }
        shoppingCart[itemName] = {
            price: price,
            qty: 1
        }
    }
}

console.log('Before', shoppingCart);

addItemToCart('chai latte');

console.log('After', shoppingCart);

addItemToCart('chai latte');

console.log('After another', shoppingCart);
