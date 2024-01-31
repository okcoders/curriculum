# Day 4

## Exercise

### Mongodb

- import dataset: https://github.com/neelabalan/mongodb-sample-dataset/blob/main/sample_airbnb/listingsAndReviews.json
  - in atlas, create a new database called airbnb, also create a collection called listingsAndReviews
  - import the json file into the collection
- answer the following questions:
  - how many listings have at least 5 bedrooms?
  - how many listings are less than $100 per night?
  - how many listing are for "Entire home/apt"?
  - when was the first review and for which \_id?
  - how many listings are there where the host is a superhost?

### Quick intro to mongoose

- database connection
- schema creation
- methods similar to ones in mongodb (e.g find, findOne, findById, etc)

### Nextjs

- create a new nextjs app, then cd into it
- npm i mongoose
- add .env file from here
- add schema file from here
- add db file from here
- add api file from here
- fill out the schema file to match the airbnb dataset
- fill out the db file to connect to your atlas db
- fill out the api file to return the listingsAndReviews collection, where the price is less than $100, only return the first 10 results, sorted by last review date descending
- display the results in a table or card in your app
