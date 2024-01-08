const fs = require("fs");

function readFile(filePath) {
    try {
      return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      console.error(`Error reading file: ${filePath}`);
      return null;
    }
  }
  
  function writeFile(filePath, content) {
    try {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`File "${filePath}" written!`);
    } catch (error) {
      console.error(`Error writing to "${filePath}" file!`);
    }
  }

//fs.writeFileSync('Hello World.txt', 'Hello World !!', 'utf8');
// fs.writeFileSync('Bye World.txt', 'Bye World !!', 'utf8');

module.exports = {
    readFile,
    writeFile,
};