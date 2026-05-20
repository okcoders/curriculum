# Week 3 Debug Exercise: Flexbox & Layout

**Instructions:** Find and fix all the bugs. Don't use AI — use browser DevTools.

---

## The Broken Code

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    /* Why won't items center vertically? */
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #333;
      color: white;
    }
    
    /* Why won't cards wrap to next row? */
    .cards {
      display: flex;
      gap: 20px;
      padding: 20px;
    }
    .card {
      width: 300px;
      padding: 20px;
      background: #eee;
    }
    
    /* Why is sidebar not next to content? */
    .layout {
      display: flex;
    }
    .sidebar {
      width: 200px;
      background: #ddd;
      padding: 20px;
      position: absolute;
    }
    .content {
      flex: 1;
      padding: 20px;
    }
  </style>
</head>
<body>
  <nav class="nav">
    <div class="logo">MyBrand</div>
    <div class="links">
      <a href="#">Home</a>
      <a href="#">About</a>
    </div>
  </nav>
  
  <div class="cards">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
  </div>
  
  <div class="layout">
    <aside class="sidebar">Sidebar</aside>
    <main class="content">Main Content</main>
  </div>
</body>
</html>
```

---

## Your Task

1. Copy this code into a new `.html` file
2. Open in browser and resize window to test
3. Find all 3 bugs
4. Fix and verify

---

## Hints

- Look at the nav height — is there any?
- Make browser window narrow — do cards wrap?
- Is the sidebar actually next to the content?

---

<details>
<summary><strong>Click to reveal answers (try first!)</strong></summary>

### Bugs Found:

1. **Nav items don't center vertically** — The nav has no height! `align-items: center` needs a container height to center against.
   - Fix: Add `padding: 15px 20px;` or `min-height: 60px;` to `.nav`

2. **Cards don't wrap to next row** — Flexbox defaults to `flex-wrap: nowrap`, so items shrink or overflow instead of wrapping.
   - Fix: Add `flex-wrap: wrap;` to `.cards`

3. **Sidebar not next to content** — `position: absolute` removes the sidebar from the normal document flow, so flexbox can't arrange it.
   - Fix: Remove `position: absolute;` from `.sidebar`

### Fixed Code:

```html
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #333;
    color: white;
    padding: 15px 20px;  /* FIXED: Added height via padding */
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;  /* FIXED: Allow wrapping */
    gap: 20px;
    padding: 20px;
  }
  .card {
    width: 300px;
    padding: 20px;
    background: #eee;
  }
  
  .layout {
    display: flex;
  }
  .sidebar {
    width: 200px;
    background: #ddd;
    padding: 20px;
    /* FIXED: Removed position: absolute */
  }
  .content {
    flex: 1;
    padding: 20px;
  }
</style>
```

</details>
