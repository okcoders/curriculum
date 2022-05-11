const prompt = require('prompt-sync')({ sigint: true });

const numberToGuess = Math.floor(Math.random() * 10) + 1;

let userGuess = null;
while (numberToGuess !== userGuess) {
  userGuess = parseInt(prompt('Guess a number: '));
  if (userGuess !== numberToGuess) {
    console.log('WRONG!');
  } else {
    console.log(`YOU GUESSED RIGHT! It was ${numberToGuess}`);
  }
}
