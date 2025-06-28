

// Cart data
const cart = [];


// Store logged in user
let loggedInUser = null;


async function handleLogin2(event){
    event.preventDefault()
    const usernameElement = document.getElementById('username');
    console.log('usernameElement', usernameElement)
    const username = usernameElement.value
    console.log('username', username)
    const passwordElement = document.getElementById('password');
    console.log('passwordElement', passwordElement);
    const password = passwordElement.value;
    console.log('password', password)

    const response = await fetch('http://localhost:3000/login', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // tell the server we're sending JSON
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

    if(user.username !== username || user.password !== password){
        alert(` is not found`)
        return
    }
    else{
       loggedInUser = user;
       console.log('loggedInUser', loggedInUser)
    }

    let welcomeMessageElement = document.getElementById('welcome-message');
    welcomeMessageElement.innerText = `Welcome ${loggedInUser.username}`

}

function createMenu(menu){
    console.log('menu', menu)
    let ulElement = document.getElementById("menu");
    ulElement.style.listStyleType = 'none';
    if(menu && menu.length > 0){
        for (let i = 0; i < menu.length; i++) {
            const liElement = document.createElement('li')
            liElement.innerHTML = `
            <div class="menu-item">
            <span id="${menu[i].name}">${menu[i].name}</span>
            <button onclick="addToCart('${menu[i].name}', '${menu[i].price}')">Add To Cart ($${menu[i].price.toFixed(2)})</button>

            </div>
         `;
         ulElement.appendChild(liElement);
        }
    }

}

function addToCart(name, price){
    console.log('item in addToCart', name, price)

    price = parseFloat(price);

    // If the cart is empty, add the first item directly
    if(cart.length === 0){
        const objectToInsert = {
            drink: name,
            cost: price,
            quantity: 1
        }
        cart.push(objectToInsert)
    }
    // if cart is not empty, we need to check if the passed in item exists
    else{

        // you will see booleans created like this pretty often. it's typically called a flag.  
        let itemExists = false;

        // check if item already exists in cart. if it is then increase the quantity and set the flag to true
        // you will notice 'break'.  this is a keyword in javascript.  it breaks out of the loop.  it is used here to break out as soon if the item is found since there is no need to keep going. unlike return, which would exit the entire function, break just exits the loop
        for (let index = 0; index < cart.length; index++) {
            if(cart[index].drink === name){
                cart[index].quantity++
                itemExists = true
                break
            }
        }

        // if there are items in the cart, but this item does not exist, add it to the cart
        if(!itemExists){
            const objectToInsert = {
                drink: name,
                cost: price,
                quantity: 1
            }
            cart.push(objectToInsert)
        }
    }
    
    // call (invoke) the updateCart() function.  we orginally had the updateCart() code in the addToCart() function, but it is more readable to separate it out. 
    updateCart()

}

// Function to update cart display. 
// in this function we will reset the cart and the total each time. this is a pretty common approach when displaying elements on a page.
function updateCart() {

    // reset totalCost
    let totalCost = 0;

    // get the element that we will be appending to
    let ulElement = document.getElementById("cart-items");


     // Clear the current list before updating to prevent duplicates
     // notice here we use innerHTML instead of inner text.  this will clear all the <li>s 
    ulElement.innerHTML = '';

    // loop through the cart to create the <li>s and append them. also we will calculate total cost.
    console.log('cart', cart)
    for (let index = 0; index < cart.length; index++) {

        // calculate total cost based on cost and quantity of each item
        totalCost += cart[index].cost * cart[index].quantity

        // create <li> and fill it's innerHTML for each index of the cart array.  
        // we are also adding a button so we can remove items.
        const liElement = document.createElement('li')
        liElement.innerHTML = `
           Item: ${cart[index].drink}, Price: $${cart[index].cost.toFixed(2)}, Quantity: ${cart[index].quantity}
            <button onclick="removeQuantity(${index})">-</button><button onclick="addQuantity(${index})">+</button><button onclick="removeFromCart(${index})">Remove</button>
        `;
        
        //append the li element
        ulElement.appendChild(liElement);
        
    }

    // get the element for the total and change it's innerText to the totalCost to 2 decimal places
    let totalElement = document.getElementById('total');
    totalElement.innerText = totalCost.toFixed(2);


}

// Function to remove item from the cart
// notice that this function takes in the index.  it then will remove everything in that the cart array at that index.  so even if the quantity of an item is greater than one, it will remove the whole item.
// Challenge: if quantity of an item is greater than 1, have it only decrease the quantity, but not completely remove the item
function removeFromCart(index) {
    cart.splice(index, 1);
    // just like in the addToCart() we need to update the cart to display the latest correct information. 
    // notice that we are called updateCart() under where it's function definition...hoisting!!
    updateCart();
}

function addQuantity(index) {
    cart[index].quantity++;
    updateCart()
} 
function removeQuantity(index) {
    if (cart[index].quantity === 1) {
        removeFromCart(index)
    } else {
    cart[index].quantity--
    updateCart()
    }
} 

// Function to handle checkout
// this function just empties the cart.  this is where you would add a payment system. 
// i did add a ternary operator on the alert.  

// ${loggedInUser && loggedInUser.username ? loggedInUser.username : 'Human'} - this bit is saying 'if loggedInUser is exists AND loggedInUser.username exists then display the value of loggedInUser.username.  if loggedInUser doesnt exist OR loggedInUser.username doesnt exist the display Human.  so you can think of the ? as an if and the : as an else.  you can have very long and confusing ternary operators so in most cases an if/else block might be a better way to go...for now :)
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert(`Thank you for your purchase, ${loggedInUser && loggedInUser.username ? loggedInUser.username : 'Human'}!`);
    cart.length = 0;
    updateCart();
}


function hotOrCold(temp){
    console.log('temp in hotOrCold', temp);
    let somethingStupidElement = document.getElementById('somethingStupid');
    let tempElement = document.createElement('div');
    somethingStupidElement.appendChild(tempElement)
    let coldItems = [];
    let hotItems = [];
    for (let index = 0; index < menu.length; index++) {
        if(menu[index].type === 'cold' && menu[index].name != 'Pup Cup'){
            
            coldItems.push(menu[index])
        }
        else if(menu[index].type === 'hot'){
            hotItems.push(menu[index])
        }
    }


    console.log('hotItems', hotItems)
    console.log('coldItems', coldItems)

    if(temp >= 65){
        let rando = Math.floor(Math.random() * coldItems.length)
        console.log('rando', rando)
        let coldItem = coldItems[rando];
        console.log('coldItem', coldItem)
        // suggest cold beverage
        // tempElement.innerText = `Why dont you cool off with a ${coldItem}`;
        // tempElement.innerHTML = `<div>why dont you cool off with a <a href="#${coldItem}">${coldItem}</a></div>`
        tempElement.innerHTML = `<div onclick="addToCart('${coldItem.name}', '${coldItem.price}')">Why dont you try a ${coldItem.name}</div>`
    }
    else{
        let rando = Math.floor(Math.random() * hotItems.length)
        console.log('rando', rando)
        let hotItem = hotItems[rando];
        console.log('hotItem', hotItem)
        // suggest hot beverage
        // tempElement.innerText = `Why dont you cool off with a ${hotItems}`;
        // tempElement.innerHTML = `<div>why dont you cool off with a <a href="#${hotItems}">${hotItems}</a></div>`
        tempElement.innerHTML = `<div onclick="addToCart('${hotItem.name}', '${hotItem.price}')">Why dont you try a ${hotItem.name}</div>`
    }
}





function getWeather(latitude, longitude){
    console.log('getWeather')
    console.log('lat', latitude)
    console.log('lon', longitude)

  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=5036614036843034e71c69350f7cab8a`;

  fetch(weatherURL)
    .then(response => {
        console.log('response', response)
        if(response.ok){
            return response.json()
        }
    })
    .then(data => {
        console.log('data', data)
      const temp = data.main.temp;
      console.log('temp', temp)
        hotOrCold(temp)
    })
    .catch(error => console.log('Error:', error));
}


function getUserLocation(){
    console.log('getUserLocation')
    if (navigator.geolocation) {
        // Get the user's current position
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log('position', position)
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
        
            // Now that we have the coordinates, we can use them to fetch weather data
            getWeather(latitude, longitude);
        }, function(error) {
            console.log("Error getting geolocation: " + error.message);
        });
    } else {
    console.log("Geolocation is not supported by this browser.");
    }
}


function practiceGetRoute(){
    console.log('i am in practiceGetRoute()')
    const response = fetch('http://localhost:3000')
    console.log('response', response)
}

async function getMenuFromServer(){
    const response = await fetch('http://localhost:3000/getMenu')
    console.log('response', response)
    if(response.status != 200){
        console.error('response error')
        return; 
    }

    let data = await response.json();
    console.log('data', data)

    createMenu(data);

}

document.addEventListener("DOMContentLoaded", function() {
    // createMenu();
    // getUserLocation();
    getMenuFromServer()
  });













