# Module 2 Cheat Sheet

## Day 1: Basic JavaScript

- Commenting code: `// single-line comment` and `/* multi-line comment */`
- Variables:
  - `var`: `var x;`
  - `let`: `let y;`
  - `const`: `const z = 10;`
- Assignment operator: `x = 5;`
- Arithmetic operators: `10 + 5`, `10 - 5`, `10 * 5`, `10 / 5`, `10 % 3` (remainder)
- Increment/decrement: `x++`, `x--`

## Day 2: Strings and Arrays

- String literals: `'Hello, world!'`, `"Hello, world!"`
- Escape characters: `\'`, `\"`, `\\`, `\n`, `\r`, `\t`, `\b`, `\f`
- String concatenation: `let str = 'Hello, ' + 'world!';`, `str += ' How are you?';`
- String length: `str.length`
- Bracket notation: `str[0]`
- Arrays: `[1, 2, 3, 4, 5]`
- Array nesting: `[[1, 2], [3, 4]]`
- Array methods: `arr.push(6)`, `arr.pop()`, `arr.shift()`, `arr.unshift(0)`

## Day 3: Functions and Scope

- Functions: `function add(x, y) { return x + y; }`
- Function arguments: `add(5, 10)`
- Return statement: `return x * y`
- Global scope vs. local scope

## Day 5: Conditional Logic

- Boolean values: `true`, `false`
- If statement:
  ```
  if (x > y) {
    console.log('x is greater than y');
  }
  ```
- Comparison operators: `x == y`, `x === y`, `x != y`, `x !== y`, `x > y`, `x >= y`, `x < y`, `x <= y`
- Logical operators: `x > 0 && y > 0`, `x < 0 || y < 0`
- Else statement:
  ```
  if (x > y) {
    console.log('x is greater than y');
  } else {
    console.log('x is not greater than y');
  }
  ```
- Else if statement:
  ```
  if (x > y) {
    console.log('x is greater than y');
  } else if (x < y) {
    console.log('x is less than y');
  } else {
    console.log('x is equal to y');
  }
  ```

## Day 6: Objects and Nested Data

- Objects: `{name: 'John', age: 30, city: 'New York'}`
- Accessing properties: `person.name`, `person['city']`
- Adding, updating, and deleting properties: `person.country = 'USA';`, `person.age = 31;`, `delete person.city;`
- Object lookups: using objects as dictionaries for key-value pairs
- Nested objects and arrays

## Day 7: Loops, Conditionals, and Parsing

- While loops:
  ```
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```
- For loops:
  ```
  for (let i = 0; i < 5; i++)
    {
    console.log(i);
  }
  ```
- Nested loops:
  ```
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      console.log(`i: ${i}, j: ${j}`);
    }
  }
  ```
- Random numbers: `Math.random()`, `Math.floor(Math.random() * 10) // random number between 0 and 9`
- Parsing integers: `parseInt('42', 10)`, `parseInt('42', 2)`
- Ternary operator: `let result = x > y ? 'x is greater' : 'x is not greater';`
- Chaining ternary operators: `let result = x > y ? 'x is greater' : x < y ? 'x is smaller' : 'x is equal to y';`

## Examples/Exercises

### Bottles of beer

```js
// bottles of beer song
for (let i = 5; i >= 0; i--) {
  if (i > 1) {
    console.log(i + " bottles of beer on the wall");
    console.log(i + " bottles of beer");
    console.log(
      "take one down pass it around ",
      i - 1 + " bottles of beer on the wall"
    );
  } else if (i === 1) {
    console.log(i + " bottle of beer on the wall");
    console.log(i + " bottle of beer");
    console.log(
      "take one down pass it around ",
      i - 1 + " bottles of beer on the wall"
    );
  } else {
    console.log("no more bottles on the wall");
  }
}
```

### FizzBuzz

```js
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
```

### Shopping Cart

```js
const shoppingCart = [
  { name: "toilet paper", price: 5.99, quantity: 1 },
  { name: "dog treats", price: 10.99, quantity: 2 },
  { name: "la croix", price: 3.99, quantity: 4 },
];

console.log("=========================================");
let totalPrice = 0;
shoppingCart.forEach(function (shoppingCartItem, i) {
  const totalItemPrice = shoppingCartItem.price * shoppingCartItem.quantity;
  const itemString =
    i +
    1 +
    ") " +
    "item: " +
    shoppingCartItem.name +
    ", total price: " +
    totalItemPrice;
  console.log(itemString);
  totalPrice += totalItemPrice;
});
console.log("total price: " + totalPrice);
console.log("=========================================");
```
