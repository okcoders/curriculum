# Module 3, Week 1: Node.js and Express Fundamentals

## Node.js vs Browser JavaScript

| Browser JS | Node.js |
|------------|---------|
| Runs in browser | Runs on server |
| Has window, document | Has process, fs, http |
| Frontend | Backend |

---

## npm and package.json

```bash
mkdir expense-api
cd expense-api
npm init -y
npm install express
```

---

## Express Setup

```javascript
const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
```

---

## HTTP Methods

| Method | Purpose |
|--------|---------|
| GET | Read data |
| POST | Create data |
| PUT | Update data |
| DELETE | Remove data |

---

## Basic Routes

```javascript
let expenses = [];
let nextId = 1;

app.get("/api/expenses", (req, res) => {
  res.json(expenses);
});

app.get("/api/expenses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const expense = expenses.find(e => e.id === id);
  if (!expense) {
    return res.status(404).json({ error: "Not found" });
  }
  res.json(expense);
});

app.post("/api/expenses", (req, res) => {
  const { description, amount, category } = req.body;
  const expense = { id: nextId++, description, amount, category };
  expenses.push(expense);
  res.status(201).json(expense);
});

app.delete("/api/expenses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = expenses.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Not found" });
  }
  expenses.splice(index, 1);
  res.status(204).send();
});
```

---

## Request Object

```javascript
req.params.id    // URL param from /api/expenses/:id
req.query.sort   // Query string from ?sort=date
req.body         // JSON body from POST/PUT
```

---

## Status Codes

- 200 OK
- 201 Created
- 204 No Content
- 400 Bad Request
- 404 Not Found

---

## Route Order Matters

```javascript
// WRONG
app.get("/api/expenses/:id", handler);
app.get("/api/expenses/summary", handler); // Never reached!

// RIGHT - specific first
app.get("/api/expenses/summary", handler);
app.get("/api/expenses/:id", handler);
```

---

## Testing with curl

```bash
curl http://localhost:3000/api/expenses

curl -X POST http://localhost:3000/api/expenses \
  -H "Content-Type: application/json" \
  -d '{"description":"Coffee","amount":5}'
```

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| req.body undefined | Add app.use(express.json()) before routes |
| Route not reached | Specific routes before :id routes |
| params.id is string | Use parseInt() |
