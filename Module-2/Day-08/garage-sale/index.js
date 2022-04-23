
console.log("hello")

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

function itemToDisplayHtml(item) {
    const html = `
        <div class="item-card">
            <h4>${item.name}</h4>
            <img src=${item.image}>
            <p>${item.description}</p>
            <em>${item.price}</em>
            <button onclick="addItemToCart('${item.id}')">Add To Cart</button>
        </div>
    `
    return html
}

function addItemToCart(id) {
    shoppingCart.push(id)
}

function addItemsForSaleToPage() {
    for (var i = 0; i < itemsForSale.length; i++) {
        const item = itemsForSale[i]
        const htmlForItem = itemToDisplayHtml(item)
        const appendableElement = document.createElement('div')
        appendableElement.innerHTML = htmlForItem
        itemsSlot.append(appendableElement)
    }
}

addItemsForSaleToPage()