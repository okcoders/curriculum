// ============================================
// MODULE 2, WEEK 1: FINAL PRODUCT
// Expense Data Model & Formatting (Console Only)
// ============================================

// ---- EXPENSE DATA ----
const expense1 = {
  description: "Coffee",
  amount: 4.50,
  category: "Food",
  date: "2024-01-15"
};

const expense2 = {
  description: "Gas",
  amount: 45.00,
  category: "Transport",
  date: "2024-01-15"
};

const expense3 = {
  description: "Netflix",
  amount: 15.99,
  category: "Entertainment",
  date: "2024-01-16"
};

const expense4 = {
  description: "Electric Bill",
  amount: 120.00,
  category: "Utilities",
  date: "2024-01-17"
};


// ---- FORMATTING HELPERS ----

// Format amount as currency string
function formatAsCurrency(amount) {
  return "$" + amount.toFixed(2);
}

// Format date as readable string
function formatDate(dateString) {
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString();
}

// Get emoji for category
function getCategoryEmoji(category) {
  if (category === "Food") {
    return "🍔";
  } else if (category === "Transport") {
    return "🚗";
  } else if (category === "Entertainment") {
    return "🎬";
  } else if (category === "Utilities") {
    return "💡";
  } else {
    return "📦";
  }
}

// Build full display string for an expense
function buildDisplayString(description, amount, category, date) {
  const emoji = getCategoryEmoji(category);
  const currency = formatAsCurrency(amount);
  const formattedDate = formatDate(date);
  
  return `${emoji} ${description} - ${currency} (${category}) on ${formattedDate}`;
}


// ---- DISPLAY ALL EXPENSES ----

console.log("=== EXPENSE TRACKER ===");
console.log("");

console.log(buildDisplayString(
  expense1.description,
  expense1.amount,
  expense1.category,
  expense1.date
));

console.log(buildDisplayString(
  expense2.description,
  expense2.amount,
  expense2.category,
  expense2.date
));

console.log(buildDisplayString(
  expense3.description,
  expense3.amount,
  expense3.category,
  expense3.date
));

console.log(buildDisplayString(
  expense4.description,
  expense4.amount,
  expense4.category,
  expense4.date
));

console.log("");

// Calculate and display total
const total = expense1.amount + expense2.amount + expense3.amount + expense4.amount;
console.log("Total: " + formatAsCurrency(total));


//get elements
// const dateOne = document.getElementById('dateOne');
// dateOne.innerText = expense1.date;
