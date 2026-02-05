# Week 1 Read the Code: HTML Structure

**Instructions:** Answer the questions WITHOUT running the code. This tests if you can read and understand HTML.

---

## Exercise 1: Pet Store Page

```html
<!DOCTYPE html>
<html>
<head>
  <title>Pet Store</title>
</head>
<body>
  <header>
    <h1>Paws &amp; Claws</h1>
    <nav>
      <a href="#dogs">Dogs</a>
      <a href="#cats">Cats</a>
    </nav>
  </header>
  <main>
    <section id="dogs">
      <h2>Dogs</h2>
      <ul>
        <li>Golden Retriever</li>
        <li>Poodle</li>
      </ul>
    </section>
    <img src="puppy.jpg" alt="A cute golden retriever puppy">
  </main>
  <footer>
    <p>&copy; 2025 Paws &amp; Claws</p>
  </footer>
</body>
</html>
```

### Questions:

1. What text appears in the browser tab?
2. What does `&amp;` display as?
3. Where does the "Dogs" link go when clicked?
4. What appears if `puppy.jpg` fails to load?
5. What's the difference between `<header>` and `<h1>`?

---

## Exercise 2: Article Structure

```html
<article>
  <h2>How to Train Your Dog</h2>
  <p>Training takes <strong>patience</strong> and <em>consistency</em>.</p>
  <ol>
    <li>Start with basic commands</li>
    <li>Use positive reinforcement</li>
    <li>Practice daily</li>
  </ol>
  <a href="https://example.com" target="_blank">Learn more</a>
</article>
```

### Questions:

1. What's the difference between `<ol>` and `<ul>`?
2. How will "patience" look different from "consistency"?
3. What does `target="_blank"` do?
4. Why use `<article>` instead of `<div>`?

---

<details>
<summary><strong>Click to reveal answers</strong></summary>

### Exercise 1 Answers:

1. **"Pet Store"** — the `<title>` content shows in the browser tab
2. **&** (ampersand) — `&amp;` is the HTML entity for &
3. **Scrolls to the section with `id="dogs"`** — the `#dogs` is an anchor link
4. **"A cute golden retriever puppy"** — the `alt` text displays when images fail
5. **`<header>` is a container/section**, `<h1>` is a heading. Header can contain multiple elements including the h1, nav, logo, etc.

### Exercise 2 Answers:

1. **`<ol>` is numbered (1, 2, 3), `<ul>` is bulleted**
2. **"patience" is bold** (`<strong>`), **"consistency" is italic** (`<em>`)
3. **Opens the link in a new tab/window**
4. **`<article>` is semantic** — it tells browsers/screen readers this is self-contained content. `<div>` has no meaning.

</details>
