const fs = require('fs');

function readAndDisplayFileContent() {
  const filePath = './files/file-data.txt';
  const fileContent = fs.readFileSync(filePath, 'utf8');
  console.log('File Content:\n', fileContent);
}

module.exports = readAndDisplayFileContent;


