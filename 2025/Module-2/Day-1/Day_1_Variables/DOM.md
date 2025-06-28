an interface that allows us to interact with the web page dynamically. 

<html>
  <head><title>My Web Page</title></head>
  <body>
    <h1 id="main-heading">Welcome to My Web Page</h1>
    <p class="text">This is some text.</p>
    <p class="text">This is some text.</p>
    <p class="text">This is some text.</p>
  </body>
</html>



Document
 └── HTML
      ├── Head
      │    └── Title
      └── Body
           ├── H1
           └── P


We interact with the DOM in JavaScript using the DOM API (Application Programming Interface).

let heading = document.getElementById("main-heading");  // Selects the element with id="main-heading"
let paragraphs = document.getElementsByClassName("text");  // Selects all elements with class="text"
