# Week 4 Debug Exercise: Responsive & Bootstrap

**Instructions:** Find and fix all the bugs. Don't use AI — use browser DevTools and resize your window.

---

## The Broken Code

```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .hero {
      height: 100vh
      display: grid;
      place-items: center;
      background: #f0f0f0;
    }
    
    /* Why doesn't this work on mobile? */
    @media (max-width: 768) {
      .hero { height: 50vh; }
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Welcome</h1>
  </div>
  
  <!-- Why don't these stack on mobile? -->
  <div class="container">
    <div class="row">
      <div class="col-6">Left</div>
      <div class="col-6">Right</div>
    </div>
  </div>
  
  <!-- Why doesn't navbar collapse? -->
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Brand</a>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## Your Task

1. Copy this code into a new `.html` file
2. Open in browser
3. Resize window to mobile size (~400px)
4. Find all 4 bugs
5. Fix and test at multiple screen sizes

---

## Hints

- Check the CSS syntax carefully — missing anything?
- Media queries need units
- Bootstrap columns need responsive classes to stack
- Bootstrap navbar toggler needs data attributes

---

<details>
<summary><strong>Click to reveal answers (try first!)</strong></summary>

### Bugs Found:

1. **Missing semicolon** — Line `height: 100vh` needs a semicolon before `display: grid`
   - Fix: `height: 100vh;`

2. **Media query missing `px` unit** — `(max-width: 768)` is invalid
   - Fix: `(max-width: 768px)`

3. **Columns don't stack on mobile** — `col-6` means "always 6 columns" regardless of screen size
   - Fix: `col-12 col-md-6` (full width on mobile, half on medium+)

4. **Navbar toggler doesn't work** — Missing `data-bs-toggle` and `data-bs-target` attributes
   - Fix: Add `data-bs-toggle="collapse" data-bs-target="#navMenu"` to the button

### Fixed Code:

```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .hero {
      height: 100vh;  /* FIXED: Added semicolon */
      display: grid;
      place-items: center;
      background: #f0f0f0;
    }
    
    @media (max-width: 768px) {  /* FIXED: Added px unit */
      .hero { height: 50vh; }
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Welcome</h1>
  </div>
  
  <div class="container">
    <div class="row">
      <!-- FIXED: Added col-12 for mobile -->
      <div class="col-12 col-md-6">Left</div>
      <div class="col-12 col-md-6">Right</div>
    </div>
  </div>
  
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Brand</a>
      <!-- FIXED: Added data attributes -->
      <button class="navbar-toggler" type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        </ul>
      </div>
    </div>
  </nav>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

</details>
