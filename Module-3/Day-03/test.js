// Algorithm Reverse a string
function reverseString(str) {
  let returnString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    returnString += str[i];
  }
  return returnString;
}

reverseString('hello');

// Debugging a program
// console.log
let value = {};
console.log(value);

// debugger key word
debugger; //used for browser debugging

// types
const str = '';
typeof str; //outputs "string"

const num = 0;
typeof num; // output "number"

// truthy vs falsey
// falsey
undefined;
null;
0;

// truthy
123;
('test');
