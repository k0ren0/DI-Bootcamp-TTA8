const greet = require('./greeting.js');
const displayColorfulMessage = require('./colorful-message.js');
const readAndDisplayFileContent = require('./read-file.js');

const userName = 'Viktor';
const greetingMessage = greet(userName);
console.log(greetingMessage);


displayColorfulMessage();

readAndDisplayFileContent();

