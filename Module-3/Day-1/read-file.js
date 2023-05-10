// I would like to use the plain nodejs filesystem module to read a file on my computer, and then log the number of characters in that file to the console.

// Import the filesystem module
const fs = require("fs");

// Specify the path to your file (use an appropriate path on your computer)
const filePath = "./README.md";

// Read the file using fs.readFile
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Calculate the number of characters in the file
  const numChars = data.length;

  // Log the result to the console
  console.log(data);
  console.log("The file has " + numChars + " characters.");
});
