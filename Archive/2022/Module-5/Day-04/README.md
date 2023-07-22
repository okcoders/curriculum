# Day 4

## Workshop

### Create a mongodb atlas database

- https://www.mongodb.com/docs/atlas/getting-started/
- when it says add your ip to the whitelist, just change it to allow any ip for now

### Get Project Running

- download the zip of this [template](https://github.com/okcoders/express-starter-template) from github to a location on your computer
- follow the instructions in the README of the template to get it running

### Copy where we left off from class

- copy the book.js model file to the server/db/models folder
- copy the books.js route file to the server/routes folder
- update the import in the books.js route file to correctly import the book.js model file
- update app.js to include your new routes in the api
- verify with postman you can hit the book api routes with your local running server
- create a new book with postman (e.g hit the create book post route, using whatever sample data you want)
- verify you can get that book back (e.g it was added) with the main get route

## Add new Author model and routes

- create a new Author model, with whatever fields you think make sense (e.g name, genres, age, etc.)
- create a new authors route file, with all the same routes we had for books, but updated appropriately
- make sure to update your app.js to include these new routes
- verify your api works with postman

### Bonus

- get the create-react-app client running (from where we left off last class Day-03/client)
- start integrating the front-end with your api more (e.g hook the new authors api into the front-end)
