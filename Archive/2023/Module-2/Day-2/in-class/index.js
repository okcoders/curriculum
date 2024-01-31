var className = "ok-coders";
var testNumber = 1;
var testNumber2 = 2.0;
var myOtherClassName;

// code comment here
console.log(className);

var basicMath = 1 + 1;
var advancedMath = basicMath * 2;

navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position);
  },
  (error) => {
    console.log(error);
  }
);

var userIconElement = document.getElementById("user-icon");
console.log(userIconElement);
userIconElement.addEventListener("click", () => {
  console.log("I was clicked!");
});

var userName = prompt("What is your name?");
var firstNameInitial = userName[0];
var spacePosition = userName.indexOf(" ");
var lastNameInitial = userName[spacePosition + 1];
console.log(firstNameInitial);
console.log(lastNameInitial);

var avatarStringTag = document.getElementById("avatar-string");
console.log(avatarStringTag);
avatarStringTag.textContent = firstNameInitial + lastNameInitial;

var userAge = prompt("What is your age?");
var message = "Hello " + userName + ", you are " + userAge;

var sayHelloButton = document.getElementById("say-hello-button");

const h1MessageTag = document.getElementById("message");

function clickHandler() {
  h1MessageTag.textContent = message;
}

sayHelloButton.addEventListener("click", clickHandler);

// console.log(message);

// var h1MessageTag = document.getElementById("message");
// h1MessageTag.textContent = message;

const myArray = [1, 2, 3, 4, 5];
const mySecondArray = ["zach", "susan"];

const secondElement = mySecondArray[1];
const lastElement = mySecondArray[mySecondArray.length - 1];

console.log(mySecondArray);
mySecondArray.push("Carl", "Cooper");
console.log(mySecondArray);
mySecondArray.shift;
const coopersIndex = mySecondArray.indexOf("Cooper");
mySecondArray.splice(coopersIndex, 1);

const shoppingCart = [];

const shoppingCartElement = document.getElementById("shopping-cart");

function addItemToCart(itemName) {
  shoppingCart.push(itemName);
  shoppingCartElement.textContent = shoppingCart.length;
}

const pants = document.getElementById("pants");
const tShirt = document.getElementById("t-shirt");
const hat = document.getElementById("hat");

pants.addEventListener("click", () => addItemToCart("pants"));
tShirt.addEventListener("click", () => addItemToCart("t-shirt"));
hat.addEventListener("click", () => addItemToCart("hat"));

console.log(shoppingCart);

shoppingCartElement.textContent = shoppingCart.length;
