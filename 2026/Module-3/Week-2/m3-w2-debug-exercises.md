# Module 3, Week 2: Debug Exercises (Fetch/CORS)

## Bug 1: CORS error
Frontend at localhost:5500, backend at localhost:3000
Answer: Add cors middleware to Express

## Bug 2: Body not received
```javascript
fetch(url, { method: "POST", body: { data: "x" } });
```
Answer: Use JSON.stringify(body) and add Content-Type header

## Bug 3: Promise pending
```javascript
const data = response.json();
console.log(data); // Promise
```
Answer: Add await before response.json()

## Bug 4: Errors not handled
Answer: Wrap fetch in try/catch