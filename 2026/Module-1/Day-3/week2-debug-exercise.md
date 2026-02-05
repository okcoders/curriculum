# Week 2 Debug Exercise: Forms & CSS Basics

**Instructions:** Find and fix all the bugs. Don't use AI — use browser DevTools.

---

## The Broken Code

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Why doesn't .btn turn red? */
    #form .btn { color: blue; }
    .btn { color: red; }
    
    /* Why is input 250px wide, not 200px? */
    input {
      width: 200px;
      padding: 20px;
      border: 5px solid gray;
    }
  </style>
</head>
<body>
  <form id="form">
    <label>Name</label>
    <input type="text" placeholder="Enter name">
    
    <label>Email</label>
    <input type="text" name="email">
    
    <input type="checkbox"> Subscribe
    
    <button class="btn">Submit</button>
  </form>
</body>
</html>
```

---

## Your Task

1. Copy this code into a new `.html` file
2. Open it in your browser
3. Find all 6 bugs (2 CSS, 4 HTML)
4. Fix them and verify in browser

---

## Hints

- Open DevTools → Inspect the button → look at computed styles
- Check the input's actual width in DevTools
- Think about accessibility — can a screen reader understand this form?
- Click on "Subscribe" text — does it check the box?

---

<details>
<summary><strong>Click to reveal answers (try first!)</strong></summary>

### Bugs Found:

**CSS Bugs:**
1. **Button stays blue, not red** — ID selector (`#form .btn`) beats class selector (`.btn`). ID has higher specificity.
   - Fix: `#form .btn { color: red; }` or remove the ID selector
   
2. **Input is 250px, not 200px** — Default `box-sizing` is `content-box`, so padding (40px) + border (10px) add to width.
   - Fix: Add `box-sizing: border-box;` to input

**HTML/Form Bugs:**
3. **Labels not linked to inputs** — Missing `for` and `id` attributes. Screen readers can't associate them.
   - Fix: `<label for="name">` + `<input id="name">`
   
4. **Email input is `type="text"`** — Won't validate email format.
   - Fix: `type="email"`
   
5. **Checkbox label not clickable** — Text "Subscribe" isn't inside or linked to the checkbox.
   - Fix: Wrap in label: `<label><input type="checkbox"> Subscribe</label>`
   
6. **Button missing `type="submit"`** — May not submit form in all browsers.
   - Fix: `<button type="submit" class="btn">Submit</button>`

### Fixed Code:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    #form .btn { color: red; }
    
    input {
      width: 200px;
      padding: 20px;
      border: 5px solid gray;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  <form id="form">
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="Enter name">
    
    <label for="email">Email</label>
    <input type="email" id="email" name="email">
    
    <label>
      <input type="checkbox"> Subscribe
    </label>
    
    <button type="submit" class="btn">Submit</button>
  </form>
</body>
</html>
```

</details>
