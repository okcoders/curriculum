# Week 1 Debug Exercise: HTML Structure

**Instructions:** Find and fix all the bugs in this HTML. Don't use AI — use your eyes and browser DevTools.

---

## The Broken Code

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <div>
    <h1>Welcome<h1>
    <p>This is my site
    <img src="photo.jpg">
    <ul>
      <li>Item one
      <li>Item two</li>
    <ul>
    <a href="about.html">Learn more<a>
  </div
</body>
</html>
```

---

## Your Task

1. Copy this code into a new `.html` file
2. Open it in your browser
3. Find all 7 bugs
4. Fix them one by one
5. Verify each fix in the browser

---

## Hints

- Look at every closing tag
- Check for missing attributes
- Use browser DevTools (right-click → Inspect) to see how the browser interprets broken HTML

---

<details>
<summary><strong>Click to reveal answers (try first!)</strong></summary>

### Bugs Found:

1. **Line 8:** `<h1>` closing tag missing slash → `</h1>`
2. **Line 9:** `<p>` tag never closed → add `</p>`
3. **Line 10:** `<img>` missing `alt` attribute → `<img src="photo.jpg" alt="Description">`
4. **Line 12:** First `<li>` never closed → add `</li>`
5. **Line 14:** Closing `<ul>` missing slash → `</ul>`
6. **Line 15:** Closing `<a>` missing slash → `</a>`
7. **Line 16:** Closing `</div` missing `>` → `</div>`

### Fixed Code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <div>
    <h1>Welcome</h1>
    <p>This is my site</p>
    <img src="photo.jpg" alt="A photo">
    <ul>
      <li>Item one</li>
      <li>Item two</li>
    </ul>
    <a href="about.html">Learn more</a>
  </div>
</body>
</html>
```

</details>
