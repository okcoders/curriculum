# Week 4 Read the Code: Responsive & Bootstrap

**Instructions:** Answer the questions WITHOUT running the code.

---

## Exercise 1: Media Query Breakpoints

```html
<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  @media (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>

<div class="grid">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Questions:

1. How many columns at 500px screen width?
2. How many columns at 800px screen width?
3. How many columns at 1200px screen width?
4. What does `1fr` mean?
5. Is this mobile-first or desktop-first? How can you tell?

---

## Exercise 2: Decode Bootstrap Classes

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">Card 1</div>
    <div class="col-12 col-md-6 col-lg-4">Card 2</div>
    <div class="col-12 col-md-6 col-lg-4">Card 3</div>
  </div>
</div>

<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#nav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Questions:

1. At 400px width, how many cards per row?
2. At 800px width, how many cards per row?
3. At 1200px width, how many cards per row?
4. At what screen width does the navbar show the hamburger menu?
5. What does `ms-auto` do to the nav links?
6. What does `navbar-expand-lg` mean?

---

## Exercise 3: Mobile-First vs Desktop-First

```css
/* Version A */
.sidebar {
  display: none;
}
@media (min-width: 768px) {
  .sidebar {
    display: block;
    width: 250px;
  }
}

/* Version B */
.sidebar {
  display: block;
  width: 250px;
}
@media (max-width: 767px) {
  .sidebar {
    display: none;
  }
}
```

### Questions:

1. Do Version A and Version B produce the same result?
2. Which one is "mobile-first"? Why?
3. Which approach does Bootstrap use?

---

## Exercise 4: CSS Grid Layout

```html
<style>
  .layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
    min-height: 100vh;
  }
  .header { grid-area: header; background: #333; color: white; }
  .sidebar { grid-area: sidebar; background: #ddd; }
  .main { grid-area: main; }
  .footer { grid-area: footer; background: #333; color: white; }
</style>

<div class="layout">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main Content</main>
  <footer class="footer">Footer</footer>
</div>
```

### Questions:

1. How wide is the sidebar?
2. What takes up the remaining width?
3. Does the header span both columns or just one?
4. What does `1fr` do for the middle row?
5. If the screen is very narrow, will this layout cause horizontal scrolling? Why?

---

## Exercise 5: Bootstrap Utilities

```html
<div class="d-none d-md-block">Desktop only</div>
<div class="d-block d-md-none">Mobile only</div>
<div class="d-flex justify-content-between align-items-center p-3 bg-light">
  <span>Left</span>
  <span>Right</span>
</div>
<div class="mt-4 mb-2 px-3">Spaced content</div>
```

### Questions:

1. When is "Desktop only" visible?
2. When is "Mobile only" visible?
3. Where does "Left" appear? Where does "Right" appear?
4. What does `mt-4 mb-2 px-3` translate to in spacing?

---

<details>
<summary><strong>Click to reveal answers</strong></summary>

### Exercise 1 Answers:

1. **1 column** — Below 768px, only the base rule applies
2. **2 columns** — 768px+ triggers first media query
3. **3 columns** — 1024px+ triggers second media query
4. **1 fraction of available space** — `1fr` divides remaining space equally
5. **Mobile-first** — Uses `min-width` (styles apply as screen gets LARGER)

### Exercise 2 Answers:

1. **1 card per row** — `col-12` = full width (12/12 columns)
2. **2 cards per row** — `col-md-6` = half width at medium+ (6/12 columns)
3. **3 cards per row** — `col-lg-4` = third width at large+ (4/12 columns)
4. **Below 992px (lg breakpoint)** — `navbar-expand-lg` means expanded AT lg and above
5. **Pushes nav links to the right** — `ms-auto` = margin-start auto (margin-left in LTR)
6. **Navbar is collapsed (hamburger) below lg, expanded at lg+**

### Exercise 3 Answers:

1. **Yes** — Both hide sidebar on mobile, show on tablet+
2. **Version A** — It uses `min-width` and starts with mobile styles (display: none)
3. **Mobile-first** — Bootstrap uses `min-width` media queries

### Exercise 4 Answers:

1. **250px** — Fixed width from `grid-template-columns: 250px 1fr`
2. **Main content** — `1fr` takes all remaining space
3. **Both columns** — `"header header"` spans both
4. **Takes all available vertical space** — Pushes footer to bottom
5. **Yes** — The 250px sidebar is fixed, won't shrink on narrow screens

### Exercise 5 Answers:

1. **768px and wider (md+)** — `d-none` hides by default, `d-md-block` shows at md+
2. **Below 768px** — `d-block` shows by default, `d-md-none` hides at md+
3. **Left on far left, Right on far right** — `justify-content-between` with flexbox
4. **margin-top: 1.5rem, margin-bottom: 0.5rem, padding-left/right: 1rem** — Bootstrap spacing scale (4=1.5rem, 2=0.5rem, 3=1rem)

</details>
