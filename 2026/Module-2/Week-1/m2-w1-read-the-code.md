# Module 2, Week 1: Read the Code Exercises

## Exercise 1: Variable Reassignment

```javascript
let count = 5;
count = count + 1;
count = count * 2;
console.log(count);
```

What is the final output?

Answer: 12 (5 + 1 = 6, then 6 * 2 = 12)

---

## Exercise 2: String Concatenation

```javascript
const firstName = "John";
const lastName = "Doe";

const full1 = firstName + " " + lastName;
const full2 = `${firstName} ${lastName}`;

console.log(full1 === full2);
```

What does this output?

Answer: true (both produce "John Doe")

---

## Exercise 3: String Methods

```javascript
const text = "  Hello World  ";
const step1 = text.trim();
const step2 = step1.toLowerCase();
const step3 = step2.split(" ");
console.log(step3);
```

What does this output?

Answer: ["hello", "world"]

---

## Exercise 4: Type Coercion

```javascript
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "2");
```

What are the three outputs?

Answer: "53", 2, 10

Explanation:
- + with string concatenates: "5" + 3 = "53"
- - converts to numbers: 5 - 3 = 2
- * converts to numbers: 5 * 2 = 10
