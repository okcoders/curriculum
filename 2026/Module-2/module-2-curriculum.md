# Module 2: JavaScript Fundamentals

## Overview

| Duration | Focus | Homework Platform |
|----------|-------|-------------------|
| 4 weeks | JavaScript Fundamentals | freeCodeCamp JavaScript v9 |

**Structure:** 4 Wednesday sessions (1 hr each) + 4 Saturday sessions (4 hrs each)  
**Total Contact Time:** 20 hours  
**Homework Expectation:** ~10 hours/week

### Class Format

**Wednesdays (1 hr):**
- Homework Q&A (questions from freeCodeCamp)
- Lesson sheet review (instructor walks through key concepts)

**Saturdays (4 hrs):**
- Debug exercises and Read the Code exercises
- Q&A and concept clarification
- Build time with instructor support
- Students ask questions as they work

---

## Expense Tracker: Module 2 Goals

By the end of Module 2, students will have a fully functional vanilla JavaScript Expense Tracker with:
- Add/edit/delete expenses
- Category filtering and sorting
- localStorage persistence
- Responsive UI

### Weekly Build Progression

| Week | What Students Build |
|------|---------------------|
| 1 | Data model, formatting functions |
| 2 | Calculation functions (totals, validation) |
| 3 | CRUD operations (add, delete, filter, sort) |
| 4 | DOM UI, event handlers, localStorage |

---

## freeCodeCamp JavaScript v9 Curriculum Mapping

| Week | Sections | Steps | Est. Hours |
|------|----------|-------|------------|
| 1 | Variables and Strings | 101 | ~5 hrs |
| 2 | Booleans and Numbers, Functions | 54 + 38 = 92 | ~4.5 hrs |
| 3 | Arrays, Objects, Loops, Debugging | 34 + 28 + 22 + 8 = 92 | ~4.5 hrs |
| 4 | Higher Order Functions, DOM Manipulation and Events | 37 + 87 = 124 | ~6 hrs |

**Module 2 Total: 409 steps (~20 hours homework)**

---

## Week 1: Variables and Strings

### Homework (Before Wednesday) — 101 steps, ~5 hrs
- **freeCodeCamp: Variables and Strings** (101 steps)
  - Variable declaration (let, const, var)
  - Primitive data types
  - String methods and manipulation
  - Template literals
  - Type coercion

### Wednesday (1 hr) — Lesson: Variables and Strings
- Homework Q&A (freeCodeCamp questions)
- Lesson sheet review:
  - Variable declaration: let vs const vs var
  - Primitive types and type coercion
  - String methods (slice, substring, split, join)
  - Template literals and interpolation

### Saturday (4 hrs) — Expense Tracker Phase 1: Data Model
| Time | Activity |
|------|----------|
| 0:00-0:30 | Debug exercises + Read the Code exercises (see exercise bank) |
| 0:30-0:45 | Q&A and concept review |
| 0:45-1:00 | **Break** |
| 1:00-1:30 | Instructor demo: Setting up project, creating expense variables |
| 1:30-4:00 | Build time: Students work on variables, string formatting, template literals. Instructor available for questions and live coding demos as needed |

**Week 1 Build Goals:**
- Define expense variables (description, amount, category, date)
- Format currency string using toFixed(2)
- Format date string using Date and toLocaleDateString()
- Build display strings using template literals

---

## Week 2: Booleans, Numbers, and Functions

### Homework (Before Wednesday) — 92 steps, ~4.5 hrs
- **freeCodeCamp: Booleans and Numbers** (54 steps)
  - Boolean logic and comparisons
  - Truthy/falsy values
  - Number methods
  - Math object
- **freeCodeCamp: Functions** (38 steps)
  - Function declarations vs expressions
  - Arrow functions
  - Parameters and arguments
  - Return values
  - Scope basics

### Wednesday (1 hr) — Lesson: Booleans, Conditionals, Numbers, and Functions
- Homework Q&A (freeCodeCamp questions)
- Lesson sheet review:
  - Boolean logic and comparisons (===, !==, <, >, &&, ||)
  - Conditionals: if, else if, else
  - Switch statements
  - Truthy/falsy values
  - Ternary operator
  - Function declarations vs expressions vs arrow functions
  - Parameters, arguments, return values
  - Scope basics

### Saturday (4 hrs) — Expense Tracker Phase 2: Calculations
| Time | Activity |
|------|----------|
| 0:00-0:30 | Debug exercises + Read the Code exercises |
| 0:30-0:45 | Q&A and concept review |
| 0:45-1:00 | **Break** |
| 1:00-1:30 | Instructor demo: Building calculation functions with conditionals |
| 1:30-4:00 | Build time: Students implement calculations. Instructor demos as needed |

**Week 2 Build Goals:**
- formatCurrency() — return formatted currency string
- formatDate() — return formatted date string  
- calculateTotal() — sum individual amounts (no arrays yet)
- validateExpense() — use conditionals to check required fields, valid amounts
- getBudgetStatus() — use if/else to return "under", "warning", or "over" budget
- getCategoryEmoji() — use switch to return emoji for category

---

## Week 3: Arrays, Objects, Loops, and Debugging

### Homework (Before Wednesday) — 92 steps, ~4.5 hrs
- **freeCodeCamp: Arrays** (34 steps)
  - Array creation and access
  - Array methods (push, pop, shift, unshift, slice, splice)
  - Iterating arrays
- **freeCodeCamp: Objects** (28 steps)
  - Object creation and access
  - Object methods
  - Nested objects
- **freeCodeCamp: Loops** (22 steps)
  - for, while, do-while
  - for...of, for...in
  - Loop control (break, continue)
- **freeCodeCamp: Debugging** (8 steps)
  - Console methods
  - Common error types
  - Debugging strategies

### Wednesday (1 hr) — Lesson: Arrays, Objects, Loops, Debugging
- Homework Q&A (freeCodeCamp questions)
- Lesson sheet review:
  - Array methods (push, pop, shift, slice, splice)
  - Object creation and property access
  - for, while, for...of loops
  - Console methods and debugging strategies

### Saturday (4 hrs) — Expense Tracker Phase 3: Data Management
| Time | Activity |
|------|----------|
| 0:00-0:30 | Debug exercises + Read the Code exercises |
| 0:30-0:45 | Q&A and concept review |
| 0:45-1:00 | **Break** |
| 1:00-1:30 | Instructor demo: CRUD operations on expenses array |
| 1:30-4:00 | Build time: Students implement data management. Instructor demos as needed |

**Week 3 Build Goals:**
- addExpense() — add to expenses array
- deleteExpense() — remove by id
- editExpense() — update existing expense
- filterByCategory() — return filtered array
- sortExpenses() — sort by date or amount

---

## Week 4: Higher Order Functions and DOM Manipulation

### Homework (Before Wednesday) — 124 steps, ~6 hrs
- **freeCodeCamp: Higher Order Functions and Callbacks** (37 steps)
  - Callback functions
  - map, filter, reduce
  - forEach, find, some, every
  - Method chaining
- **freeCodeCamp: DOM Manipulation and Events** (87 steps)
  - Selecting elements (getElementById, querySelector)
  - Modifying elements (textContent, innerHTML, classList)
  - Creating and removing elements
  - Event listeners
  - Event delegation
  - Form handling

### Wednesday (1 hr) — Lesson: Higher Order Functions and DOM
- Homework Q&A (freeCodeCamp questions)
- Lesson sheet review:
  - Callback functions
  - map, filter, reduce, forEach
  - DOM selection (querySelector, getElementById)
  - Event listeners and event delegation
  - Form handling

### Saturday (4 hrs) — Expense Tracker Phase 4: Interactive UI
| Time | Activity |
|------|----------|
| 0:00-0:30 | Debug exercises + Read the Code exercises |
| 0:30-0:45 | Q&A and concept review |
| 0:45-1:00 | **Break** |
| 1:00-1:45 | Instructor demo: Building the form, rendering expense list, wiring events |
| 1:45-3:30 | Build time: Students implement UI. Instructor demos as needed |
| 3:30-4:00 | **Module 2 Demo** — Show off Expense Trackers, discuss what's next |

**Week 4 Build Goals:**
- Expense form (add new expenses)
- Render expense list to DOM
- Delete button functionality
- Filter dropdown (by category)
- localStorage persistence

**End of Module 2:** Students have a fully functional vanilla JavaScript Expense Tracker with:
- Add/edit/delete expenses
- Category filtering and sorting
- localStorage persistence
- Responsive UI

---

## Module 2 Debug Exercise Bank

### Week 1 - Variables and Strings
```javascript
// Bug 1: Why doesn't this work?
const greeting = "Hello";
greeting = "Hi"; // ???

// Bug 2: What's wrong with this template literal?
const name = "Alice";
const message = "Hello, ${name}!"; // Why isn't name inserted?

// Bug 3: Fix the string method chain
const text = "  Hello World  ";
const result = text.trim.toLowerCase(); // ???
```

### Week 2 - Booleans, Conditionals, Functions
```javascript
// Bug 1: Why is result undefined?
function add(a, b) {
  a + b;
}
const result = add(2, 3);

// Bug 2: Why does this always return "over"?
function getBudgetStatus(spent, budget) {
  if (spent > budget) {
    return "over";
  } else if (spent = budget) {  // ???
    return "at limit";
  } else {
    return "under";
  }
}

// Bug 3: Why doesn't this arrow function work?
const multiply = (a, b) => {
  a * b
};

// Bug 4: Switch not working as expected
function getCategoryLabel(category) {
  switch (category) {
    case "food":
      return "🍔 Food";
    case "transport":
      return "🚗 Transport";
    default:
      return "Other";
  }
}
getCategoryLabel("Food"); // Returns "Other" — why?

// Bug 5: Ternary confusion
const status = budget > 0 ? spent > budget ? "over" : "under" : "no budget";
// How do you read this? What's wrong with it?
```

### Week 3 - Arrays, Objects, Loops
```javascript
// Bug 1: Why is the original array modified?
const numbers = [1, 2, 3];
const doubled = numbers;
doubled.push(4);
console.log(numbers); // ???

// Bug 2: Why doesn't this loop work as expected?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// Bug 3: Object property access
const user = { "first-name": "John" };
console.log(user.first-name); // ???
```

### Week 4 - DOM and Higher Order Functions
```javascript
// Bug 1: Why doesn't the click handler work?
const button = document.querySelector('.btn');
button.addEventListener('click', handleClick());

// Bug 2: Why does this return undefined?
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => {
  num * 2;
});

// Bug 3: Why doesn't this remove the element?
const item = document.querySelector('.item');
item.remove;
```

---

## Module 2 Read the Code Exercises

### Exercise 1: Variable Scope (Week 2)
```javascript
let x = 10;
function outer() {
  let x = 20;
  function inner() {
    let x = 30;
    return x;
  }
  return inner() + x;
}
console.log(outer() + x);
```
**Questions:**
1. What does `inner()` return?
2. What does `outer()` return?
3. What is the final console output?

### Exercise 2: Array Methods (Week 4)
```javascript
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Carol", age: 35, active: true }
];

const result = users
  .filter(user => user.active)
  .map(user => user.name.toUpperCase())
  .join(", ");
```
**Questions:**
1. After `.filter()`, how many users remain?
2. What does `.map()` return?
3. What is the final value of `result`?

### Exercise 3: Event Delegation (Week 4)
```javascript
document.querySelector('.list').addEventListener('click', (e) => {
  if (e.target.classList.contains('item')) {
    e.target.classList.toggle('selected');
  }
});
```
**Questions:**
1. Where is the event listener attached?
2. What elements will trigger the classList toggle?
3. Why use delegation instead of attaching to each `.item`?

---

## Module 2 Assessment Criteria

### Comprehension Checkpoints
- **Can they explain it?** — Students must verbally explain variable scope, function behavior, array methods
- **Can they predict it?** — Students must predict code output without running it
- **Can they debug it?** — Students must identify and fix issues without AI

### Saturday Build Verification
- **Rebuild test:** Delete a component and rebuild without AI
- **Explain test:** Walk through code line-by-line to partner
- **Extension test:** Add a feature without AI assistance

### Pass Requirements
- Complete all freeCodeCamp sections (409 steps)
- Demonstrate understanding in Wednesday comprehension checks
- Successfully complete Saturday builds with verification
- 75%+ on Module 2 quiz

---

## Quick Reference: freeCodeCamp Step Counts

| Section | Steps |
|---------|-------|
| Variables and Strings | 101 |
| Booleans and Numbers | 54 |
| Functions | 38 |
| Arrays | 34 |
| Objects | 28 |
| Loops | 22 |
| Debugging | 8 |
| Higher Order Functions and Callbacks | 37 |
| DOM Manipulation and Events | 87 |
| **Module 2 Total** | **409** |
