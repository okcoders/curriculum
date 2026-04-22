# Module 3, Week 2: Read the Code Exercises

## Exercise 1: Fetch Response
```javascript
const response = await fetch("/api/expenses");
const data = await response.json();
```
What type is response? What type is data?

Answer: Response object, then parsed JSON (array/object)

## Exercise 2: POST Body
```javascript
fetch("/api/expenses", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ description: "Coffee" })
});
```
What does server receive in req.body?

Answer: { description: "Coffee" }

## Exercise 3: Error Check
```javascript
const response = await fetch("/api/expenses/999");
console.log(response.ok, response.status);
```
If 999 not found?

Answer: false, 404