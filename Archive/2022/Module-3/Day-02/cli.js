// General flow of a Node script
// 1 import modules
// 2 setup modules
// 3 execute your program
// 4 exit/end
const readline = require('readline');
const { stdin, stdout } = process;
const rl = readline.createInterface({ input: stdin, output: stdout });

rl.question('What is your name?', (name) => {
  console.log(`Goodbye, ${name}`);
  process.exit();
});
