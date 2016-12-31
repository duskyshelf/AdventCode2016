const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


rl.on('line', (line) => {
  // line by line
}).on('close', () => {
  // after all lines are finished
});