const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function sortNumber(a,b) {
    return a - b;
}

let counter = 0;

rl.on('line', (line) => {
  const re = /\s+/;
  const split = line.split(re);

  if (split.length === 4) { split.shift() }

  var numbered = split.map(string => parseInt(string))
  numbered.sort(sortNumber)

  if (numbered[0] + numbered[1] > numbered[2]) { console.log(++counter) }
});