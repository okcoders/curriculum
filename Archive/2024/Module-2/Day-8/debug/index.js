const menuItems = [
  //list of objects in my array for variable menuItems
  {
    Name: "Carmel Latte",
    Description:
      "If you like carmel and love coffee this is the best mix for you",
    Price: 10,
  },
  {
    Name: "The Regular",
    Description: "Regular coffee with your choice of almond milk or Soy milk",
    Price: 5,
  },
  {
    Name: "Chocolate Latte",
    Description:
      "Chocolate lovers dream with pure milk chocolate and chocolate creamer",
    Price: 10,
  },
];

const cart = document.getElementById("shopping-cart");

const menu = document.getElementById("menu");

function displayMenuItems() {
  //create menu items
  for (let i = 0; i < menuItems.length; i++) {
    //looping for how many object I have above
    item = menuItems[i]; // getting the values of each object and assigning it to item
    console.log(item);
    let para = document.createElement("p"); //create html paragraph
    const button = document.createElement("button"); //creating a button
    const buttonText = document.createTextNode(`Add ${item.Name}`); //adding text to button
    button.addEventListener("click", () => addToCart(item));
    button.appendChild(buttonText);
    cart.appendChild(button);
    let paraText = document.createTextNode(
      `Item: ${item.Name} Price: $${item.Price} Description: ${item.Description}`
    ); //create text for html document using properties from menuItems array
    para.appendChild(paraText); //append text to the paragraph created
    menu.appendChild(para); //append the combined text and paragraph element to the div with ID="menu"
  }
}

displayMenuItems();

// const button = document.createElement("button");//creating a button
//      const buttonText = document.createTextNode(`Add`);//adding text to button
//      button.appendChild(buttonText);
//      cart.appendChild(button)
count = 0;

function addToCart(itemName) {
  console.log(itemName);
}
