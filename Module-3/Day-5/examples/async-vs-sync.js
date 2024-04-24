const fs = require('fs')

function printFile(err, f) {
	console.log(f)
}

// This is a sync file access
const file = fs.readFileSync('./in-class-data.json', {encoding: 'utf8'})
console.log(file);

// This an async file access call
fs.readFile('./bob.json', {encoding: 'utf8'}, printFile);
// fs.readFile('./bob.json', {encoding: 'utf8'}, (e,f) => console.log(f));

