
# Work Day

Our goal to day is to build an app that uses all the CRUD operations, which will be achievable by fleshing out the checkout experience for our coffee shop. 

## Cart

### Add to cart - TODO #1

- Add a menu item to the cart from the menu page. We have this functionality already, but there is a bug. We can add the same item multiple times. To fix this, whenever someone tries to add the same item to the cart, we should increment the quantity of that item in the cart, rather than adding a new item. There is a method in the db called `db.cart.updateById` that takes an id and the new quantity to set the item to. Use this method to update the quantity of an item in the cart if it already exists.

### Finish Remove from cart - TODO #2

- We have a remove button for each cart item, but pressing it does not make the page change. You need to update the state of the page to match what is now in the db. We also want to show the user an alert that we have removed the item from the cart. You can use the `window.alert` function to show an alert to the user.

### Update cart - TODO #3

- From the cart page, we want to be able to update the quantity of an item in the cart. For each cart item, add a button that says increment, and one that says decrement. Pressing the button should increment or decrement the quantity of that item in the cart. If quantity is 1, you should not be able to click the decrement button.

## Checkout

### Submit order - TODO #4

- create a form that takes the users first name, last name, and email
- add a button that says "Submit Order", that when clicked sends a POST request to the server with the user information
- You will need to make a new api endpoint for orders. There is a `db.orders.add` method available to you in the db.

## Bonus - TODO #5

Let's allow a user to search the menu. Add a search bar to the menu page that allows a user to search for a menu item by name. As they type, the menu should filter to only show items that match the search query, e.g if I've typed mocha, the menu should only show items that have mocha in the name.