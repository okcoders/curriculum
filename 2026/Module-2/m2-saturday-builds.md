# Module 2: Saturday Build Outlines

---

## Week 1 Saturday: Data Model & Formatting

### Setup (do together)
1. Create project folder: `expense-tracker`
2. Create `index.html` with basic structure
3. Create `app.js` and link it
4. Open in browser, confirm console works

### Build Tasks

**Task 1: Define expense variables**
```javascript
// Create variables for a single expense
const description = "Coffee";
const amount = 4.50;
const category = "Food";
const date = "2024-01-15";
```

**Task 2: Format currency**
```javascript
// Turn amount into a currency string like "$4.50"
const currencyString = "$" + amount.toFixed(2);
console.log(currencyString);
```

**Task 3: Format date**
```javascript
// Turn date string into readable format
const dateObj = new Date(date);
const formattedDate = dateObj.toLocaleDateString();
console.log(formattedDate);
```

**Task 4: Build display string**
```javascript
// Combine into one display string using template literal
const display = `${description} - ${currencyString} (${category}) on ${formattedDate}`;
console.log(display);
// "Coffee - $4.50 (Food) on 1/15/2024"
```

**Task 5: Create multiple expenses**
```javascript
// Create 3-4 more expense variables
const description2 = "Gas";
const amount2 = 45.00;
// ... etc

// Build display strings for each
```

### Stretch Goals
- Add category emoji based on category string (use if/else next week, for now just hardcode)
- Experiment with different string methods on description

---

## Week 2 Saturday: Calculation Functions

### Review from Week 1
- We have expense variables and can format them
- Now we need functions to calculate and validate

### Build Tasks

**Task 1: Create formatCurrency function**
```javascript
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

// Test it
console.log(formatCurrency(4.5));   // "$4.50"
console.log(formatCurrency(100));   // "$100.00"
```

**Task 2: Create calculateTotal function**
```javascript
// For now, just pass in individual amounts
function calculateTotal(amount1, amount2, amount3) {
  const total = amount1 + amount2 + amount3;
  return total;
}

// Test it
console.log(calculateTotal(5, 15, 10));  // 30
```

**Task 3: Create validateExpense function**
```javascript
function validateExpense(description, amount, category) {
  // Check description exists
  if (!description) {
    return "Description is required";
  }
  
  // Check amount is valid
  if (!amount || amount <= 0) {
    return "Amount must be greater than 0";
  }
  
  // Check category exists
  if (!category) {
    return "Category is required";
  }
  
  return "Valid";
}

// Test it
console.log(validateExpense("Coffee", 5, "Food"));  // "Valid"
console.log(validateExpense("", 5, "Food"));        // "Description is required"
console.log(validateExpense("Coffee", -5, "Food")); // "Amount must be greater than 0"
```

**Task 4: Create getBudgetStatus function**
```javascript
function getBudgetStatus(spent, budget) {
  if (spent > budget) {
    return "over";
  } else if (spent >= budget * 0.9) {
    return "warning";
  } else {
    return "under";
  }
}

// Test it
console.log(getBudgetStatus(50, 100));   // "under"
console.log(getBudgetStatus(95, 100));   // "warning"
console.log(getBudgetStatus(150, 100));  // "over"
```

**Task 5: Create getCategoryEmoji function**
```javascript
function getCategoryEmoji(category) {
  switch (category.toLowerCase()) {
    case "food":
      return "🍔";
    case "transport":
      return "🚗";
    case "entertainment":
      return "🎬";
    case "utilities":
      return "💡";
    default:
      return "📦";
  }
}

// Test it
console.log(getCategoryEmoji("Food"));       // "🍔"
console.log(getCategoryEmoji("transport"));  // "🚗"
console.log(getCategoryEmoji("random"));     // "📦"
```

### Stretch Goals
- Create formatStatus function that returns emoji + text based on budget status
- Create a function that builds the full display string (combining previous functions)

---

## Week 3 Saturday: Data Management (Arrays & Objects)

### Review from Week 2
- We have formatting and calculation functions
- Now we need to store and manage multiple expenses

### Build Tasks

**Task 1: Create expense objects**
```javascript
const expense1 = {
  id: 1,
  description: "Coffee",
  amount: 4.50,
  category: "Food",
  date: "2024-01-15"
};

const expense2 = {
  id: 2,
  description: "Gas",
  amount: 45.00,
  category: "Transport",
  date: "2024-01-15"
};

// Access properties
console.log(expense1.description);  // "Coffee"
console.log(expense1.amount);       // 4.50
```

**Task 2: Create expenses array**
```javascript
let expenses = [expense1, expense2];
let nextId = 3;

console.log(expenses.length);  // 2
console.log(expenses[0]);      // First expense object
```

**Task 3: Create addExpense function**
```javascript
function addExpense(description, amount, category) {
  const expense = {
    id: nextId,
    description: description,
    amount: amount,
    category: category,
    date: new Date().toISOString().split('T')[0]
  };
  
  expenses.push(expense);
  nextId++;
  
  return expense;
}

// Test it
const newExpense = addExpense("Lunch", 12.50, "Food");
console.log(newExpense);
console.log(expenses.length);  // 3
```

**Task 4: Create deleteExpense function**
```javascript
function deleteExpense(id) {
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id === id) {
      expenses.splice(i, 1);
      return true;
    }
  }
  return false;  // Not found
}

// Test it
console.log(deleteExpense(1));     // true
console.log(expenses.length);      // 2
console.log(deleteExpense(999));   // false (doesn't exist)
```

**Task 5: Create filterByCategory function**
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

// Test it
const foodExpenses = filterByCategory("Food");
console.log(foodExpenses);
```

**Task 6: Create calculateTotal function (updated for array)**
```javascript
function calculateTotal() {
  let total = 0;
  
  for (const expense of expenses) {
    total = total + expense.amount;
  }
  
  return total;
}

// Test it
console.log(calculateTotal());
console.log(formatCurrency(calculateTotal()));
```

### Stretch Goals
- Create sortExpenses function (by amount or date)
- Create editExpense function
- Create calculateByCategory function that returns totals per category

---

## Week 4 Saturday: Interactive UI

### Review from Week 3
- We have expense objects in an array
- We have CRUD functions
- Now we need to display in the browser and handle user input

### HTML Setup (do together)
```html
<!DOCTYPE html>
<html>
<head>
  <title>Expense Tracker</title>
  <style>
    .expense-item { padding: 10px; border-bottom: 1px solid #ccc; }
    .delete-btn { color: red; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Expense Tracker</h1>
  
  <form id="expense-form">
    <input type="text" id="description" placeholder="Description" required>
    <input type="number" id="amount" placeholder="Amount" step="0.01" required>
    <select id="category">
      <option value="Food">Food</option>
      <option value="Transport">Transport</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Utilities">Utilities</option>
      <option value="Other">Other</option>
    </select>
    <button type="submit">Add Expense</button>
  </form>
  
  <h2>Total: <span id="total">$0.00</span></h2>
  
  <div id="expense-list"></div>
  
  <script src="app.js"></script>
</body>
</html>
```

### Build Tasks

**Task 1: Create renderExpenses function**
```javascript
function renderExpenses() {
  const container = document.querySelector("#expense-list");
  container.innerHTML = "";  // Clear existing
  
  for (const expense of expenses) {
    const div = document.createElement("div");
    div.classList.add("expense-item");
    
    div.innerHTML = `
      <span>${getCategoryEmoji(expense.category)} ${expense.description}</span>
      <span>${formatCurrency(expense.amount)}</span>
      <span class="delete-btn" data-id="${expense.id}">❌</span>
    `;
    
    container.appendChild(div);
  }
  
  // Update total
  document.querySelector("#total").textContent = formatCurrency(calculateTotal());
}

// Test it
renderExpenses();
```

**Task 2: Handle form submit**
```javascript
const form = document.querySelector("#expense-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();  // Stop page refresh!
  
  const description = document.querySelector("#description").value;
  const amount = parseFloat(document.querySelector("#amount").value);
  const category = document.querySelector("#category").value;
  
  // Validate
  const validation = validateExpense(description, amount, category);
  if (validation !== "Valid") {
    alert(validation);
    return;
  }
  
  // Add expense
  addExpense(description, amount, category);
  
  // Re-render
  renderExpenses();
  
  // Clear form
  form.reset();
});
```

**Task 3: Handle delete clicks (event delegation)**
```javascript
document.querySelector("#expense-list").addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.getAttribute("data-id"));
    deleteExpense(id);
    renderExpenses();
  }
});
```

**Task 4: Add localStorage persistence**
```javascript
// Save function
function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
  localStorage.setItem("nextId", nextId.toString());
}

// Load function
function loadExpenses() {
  const saved = localStorage.getItem("expenses");
  if (saved) {
    expenses = JSON.parse(saved);
  }
  
  const savedId = localStorage.getItem("nextId");
  if (savedId) {
    nextId = parseInt(savedId);
  }
}

// Call saveExpenses() after any change (in addExpense, deleteExpense)
// Call loadExpenses() on page load

loadExpenses();
renderExpenses();
```

**Task 5: Update addExpense and deleteExpense to save**
```javascript
function addExpense(description, amount, category) {
  const expense = {
    id: nextId,
    description: description,
    amount: amount,
    category: category,
    date: new Date().toISOString().split('T')[0]
  };
  
  expenses.push(expense);
  nextId++;
  saveExpenses();  // ADD THIS
  
  return expense;
}

function deleteExpense(id) {
  const originalLength = expenses.length;
  expenses = expenses.filter(exp => exp.id !== id);
  saveExpenses();  // ADD THIS
  return expenses.length < originalLength;
}
```

### Stretch Goals
- Add filter dropdown to show only certain categories
- Add sort buttons (by amount, by date)
- Add edit functionality
- Style it to look nice

---

## End of Module 2

Students should have a working Expense Tracker with:
- ✅ Add expenses via form
- ✅ Display expense list
- ✅ Delete expenses
- ✅ Show running total
- ✅ Data persists in localStorage
- ✅ Validation on inputs

Ready for Module 3: Adding a backend!
