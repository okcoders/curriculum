# Day 4 - Coffee Shop v4 (Now with React)

I want you to create a new react app called coffee-shop-v4.

The page should consist of 4 main components:

-   Navbar.jsx
    -   with a button that when clicked opens the cart section.
    -   if you have time at the end: Add a cart icon for this button
-   Cart.jsx
    -   Listing out the name of each item in the cart and the quantity
    -   Displaying the total price of the cart
    -   A form that lets the user enter their information(first name, last name, address, phone number, card number)
    -   Submit Button. When the user presses the button we should
        -   Log the user's info as well as the total value of the cart items
        -   clear the form state
        -   clear the cart state
        -   don't show the cart section anymore
        -   show a banner that tells the user "Congratulations"
-   Menu.jsx
    -   Composed of MenuItem.jsx components
    -   Each MenuItem should display the item in a card that has a large image section on top and the item name and price below.
    -   Each MenuItem should also have a button that lets you 'Add to Cart'

## Your list of Menu Items

You will need to research and install the 'ulid' package to figure out how to create the id's for each component

```
const menu = [
  {
    id: ulid(),
    name: 'Bagels',
    price: '$5.00',
    img: 'https://source.unsplash.com/400x400/?bagels'
  },
  {
    id: ulid(),
    name: 'Muffins',
    price: '$3.50',
    img: 'https://source.unsplash.com/400x400/?muffins'
  },
  {
    id: ulid(),
    name: 'Hot Coffee',
    price: '$2.00',
    img: 'https://source.unsplash.com/400x400/?coffee'
  },
  {
    id: ulid(),
    name: 'Iced Coffee',
    price: '$3.00',
    img: 'https://source.unsplash.com/400x400/?icedcoffee'
  },
  {
    id: ulid(),
    name: 'Espresso',
    price: '$2.50',
    img: 'https://source.unsplash.com/400x400/?espresso'
  },
  {
    id: ulid(),
    name: 'Lattes',
    price: '$4.00',
    img: 'https://source.unsplash.com/400x400/?latte'
  }
];
```
