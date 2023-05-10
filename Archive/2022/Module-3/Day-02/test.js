// Named Function
function addNamed(a, b) {
  return a + b;
}

// anonymous function
const addAnonymous = function (a, b) {
  return a + b;
};

// anonymous arrow function expression
const addExpression = (a = 0, b = 0) => a + b;

// spread operator with objects
const obj1 = {
  a: 'hello',
  b: 'world!',
};

const obj2 = {
  c: 'foo',
  d: 'bar',
};

const combined = { ...obj1, ...obj2 };
const { d } = combined;

// spread with arrays
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedArray = [...numbers1, ...numbers2];
