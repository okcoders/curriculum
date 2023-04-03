# Garage Sale

The strategy used to make and handle updates to this page is similar to the one used in [reactjs](https://reactjs.org/). Notice we have data, and whenever we change the data, we "render" the page. The render method is called whenever we change our data, and the page is then appropriately updated. For example, when we add something to our shopping cart, we render the page again, and the render method checks to see if an item is in the cart when rendering it in order to show the appropriate button (add to cart, or remove from cart)

Also note, I used for loops over some of the more advanced methods that we will use later (filter, includes, etc.)

Note with this style of rendering the page over again, we get some flickering of the page. That will be fixed when we start using react.