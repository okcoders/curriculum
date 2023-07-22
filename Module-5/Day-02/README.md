# Day 2

- what is express
  - most popular nodejs server framework
- what is nextjs
  - now recommended framework for react (react is changing significantly with 'server components')
  - borrows patterns from express
  - bundles client and server into one app
  - gives us modern js features (es6 modules, etc.)
  - super easy to deploy
  - makes a lot of decisions (file based routing is the big one)

## Nextjs

`npx create-next-app@latest <your-app-name>`
Typescript: No
Eslint: Yes
TailwindCSS: No
src directory: Yes
App router: No (app router is the thing that brings some big changes to react, we are not ready for that yet)
customize default import alias: No

### our routes

- the file location is what dictates the route used
- index.js is the root route
- api folder is where our api routes go
- folders make the path, index.js makes the path, or a file name of that final path works as well
- one file handles all methods for that route
- example of get and post

### our coffee api

- example of get and post
- exercise to do put and delete
- example of query string

### hooking up to our page
