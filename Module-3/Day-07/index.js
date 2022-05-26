/*
 * FP === Functional Programming
 * IGNORE MOST OF FP (for now :) )
 * however, two concepts make us better JS developers
 * 1. make our code clean using functions
 * 2. immutability - don't mutate (or change) data structures. Copy them.
 *
 */

// finding a particular array element
// example "find me 'cabbage'"
// for loop approach
// 7 lines long
const plants1 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
let found1;
for (let i = 0; i < plants1.length; i++) {
  if (plants1[i] === 'cabbage') {
    found1 = plants1[i];
  }
}
console.log('[FOR LOOP]Found the cabbage!: ', found1);
console.log('\n\n');

// .pop() approach
// 7 lines long AND changes the original array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
const plants2 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
let found2;
while (plants2.length > 0) {
  let plant = plants2.pop();
  if (plant === 'cabbage') {
    found2 = plant;
    break;
  }
}
console.log('[POP]Found the cabbage!: ', found2);
console.log('\n\n');

// .find()
// 1 line long, DOES NOT change original array
// AND we get the value AS IS
// This is useful when we're looking for ONLY ONE element
const plants3 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
let found3 = plants3.find((plant) => plant === 'cabbage'); // can pass a function, since this is functional
console.log('[FIND]is this cabbage?', found3);
console.log('\n\n');

// .filter()
// 2 lines long, but we get a re-usable function (could also be used in find() above)
// however, it returns ['cabbage'] instead of 'cabbage'.
// So filter is useful when we still want to return an array i.e. MULTIPLE items still.
const isCabbage = (plant) => plant === 'cabbage';
const plants4 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
let found4 = plants4.filter(isCabbage); // can pass a function that looks like (value, index, thisArray) => [/** some new array*/]
console.log('[FILTER]is this cabbage?', found4);
console.log('\n\n');

/*
 * 3 Main Functional Array Method: map, filter, reduce
 * [[ honorable mentions: find, findIndex, forEach ]]
 */

// Get array of even numbers, with just functional approach
// Without a functional approach
// original array remains intact, but it's many lines long
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArr1 = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 === 0) {
    evenArr1.push(arr1[i]);
  }
}
console.log('----Get Evens using for loop----');
console.log('[FOR LOOP] All evens: ', evenArr1);
console.log('\n\n');

// with a functional approach - 1 line
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArr = arr2.filter((element) => element % 2 === 0);
console.log('----Get Evens using filter----');
console.log('All evens: ', evenArr);
console.log('original: ', arr2);
console.log('\n\n');

/*
 * Principle: don't mutate/change. Make copies.
 */

/**
 * This example ultimately changes the entire 'person' object over time
 * All this code only has ONE OBJECT. No new objects are created, even in the
 * variables we assign.
 */
const person = { name: 'Devon Mobley', age: 32, height: 77 };

function incrementAge(personObject) {
  personObject.age += 1;
  return personObject;
}

function decrementHeight(personObject) {
  personObject.height -= 1;
  return personObject;
}

function changeName(personObject) {
  personObject.name = 'John Doe';
  return personObject;
}

const changedPersonObject1 = incrementAge(person); // returns the same original object
const changedPersonObject2 = decrementHeight(person); // returns the same original object
const changedPersonObject3 = changeName(person); // returns the same original object

// changedPersonObject1 is the sames as changedPersonObject2
// which is the same as changedPersonObject3
// they're all the original 'person' object
// Confusing, right? And could easily make a bug if I thought
// these were all different objects
console.log('------Examples of mutating the same object----');
console.log('------Notice all the values are changed over time----');
console.log('age', changedPersonObject1);
console.log('height', changedPersonObject2);
console.log('name', changedPersonObject3);
console.log('\n\n');

/**
 * This example leaves the original dog object in-tact
 * and ends up creating new copies.
 * This may seem odd at first, but it keeps our data
 * safe and consistent and free of mutation bugs.
 */
const dog = { name: 'Barley', age: 7, breed: 'Black Lab' };

function incrementAge(dogObject) {
  const returnDogObject = { ...dogObject }; // using the spread operator to copy all the original values
  returnDogObject.age += 1;
  return returnDogObject;
}

function addBreed(dogObject) {
  const returnDogObject = Object.assign({}, dogObject); // using Object.assign to copy all the original values
  returnDogObject.breed += '/Blue Heeler';
  return returnDogObject;
}

function addNames(dogObject) {
  const returnDogObject = { ...dogObject }; // using the spread operator again. Does the same thing.
  returnDogObject.name = 'Barley Jo Mobley';
  return returnDogObject;
}

const newDogObjectWithDifferentAge = incrementAge(dog);
const newDogObjectWithMixedBreeds = addBreed(dog);
const newDogObjectWithAddedNames = addNames(dog);

// Now all these are different objects
// and the original 'dog' object remains the same.
// This is important and would be really useful
// to avoid issues, mistakes, or bugs
console.log('------Examples of copying to new objects----');
console.log('------Notice only each value changes, not the whole object----');
console.log('age', newDogObjectWithDifferentAge);
console.log('breed', newDogObjectWithMixedBreeds);
console.log('name', newDogObjectWithAddedNames);
console.log('\n\n');
