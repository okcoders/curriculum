# Week 3 Read the Code: Flexbox & Layout

**Instructions:** Answer the questions WITHOUT running the code.

---

## Exercise 1: Flexbox Navbar

```html
<style>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    background: #333;
    padding: 0 20px;
  }
  .logo { color: white; font-size: 24px; }
  .nav { display: flex; gap: 20px; }
  .nav a { color: white; }
</style>

<div class="container">
  <div class="logo">MyBrand</div>
  <nav class="nav">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</div>
```

### Questions:

1. Where is "MyBrand" positioned (left, center, or right)?
2. Where are the nav links positioned?
3. Are the nav links stacked vertically or horizontally?
4. What does `gap: 20px` do?
5. Why is `align-items: center` needed here?

---

## Exercise 2: Box Model Math

```html
<style>
  .box-a {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
  }
  .box-b {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
    box-sizing: border-box;
  }
</style>

<div class="box-a">Box A</div>
<div class="box-b">Box B</div>
```

### Questions:

1. What's the total width of Box A? (show your math)
2. What's the total width of Box B?
3. What's the content width inside Box B?
4. Do the margins affect the box width calculation?

---

## Exercise 3: Positioning

```html
<style>
  .parent {
    position: relative;
    width: 400px;
    height: 300px;
    background: lightgray;
  }
  .child {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 50px;
    background: coral;
  }
</style>

<div class="parent">
  <div class="child">I'm here</div>
</div>
```

### Questions:

1. Where does the coral box appear inside the gray box?
2. What would happen if `.parent` didn't have `position: relative`?
3. What would change if we used `top: 0; left: 0;` instead?

---

## Exercise 4: Flexbox Alignment

```html
<style>
  .row {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .row-between {
    display: flex;
    justify-content: space-between;
  }
  .row-end {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  .box { 
    width: 100px; 
    height: 100px; 
    background: steelblue; 
  }
</style>

<div class="row">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>

<div class="row-between">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>

<div class="row-end">
  <div class="box">1</div>
  <div class="box">2</div>
</div>
```

### Questions:

1. In `.row`, where are the three boxes positioned?
2. In `.row-between`, where is box 1? Where is box 3?
3. In `.row-end`, where are the two boxes positioned?
4. What's the difference between `justify-content` and `align-items`?

---

<details>
<summary><strong>Click to reveal answers</strong></summary>

### Exercise 1 Answers:

1. **Left** — `justify-content: space-between` pushes first item to the left edge
2. **Right** — space-between pushes last item to the right edge
3. **Horizontally** — `.nav` is also a flex container with default `flex-direction: row`
4. **Adds 20px space between each nav link** — gap is the spacing between flex items
5. **Centers items vertically** — without it, items would align to the top of the 80px container

### Exercise 2 Answers:

1. **250px** — 200px (width) + 40px (padding: 20×2) + 10px (border: 5×2) = 250px
2. **200px** — `box-sizing: border-box` includes padding and border IN the width
3. **150px** — 200px - 40px (padding) - 10px (border) = 150px for content
4. **No** — margin is OUTSIDE the box, doesn't affect the box's width

### Exercise 3 Answers:

1. **Bottom-right corner** — `bottom: 0` and `right: 0` position it at the bottom-right
2. **Child would position relative to the viewport** (or nearest positioned ancestor), not the parent
3. **Top-left corner** — the coral box would be in the top-left of the gray box

### Exercise 4 Answers:

1. **Centered horizontally** — `justify-content: center` groups items in the middle
2. **Box 1 on far left, Box 3 on far right** — space-between puts max space between items
3. **Right side** — `flex-end` pushes items to the end (right for row direction)
4. **`justify-content`** = main axis (horizontal for row). **`align-items`** = cross axis (vertical for row)

</details>
