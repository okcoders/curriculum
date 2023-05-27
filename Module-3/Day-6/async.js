const fs = require("fs");

// fs.readFile("./README.md", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   } else {
//     // console.log(data);
//     summarizeContents(data);
//   }
// });

async function processMultipleFiles() {
  try {
    const readMeData = await fs.promises.readFile("./README.md", "utf8");
    const readMeSummary = summarizeContents(readMeData);
    const syllabus = await fs.promises.readFile("../../Syllabus.md", "utf8");
    const syllabusSummary = summarizeContents(syllabus);

    console.log({ readMeSummary, syllabusSummary });
  } catch (err) {
    console.error(err);
  }
}

// loadFilePromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

function summarizeContents(data) {
  const numberOfWords = data.split(" ").length;
  return numberOfWords;
}

const firstName = "zach";

const lastName = "Maynard";

const greeting = `Hello my name is ${firstName} ${lastName}`;

setTimeout(() => {
  console.log(`async greeting to ${firstName} ${lastName}`);
}, 2000);

console.log(greeting);

processMultipleFiles();
