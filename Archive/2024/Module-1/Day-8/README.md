Today you are building your own coffee shop! Below are some details to get you going, but feel free to get creative and add your own flair to the project.

### **Planning**

- Decide what you want the site to look like, pull inspiration from other coffee shop websites, like https://elementalcoffee.com/

### **Project Setup**

#### **1. Organizing Your Workspace**
- **Create a Project Folder**: Name it something relevant, like `CoffeeShopSite`.
- **Subfolders**: Inside your main folder, create subfolders: `css` for your stylesheets, `images` for your pictures, and `pages` for HTML files.

#### **2. Creating Your Base Files**
- **HTML**: Start with an `index.html` file. This will be your homepage.
- **CSS**: Create a `styles.css` file inside the `css` folder. This file will contain all your custom styling.

### **Building the Website**

#### **3. Structuring Your HTML**
- **DOCTYPE Declaration**: At the top of your `index.html`, declare `<!DOCTYPE html>` to specify the HTML version.
- **HTML Structure**: Use `<html>`, `<head>`, and `<body>` tags to structure your document.
- **Linking CSS**: Inside the `<head>`, link your CSS file with `<link rel="stylesheet" href="css/styles.css">`.

#### **4. The Navbar and Footer (Common Elements)**
- **Navbar**: Use the `<nav>` tag. Inside, create a list `<ul>` with list items `<li>` for navigation links (Home, Menu/Shop, About Us, Contact). Include a logo and shopping cart icon using https://fontawesome.com/ (you will need to sign up for a free account)
- **Footer**: Use the `<footer>` tag to include your coffee shop's address, social media links (use `<a>` tags for links), and an "About Us" link.

### **5. Home Page**
- **Header**: Implement a `<header>` section with a large background image. Use CSS to set the image as a background of the header. Overlay this with your brand title and slogan using `<h1>` and `<p>` tags, respectively.
- **Calls to Action**: Create buttons or links that lead to other pages of the site. Style these prominently with CSS, making them large and clickable.

### **6. Contact Form Page**
- **Form Structure**: Use the `<form>` tag to create fields for the name, email, and message. Use `<input>` tags for name and email, and `<textarea>` for the message. Include a submit button with `<input type="submit">`.
- **Form Styling**: Style the form in your CSS to make it align with your site's aesthetics. Ensure the form inputs and button are easy to interact with and visually appealing.

### **7. Menu/Shop Page**
- **Side Navigation**: Create a vertical navigation menu on the left side of the screen using `<nav>` and a list. Use anchors (`<a>`) within list items (`<li>`) to link to the different sections of the menu (e.g., #hot-drinks).
- **Menu Sections**: For each menu section (Hot Drinks, Cold Drinks, etc.), use `<section>` tags with appropriate IDs. Display menu items as "cards" using `<div>` tags. Each card should include an image, the item's name, and price. Use CSS to style these cards, possibly adding shadows for depth.

### **8. About Us Page**
- **Article**: Write a brief article about the inspiration behind your coffee shop. Use `<article>` or `<section>` tags to mark up your content. Even if you use Lorem Ipsum text, ensure it is well-structured with headings (`<h2>`, `<h3>`) and paragraphs (`<p>`).

### **9. Styling and Responsive Design**
- **CSS Basics**: Use CSS to style your text, set your color scheme, and layout your pages. Utilize classes and IDs to apply styles to specific elements.
- **Flexbox/Grid**: Use CSS Flexbox or Grid to create layouts for your pages, especially for the menu items and the positioning of the navbar and footer.


### **Final Touches**
- **Polish**: Look for any design inconsistencies or areas that could be improved for a better user experience.
- **Feedback**: Share your project with peers or instructors for constructive feedback.