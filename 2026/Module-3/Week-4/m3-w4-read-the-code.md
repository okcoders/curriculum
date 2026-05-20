# Module 3, Week 4: Read the Code Exercises

## Exercise 1: External API
```javascript
const response = await fetch("https://api.frankfurter.app/latest?from=USD&to=EUR");
const data = await response.json();
console.log(data.rates.EUR);
```
What does this log?

Answer: The current EUR exchange rate (e.g., 0.92)

## Exercise 2: Environment Check
```javascript
const API_URL = process.env.NODE_ENV === "production"
  ? "https://api.myapp.com"
  : "http://localhost:3000";
```
What is API_URL in development?

Answer: http://localhost:3000

## Exercise 3: CORS Config
```javascript
app.use(cors({
  origin: ["http://localhost:5500", "https://myapp.vercel.app"]
}));
```
Which origins can make requests?

Answer: Only localhost:5500 and myapp.vercel.app