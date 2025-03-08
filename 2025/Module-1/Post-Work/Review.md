### Module 1 Overview: HTML & CSS Fundamentals

#### Day 2: HTML Basics

- **Introduction to HTML:**
  - HTML (HyperText Markup Language) is the standard markup language for creating web pages. It structures web content.
  - **Sample Code:**
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
    </body>
    </html>
    ```

- **Displaying Content:**
  - Learn how to display different types of content on the web, including text, images, videos, and audio.
  - **Sample Code for Image:**
    ```html
    <img src="image.jpg" alt="Descriptive Text">
    ```

- **Developer Tools and Documentation:**
  - Introduction to using browser developer tools to inspect and debug HTML and CSS.

#### Day 3: Introduction to CSS

- **Applying CSS Styles:**
  - CSS (Cascading Style Sheets) is used for styling HTML elements. Styles can be applied inline, internally within a `<style>` tag, or externally through a linked stylesheet.
  - **External CSS Sample:**
    ```html
    <link rel="stylesheet" href="styles.css">
    ```

- **CSS Selectors and Properties:**
  - Learn about different selectors (ID, class, element) and common properties like `width`, `height`, and `color`.
  - **Sample Code:**
    ```css
    p {
        color: blue;
        margin: 20px;
    }
    ```

#### Day 4: Replicating a Contact Form

- **Analysis and Setup:**
  - Study a reference contact form and replicate its structure and styling.
  - **HTML Structure Sample:**
    ```html
    <form action="submit_form.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <input type="submit" value="Submit">
    </form>
    ```

#### Day 5: The Box Model

- **Box Model Concept:**
  - The box model is a CSS concept critical for layout design, comprising margin, border, padding, and content.
  - **CSS Box Model Sample:**
    ```css
    .box {
        width: 300px;
        padding: 10px;
        border: 5px solid gray;
        margin: 10px;
    }
    ```

#### Day 6: Flexbox

- **Flex Container and Items:**
  - Flexbox is a CSS layout model for aligning elements in rows or columns within a container.
  - **Flexbox Sample:**
    ```css
    .container {
        display: flex;
        justify-content: space-around;
    }
    ```

- **Flexbox Alignment and Wrapping:**
  - Use `justify-content`, `align-items`, and `flex-wrap` to control the layout.
  - **Sample Code:**
    ```css
    .container {
        display: flex;
        flex-wrap: wrap;
    }
    ```

#### Day 7: Positioning and Multi-Page Setup

- **Positioning Types:**
  - Understanding how different positioning types (`static`, `relative`, `absolute`, `fixed`, `sticky`) affect element layout.
  - **Sample Code for Relative Positioning:**
    ```css
    .element {
        position: relative;
        top: 10px;
        left: 20px;
    }
    ```

- **Multi-Page Websites:**
  - Techniques for linking multiple HTML pages to create a multi-page website.
  - **Sample Code for Linking:**
    ```html
    <a href="about.html">About Us</a>
    ```