# Day 2

## Finish what we didn't get to on day 1

## Ensure setup is done for VSCode, Live Server, Chrome (or Arc)

## Curriculum

- how page is loaded
- anatomy of element
- head and body
- display content (text, images, videos, audio), input, navigation
- dev tools
- documentation
- exercise

### Setting up your First HTML Document

Explain what HTML is (HyperText Markup Language) and its role in creating web pages. Show how to create a basic HTML file.

```html
<!-- This is a comment in HTML -->
<!DOCTYPE html> <!-- This declaration defines the document to be HTML5 -->
<html>
<head>
    <title>My First HTML Page</title> <!-- The title of the document shown in browser tab -->
</head>
<body>
    <h1>Hello, World!</h1> <!-- A header element that is displayed on the web page -->
</body>
</html>
```

### Structure of an HTML Document

Discuss the two main sections of an HTML document: the `<head>` and the `<body>`. Explain the purpose of each section.

- **head**: Contains meta-information about the document, such as its title, links to stylesheets, and character encoding.
- **body**: Contains the content of the page that is displayed in the web browser.

Introduce additional structural elements.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <header> <!-- Website header with navigation links -->
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="home"> <!-- A section of the page -->
        <h2>Welcome to My Website</h2>
        <p>This is a paragraph of text in the home section.</p>
    </section>
    
    <footer> <!-- Footer of the website -->
        <p>Contact us at email@example.com</p>
    </footer>
</body>
</html>
```

### Basic HTML Elements

Introduce basic HTML elements with examples. Explain each tag briefly.

```html
<h1>Heading 1</h1> <!-- Largest heading -->
<h2>Heading 2</h2> <!-- Subheading -->
<p>This is a paragraph.</p> <!-- Paragraph text -->
<img src="image.jpg" alt="An example image"> <!-- Image tag with source and alt text -->
<a href="https://www.example.com">Visit Example</a> <!-- Link to another web page -->
<ul> <!-- Unordered list -->
    <li>List item 1</li>
    <li>List item 2</li>
</ul>
<ol> <!-- Ordered list -->
    <li>First item</li>
    <li>Second item</li>
</ol>
<form action="/submit-form" method="post"> <!-- Form for user input -->
    <input type="text" name="username">
    <input type="submit" value="Submit">
</form>
<table> <!-- Table structure -->
    <tr> <!-- Table row -->
        <th>Header 1</th> <!-- Table header -->
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td> <!-- Table data -->
        <td>Data 2</td>
    </tr>
</table>
```

### Inline vs. Block Element

Explain the difference between inline and block-level elements. Inline elements do not start on a new line and only take up as much width as necessary. Block-level elements start on a new line and take up the full width available.

- **Block Elements**: `<div>`, `<p>`, `<h1>`...`<h6>`
- **Inline Elements**: `<span>`, `<a>`, `<img>`

### Nesting

Show how elements can be nested inside one another and explain the importance of proper nesting.

```html
<div>
    <p>This paragraph is inside a div element. <a href="#">This is a link</a>.</p>
</div>
```

## Exercise if time

Try to re-create this [website](https://en.wikipedia.org/wiki/Tim_Berners-Lee)

## Additional Reading

- [Intro to html](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [All Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

## Homework

- spend a little time trying to re-create this [website](https://en.wikipedia.org/wiki/Tim_Berners-Lee)
- lookup the html video tag. See if you can embed a video from your computer
- learn [css](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-basic-css-by-building-a-cafe-menu/step-1)