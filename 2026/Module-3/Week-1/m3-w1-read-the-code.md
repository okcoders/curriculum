# Module 3, Week 1: Read the Code Exercises

## Exercise 1: Route Matching

```javascript
app.get("/api/expenses/:id", (req, res) => {
  res.json({ matched: "param" });
});

app.get("/api/expenses/total", (req, res) => {
  res.json({ matched: "total" });
});
```

What does GET /api/expenses/total return?

Answer: { matched: "param" } with id = "total". First route catches it.

---

## Exercise 2: Request Object

```javascript
// Request: GET /api/expenses/5?sort=date
app.get("/api/expenses/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.query.sort);
});
```

What gets logged?

Answer: "5" then "date"

---

## Exercise 3: Middleware Flow

```javascript
app.use(express.json());

app.use((req, res, next) => {
  console.log("A");
  next();
});

app.get("/test", (req, res) => {
  console.log("B");
  res.send("done");
});
```

GET /test logs what?

Answer: A, then B