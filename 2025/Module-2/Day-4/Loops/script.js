// for loop

for (let i = 1; i <= 5; i++) {
    console.log("Step", i);
  }


// while loop
let i = 0;
while (i < 3) {
  console.log("Counting...", i);
  i++;
}


// do while Loop
let count = 0;
do {
  console.log("This runs at least once.");
  count++;
} while (count < 1);


// Nesting Loops
for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 2; col++) {
      console.log(`Row ${row}, Column ${col}`);
    }
  }


// break and continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // skips 3
    if (i === 5) break;    // stops before 5
    console.log(i);
  }


// return Statement
function findFirstEven(numbers) {
    for (let num of numbers) {
      if (num % 2 === 0) {
        return num; // exits function immediately
      }
    }
    return null; // only runs if no even number was found
  }
  
  console.log(findFirstEven([1, 3, 7, 4, 9])); // Output: 4




// Ternary Operator
let age = 20;
let status = age >= 18 ? "Adult" : age < 5 ? 'toddler' : "Minor";
console.log(status); // Output: Adul


// Built in function
const sentence = "The rain in Spain";
console.log(sentence.toUpperCase());      // "THE RAIN IN SPAIN"
console.log(sentence.includes("rain"));   // true
console.log(sentence.split(" "));         // ["The", "rain", "in", "Spain"] undefined


// Recursion

function followRain(region) {
    if (region === "plain") {
      return "The rain stays here.";
    } else {
      return followRain(getNextRegion(region)); // recursive step
    }
  }
  
  function getNextRegion(current) {
    const regions = []
    return 
  }
  
  console.log(followRain("mountains")); // Output: The rain stays here.


  const visited = new Set();

function crawl(page) {
  if (visited.has(page)) return;
  visited.add(page);

  console.log("Crawling:", page);

  const links = getLinks(page); // pretend this returns internal links
  for (const link of links) {
    crawl(link); // recursive call
  }
}




