# Module 2, Week 3: Read the Code Exercises

## Exercise 1: Loop Behavior

```javascript
const result = [];
for (let i = 0; i < 3; i++) {
  result.push(i * 2);
}
console.log(result);
```

Questions:
1. How many times does the loop run?
2. What values get pushed?
3. What is the final output?

Answers:
1. 3 times (i = 0, 1, 2)
2. 0, 2, 4
3. [0, 2, 4]

---

## Exercise 2: Object Mutation

```javascript
const person = { name: "Alice", age: 25 };
const updated = person;
updated.age = 26;
console.log(person.age);
```

Questions:
1. What does console.log output?
2. Why?

Answers:
1. 26
2. Objects are reference types. updated points to same object as person.

---

## Exercise 3: Array Methods

```javascript
const nums = [1, 2, 3];
nums.push(4);
nums.pop();
nums.unshift(0);
console.log(nums);
```

What is the output?

Answer: [0, 1, 2, 3]

---

## Exercise 4: For...of vs For...in

```javascript
const arr = ["a", "b", "c"];

for (const item of arr) {
  console.log(item);
}

for (const item in arr) {
  console.log(item);
}
```

What does each loop output?

Answer:
- for...of outputs: "a", "b", "c" (values)
- for...in outputs: "0", "1", "2" (indices as strings)
