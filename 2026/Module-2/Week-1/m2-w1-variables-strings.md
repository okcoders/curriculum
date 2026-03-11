# Module 2, Week 1: Variables and Strings

---

## Variable Declaration

```javascript
// let — can be reassigned
let count = 0;
count = 1; // ✅ OK

// const — cannot be reassigned
const name = "Alice";
name = "Bob"; // ❌ Error!

// var — old way, avoid using
var old = "don't use";
```

**Rule of thumb:** Use `const` by default. Use `let` only when you need to reassign.

---

## Primitive Data Types

| Type | Example | Notes |
|------|---------|-------|
| String | `"hello"` or `'hello'` | Text |
| Number | `42` or `3.14` | Integers and decimals |
| Boolean | `true` or `false` | Yes/no values |
| undefined | `undefined` | Variable declared but not assigned |
| null | `null` | Intentionally empty |

```javascript
let message = "Hello";     // string
let age = 25;              // number
let isActive = true;       // boolean
let data;                  // undefined (no value assigned)
let empty = null;          // null (intentionally empty)
```

---

## Type Coercion

JavaScript automatically converts types in certain situations:

```javascript
// String + Number = String (concatenation)
"Hello " + 42        // "Hello 42"
"3" + 4              // "34" (not 7!)

// Comparisons
"5" == 5             // true (loose equality, converts types)
"5" === 5            // false (strict equality, no conversion)
```

**Rule:** Always use `===` (strict equality) to avoid surprises.

---

## String Methods

```javascript
const text = "  Hello World  ";

// Remove whitespace
text.trim()                    // "Hello World"

// Change case
text.toLowerCase()             // "  hello world  "
text.toUpperCase()             // "  HELLO WORLD  "

// Get length
text.length                    // 15

// Access characters
text[0]                        // " "
text.charAt(2)                 // "H"

// Find position
text.indexOf("World")          // 8
text.indexOf("xyz")            // -1 (not found)

// Extract parts
text.slice(2, 7)               // "Hello"

// Split into array
"a,b,c".split(",")             // ["a", "b", "c"]

// Check contents
"hello".includes("ell")        // true
"hello".startsWith("he")       // true
"hello".endsWith("lo")         // true
```

---

## Template Literals

Use backticks (\`) for strings with variables:

```javascript
const name = "Alice";
const age = 25;

// Old way (concatenation)
const msg1 = "Hello, " + name + "! You are " + age + ".";

// New way (template literal)
const msg2 = `Hello, ${name}! You are ${age}.`;

// Expressions inside ${}
const msg3 = `Next year you'll be ${age + 1}`;
```

**Common mistake:** Using regular quotes instead of backticks:
```javascript
"Hello, ${name}"   // ❌ Outputs literally: Hello, ${name}
`Hello, ${name}`   // ✅ Outputs: Hello, Alice
```

---

## Expense Tracker: Week 1 Focus

This week we're just setting up the data — no functions yet.

### Working with Expense Data

```javascript
const description = "Coffee";
const amount = 4.50;
const category = "Food";
const date = "2024-01-15";

// Format amount as currency string
const currencyString = "$" + amount.toFixed(2);  // "$4.50"

// Build a display string with template literal
const displayText = `${description} - ${currencyString} (${category})`;
// "Coffee - $4.50 (Food)"

// Check if description contains a word
description.includes("Coffee")  // true
description.toLowerCase()       // "coffee"
```

---

## Common Mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| `const x = 5; x = 6;` | Can't reassign const | Use `let` if reassigning |
| `text.trim` | Missing parentheses | `text.trim()` |
| `"Hello ${name}"` | Wrong quotes | Use backticks: \`Hello ${name}\` |
| `name.toUpperCase()` | Doesn't modify original | Save result: `const upper = name.toUpperCase()` |

---

## Practice Questions

1. What's the difference between `let` and `const`?
2. What does `"3" + 4` return? Why?
3. What does `"hello".slice(1, 3)` return?
4. How do you check if a string contains "error"?
5. Write a template literal that says "The total is $X" where X is a variable.
