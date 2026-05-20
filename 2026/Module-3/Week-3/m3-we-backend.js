// ============================================
// MODULE 3, WEEK 2: FINAL PRODUCT
// Express API with CORS + Frontend Fetch
// ============================================

const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// ---- IN-MEMORY DATA STORAGE ----
let expenses = [];
let nextId = 1;


// ---- ROUTES ----

app.get("/api/expenses", (req, res) => {
  const category = req.query.category;
  
  if (category) {
    const filtered = expenses.filter(e => 
      e.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filtered);
  }
  
  res.json(expenses);
});

app.get("/api/expenses/summary", (req, res) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const count = expenses.length;
  
  const byCategory = {};
  for (const expense of expenses) {
    if (byCategory[expense.category]) {
      byCategory[expense.category] += expense.amount;
    } else {
      byCategory[expense.category] = expense.amount;
    }
  }
  
  res.json({ total, count, byCategory });
});

app.get("/api/expenses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const expense = expenses.find(e => e.id === id);
  
  if (!expense) {
    return res.status(404).json({ error: "Expense not found" });
  }
  
  res.json(expense);
});

app.post("/api/expenses", (req, res) => {
  const { description, amount, category } = req.body;
  
  if (!description) {
    return res.status(400).json({ error: "Description is required" });
  }
  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Amount must be greater than 0" });
  }
  if (!category) {
    return res.status(400).json({ error: "Category is required" });
  }
  
  const expense = {
    id: nextId++,
    description,
    amount: parseFloat(amount),
    category,
    date: new Date().toISOString().split('T')[0]
  };
  
  expenses.push(expense);
  res.status(201).json(expense);
});

app.put("/api/expenses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const expense = expenses.find(e => e.id === id);
  
  if (!expense) {
    return res.status(404).json({ error: "Expense not found" });
  }
  
  const { description, amount, category } = req.body;
  
  if (description) expense.description = description;
  if (amount) expense.amount = parseFloat(amount);
  if (category) expense.category = category;
  
  res.json(expense);
});

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
});
