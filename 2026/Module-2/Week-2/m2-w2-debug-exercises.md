# Module 2, Week 2: Debug Exercises (Conditionals and Functions)

## Bug 1: Missing return
```javascript
function add(a, b) {
  a + b;
}
const result = add(2, 3);
console.log(result);
```
What does this output? How do you fix it?

---

## Bug 2: Assignment instead of comparison
```javascript
function getBudgetStatus(spent, budget) {
  if (spent > budget) {
    return "over";
  } else if (spent = budget) {
    return "at limit";
  } else {
    return "under";
  }
}
console.log(getBudgetStatus(50, 100));
```
What does this output? Why? How do you fix it?

---

## Bug 3: Arrow function missing return
```javascript
const multiply = (a, b) => {
  a * b
};
console.log(multiply(3, 4));
```
What does this output? How do you fix it?

---

## Bug 4: Switch case sensitivity
```javascript
function getCategoryLabel(category) {
  switch (category) {
    case "food":
      return "Food";
    case "transport":
      return "Transport";
    default:
      return "Other";
  }
}
console.log(getCategoryLabel("Food"));
```
What does this output? Why? How do you fix it?

---

## Bug 5: Missing break in switch
```javascript
function getDayType(day) {
  let result;
  switch (day) {
    case "Saturday":
    case "Sunday":
      result = "Weekend";
    case "Monday":
    case "Tuesday":
      result = "Weekday";
  }
  return result;
}
console.log(getDayType("Saturday"));
```
What does this output? Why? How do you fix it?

---

## Bug 6: Falsy value confusion
```javascript
function validateAmount(amount) {
  if (!amount) {
    return "Amount is required";
  }
  return "Valid";
}
console.log(validateAmount(0));
```
What does this output? Is 0 a valid amount? How do you fix it?

---

## Answer Key

1. Outputs undefined - no return statement. Fix: return a + b;

2. Outputs "at limit" - single = is assignment. Fix: spent === budget

3. Outputs undefined - curly braces need return. Fix: return a * b; or const multiply = (a, b) => a * b;

4. Outputs "Other" - case sensitive. Fix: switch (category.toLowerCase())

5. Outputs "Weekday" - fall-through. Fix: Add break; after result = "Weekend";

6. Outputs "Amount is required" - 0 is falsy. Fix: if (amount === undefined || amount === null)
