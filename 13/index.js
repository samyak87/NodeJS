//                             NPM
// installed chalk dependency (for coloring maybe)    (npm install chalk)

const chalk = require("chalk");

console.log(chalk.white.italic.bgGreen("true"));
console.log(chalk.blue.italic.bgRed("false"));








const validator = require("validator");

const ans=validator.isEmail('samyak.2024it1039@kiet.edu');

console.log(ans ? chalk.green(ans) : chalk.red(ans));