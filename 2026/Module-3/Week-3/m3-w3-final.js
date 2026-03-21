// ============================================
// MODULE 3, WEEK 3: FINAL PRODUCT
// Express API with Supabase Database
// ============================================

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// ---- SUPABASE CLIENT ----
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);


// ---- ROUTES ----

// GET /api/expenses - Get all expenses
app.get("/api/expenses", async (req, res) => {
  try {
    let query = supabase
      .from("expenses")
      .select("*")
      .order("created_at", { ascending: false });
    
    // Optional category filter
    const category = req.query.category;
    if (category) {
      query = query.eq("category", category);
    }
    
    const { data, error } = await query;
    
    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: error.message });
    }
    
    res.json(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


// GET /api/expenses/summary - Get spending summary
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
      if (byCategory[expense.category]) {
        byCategory[expense.category] += parseFloat(expense.amount);
      } else {
        byCategory[expense.category] = parseFloat(expense.amount);
      }
    }
    
    res.json({ total, count, byCategory });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});


// GET /api/expenses/:id - Get single expense
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


// POST /api/expenses - Create new expense
app.post("/api/expenses", async (req, res) => {
  try {
    const { description, amount, category } = req.body;
    
    // Validation
    if (!description || description.trim() === "") {
      return res.status(400).json({ error: "Description is required" });
    }
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Amount must be greater than 0" });
    }
    if (!category || category.trim() === "") {
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
      console.error("Supabase error:", error);
      return res.status(500).json({ error: error.message });
    }
    
    res.status(201).json(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


// PUT /api/expenses/:id - Update expense
app.put("/api/expenses/:id", async (req, res) => {
  try {
    const { description, amount, category } = req.body;
    
    // Build update object with only provided fields
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


// DELETE /api/expenses/:id - Delete expense
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


// ---- START SERVER ----
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// ============================================
// SETUP INSTRUCTIONS:
// ============================================
// 
// 1. Create a Supabase project at supabase.com
// 
// 2. Create the expenses table with these columns:
//    - id: int8 (primary key, auto-increment)
//    - description: text
//    - amount: numeric
//    - category: text
//    - date: date
//    - created_at: timestamptz (default: now())
// 
// 3. Create .env file:
//    SUPABASE_URL=https://xxxxx.supabase.co
//    SUPABASE_KEY=your-anon-key-here
// 
// 4. Install dependencies:
//    npm install express cors @supabase/supabase-js dotenv
// 
// 5. Run:
//    node index.js
