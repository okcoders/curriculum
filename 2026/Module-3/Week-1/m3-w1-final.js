// ============================================
// MODULE 3, WEEK 1: FINAL PRODUCT
// Express REST API (In-Memory Storage)
// ============================================

const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());


// ---- IN-MEMORY DATA STORAGE ----
let expenses = [];
let nextId = 1;


// ---- HELPER FUNCTIONS ----

function validateExpense(description, amount, category) {
  if (!description || description.trim() === "") {
    return "Description is required";
  }
  if (!amount || amount <= 0) {
    return "Amount must be greater than 0";
  }
  if (!category || category.trim() === "") {
    return "Category is required";
  }
  return null; // null means valid
}


// ---- ROUTES ----

// GET /api/expenses - Get all expenses
app.get("/api/expenses", (req, res) => {
  // Optional: filter by category via query param
  const category = req.query.category;
  
  if (category) {
    const filtered = expenses.filter(e => 
      e.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filtered);
  }
  
  res.json(expenses);
});


// GET /api/expenses/summary - Get spending summary
// NOTE: This MUST come before /api/expenses/:id
app.get("/api/expenses/summary", (req, res) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const count = expenses.length;
  const average = count > 0 ? total / count : 0;
  
  // Group by category
  const byCategory = {};
  for (const expense of expenses) {
    if (byCategory[expense.category]) {
      byCategory[expense.category] += expense.amount;
    } else {
      byCategory[expense.category] = expense.amount;
    }
  }
  
  res.json({
    total: total,
    count: count,
    average: Math.round(average * 100) / 100,
    byCategory: byCategory
  });
});


// GET /api/expenses/:id - Get single expense
app.get("/api/expenses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const expense = expenses.find(e => e.id === id);
  
  if (!expense) {
    return res.status(404).json({ error: "Expense not found" });
  }
  
  res.json(expense);
});


// POST /api/expenses - Create new expense
app.post("/api/expenses", (req, res) => {
  const { description, amount, category } = req.body;
  
  // Validate
  const error = validateExpense(description, amount, category);
  if (error) {
    return res.status(400).json({ error: error });
  }
  
  // Create expense
  const expense = {
    id: nextId,
    description: description.trim(),
    amount: parseFloat(amount),
    category: category.trim(),
    date: new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString()
  };
  
  expenses.push(expense);
  nextId++;
  
  res.status(201).json(expense);
});


// PUT /api/expenses/:id - Update expense
app.put("/api/expenses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const expense = expenses.find(e => e.id === id);
  
  if (!expense) {
    return res.status(404).json({ error: "Expense not found" });
  }
  
  const { description, amount, category } = req.body;
  
  // Update only provided fields
  if (description !== undefined) {
    if (description.trim() === "") {
      return res.status(400).json({ error: "Description cannot be empty" });
    }
    expense.description = description.trim();
  }
  
  if (amount !== undefined) {
    if (amount <= 0) {
      return res.status(400).json({ error: "Amount must be greater than 0" });
    }
    expense.amount = parseFloat(amount);
  }
  
  if (category !== undefined) {
    if (category.trim() === "") {
      return res.status(400).json({ error: "Category cannot be empty" });
    }
    expense.category = category.trim();
  }
  
  expense.updatedAt = new Date().toISOString();
  
  res.json(expense);
});


// DELETE /api/expenses/:id - Delete expense
app.delete("/api/expenses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = expenses.findIndex(e => e.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: "Expense not found" });
  }
  
  expenses.splice(index, 1);
  res.status(204).send();
});


// ---- START SERVER ----
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Test it: curl http://localhost:${PORT}/api/expenses`);
});


// ============================================
// CURL TEST COMMANDS:
// ============================================
// 
// Get all expenses:
// curl http://localhost:3000/api/expenses
//
// Get summary:
// curl http://localhost:3000/api/expenses/summary
//
// Get by category:
// curl "http://localhost:3000/api/expenses?category=Food"
//
// Get single expense:
// curl http://localhost:3000/api/expenses/1
//
// Create expense:
// curl -X POST http://localhost:3000/api/expenses \
//   -H "Content-Type: application/json" \
//   -d '{"description":"Coffee","amount":4.50,"category":"Food"}'
//
// Update expense:
// curl -X PUT http://localhost:3000/api/expenses/1 \
//   -H "Content-Type: application/json" \
//   -d '{"amount":5.00}'
//
// Delete expense:
// curl -X DELETE http://localhost:3000/api/expenses/1
