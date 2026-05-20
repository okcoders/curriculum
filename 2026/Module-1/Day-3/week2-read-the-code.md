# Week 2 Read the Code: Forms & CSS Basics

**Instructions:** Answer the questions WITHOUT running the code.

---

## Exercise 1: CSS Specificity

```html
<style>
  h1 { color: blue; }
  .highlight { background: yellow; }
  #main-title { font-size: 32px; }
  p { color: gray; }
</style>

<h1 id="main-title" class="highlight">Welcome</h1>
<h1>Another Title</h1>
<p class="highlight">This is a paragraph.</p>
<p>Another paragraph.</p>
```

### Questions:

1. What color is "Welcome"?
2. What's the font size of "Welcome"?
3. Does "Welcome" have a yellow background?
4. What color is "Another Title"?
5. Does "Another paragraph" have a yellow background?

---

## Exercise 2: Form Anatomy

```html
<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="user_email" required>
  
  <label for="age">Age:</label>
  <input type="number" id="age" name="user_age" min="18" max="99">
  
  <fieldset>
    <legend>Subscription:</legend>
    <input type="radio" id="free" name="plan" value="free">
    <label for="free">Free</label>
    <input type="radio" id="pro" name="plan" value="pro">
    <label for="pro">Pro</label>
  </fieldset>
  
  <label>
    <input type="checkbox" name="terms" required>
    I agree to terms
  </label>
  
  <button type="submit">Sign Up</button>
</form>
```

### Questions:

1. What happens if someone enters "notanemail" in the email field and clicks submit?
2. Can someone enter age 15? Why or why not?
3. Can you select both "Free" AND "Pro" at the same time? Why?
4. What data gets sent when the form submits? (list all the `name` values)
5. What's the difference between the two ways labels are connected to inputs in this form?

---

## Exercise 3: CSS Selectors

```html
<style>
  .card { border: 1px solid gray; }
  .card h2 { color: navy; }
  .card .price { color: green; font-weight: bold; }
  .card:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
</style>

<div class="card">
  <h2>Product Name</h2>
  <p>Description here</p>
  <p class="price">$29.99</p>
</div>
```

### Questions:

1. What color is "Product Name"?
2. What color is "Description here"?
3. What color is "$29.99"?
4. What happens when you hover over the card?
5. What does `.card h2` select vs `.card.h2`?

---

<details>
<summary><strong>Click to reveal answers</strong></summary>

### Exercise 1 Answers:

1. **Blue** — `h1 { color: blue; }` applies
2. **32px** — `#main-title { font-size: 32px; }` applies (ID selector)
3. **Yes** — `.highlight { background: yellow; }` applies (has the class)
4. **Blue** — only `h1 { color: blue; }` applies (no ID or class)
5. **No** — it doesn't have the `.highlight` class

### Exercise 2 Answers:

1. **Form won't submit** — `type="email"` validates format, `required` prevents empty submission
2. **No** — `min="18"` prevents values below 18
3. **No** — Radio buttons with the same `name="plan"` are mutually exclusive (only one can be selected)
4. **`user_email`, `user_age`, `plan`, `terms`** — these are the `name` attributes
5. **`for`/`id` pairing** vs **nesting input inside label** — both work, nesting is shorter but `for`/`id` is more explicit

### Exercise 3 Answers:

1. **Navy** — `.card h2` targets h2 inside .card
2. **Black (default)** — no color rule targets this paragraph
3. **Green** — `.card .price` targets elements with class "price" inside .card
4. **Shadow appears** — `.card:hover` adds a box-shadow
5. **`.card h2`** = h2 elements INSIDE .card (descendant). **`.card.h2`** = elements with BOTH classes "card" AND "h2" (same element)

</details>
