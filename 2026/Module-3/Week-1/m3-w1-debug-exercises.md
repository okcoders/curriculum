# Module 3, Week 1: Debug Exercises (Node/Express)

## Bug 1: req.body is undefined
```javascript
app.post("/api/expenses", (req, res) => {
  console.log(req.body); // undefined
});
```
Answer: Add app.use(express.json()) before routes

## Bug 2: Route never reached
```javascript
app.get("/api/expenses/:id", handler);
app.get("/api/expenses/summary", handler); // never runs
```
Answer: Put specific routes before param routes

## Bug 3: Cannot find expense
```javascript
const expense = expenses.find(e => e.id === req.params.id);
```
Answer: params.id is string. Use parseInt()

## Bug 4: Headers already sent
```javascript
if (!expense) {
  res.status(404).json({ error: "Not found" });
}
res.json(expense);
```
Answer: Add return after 404 response