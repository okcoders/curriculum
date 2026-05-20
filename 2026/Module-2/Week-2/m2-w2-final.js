// ============================================
// MODULE 2, WEEK 2: FINAL PRODUCT
// Expense Calculation & Validation Functions
// ============================================

// ---- FORMATTING FUNCTIONS ----

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


// ---- VALIDATION FUNCTIONS ----

function validateExpense(description, amount, category) {
  if (!description) {
    return "Description is required";
  }
  if (description.length < 2) {
    return "Description must be at least 2 characters";
  }
  if (!amount || amount <= 0) {
    return "Amount must be greater than 0";
  }
  if (amount > 10000) {
    return "Amount cannot exceed $10,000";
  }
  if (!category) {
    return "Category is required";
  }
  return "Valid";
}


// ---- CALCULATION FUNCTIONS ----

function calculateTotal(amount1, amount2, amount3, amount4) {
  // Handle missing values with default of 0
  const a1 = amount1 || 0;
  const a2 = amount2 || 0;
  const a3 = amount3 || 0;
  const a4 = amount4 || 0;
  
  return a1 + a2 + a3 + a4;
}

function calculateAverage(amount1, amount2, amount3, amount4) {
  const total = calculateTotal(amount1, amount2, amount3, amount4);
  
  // Count how many values were provided
  let count = 0;
  if (amount1) count++;
  if (amount2) count++;
  if (amount3) count++;
  if (amount4) count++;
  
  if (count === 0) return 0;
  return total / count;
}


// ---- BUDGET FUNCTIONS ----

function getBudgetStatus(spent, budget) {
  if (spent > budget) {
    return "over";
  } else if (spent >= budget * 0.9) {
    return "warning";
  } else {
    return "under";
  }
}

function formatBudgetStatus(status) {
  switch (status) {
    case "over":
      return "🚨 Over budget!";
    case "warning":
      return "⚠️ Approaching limit";
    case "under":
      return "✅ Under budget";
    default:
      return "Unknown status";
  }
}

function getBudgetRemaining(spent, budget) {
  const remaining = budget - spent;
  if (remaining < 0) {
    return "Over by " + formatCurrency(Math.abs(remaining));
  }
  return formatCurrency(remaining) + " remaining";
}


// ---- DISPLAY FUNCTIONS ----

function buildDisplayString(description, amount, category, date) {
  const emoji = getCategoryEmoji(category);
  const currency = formatCurrency(amount);
  const formattedDate = formatDate(date);
  
  return `${emoji} ${description} - ${currency} (${category}) on ${formattedDate}`;
}


// ============================================
// TEST THE FUNCTIONS
// ============================================

console.log("=== TESTING VALIDATION ===");
console.log(validateExpense("Coffee", 5, "Food"));        // "Valid"
console.log(validateExpense("", 5, "Food"));              // "Description is required"
console.log(validateExpense("A", 5, "Food"));             // "Description must be at least 2 characters"
console.log(validateExpense("Coffee", -5, "Food"));       // "Amount must be greater than 0"
console.log(validateExpense("Coffee", 15000, "Food"));    // "Amount cannot exceed $10,000"
console.log(validateExpense("Coffee", 5, ""));            // "Category is required"
console.log("");

console.log("=== TESTING CALCULATIONS ===");
console.log("Total:", formatCurrency(calculateTotal(5, 15, 10, 20)));   // $50.00
console.log("Average:", formatCurrency(calculateAverage(5, 15, 10, 20))); // $12.50
console.log("");

console.log("=== TESTING BUDGET STATUS ===");
const budget = 500;

console.log("Spent $300 of $500:");
const status1 = getBudgetStatus(300, budget);
console.log("  Status:", formatBudgetStatus(status1));
console.log("  Remaining:", getBudgetRemaining(300, budget));
console.log("");

console.log("Spent $480 of $500:");
const status2 = getBudgetStatus(480, budget);
console.log("  Status:", formatBudgetStatus(status2));
console.log("  Remaining:", getBudgetRemaining(480, budget));
console.log("");

console.log("Spent $600 of $500:");
const status3 = getBudgetStatus(600, budget);
console.log("  Status:", formatBudgetStatus(status3));
console.log("  Remaining:", getBudgetRemaining(600, budget));
console.log("");

console.log("=== SAMPLE EXPENSES ===");
console.log(buildDisplayString("Coffee", 4.50, "Food", "2024-01-15"));
console.log(buildDisplayString("Gas", 45.00, "Transport", "2024-01-15"));
console.log(buildDisplayString("Netflix", 15.99, "Entertainment", "2024-01-16"));
