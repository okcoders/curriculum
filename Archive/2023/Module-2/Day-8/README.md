# Coffee Shop 2.5

We are going to make a simple, single page coffee shop that has a menu and a shopping cart. We are not going for visual appeal, just mastery of js concepts. If you get done early, you can try to make the shop look better.

## Requirements:

Create an HTML file with a basic structure, including a DOCTYPE declaration, html, head, and body elements.

Add a title to your webpage using the title tag inside the head section.

Add an external CSS file and an external JavaScript file to your HTML file. Link these files using the link tag for the CSS file and the script tag for the JavaScript file.

In your HTML file, create a div with an ID of "menu" to display the menu items and another div with an ID of "shopping-cart" to display the shopping cart summary.

In your JavaScript file, create an array of objects called menuItems representing the menu items in your coffee shop. Each object should have the following properties:

Name (string)
Description (string)
Price (number)

Create a function called displayMenuItems() that loops through the menuItems array and dynamically creates a card for each menu item. Each card should include the name, description, and price of the item, as well as a "Add to Cart" button. Append the cards to the "menu" div.

Create a function called addToCart() that will be triggered when the user clicks the "Add to Cart" button on a menu card. This function should do the following:

Add the selected menu item to the shopping cart
Update the shopping cart summary in the "shopping-cart" div
Create a function called displayShoppingCart() that updates the content of the "shopping-cart" div with the current items in the shopping cart, displaying their name, price, and total price of the order.

When the page loads, call the displayMenuItems() function to display the menu items on the page.

Add event listeners to the "Add to Cart" buttons, so that when the user clicks one, the addToCart() function is triggered.

Tips:

Use the createElement(), appendChild(), and other DOM manipulation methods to create and display the menu cards and shopping cart content.
You can use getElementById(), querySelector(), or other DOM manipulation methods to access and manipulate elements in your JavaScript file.
Use the addEventListener() method to attach event listeners to your "Add to Cart" buttons.

## Pt. 2

Extend the functionality of the Coffee Shop 2.5 project by implementing a discount system using if statements (branching).

Requirements:

Modify the menuItems array of objects to include a new property: discount (number, between 0 and 1, representing the discount percentage). Not all menu items need to have a discount.

Update the displayMenuItems() function to show the discounted price (if applicable) on the menu card for each item. Use if statements to check whether a discount is available for a particular menu item. If a discount is available, display the original price with a strikethrough and the discounted price next to it.

Modify the addToCart() function to consider the discount when adding an item to the shopping cart. Use if statements to check if there's a discount available for the selected item. If there is, apply the discount to the price before adding it to the shopping cart.

Update the displayShoppingCart() function to display the discounted price (if applicable) for each item in the shopping cart. Use if statements to check whether a discount is available for a particular item in the shopping cart. If a discount is available, display the original price with a strikethrough and the discounted price next to it.

Tips:

To calculate the discounted price, you can use the following formula: discountedPrice = originalPrice \* (1 - discount)
To display a strikethrough on the original price, wrap it in a <del> HTML tag.
