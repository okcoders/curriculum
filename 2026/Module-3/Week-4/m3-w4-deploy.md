# Module 3, Week 4: External APIs and Deployment

## Calling External APIs from Node

```javascript
const response = await fetch("https://api.frankfurter.app/latest?from=USD");
const data = await response.json();
console.log(data.rates);
```

---

## Frankfurter Currency API

Free, no API key needed.

```javascript
const url = "https://api.frankfurter.app/latest?from=USD&to=EUR";
const response = await fetch(url);
const data = await response.json();
// data.rates.EUR = 0.92
```

---

## Deploy Backend to Vercel

1. Create vercel.json:

```json
{
  "version": 2,
  "builds": [{ "src": "index.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "index.js" }]
}
```

2. Push to GitHub
3. Import repo in Vercel dashboard
4. Add env vars in Vercel settings

---

## Environment Variables

Add in Vercel dashboard:
- SUPABASE_URL
- SUPABASE_KEY

---

## Update CORS for Production

```javascript
app.use(cors({
  origin: [
    "http://localhost:5500",
    "https://your-frontend.vercel.app"
  ]
}));
```

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| fetch not defined | Use Node 18+ |
| localhost in prod | Use env vars |
| CORS error in prod | Add prod URL to origins |