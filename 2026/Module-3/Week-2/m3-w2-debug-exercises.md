# Module 3, Week 2: Debug Exercises (Supabase)

Each exercise has broken code. Read it, find the bug, and fix it.

---

## Bug 1: Data is null

```js
app.get("/expenses", async (req, res) => {
  const { data } = await supabase
    .from('expenses')
    .select('*');

  res.json(data.map(e => e.description));
});
```

**Problem:** When something goes wrong, `data` comes back as `null` and `.map()` throws.

**Hint:** Check the error object for details.

---

## Bug 2: Column not found

```js
app.get("/expenses/food", async (req, res) => {
  const { data, error } = await supabase
    .from('expenses')
    .select('*')
    .eq('categroy', 'Food');

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});
```

**Problem:** Query returns an error about a missing column.

**Hint:** Use correct column name matching table schema.

---

## Bug 3: Env var undefined

```js
const express = require("express");
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
```

**Problem:** `process.env.SUPABASE_URL` and the other env vars are all `undefined`.

**Hint:** Add `require("dotenv").config()` at top.

---

## Bug 4: Insert returns null

```js
app.post('/expenses', async (req, res) => {
  const { description, amount, category, date } = req.body;
  const { data, error } = await supabase
    .from('expenses')
    .insert([{ description, amount, category, date }]);

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});
```

**Problem:** Insert succeeds but the response body is `null` instead of the new row.

**Hint:** Add `.select().single()` after insert.

---

<details>
<summary><strong>Solutions (click to expand)</strong></summary>

### Bug 1: Data is null

Destructure `error` and bail out before touching `data`.

```js
app.get("/expenses", async (req, res) => {
  const { data, error } = await supabase
    .from('expenses')
    .select('*');

  if (error) return res.status(500).json({ error: error.message });
  res.json(data.map(e => e.description));
});
```

### Bug 2: Column not found

Typo: `categroy` → `category`.

```js
app.get("/expenses/food", async (req, res) => {
  const { data, error } = await supabase
    .from('expenses')
    .select('*')
    .eq('category', 'Food');

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});
```

### Bug 3: Env var undefined

Load `.env` before reading `process.env`.

```js
require('dotenv').config();

const express = require("express");
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
```

### Bug 4: Insert returns null

Chain `.select().single()` so Supabase returns the inserted row.

```js
app.post('/expenses', async (req, res) => {
  const { description, amount, category, date } = req.body;
  const { data, error } = await supabase
    .from('expenses')
    .insert([{ description, amount, category, date }])
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});
```

</details>

