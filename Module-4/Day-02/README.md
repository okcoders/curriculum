# Day-02

## HW Review

-   Questions?

## 10 minute Warm-up

-   Create a new React app for today
-   Create a new component called "Counter"
-   Import that component and use it in `App.js`

## Destrucuring Props

-   oops I forgot to follow up on this 😅

## Styles

-   className vs class
-   style attribute

## Event Handlers

-   counter and username input
-   implement event handlers on button and input (`onClick` and `onChange`)

## React Hooks

-   `useState`
-   `useEffect`
    -   implement `useState` so React knows how to re-render.
    -   implement `useEffect` and `localStorage` to remember the last count we were on when refreshing
    -   implement a `reset` button to reset count to 0
-   conditional rendering - `useEffect` to change `isLoading` for `fetch` call

### CodeSandbox

-   https://codesandbox.io/s/headless-glade-7dnbyr?file=/index.html

### Extra Challenge

on the code sandbox, see if you can:

-   make the loader more fancy with a [a CSS spinner](https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje)
-   implement an actual fetch call (I've used a `setTimeout` to fake the behavior)
