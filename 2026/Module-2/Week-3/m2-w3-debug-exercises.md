# Module 2, Week 3: Debug Exercises (Arrays, Objects, Loops)

## Bug 1: Array reference vs copy
```javascript
const numbers = [1, 2, 3];
const doubled = numbers;
doubled.push(4);
console.log(numbers);
```
What does this output? Why? How do you fix it?

---

## Bug 2: var in loop with setTimeout
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 100);
}
```
What does this output? Why? How do you fix it?

---

## Bug 3: Object property with dash
```javascript
const user = { "first-name": "John" };
console.log(user.first-name);
```
What happens? How do you fix it?

---

## Bug 4: Off-by-one error
```javascript
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}
```
What does this output? What is the bug?

---

## Bug 5: Wrong loop type
```javascript
const expense = { description: "Coffee", amount: 5 };
for (const item of expense) {
  console.log(item);
}
```
What happens? How do you iterate over object properties?

---

## Answer Key

1. Outputs [1, 2, 3, 4]. Arrays are references, not copies. Fix: const doubled = [...numbers];

2. Outputs 3, 3, 3. var is function-scoped so all callbacks see final value. Fix: use let instead of var

3. NaN or error. Dash is interpreted as subtraction operator. Fix: user["first-name"]

4. Outputs apple, banana, cherry, undefined. Goes one index too far. Fix: i < fruits.length (not <=)

5. TypeError - objects are not iterable with for...of. Fix: use for...in or Object.keys(expense)
