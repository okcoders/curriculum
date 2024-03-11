// TODO Types 
/**
 * Primitives - a primitive in JS is data that is:
 * ! https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 * - NOT an object
 * - Has no methods or properties
 * 7 of these in JS - string | number | bigint | boolean | undefined | symbol | null
 *
 *
 * primitives are IMMUTABLE (do not confuse this with variables being, well....variable)
 * note that there's only one number type for both ints and floats (and scientific notation 1e...)
 * in JS all numbers are 64bit floating point and floating point
 * BigInt is there to deal with numbers too large for a standard double precision float
 * ! https://www.w3schools.com/js/js_numbers.asp
 *
 * Symbols are identifiers that are guaranteed to be unique (often used to avoid collisions in object properties)
 *
 * null !== undefined (but null == undefined)
 * typeof undefined = undefined, but typeof null = object (don't ask it's a historical glitch)
 * Number(undefined) = NaN; Number(null) = 0
 *
 * When you're accessing properties and methods on these items,
 * Javascript is 'auto-boxing' them in ephemeral objects
 * e.g. when we did Number("1") + Number("2") to get 3,
 * an ephemeral Number object was created that could be added.
 *
 * Don't worry about this too much but it's a useful mental model
 * when trying to figure out what you can do with these types of data and how they behave.
 *
 * Everything else in JavaScript is an Object.
 * Objects can contain:
 * - An object
 * - An array
 * - A date
 */

// TODO the DOM
//! https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// NODE (abstract) -> Document | Element | DocumentFragment (concrete)

/**
 * Using methods like Document.createElement(), Element.append(), Node.appendChild() and a few others
 * we could iterate over the object in DOMexample.js and dynamically build the html in DOMexample.html
 * one element at a time.
 *
 * Using methods like Document.querySelector() / .querySelectorAll() / .getElementById()
 * we can select elements that already exist in the document
 * and call methods on them or modify their properties.
 */

// TODO Dialogue example

// TODO Arrays
/**
 * Key Properties - length
 * Indexing:
 * - bracket notation - 0 based!
 * - .at() (newer)
 *
 * Common basic methods:
 * - push()
 * - pop()
 * - shift()
 * - unshift() (*less common and expensive)
 * - join()
 * - slice()
 * - splice()
 * - includes()
 * - sort() (*can take a callback but is not iterative - mutates in place)
 *
 * Common iterative methods (take a function as an argument)
 * - map()
 * - filter()
 * - sort()
 * - find() / findLast()
 * - findIndex() / findLastIndex()
 * - every() / some() 
 *
 * - reduce()/reduceRight() (we're going to leave this alone for now, it's a potential quagmire)
 *
 */

/* ------As Time Allows ---------*/
// TODO Exercise - Simple Shopping Cart 
// - multidimensional array item = [name:string, qty: number, price: number]
// - add and delete functions
// - index input

// TODO 99 bottles of beer
// - make a simple page that allows a user to enter a starting number
// - display "# bottles of beer on the wall" with the user's starting number
// - add a button that allows you to 'take one down and pass it around'
// - add an event listner for the button click that adds the next line of the song
// - Try appending the lines rather than replacing them so the song builds up over time
/*------Homework ------------*/
//* Learn Form Validation by Building a Calorie Counter
//! https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/#learn-form-validation-by-building-a-calorie-counter)
