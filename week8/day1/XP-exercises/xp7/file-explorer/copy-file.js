const fs = require("fs");

// // let data = "In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt";

// // fs.writeFile("source.txt", data, "utf-8", (err) => {
//   if (err) return console.log(err);
//   console.log("File created");
// });

const info = fs.readFile("source.txt", "utf-8", (err, data) => {
  if (err) return console.log(err.message);

  console.log(data);
});

fs.copyFile("source.txt", "destination.txt", (err) => {
  if (err) return console.log(err);
});