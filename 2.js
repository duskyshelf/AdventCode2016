const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let loc = [0,0];


rl.on('line', (line) => {
  const split = line.split("");

  split.forEach((ord) => {
    switch (ord) {
      case "U":
        if (loc[1] + 1 < 2) { loc = [ loc[0], loc[1] + 1 ] }
        break;
      case "D":
        if (loc[1] - 1 > -2) { loc = [ loc[0], loc[1] - 1 ] }
        break;
      case "L":
        if (loc[0] - 1 > -2) { loc = [ loc[0] - 1 , loc[1] ] }
        break;
      case "R":
        if (loc[0] + 1 < 2) { loc = [ loc[0] + 1, loc[1] ] }
        break;
      default:
       return console.log("error")
    }
  })

  console.log(loc)

});