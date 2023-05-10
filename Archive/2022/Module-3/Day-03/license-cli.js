// General flow of a Node script
// 1 import modules
// 2 setup modules
// 3 execute your program
// 4 exit/end
const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
const age = prompt('What is your age?');
const address = prompt('What is your address?');

function makeLicenseLine(header, headerValue, lineWidth) {
  const headerWidth = header.length;
  const headerValueWidth = headerValue.length;
  const spacesLeft = lineWidth - headerWidth - headerValueWidth - 5;
  return `| ${header}: ${headerValue}${' '.repeat(spacesLeft)}|`;
}

console.log('==============================');
console.log(makeLicenseLine('name', name, 30));
console.log(makeLicenseLine('age', age, 30));
console.log(makeLicenseLine('address', address, 30));
console.log('==============================');
