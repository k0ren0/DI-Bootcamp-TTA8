const chalk = require('chalk');

function displayColorfulMessage() {
  const message = chalk.bold.green('Hello, beginners!') + ' ' + chalk.bgCyan('Welcome to the CRAZY world of Node.js and Chalk!');
  console.log(message);
}

module.exports = displayColorfulMessage;
