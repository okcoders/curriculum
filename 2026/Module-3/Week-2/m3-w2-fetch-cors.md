# Module 3, Week 2: Fetch API and CORS

## GET Request

```javascript
async function getExpenses() {
  const response = await fetch("http://localhost:3000/api/expenses");
  const data = await response.json();
  return data;
}
```

## POST Request

```javascript
async function createExpense(expense) {
  const response = await fetch("http://localhost:3000/api/expenses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(expense)
  });
  return await response.json();
}
```

## DELETE Request

```javascript
async function deleteExpense(id) {
  await fetch("http://localhost:3000/api/expenses/" + id, {
    method: "DELETE"
  });
}
```

---

## CORS (Cross-Origin Resource Sharing)

Different ports = different origins. Browser blocks by default.

Fix in Express:

```bash
npm install cors
```

```javascript
const cors = require("cors");
app.use(cors());
```

---

## Error Handling

```javascript
try {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed");
  const data = await response.json();
} catch (error) {
  console.error(error);
}
```

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| CORS error | Add cors middleware |
| Body not sent | JSON.stringify + Content-Type header |
| Promise pending | Add await before response.json() |