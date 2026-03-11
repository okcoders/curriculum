# Module 3, Week 3: Supabase Database

## What is Supabase?

Hosted PostgreSQL database with:
- Dashboard UI for tables
- JavaScript client library
- Auto-generated API
- Authentication (optional)

---

## Setup

1. Create account at supabase.com
2. Create new project
3. Get Project URL and anon key from Settings > API

---

## Create Table

In Supabase dashboard, create expenses table:

| Column | Type |
|--------|------|
| id | int8, primary key |
| description | text |
| amount | numeric |
| category | text |
| date | date |
| created_at | timestamptz |

---

## Install Client

```bash
npm install @supabase/supabase-js
```

---

## Connect in Express

```javascript
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
```

---

## CRUD Operations

### Select All

```javascript
const { data, error } = await supabase
  .from("expenses")
  .select("*");
```

### Select One

```javascript
const { data, error } = await supabase
  .from("expenses")
  .select("*")
  .eq("id", id)
  .single();
```

### Insert

```javascript
const { data, error } = await supabase
  .from("expenses")
  .insert({ description, amount, category })
  .select()
  .single();
```

### Update

```javascript
const { data, error } = await supabase
  .from("expenses")
  .update({ description, amount })
  .eq("id", id)
  .select()
  .single();
```

### Delete

```javascript
const { error } = await supabase
  .from("expenses")
  .delete()
  .eq("id", id);
```

---

## Environment Variables

Create .env file:

```
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_KEY=your-anon-key
```

Load with dotenv:

```bash
npm install dotenv
```

```javascript
require("dotenv").config();
```

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| data is null | Check error object |
| Column not found | Check column name matches table |
| Env var undefined | Check .env file and dotenv config |