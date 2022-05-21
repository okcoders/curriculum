const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

const nonFilterEvenNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    nonFilterEvenNumbers.push(numbers[i]);
  }
}

console.log(nonFilterEvenNumbers);

console.log(evenNumbers);
