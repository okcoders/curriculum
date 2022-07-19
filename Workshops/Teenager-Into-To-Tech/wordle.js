const correctWord = "codes";
const guess = "rocks";

var guessLetterLocation = 0;
var correctWordLocation = 0;
const answerList = [];
for (const guessLetter of guess) {
  correctWordLocation = 0;
  for (const correctLetter of correctWord) {
    if (guessLetter === correctLetter) {
      answerList.push({
        guessLetter,
        correct: true,
        correctPosition: guessLetterLocation === correctWordLocation,
      });
      break;
    } else if (correctWordLocation === correctWord.length - 1) {
      answerList.push({ guessLetter, correct: false, correctPosition: false });
    }
    correctWordLocation++;
  }
  guessLetterLocation++;
}

console.log("correct word: ", correctWord);
console.log("guess: ", guess);
console.log(answerList);
