
const itemsForSale = [
    {
        id: "coffee-pot",
        price: 50.99,
        name: "Coffee Pot",
        description: "Makes black coffee fast",
        image: "https://imgs.search.brave.com/EOM9iZ99gmAB8DCXkMZZluH-49WuCqPcaxr6qjmyu7A/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9iZ3Iu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzAxL3RlY2hu/aXZvcm0tbW9jY2Ft/YXN0ZXItNTk2MTYt/a2JnLWNvZmZlZS1i/cmV3ZXIuanBnP3F1/YWxpdHk9NzAmc3Ry/aXA9YWxs"
    },
    {
        id: "coffee-grinder",
        price: 65.00,
        name: "Coffee Grinder",
        description: "Burr grinder, good for medium grind",
        image: "https://imgs.search.brave.com/rZuO2AawW-qni1ksrfqjss_u-ojo9qU4CAsKVZKUCHs/rs:fit:1080:1080:1/g:ce/aHR0cHM6Ly9jbGlj/b24udXMvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMTAvQnJl/dmlsbGUtU21hcnQt/R3JpbmRlci1Qcm8u/anBn"
    }
]

const shoppingCart = []

const itemsSlot = document.getElementById("items-slot")

function itemToDisplayHtml(item, inCart) {
    // yes, very fancy, you can call a function inside a template string (e.g buttonHtml)
    const html = `
        <div class="item-card">
            <h4>${item.name}</h4>
            <img src=${item.image}>
            <p>${item.description}</p>
            <em>${item.price}</em>
            ${buttonHtml(item.id, inCart)}
        </div>
    `
    return html
}

function buttonHtml(itemId, inCart) {
    if (inCart) {
        return `<button onclick="removeItemFromCart('${itemId}')">Remove From Cart</button>`
    } else {
        return `<button onclick="addItemToCart('${itemId}')">Add To Cart</button>`
    }
}

function removeItemFromCart(id) {
    for (var i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i] === id) {
            shoppingCart.splice(i, 1)
            renderPage()
            return
        }
    }
}

function addItemToCart(id) {
    shoppingCart.push(id)
    renderPage()
}

function renderPage() {
    // remove existing elements so we have a clean page to append to
    itemsSlot.innerHTML = ""
    // loop through and create each item card
    for (var i = 0; i < itemsForSale.length; i++) {
        const item = itemsForSale[i]
        renderItemCard(item)
    }
}

function renderItemCard(item) {
    const itemInCart = isItemInShoppingCart(item.id)
    const htmlForItem = itemToDisplayHtml(item, itemInCart)
    const appendableElement = document.createElement('div')
    appendableElement.innerHTML = htmlForItem
    itemsSlot.append(appendableElement)

}

function isItemInShoppingCart(itemId) {
    var itemInCart = false
    for (var i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i] === itemId) {
            itemInCart = true
            // not necessary, but stops the loop
            return itemInCart
        }
    }
    return itemInCart
}

function checkout() {
    const items = shoppingCart.length
    var price = 0
    // two loops, one to go through the shopping cart, and then a nested loop to look up by id the item
    for (var i = 0; i < shoppingCart.length; i++) {
        for (var j = 0; j < itemsForSale.length; j++) {
            const item = itemsForSale[j]
            if (item.id === shoppingCart[i]) {
                price += item.price
            }
        }
    }
    var pluralOrNot = "items"
    if (items === 1) {
        pluralOrNot = "item"
    }
    window.alert(`Thanks for shopping with us! You are buying ${items} ${pluralOrNot} for a total price of \$${price.toFixed(2)}.`)
}

const checkoutButton = document.getElementById("checkout-button")
checkoutButton.addEventListener('click', checkout)

renderPage()