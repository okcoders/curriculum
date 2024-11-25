## Resources to help:

- prisma docs
- nextjs docs

## TODO app

Let's get out of coffee-shop world, and build a classic Hello World app: a TODO app.

### Copy starter template

- copy the starter template to your machine
- cd to it
- run `npm install`
- run `npm run db:push`
- run `npm run dev`

### Update schema

- update the schema to include a `Todo` model
- think about what attributes this model needs. This will be the only model in the app
- once you are done, run `npm run db:push` to update the database

### Create some seed data

- update the `seed.js` file to create some existing todo items in the db
- run `npm run db:seed` to seed the db
- in a separate terminal, run `npm run db:studio` to see the data in the db

### Create a route

- create a new route in the `pages/api` folder to get your todos
- this should be a get requests that gets all todos from the db

### Create a page

- on the root route, create a page that displays all the todos

### Mark todos as complete

- add a button to each todo that marks it as complete
- when a todo is marked as complete, it should be updated in the db
- to do this you will need a put route

### Add a toggle to show only open/non-completed todos

- at the top of the page should be a switch/toggle that changes your view settings to only show open todos

### Bonus items

- create a form to add a new todo
- add search functionality to search through todos by name
- add a delete button to each todo
- sort todos by last updated
- add pagination (and seed your db with a lot of todos)