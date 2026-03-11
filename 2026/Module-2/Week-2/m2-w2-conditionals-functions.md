# Module 2, Week 2: Booleans, Conditionals, Numbers, and Functions

---

## Comparison Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `===` | Strict equal (value AND type) | `5 === 5` → true |
| `!==` | Strict not equal | `5 !== "5"` → true |
| `>` | Greater than | `10 > 5` → true |
| `<` | Less than | `3 < 7` → true |
| `>=` | Greater than or equal | `5 >= 5` → true |
| `<=` | Less than or equal | `4 <= 3` → false |

**Rule:** Always use `===` and `!==` to avoid type coercion bugs.

---

## Logical Operators

```javascript
// AND (&&) — both must be true
true && true      // true
true && false     // false

// OR (||) — at least one must be true
true || false     // true
false || false    // false

// NOT (!) — flips the value
!true             // false
!false            // true
```

---

## Truthy and Falsy Values

**Falsy values** (evaluate to false):
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Everything else is truthy.**

```javascript
if ("hello") {
  // This runs because "hello" is truthy
}

if (0) {
  // This does NOT run because 0 is falsy
}
```

---

## Conditionals

### if / else if / else

```javascript
const score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}
```

### Switch Statement

```javascript
const category = "food";

switch (category) {
  case "food":
    console.log("🍔 Food");
    break;
  case "transport":
    console.log("🚗 Transport");
    break;
  default:
    console.log("📦 Other");
}
```

**Important:** Don't forget `break`! Switch uses strict equality, so `"Food"` won't match `"food"`.

### Ternary Operator

```javascript
const age = 20;
const status = age >= 18 ? "adult" : "minor";
```

---

## Numbers and Math

```javascript
const num = 3.14159;

num.toFixed(2)          // "3.14" (returns string!)
parseInt("42")          // 42
parseFloat("3.14")      // 3.14

Math.round(4.5)         // 5
Math.floor(4.9)         // 4 (rounds down)
Math.ceil(4.1)          // 5 (rounds up)
Math.max(1, 5, 3)       // 5
Math.min(1, 5, 3)       // 1
```

---

## Functions

### Function Declaration

```javascript
function greet(name) {
  return "Hello, " + name;
}

greet("Alice")  // "Hello, Alice"
```

### Arrow Function

```javascript
// Full syntax
const greet = (name) => {
  return "Hello, " + name;
};

// Short syntax (implicit return)
const greet = (name) => "Hello, " + name;

// Single parameter (parentheses optional)
const double = n => n * 2;
```

### Parameters and Return

```javascript
// Default parameters
function greet(name = "Guest") {
  return "Hello, " + name;
}
greet()          // "Hello, Guest"
greet("Alice")   // "Hello, Alice"
```

**Common mistake:**
```javascript
// ❌ No return
function add(a, b) {
  a + b;
}
add(2, 3)  // undefined

// ✅ With return
function add(a, b) {
  return a + b;
}
add(2, 3)  // 5
```

---

## Scope

```javascript
const globalVar = "I'm global";

function example() {
  const localVar = "I'm local";
  console.log(globalVar);  // ✅ Can access global
  console.log(localVar);   // ✅ Can access local
}

console.log(globalVar);    // ✅ Works
console.log(localVar);     // ❌ Error! Not defined
```

---

## Expense Tracker Functions

### Validate Expense

```javascript
function validateExpense(description, amount, category) {
  if (!description) {
    return "Description is required";
  }
  if (!amount || amount <= 0) {
    return "Amount must be greater than 0";
  }
  if (!category) {
    return "Category is required";
  }
  return "Valid";
}

// Test it
validateExpense("Coffee", 5, "Food")     // "Valid"
validateExpense("", 5, "Food")           // "Description is required"
validateExpense("Coffee", -5, "Food")    // "Amount must be greater than 0"
```

### Get Budget Status

```javascript
function getBudgetStatus(spent, budget) {
  if (spent > budget) {
    return "over";
  } else if (spent >= budget * 0.9) {
    return "warning";
  } else {
    return "under";
  }
}
```

### Format Status with Switch

```javascript
function formatStatus(status) {
  switch (status) {
    case "under":
      return "✅ Under budget";
    case "warning":
      return "⚠️ Approaching limit";
    case "over":
      return "🚨 Over budget!";
    default:
      return "Unknown";
  }
}
```

---

## Common Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| `if (x = 5)` | Assignment, not comparison | `if (x === 5)` |
| `const f = (n) => { n * 2 }` | Missing return | `const f = (n) => { return n * 2 }` or `const f = n => n * 2` |
| `case "Food":` when value is `"food"` | Case sensitive | Normalize: `switch(val.toLowerCase())` |

---

## Practice Questions

1. What's the difference between `==` and `===`?
2. List all falsy values in JavaScript.
3. Write a function that returns "even" or "odd" based on a number.
4. What does this return? `const x = (n) => { n * 2 }; x(5);`
5. When would you use a switch statement instead of if/else?
