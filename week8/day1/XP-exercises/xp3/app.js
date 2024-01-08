const { readFile, writeFile } = require('./fileManager');

const helloWorldContent = readFile('Hello World.txt');

if (helloWorldContent) {
  console.log('Content of "Hello World.txt":', helloWorldContent);

  writeFile('Bye World.txt', 'Writing to the file');
}