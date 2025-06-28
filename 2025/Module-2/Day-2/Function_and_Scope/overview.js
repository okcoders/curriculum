// Function Declaration

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Output: Hello, Alice!


// Function Expression
const greet2 = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet2('Bob')); // Output: Hello, Bob!


// Arrow Function
const greet3 = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet3('Charlie')); // Output: Hello, Charlie!


// Parameters
function greet4(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet4('Dave', )); // Output: Hello, Dave! You are 25 years old.


// Arguments
function greet5(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greet5('Eve', 30); // Output: Hello, Eve! You are 30 years old.


// Return Statement
function greet6(name) {
    return `Hello, ${name}!`;
}
const greet7 = function(name) {
    return `Hello, ${name}!`;
}
const greet8 = (name) => {
    return `Hello, ${name}!`;
}

console.log(greet6('Frank')); // Output: Hello, Frank!
console.log(greet7('George')); // Output: Hello, George!
console.log(greet8('Harry')); // Output: Hello, Harry!


// Scope

// Global Scope
let globalVariable = 'I am a global variable';
console.log(globalVariable); // Output: I am a global variable

function globalFunction() {
    console.log('I am a global function');
}
console.log(globalFunction); // Output: I am a global function

// Function Scope
function functionScope() {
    let localVariable = 'I am a local variable';
    console.log(localVariable); // Output: I am a local variable
    
    function localFunction() {
        console.log('I am a local function');
    }
    console.log(localFunction); // Output: I am a local function
}
console.log(functionScope); // Output: undefined

// Block Scope
if (true) {
    let blockVariable = 'I am a block variable';
    console.log(blockVariable); // Output: I am a block variable
    
    function blockFunction() {
        console.log('I am a block function');
    }
    console.log(blockFunction); // Output: I am a block function
}
console.log(blockVariable); // Output: undefined
console.log(blockFunction); // Output: undefined

// Hoisting
console.log(globalVariable); // Output: I am a global variable
console.log(globalFunction); // Output: I am a global function
console.log(localVariable); // Output: I am a local variable
console.log(localFunction); // Output: I am a local function
console.log(blockVariable); // Output: I am a block variable
console.log(blockFunction); // Output: I am a block function






