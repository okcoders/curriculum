# Module 2, Week 4: Higher Order Functions and DOM Manipulation

---

## Higher Order Functions

Functions that take other functions as arguments.

### forEach

Runs a function for each element (no return value):

```javascript
const numbers = [1, 2, 3];

numbers.forEach(num => console.log(num));
// 1
// 2
// 3
```

### map

Creates a **new array** by transforming each element:

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
// [2, 4, 6]

const expenses = [{ amount: 5 }, { amount: 15 }];
const amounts = expenses.map(exp => exp.amount);
// [5, 15]
```

### filter

Creates a **new array** with elements that pass a test:

```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4]

const expenses = [
  { category: "Food", amount: 5 },
  { category: "Transport", amount: 20 }
];
const foodOnly = expenses.filter(exp => exp.category === "Food");
// [{ category: "Food", amount: 5 }]
```

### reduce

Reduces an array to a **single value**:

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
// 15

const expenses = [{ amount: 5 }, { amount: 15 }];
const total = expenses.reduce((acc, exp) => acc + exp.amount, 0);
// 20
```

### find and findIndex

```javascript
const expenses = [
  { id: 1, description: "Coffee" },
  { id: 2, description: "Lunch" }
];

expenses.find(exp => exp.id === 2);
// { id: 2, description: "Lunch" }

expenses.findIndex(exp => exp.id === 2);
// 1
```

### Method Chaining

```javascript
const foodTotal = expenses
  .filter(exp => exp.category === "Food")
  .map(exp => exp.amount)
  .reduce((acc, amount) => acc + amount, 0);
```

---

## DOM Manipulation

### Selecting Elements

```javascript
// By ID
const header = document.getElementById("header");

// By CSS selector (first match)
const button = document.querySelector(".submit-btn");

// All matches (returns NodeList)
const items = document.querySelectorAll(".item");
```

### Modifying Elements

```javascript
const element = document.querySelector("#myElement");

// Text content
element.textContent = "Hello World";

// HTML content
element.innerHTML = "<strong>Bold</strong>";

// Classes
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");  // true/false

// Styles
element.style.backgroundColor = "blue";
element.style.display = "none";

// Attributes
element.setAttribute("data-id", "123");
element.getAttribute("data-id");
```

### Creating Elements

```javascript
const div = document.createElement("div");
div.textContent = "New content";
div.classList.add("item");

document.body.appendChild(div);  // Add to page
element.remove();                 // Remove from page
```

---

## Events

### Adding Event Listeners

```javascript
const button = document.querySelector("#myButton");

button.addEventListener("click", function() {
  console.log("Clicked!");
});

// Arrow function
button.addEventListener("click", () => {
  console.log("Clicked!");
});
```

### Common Events

| Event | Trigger |
|-------|---------|
| `click` | Element clicked |
| `submit` | Form submitted |
| `input` | Input value changes |
| `change` | Input loses focus after change |

### The Event Object

```javascript
button.addEventListener("click", function(event) {
  event.target           // Element that was clicked
  event.preventDefault() // Stop default behavior
});
```

### Form Handling

```javascript
const form = document.querySelector("#expense-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();  // Stop page refresh!
  
  const description = document.querySelector("#description").value;
  const amount = parseFloat(document.querySelector("#amount").value);
  
  console.log({ description, amount });
  form.reset();
});
```

### Event Delegation

One listener on parent instead of many on children:

```javascript
// ✅ Event delegation
document.querySelector("#expense-list").addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    const id = event.target.getAttribute("data-id");
    deleteExpense(Number(id));
  }
});
```

---

## localStorage

Store data that persists after refresh:

```javascript
// Save (must be string)
localStorage.setItem("expenses", JSON.stringify(expenses));

// Load
const saved = localStorage.getItem("expenses");
const expenses = saved ? JSON.parse(saved) : [];

// Remove
localStorage.removeItem("expenses");
```

---

## Expense Tracker UI

### Render Expense List

```javascript
function renderExpenses(expenses) {
  const container = document.querySelector("#expense-list");
  container.innerHTML = "";
  
  expenses.forEach(expense => {
    const div = document.createElement("div");
    div.classList.add("expense-item");
    div.innerHTML = `
      <span>${expense.description}</span>
      <span>$${expense.amount.toFixed(2)}</span>
      <button class="delete-btn" data-id="${expense.id}">Delete</button>
    `;
    container.appendChild(div);
  });
}
```

### Form Submit Handler

```javascript
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const expense = {
    id: nextId++,
    description: document.querySelector("#description").value,
    amount: parseFloat(document.querySelector("#amount").value),
    category: document.querySelector("#category").value
  };
  
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses(expenses);
  form.reset();
});
```

### Delete with Event Delegation

```javascript
document.querySelector("#expense-list").addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.getAttribute("data-id"));
    expenses = expenses.filter(exp => exp.id !== id);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses(expenses);
  }
});
```

---

## Common Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| `addEventListener("click", handleClick())` | Calls function immediately | Remove `()`: `handleClick` |
| `numbers.map(n => { n * 2 })` | No return | Add return or remove braces |
| Form refreshes page | Missing preventDefault | `event.preventDefault()` |
| `element.remove` | Missing parentheses | `element.remove()` |

---

## Practice Questions

1. What's the difference between `map()` and `forEach()`?
2. How do you sum all numbers in an array using `reduce()`?
3. What's event delegation and why use it?
4. How do you stop a form from refreshing the page?
5. How do you store an array in localStorage?
