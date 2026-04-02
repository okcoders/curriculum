const myArray = ['tacobell', 'taco bueno', 'taco casa', 'del taco'];
const myObj = {'tacobell': 1, 'taco bueno': 2, 'taco casa': 3, 'del taco': 4};

console.log(myObj['tacobell'])


for (const item in myObj) {
  console.log(`Key: ${item}, Value: ${myObj[item]}`);
}