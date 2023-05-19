const fs = require("fs");

function readFile(fileName) {
  return fs.readFileSync(fileName, "utf8");
}

function countWordOccurrences(text, matchWord) {
  let count = 0;
  const words = text.split(" ");

  words.forEach((word) => {
    const punctuationRemovedWord = word
      .replaceAll("?", "")
      .replaceAll(".", "")
      .replaceAll(")", "");
    if (punctuationRemovedWord.toLowerCase() === matchWord.toLowerCase()) {
      count++;
    }
  });

  return count;
}

// compare two strings to see if they are equal. Do not worry about casing or punctuation
function compareTwoStrings(word, matchWord) {}

function main() {
  const fileName = "./test-file.txt";
  const fileContent = readFile(fileName);
  const wordCount = countWordOccurrences(fileContent, "code");
  console.log(`"code" shows up ${wordCount} times`);
}

main();
