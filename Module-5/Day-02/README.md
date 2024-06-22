# Building an api

## Coffee Shop Api needs

### Menu

- get menu items
- get specific menu item


### Cart

- get cart
- add to cart
- remove from cart


### Endpoints needed for above

- /api/menu GET
- /api/menu/:id GET
- /api/cart GET
- /api/cart POST
- /api/cart/:id DELETE

### Endpoints for our app

- / Home
- /cart Cart/Checkout

### Components for our app

- Home
- Header
    - CartCount
- Menu
  - Menu Item
- Cart


### Bootstrapping our app

```
npx create-next-app@latest coffee-shop --js --no-tailwind --src-dir --no-app --eslint --no-import-alias
```

- delete styles folder
- delete import of styles from _app.js
- delete next.svg and vercel.svg inside public folder
- make a features folder inside the src folder
- make a server folder inside the src folder
- delete everything inside index.js and replace with :

```jsx
export default function Home() {
  return (
    <>
      <h1>Welcome to Coffee Shop</h1>
    </>
  );
}
```

from the correct directory, run:

```sh
npm run dev
```

### Nextjs

- nextjs allows us to build full-stack applications within one repo. Is is very similar to what you have seen so far with react, (except for file-based routing. So be careful what you add to the pages folder). It then adds a new folder inside pages called api, which allows us to build our api.