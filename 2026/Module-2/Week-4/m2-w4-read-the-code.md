# Module 2, Week 4: Read the Code Exercises

## Exercise 1: Array Methods Chain (Week 4)

```javascript
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Carol", active: true }
];

const result = users
  .filter(user => user.active)
  .map(user => user.name.toUpperCase())
  .join(", ");
```

**Questions:**
1. After filter, how many users remain?
2. What does map return?
3. What is the final value of result?

**Answers:**
1. 2 (Alice and Carol)
2. ["ALICE", "CAROL"]
3. "ALICE, CAROL"

---

## Exercise 2: Event Delegation (Week 4)

```javascript
document.querySelector(".list").addEventListener("click", (e) => {
  if (e.target.classList.contains("item")) {
    e.target.classList.toggle("selected");
  }
});
```

**Questions:**
1. Where is the event listener attached?
2. What elements will trigger the classList toggle?
3. Why use delegation instead of attaching to each .item?

**Answers:**
1. On the element with class "list" (the parent)
2. Only elements with class "item" (children)
3. Works for dynamically added items, better performance with many items
