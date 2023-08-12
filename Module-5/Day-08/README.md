# Day 8

## Coffee shop

Coffee shop with menu and online order system.

## Instructions

### Start project

- create new project with `npx create-next-app@latest <your project name>`
  - no typescript
  - use pages not app directory
- `npm i mongoose`
- `npm i @mui/material @emotion/react @emotion/styled`
- add our server folder from Day 7 (which has db.js and Listing.js)
- add a .env file with your database connection string
- delete the styles next has by default (global.css and Home.module.css)
- delete the root route to just have a header that says "Coffee Shop"
- `npm run dev`

### Create a menu

- create a new model (repurpose the Listing.js file) to hold your menu items
  - name
  - description
  - price
  - imageUrl (use a public url from the internet of whatever image you want)
- manually through compass add menu items to this collection
- create a new api route that will return all the menu items in the db
- on the root route (index), use your new api route to get all menu items and display them
  - use the grid system to display them in a grid: https://mui.com/material-ui/react-grid/
  - use the card component to display each menu item: https://mui.com/material-ui/react-card/#media
  - add a button to each card that says "Order"

### Order Model and route

- create a new mongoose model for Orders, it should have:
  - name
  - email
  - phone
  - address
  - menuItemId (the id of the menu item they ordered)
- create a new api route that will add a new order to the db

### Order something from the menu

- clicking the order button on a menu item should take you to a detail page specific to that menu item
  - the url should be something like `/menu/:id`
  - the id should be the id of the menu item in the db
- display the full details of this menu item on the page
  - you will need a new api route to get a menu item by id
- create a form on this page that takes the customers details:
  - name
  - email
  - phone
  - address
- when the form is submitted, it should send a post request to your new api route to add a new order to the db for the customer
- verify with compass that your order is in the db
