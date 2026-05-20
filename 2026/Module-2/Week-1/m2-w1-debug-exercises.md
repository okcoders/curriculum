# Module 2, Week 1: Debug Exercises (Variables and Strings)

## Variables and Strings

### Bug 1: Reassigning const
```javascript
const greeting = "Hello";
greeting = "Hi";
```
**What happens? Why?**

---

### Bug 2: Template literal with wrong quotes
```javascript
const name = "Alice";
const message = "Hello, ${name}!";
console.log(message);
```
**What does this output? How do you fix it?**

---

### Bug 3: Missing parentheses on method
```javascript
const text = "  Hello World  ";
const result = text.trim.toLowerCase();
console.log(result);
```
**What happens? How do you fix it?**

---

### Bug 4: String method doesn't change original
```javascript
const name = "alice";
name.toUpperCase();
console.log(name);
```
**What does this output? Why? How do you fix it?**

---

### Bug 5: Unexpected concatenation
```javascript
const price = "5";
const quantity = 3;
const total = price + quantity;
console.log(total);
```
**What does this output? Why? How do you fix it?**

---

## Answer Key

1. **Bug 1:** TypeError — can't reassign a `const`. Use `let` if you need to reassign.

2. **Bug 2:** Outputs literally `Hello, ${name}!` — must use backticks for template literals: `` `Hello, ${name}!` ``

3. **Bug 3:** TypeError — `trim` without `()` returns the function, not the result. Fix: `text.trim().toLowerCase()`

4. **Bug 4:** Outputs `alice` — string methods return new strings, they don't modify the original. Fix: `const upper = name.toUpperCase();`

5. **Bug 5:** Outputs `53` — string + number concatenates. Fix: `const total = Number(price) * quantity;` or `parseInt(price) * quantity`
