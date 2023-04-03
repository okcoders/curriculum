console.log("Hello World!")
const myButton = document.getElementById('my-button')
console.log(myButton)
myButton.innerHTML = "Click Me!"

// array stuff
const testArray = []
console.log(testArray.length)

const arrayWithStuff = [0, 1, 2, 4]
console.log(arrayWithStuff.length)

console.log(arrayWithStuff[0])

const messyArray = [0, true, "false"]
console.log(messyArray)

const myShoppingCart = ["coffee", "tea", "la croix", "beer"]

console.log(myShoppingCart)
const lastItem = myShoppingCart.pop()
console.log(lastItem)
console.log(myShoppingCart)
myShoppingCart.push('beer')
console.log(myShoppingCart)
console.log(myShoppingCart.join('hi'))