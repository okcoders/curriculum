# Day 6

## objects

- objects allow us to group multiple values together
- we can use any data type as a value in an object
- once we make an object we can assign it to a variable
- we can then update the object from the variable
- we can also add new properties to the object
- keys are strings but must be valid identifiers to use shorthand (no quotes)
- property access via dot notation (if identifier) 
- property access via bracket notation (either identifier or string)

## creating objects
- object literals
- constructor functions
- Object.create()
- Classes

## objects in arrays

- one of the most useful data types in js is an array of objects
- a similar data type you can think of is an excel spreadsheet
- revisiting our shopping cart
- array of objects with arrays in the object! (blog post with comments)

## record collections

- similar to array of objects, but the access is a string known is the key, not the position

## exercise

- update your coffee shop site shopping cart to use objects
- you should have a name, price, and quantity for each item
- if an item is already in the cart, you should update the quantity when they click the add to cart button again
- try to use this method to update the quantity: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find (if you are using an array of objects)
- You could also use an object of objects with the key being the name of the shopping cart item

<em>Time allowing we can work through some of the Date object FCC exercise</em>
