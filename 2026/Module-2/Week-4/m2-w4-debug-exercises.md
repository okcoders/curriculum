# Module 2, Week 4: Debug Exercises (DOM and Higher Order Functions)

## Bug 1: Calling function instead of passing reference

Why does addEventListener("click", handleClick()) not work?

Answer: handleClick() calls the function immediately. Fix: remove parentheses

---

## Bug 2: Missing return in map

const doubled = numbers.map(num => { num * 2; });

What does this output?

Answer: Array of undefined. Braces need return statement.

---

## Bug 3: Calling remove without parentheses

item.remove;

Why does this not remove the element?

Answer: remove without () just references the method. Fix: item.remove();

---

## Bug 4: Form refreshes page

form.addEventListener("submit", function(event) { ... });

The log shows briefly then page refreshes. How do you fix it?

Answer: Add event.preventDefault(); at start of handler
