import chalk from 'chalk';

function displayColMsg() {
  const message = chalk.bold.green('Hello, beginners!') + ' ' + chalk.bgCyan('Welcome to the CRAZY world of Node.js and Chalk!');
  console.log(message);
}

export default displayColMsg;