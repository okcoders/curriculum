// ============================================
// MODULE 3, WEEK 4: FINAL PRODUCT
// Express API with Supabase + Currency API
// Ready for Vercel Deployment
// ============================================

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

// ---- CORS CONFIGURATION ----
// Update these URLs for your deployment
const allowedOrigins = [
  "http://localhost:5500",
  "http://127.0.0.1:5500",
  "http://localhost:3001",
  // Add your production frontend URL here:
  // "https://your-frontend.vercel.app"
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.use(express.json());


// ---- SUPABASE CLIENT ----
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);


// ---- EXPENSE ROUTES ----

// GET /api/expenses
app.get("/api/expenses", async (req, res) => {
  try {
    let query = supabase
      .from("expenses")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (req.query.category) {
      query = query.eq("category", req.query.category);
    }
    
    const { data, error } = await query;
    
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// GET /api/expenses/summary
app.get("/api/expenses/summary", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("expenses")
      .select("amount, category");
    
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    
    const total = data.reduce((sum, e) => sum + parseFloat(e.amount), 0);
    const count = data.length;
    
    const byCategory = {};
    for (const expense of data) {
      const cat = expense.category;
      byCategory[cat] = (byCategory[cat] || 0) + parseFloat(expense.amount);
    }
    
    res.json({ total, count, byCategory });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// GET /api/expenses/:id
app.get("/api/expenses/:id", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("expenses")
      .select("*")
      .eq("id", req.params.id)
      .single();
    
    if (error) {
      return res.status(404).json({ error: "Expense not found" });
    }
    
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// POST /api/expenses
app.post("/api/expenses", async (req, res) => {
  try {
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
    
    const { data, error } = await supabase
      .from("expenses")
      .insert({
        description: description.trim(),
        amount: parseFloat(amount),
        category: category.trim(),
        date: new Date().toISOString().split('T')[0]
      })
      .select()
      .single();
    
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// PUT /api/expenses/:id
app.put("/api/expenses/:id", async (req, res) => {
  try {
    const { description, amount, category } = req.body;
    
    const updates = {};
    if (description !== undefined) updates.description = description.trim();
    if (amount !== undefined) updates.amount = parseFloat(amount);
    if (category !== undefined) updates.category = category.trim();
    
    const { data, error } = await supabase
      .from("expenses")
      .update(updates)
      .eq("id", req.params.id)
      .select()
      .single();
    
    if (error) {
      return res.status(404).json({ error: "Expense not found" });
    }
    
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// DELETE /api/expenses/:id
app.delete("/api/expenses/:id", async (req, res) => {
  try {
    const { error } = await supabase
      .from("expenses")
      .delete()
      .eq("id", req.params.id);
    
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// ---- CURRENCY API ROUTES ----

// GET /api/currency/:from/:to - Get exchange rate
app.get("/api/currency/:from/:to", async (req, res) => {
  try {
    const { from, to } = req.params;
    const url = `https://api.frankfurter.app/latest?from=${from}&to=${to}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      return res.status(400).json({ error: "Invalid currency code" });
    }
    
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch exchange rate" });
  }
});


// GET /api/currency/convert - Convert amount
app.get("/api/currency/convert", async (req, res) => {
  try {
    const { from, to, amount } = req.query;
    
    if (!from || !to || !amount) {
      return res.status(400).json({ 
        error: "Missing required params: from, to, amount" 
      });
    }
    
    const url = `https://api.frankfurter.app/latest?from=${from}&to=${to}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      return res.status(400).json({ error: "Invalid currency code" });
    }
    
    const data = await response.json();
    const rate = data.rates[to];
    const converted = parseFloat(amount) * rate;
    
    res.json({
      from,
      to,
      amount: parseFloat(amount),
      rate,
      converted: Math.round(converted * 100) / 100
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to convert currency" });
  }
});


// GET /api/currency/rates - Get all rates from USD
app.get("/api/currency/rates", async (req, res) => {
  try {
    const base = req.query.base || "USD";
    const url = `https://api.frankfurter.app/latest?from=${base}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch rates" });
  }
});


// ---- HEALTH CHECK ----
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || "development"
  });
});


// ---- START SERVER ----
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});


// Export for Vercel
module.exports = app;
