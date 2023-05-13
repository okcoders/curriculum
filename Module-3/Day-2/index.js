console.log("Hello World");

// arrow functions

function add(a, b) {
  return a + b;
}

const sampleArray = [1, 2, 3, 4, 5];

sampleArray.forEach(function (element) {
  console.log(element);
});

sampleArray.forEach((element) => console.log(element));

// make a function that squares a number
function square(num) {
  return num * num;
}

// const square = (num) => num * num;

// sampleArray.map(square)
const newMap = sampleArray.map((num) => num * num);
console.log(newMap);

// filter the sampleArray to only include even numbers
const newFilter = sampleArray.filter((num) => num % 2 === 0);
const newOddsFilter = sampleArray.filter((num) => num % 2 !== 0);
console.log(newFilter);
console.log(newOddsFilter);

const complexArray = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 15 },
  { name: "Jill", age: 20 },
];

// filter the complexArray to only include people over 18
const over18 = complexArray.filter((person) => person.age > 18);
console.log(over18);

// use find to get John from the complexArray
const john = complexArray.find((person) => person.name === "John");
console.log(john);

// use some to find if there is a person over 18 in the complexArray
const over18Exists = complexArray.some((person) => person.age > 18);
const over18Every = complexArray.every((person) => person.age > 18);

const doesJohnExist = !!complexArray.find((person) => person.name === "John");

if (undefined) {
  console.log("hello");
}

// reduce the sampleArray to the sum of the numbers
const sum = sampleArray.reduce((acc, num) => acc + num, 0);
const factorial = sampleArray.reduce((acc, num) => acc * num, 1);
console.log(factorial);
console.log(sum);
