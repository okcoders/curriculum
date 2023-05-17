const fs = require("fs");

function readFile(fileName) {
  return fs.readFileSync(fileName, "utf8");
}

function countWordOccurrences(text, word) {
  let count = 0;
  const words = text.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }

  return count;
}

function main() {
  const fileName = "./test-file.txt";
  const fileContent = readFile(fileName);
  const wordCount = countWordOccurrences(fileContent, "code");
  console.log(`The word "code" appears ${wordCount} times in the file.`);
}

main();
