const fs = require('fs')

function printFile(err, file) {
	console.log(file)
}

fs.readFile('./bob.json', {encoding: 'utf8'}, printFile)

