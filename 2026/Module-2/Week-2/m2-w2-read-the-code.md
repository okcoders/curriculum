# Module 2, Week 2: Read the Code Exercises

## Exercise 1: Variable Scope

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

Questions:
1. What does inner() return?
2. What does outer() return?
3. What is the final console output?

Answers:
1. 30
2. 50 (30 + 20)
3. 60 (50 + 10)

---

## Exercise 2: Conditionals

```javascript
function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  return "F";
}

console.log(getGrade(85));
console.log(getGrade(70));
console.log(getGrade(65));
```

What are the three outputs?

Answer: B, C, F

---

## Exercise 3: Truthy and Falsy

```javascript
function check(val) {
  return val ? "truthy" : "falsy";
}

console.log(check(0));
console.log(check("0"));
console.log(check(""));
console.log(check([]));
```

What are the four outputs?

Answer: falsy, truthy, falsy, truthy
