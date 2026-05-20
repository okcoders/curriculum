# Module 3: Saturday Build Outlines

## Week 1: Express API Setup

### Tasks

1. Create folder, npm init -y, npm install express
2. Create basic server with express.json()
3. Add in-memory array and nextId
4. GET /api/expenses - return all
5. POST /api/expenses - create new
6. GET /api/expenses/:id - return one
7. DELETE /api/expenses/:id - remove
8. Test all with curl

---

## Week 2: Connect Frontend

### Tasks

1. npm install cors, add to Express
2. Create getExpenses(), createExpense(), deleteExpense() in frontend
3. Update form submit to use API
4. Update delete handler to use API
5. Load expenses on page init
6. Remove all localStorage code

---

## Week 3: Supabase Integration

### Tasks

1. npm install @supabase/supabase-js dotenv
2. Create .env with SUPABASE_URL and SUPABASE_KEY
3. Create supabase client in Express
4. Update GET to use supabase.from().select()
5. Update POST to use supabase.from().insert()
6. Update DELETE to use supabase.from().delete()
7. Test full flow: UI to API to database

---

## Week 4: Deploy

### Tasks

1. Add currency endpoint using Frankfurter API
2. Create vercel.json for backend
3. Push to GitHub
4. Deploy backend to Vercel
5. Add env vars in Vercel dashboard
6. Update frontend API_URL
7. Deploy frontend to Vercel
8. Demo live URLs