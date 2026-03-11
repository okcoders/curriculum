# Module 2, Week 3: Arrays, Objects, Loops, and Debugging

---

## Arrays

### Creating and Accessing

```javascript
const fruits = ["apple", "banana", "cherry"];

fruits[0]           // "apple" (first element)
fruits[2]           // "cherry"
fruits.length       // 3
fruits[fruits.length - 1]  // "cherry" (last element)
```

### Methods That Change the Array

```javascript
const arr = ["a", "b", "c"];

arr.push("d");      // Add to end → ["a", "b", "c", "d"]
arr.pop();          // Remove from end → ["a", "b", "c"]
arr.unshift("z");   // Add to beginning → ["z", "a", "b", "c"]
arr.shift();        // Remove from beginning → ["a", "b", "c"]
arr.splice(1, 1);   // Remove 1 item at index 1 → ["a", "c"]
```

### Methods That Return New Array

```javascript
const arr = [1, 2, 3, 4, 5];

arr.slice(1, 3)        // [2, 3] — from index 1 to 3 (not including 3)
arr.slice(2)           // [3, 4, 5] — from index 2 to end
arr.indexOf(3)         // 2 (index of first match)
arr.includes(3)        // true
arr.join(", ")         // "1, 2, 3, 4, 5"
```

### Array Copy vs Reference

```javascript
// ❌ Creates a reference, not a copy!
const original = [1, 2, 3];
const notACopy = original;
notACopy.push(4);
console.log(original);  // [1, 2, 3, 4] — original changed!

// ✅ Create actual copy
const copy = [...original];  // spread operator
```

---

## Objects

### Creating and Accessing

```javascript
const expense = {
  id: 1,
  description: "Coffee",
  amount: 4.50,
  category: "Food"
};

// Dot notation
expense.description     // "Coffee"

// Bracket notation (for variables or special characters)
expense["description"]  // "Coffee"

const key = "amount";
expense[key]            // 4.50

// Property with dash
const user = { "first-name": "John" };
user["first-name"]      // "John"
user.first-name         // ❌ Error!
```

### Modifying Objects

```javascript
expense.category = "Food";    // Add or update
delete expense.category;      // Delete

"amount" in expense           // true (check if exists)
```

### Object Methods

```javascript
Object.keys(expense)    // ["id", "description", "amount", "category"]
Object.values(expense)  // [1, "Coffee", 4.50, "Food"]
```

---

## Loops

### for Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}

// Loop through array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### for...of Loop (for arrays)

```javascript
const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);  // "apple", "banana", "cherry"
}
```

### for...in Loop (for objects)

```javascript
const expense = { id: 1, amount: 10 };

for (const key in expense) {
  console.log(key, expense[key]);
  // "id" 1
  // "amount" 10
}
```

### Loop Control

```javascript
// break — exit loop entirely
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);  // 0, 1, 2, 3, 4
}

// continue — skip to next iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);  // 0, 1, 3, 4
}
```

---

## Debugging

### Console Methods

```javascript
console.log("Basic output");
console.error("Error message");    // Red in console
console.warn("Warning message");   // Yellow in console
console.table([{a: 1}, {a: 2}]);   // Nice table format
```

### Common Error Types

| Error | Cause |
|-------|-------|
| `ReferenceError` | Variable not defined |
| `TypeError` | Wrong type operation (e.g., `null.toString()`) |
| `SyntaxError` | Invalid code syntax |

### Debugging Tips

1. Read the error message — it tells you line number
2. `console.log()` values at each step
3. Check types with `typeof variable`
4. Comment out code until it works

---

## Expense Tracker Functions

### Add Expense

```javascript
let expenses = [];
let nextId = 1;

function addExpense(description, amount, category) {
  const expense = {
    id: nextId,
    description: description,
    amount: amount,
    category: category,
    date: new Date().toISOString()
  };
  expenses.push(expense);
  nextId++;
  return expense;
}
```

### Delete Expense

```javascript
function deleteExpense(id) {
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id === id) {
      expenses.splice(i, 1);
      return true;
    }
  }
  return false;
}
```

### Filter by Category

```javascript
function filterByCategory(category) {
  const filtered = [];
  for (const expense of expenses) {
    if (expense.category === category) {
      filtered.push(expense);
    }
  }
  return filtered;
}
```

### Calculate Total

```javascript
function calculateTotal() {
  let total = 0;
  for (const expense of expenses) {
    total = total + expense.amount;
  }
  return total;
}
```

---

## Common Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| `const copy = original` | Creates reference | `const copy = [...original]` |
| `user.first-name` | Interpreted as subtraction | `user["first-name"]` |
| `for (var i...)` with setTimeout | var is function-scoped | Use `let` |
| `i <= arr.length` | Off by one | `i < arr.length` |

---

## Practice Questions

1. How do you add an item to the end of an array?
2. What's the difference between `slice()` and `splice()`?
3. How do you access a property called "my-value" on an object?
4. What's the difference between `for...of` and `for...in`?
5. How do you create a true copy of an array?
