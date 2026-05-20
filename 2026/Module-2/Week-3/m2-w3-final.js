// ============================================
// MODULE 2, WEEK 3: FINAL PRODUCT
// Expense Data Management (Arrays & Objects)
// ============================================

// ---- DATA STORAGE ----
let expenses = [];
let nextId = 1;


// ---- FORMATTING FUNCTIONS (from Week 2) ----

function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

function formatDate(dateString) {
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString();
}

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


// ---- VALIDATION FUNCTION (from Week 2) ----

function validateExpense(description, amount, category) {
  if (!description) {
    return "Description is required";
  }
  if (!amount || amount <= 0) {
    return "Amount must be greater than 0";
  }
  if (!category) {
    return "Category is required";
  }
  return "Valid";
}


// ---- CRUD FUNCTIONS ----

// CREATE: Add new expense
function addExpense(description, amount, category) {
  // Validate first
  const validation = validateExpense(description, amount, category);
  if (validation !== "Valid") {
    console.log("Error:", validation);
    return null;
  }
  
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

// READ: Get all expenses
function getAllExpenses() {
  return expenses;
}

// READ: Get expense by ID
function getExpenseById(id) {
  for (const expense of expenses) {
    if (expense.id === id) {
      return expense;
    }
  }
  return null;
}

// UPDATE: Edit an expense
function updateExpense(id, description, amount, category) {
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id === id) {
      if (description) expenses[i].description = description;
      if (amount) expenses[i].amount = amount;
      if (category) expenses[i].category = category;
      return expenses[i];
    }
  }
  return null;
}

// DELETE: Remove an expense
function deleteExpense(id) {
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id === id) {
      expenses.splice(i, 1);
      return true;
    }
  }
  return false;
}


// ---- FILTER & SEARCH FUNCTIONS ----

function filterByCategory(category) {
  const filtered = [];
  for (const expense of expenses) {
    if (expense.category.toLowerCase() === category.toLowerCase()) {
      filtered.push(expense);
    }
  }
  return filtered;
}

function searchByDescription(searchTerm) {
  const results = [];
  for (const expense of expenses) {
    if (expense.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      results.push(expense);
    }
  }
  return results;
}


// ---- CALCULATION FUNCTIONS ----

function calculateTotal() {
  let total = 0;
  for (const expense of expenses) {
    total = total + expense.amount;
  }
  return total;
}

function calculateTotalByCategory(category) {
  let total = 0;
  const filtered = filterByCategory(category);
  for (const expense of filtered) {
    total = total + expense.amount;
  }
  return total;
}

function getCategoryBreakdown() {
  const breakdown = {};
  
  for (const expense of expenses) {
    const cat = expense.category;
    if (breakdown[cat]) {
      breakdown[cat] = breakdown[cat] + expense.amount;
    } else {
      breakdown[cat] = expense.amount;
    }
  }
  
  return breakdown;
}


// ---- DISPLAY FUNCTIONS ----

function displayExpense(expense) {
  const emoji = getCategoryEmoji(expense.category);
  const currency = formatCurrency(expense.amount);
  const date = formatDate(expense.date);
  
  console.log(`[${expense.id}] ${emoji} ${expense.description} - ${currency} (${expense.category}) on ${date}`);
}

function displayAllExpenses() {
  console.log("=== ALL EXPENSES ===");
  if (expenses.length === 0) {
    console.log("No expenses yet.");
    return;
  }
  
  for (const expense of expenses) {
    displayExpense(expense);
  }
  
  console.log("---");
  console.log("Total:", formatCurrency(calculateTotal()));
  console.log("");
}


// ============================================
// TEST THE SYSTEM
// ============================================

console.log("=== ADDING EXPENSES ===");
addExpense("Coffee", 4.50, "Food");
addExpense("Gas", 45.00, "Transport");
addExpense("Netflix", 15.99, "Entertainment");
addExpense("Lunch", 12.50, "Food");
addExpense("Electric Bill", 120.00, "Utilities");
addExpense("Uber", 22.00, "Transport");
console.log("");

displayAllExpenses();

console.log("=== FILTER BY CATEGORY: Food ===");
const foodExpenses = filterByCategory("Food");
for (const exp of foodExpenses) {
  displayExpense(exp);
}
console.log("Food Total:", formatCurrency(calculateTotalByCategory("Food")));
console.log("");

console.log("=== SEARCH: 'gas' ===");
const searchResults = searchByDescription("gas");
for (const exp of searchResults) {
  displayExpense(exp);
}
console.log("");

console.log("=== CATEGORY BREAKDOWN ===");
const breakdown = getCategoryBreakdown();
for (const cat in breakdown) {
  console.log(`${getCategoryEmoji(cat)} ${cat}: ${formatCurrency(breakdown[cat])}`);
}
console.log("");

console.log("=== UPDATE EXPENSE ===");
console.log("Before update:");
displayExpense(getExpenseById(1));
updateExpense(1, "Large Coffee", 5.50);
console.log("After update:");
displayExpense(getExpenseById(1));
console.log("");

console.log("=== DELETE EXPENSE ===");
console.log("Deleting expense #3 (Netflix)...");
deleteExpense(3);
displayAllExpenses();
