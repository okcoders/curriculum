
//Example of Booleans:
let isRaining = true;  // This is a boolean value.
let hasUmbrella = false;

if (isRaining && hasUmbrella) {
    console.log('You can go outside with an umbrella!');
} else {
    console.log('You might get wet.');
}




//Example of Logical Operators

let isStudent = true;

// Using AND (&&)
if (age >= 18 && isStudent) {
  console.log('You are an adult student.');
} else {
  console.log('You are not an adult student.');
}

// Using OR (||)
if (age >= 18 || isStudent) {
  console.log('You are either an adult or a student.');
} else {
  console.log('You are neither an adult nor a student.');
}

// Using NOT (!)
let isAdult = true;
if (!isAdult) {
  console.log('You are not an adult.');
}






//Examples of Objects
// Object Syntax:
let person = {
  name: 'John',
  age: 30,
  isStudent: true
};

// Accessing Object Properties:
// • Dot notation:
console.log(person.name);  // John
console.log(person.age);   // 30

// • Bracket notation:
console.log(person['name']);  // John

console.log(person['age']);   // 30

// Example of an Object in Use:
let car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2019,
  isElectric: false
};

if (car.isElectric) {
  console.log('This is an electric car.');
} else {
  console.log('This is a gas-powered car.');
}


//Example of Switch Statement
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Tuesday":
    console.log("It's a productive day.");
    break;
  case "Wednesday":
    console.log("We're halfway there.");
    break;
  case "Thursday":
    console.log("Almost Friday.");
    break;
  case "Friday":
    console.log("End of the work week!");
    break;
  default:
    console.log("It's the weekend!");
}