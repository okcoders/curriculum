# Day 8

## A CLI coffee shop, that knows the weather!

- This is a combination of the CLI library, and our web based coffee shop, along with use of the weather api

You will need the following:

- an account and api key from https://weatherapi.com
- code from Day 7 weather.js
- code from Day 5 library.js

### Foundation

- copy over the library program from the previous day
- delete or rename any code that is no longer relevant for the coffee shop (e.g. the `add` command), you mainly just want to re-use the prompt() function

### List Menu

- create an array of objects, each object should have a name, price, and description for a menu item
- create a function that will list the menu items, the description, and their prices
- hook this function up the the cli/prompt

### Order

- create a function that will add an item to the customers order (order would be an array stored in global state)

### Checkout

- create a function that will calculate the total price of the order, and the total items in their order, and show that to the user

### Suggest

- create a function that will suggest an item to the customer based on the current weather (perhaps iced coffee if it is hot?), allow the customer to input their location.

### Future Suggest

- create a function that will suggest an item to the customer based on the weather in the future (perhaps hot coffee if it is going to be rainy?), allow the customer to input their location, and a time in the future. You will need to use the forecast api from weatherapi.com

### Bonus

- read the below, try to incorporate some of the ideas into your program

https://medium.com/@manavshrivastava/lets-build-a-cli-command-line-interface-with-node-js-d3b5faacc5ea
